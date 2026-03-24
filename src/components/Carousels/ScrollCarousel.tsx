import {useNavigate} from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';
import type {Project} from '../../data/projects';
import styles from './ScrollCarousel.module.css';

interface ScrollCarouselProps {
    projects: Project[];
}

const isVideo = (url: string): boolean => {
    return /\.(mp4|webm|ogg|mov)$/i.test(url);
};

export default function ScrollCarousel({projects}: ScrollCarouselProps) {
    const navigate = useNavigate();
    const carouselRef = useRef<HTMLElement>(null);
    const [snappedIndex, setSnappedIndex] = useState(0);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const handleScroll = () => {
            const children = Array.from(
                carousel.querySelectorAll(':scope > div'),
            );
            let closestIndex = 0;
            let closestDistance = Infinity;

            children.forEach((child, index) => {
                const rect = child.getBoundingClientRect();
                const carouselRect = carousel.getBoundingClientRect();
                const center = carouselRect.left + carouselRect.width / 2;
                const childCenter = rect.left + rect.width / 2;
                const distance = Math.abs(childCenter - center);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setSnappedIndex(closestIndex);
        };

        carousel.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            carousel.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCardClick = (projectId: number) => {
        navigate(`/project/${projectId}`);
    };

    return (
        <section className={styles.carousel} ref={carouselRef}>
            <p className={styles.msgSupports}>
                Sorry, your browser doesn't support scroll-marker features
            </p>

            {projects.map((project, index) => {
                // Calculate z-index based on position relative to snapped item
                let zIndex = 1;
                if (index === snappedIndex) {
                    zIndex = 10;
                } else {
                    const distance = Math.abs(snappedIndex - index);
                    zIndex = Math.max(1, 10 - distance);
                }

                return (
                    <div
                        key={project.id}
                        className={index === 0 ? styles.scrollStart : ''}
                        role='button'
                        tabIndex={0}
                        onClick={() => handleCardClick(project.id)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                handleCardClick(project.id);
                            }
                        }}
                        style={{cursor: 'pointer', zIndex}}
                    >
                        <h2>{project.title}</h2>
                        <div className={styles.img}>
                            {isVideo(project.heroImage) ? (
                                <video
                                    src={project.heroImage}
                                    autoPlay
                                    muted
                                    loop
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            ) : (
                                <img
                                    src={project.heroImage}
                                    alt={project.title}
                                    loading='lazy'
                                />
                            )}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
