import {useEffect, useState} from 'react';
import type {Project} from '../../data/projects';
import styles from './InfiniteScrollCarousel.module.css';

const isVideo = (url: string): boolean => {
    return /\.(mp4|webm|ogg|mov)$/i.test(url);
};

interface InfiniteScrollCarouselProps {
    projects: Project[];
}

export default function InfiniteScrollCarousel({
    projects,
}: InfiniteScrollCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Duplicate projects for infinite scroll effect
    const displayProjects = [...projects, ...projects.slice(0, 3)];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
        );
    };

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 0) {
                handleNext();
            } else if (e.deltaY < 0) {
                handlePrev();
            }
        };

        const carouselContainer = document.querySelector(
            '[data-infinite-scroll]',
        ) as HTMLElement;

        if (carouselContainer) {
            carouselContainer.addEventListener('wheel', handleWheel, {
                passive: true,
            });

            return () => {
                carouselContainer.removeEventListener('wheel', handleWheel);
            };
        }
    }, []);

    return (
        <div className={styles.gallery} data-infinite-scroll>
            <div className={styles.cardsContainer}>
                <ul className={styles.cards}>
                    {displayProjects.map((project, index) => {
                        const offset = index - currentIndex;
                        const isActive = offset === 0;
                        const isNext = offset === 1;
                        const isPrev = offset === -1;

                        return (
                            <li
                                key={`${project.id}-${index}`}
                                className={styles.card}
                                style={{
                                    opacity: isActive
                                        ? 1
                                        : isNext
                                          ? 0.6
                                          : isPrev
                                            ? 0.3
                                            : 0,
                                    transform: `translateY(${offset * 20}px) scale(${
                                        isActive ? 1 : 0.95
                                    })`,
                                    pointerEvents: isActive ? 'auto' : 'none',
                                    zIndex: isActive
                                        ? 30
                                        : isNext
                                          ? 20
                                          : isPrev
                                            ? 10
                                            : 0,
                                }}
                            >
                                {isVideo(project.heroImage) ? (
                                    <video
                                        src={project.heroImage}
                                        autoPlay
                                        muted
                                        loop
                                        loading='lazy'
                                    />
                                ) : (
                                    <img
                                        src={project.heroImage}
                                        alt={project.title}
                                        loading='lazy'
                                    />
                                )}
                                <div className={styles.cardContent}>
                                    <h3>{project.title}</h3>
                                    <p>{project.role}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className={styles.actions}>
                <button
                    className={styles.btn}
                    onClick={handlePrev}
                    aria-label='Previous project'
                >
                    Prev
                </button>
                <button
                    className={styles.btn}
                    onClick={handleNext}
                    aria-label='Next project'
                >
                    Next
                </button>
            </div>
        </div>
    );
}
