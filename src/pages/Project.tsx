import {useParams, Link} from 'react-router-dom';
import {projects} from '../data/projects';
import styles from './Project.module.css';

export default function Project() {
    const {id} = useParams<{id: string}>();
    const currentId = parseInt(id || '1');
    const project = projects.find((p) => p.id === currentId);
    const nextProject = projects.find((p) => p.id === currentId + 1);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h1>Project not found</h1>
                <Link to='/portfolio'>Back to Portfolio</Link>
            </div>
        );
    }

    return (
        <article className={styles.project}>
            <div className={styles.container}>
                <div className={styles.heroSection}>
                    <h1 className={styles.title}>{project.title}</h1>

                    <div className={styles.metadata}>
                        <div className={styles.metadataItem}>
                            <span className={styles.label}>Role</span>
                            <span className={styles.value}>{project.role}</span>
                        </div>
                        <div className={styles.metadataItem}>
                            <span className={styles.label}>Year</span>
                            <span className={styles.value}>{project.year}</span>
                        </div>
                        <div className={styles.metadataItem}>
                            <span className={styles.label}>Tools</span>
                            <div className={styles.toolsList}>
                                {project.tools.map((tool) => (
                                    <span key={tool} className={styles.tool}>
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainImage}>
                        {project.heroImage.endsWith('.mp4') ? (
                            <video
                                src={project.heroImage}
                                autoPlay
                                loop
                                muted
                            />
                        ) : (
                            <img src={project.heroImage} alt={project.title} />
                        )}
                    </div>
                </div>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>The Process</h2>
                    <p className={styles.description}>{project.description}</p>
                </section>

                <div className={styles.images}>
                    {project.images.map((img, index) => (
                        <div key={index} className={styles.toolImage}>
                            <img src={img} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>

                {project.isCaseStudy && (
                    <>
                        {project.challenges && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>
                                    Challenges
                                </h2>
                                <p className={styles.description}>
                                    {project.challenges}
                                </p>
                            </section>
                        )}
                        {project.sections?.map((section, idx) => (
                            <section key={idx} className={styles.section}>
                                <h2 className={styles.sectionTitle}>
                                    {section.title}
                                </h2>
                                <p className={styles.description}>
                                    {section.content}
                                </p>
                            </section>
                        ))}
                        {project.results && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>Results</h2>
                                <p className={styles.description}>
                                    {project.results}
                                </p>
                            </section>
                        )}
                    </>
                )}

                {nextProject && (
                    <section className={styles.upNext}>
                        <h2 className={styles.sectionTitle}>Up Next</h2>
                        <Link
                            to={`/project/${nextProject.id}`}
                            className={styles.nextProjectLink}
                        >
                            <span>{nextProject.title}</span>
                            <span className={styles.arrow}>→</span>
                        </Link>
                    </section>
                )}
            </div>
        </article>
    );
}
