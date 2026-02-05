import {useParams, Link} from 'react-router-dom';
import {projects} from '../data/projects';
import styles from './CaseStudy.module.css';

export default function CaseStudy() {
    const {id} = useParams<{id: string}>();
    const currentId = parseInt(id || '1');
    const project = projects.find((p) => p.id === currentId);
    const nextProject = projects.find((p) => p.id === currentId + 1);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h1>Case Study not found</h1>
                <Link to='/portfolio'>Back to Portfolio</Link>
            </div>
        );
    }

    return (
        <article className={styles.caseStudy}>
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
                </div>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <p>{project.description}</p>
                    </section>

                    {project.challenges && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Challenges</h2>
                            <p>{project.challenges}</p>
                        </section>
                    )}

                    {project.sections?.map((section, idx) => (
                        <section key={idx} className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                {section.title}
                            </h2>
                            <p>{section.content}</p>
                        </section>
                    ))}

                    {project.results && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Results</h2>
                            <p>{project.results}</p>
                        </section>
                    )}
                </div>

                {project.images.length > 0 && (
                    <div className={styles.gallery}>
                        {project.images.map((img, index) => (
                            <div key={index} className={styles.galleryItem}>
                                <img
                                    src={img}
                                    alt={`${project.title} - Image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {nextProject && (
                    <section className={styles.upNext}>
                        <p>Up Next</p>
                        <Link
                            to={`/project/${nextProject.id}`}
                            className={styles.nextLink}
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
