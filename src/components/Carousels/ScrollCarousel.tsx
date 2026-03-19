import {useNavigate} from 'react-router-dom';
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

    const handleCardClick = (projectId: number) => {
        navigate(`/project/${projectId}`);
    };

    return (
        <section className={styles.carousel}>
            <p className={styles.msgSupports}>
                Sorry, your browser doesn't support scroll-marker features
            </p>

            {projects.map((project, index) => (
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
                    style={{cursor: 'pointer'}}
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
            ))}
        </section>
    );
}
