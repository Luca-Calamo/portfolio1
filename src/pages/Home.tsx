import {Link} from 'react-router-dom';
import {projects} from '../data/projects';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Hey there, I'm Luca!</h1>
                <p className={styles.subtitle}>Digital Marketer / Designer</p>
                <p className={styles.under}>
                    This site is currently being built! <br /> If you have any
                    questions about my work, please feel free to reach out to me
                    at{' '}
                    <a href='mailto:lucacalamo13@gmail.com'>
                        lucacalamo13@gmail.com
                    </a>
                </p>
            </section>

            <section className={styles.featured}>
                <div className={styles.masonryGrid}>
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            to={`/project/${project.id}`}
                            className={styles.masonryItem}
                        >
                            <div className={styles.mediaFrame}>
                                {project.heroImage.endsWith('.mp4') ? (
                                    <video
                                        src={project.heroImage}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={styles.image}
                                    />
                                ) : (
                                    <img
                                        src={project.heroImage}
                                        alt={project.title}
                                        loading='lazy'
                                        className={styles.image}
                                    />
                                )}
                            </div>
                            <div className={styles.cardMeta}>
                                <p className={styles.cardEyebrow}>
                                    {project.role} • {project.year}
                                </p>
                                <h3 className={styles.cardTitle}>
                                    {project.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
