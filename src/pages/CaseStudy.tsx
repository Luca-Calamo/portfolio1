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

                    <img
                        className={styles.mainImage}
                        src={'/images/can/3 Can Mockup.png'}
                    />
                </div>

                {/* ------------------------------------------- Main Content ------------------------------------------- */}

                <div className={styles.content}>
                    <div className={styles.overview}>
                        <h3 className={styles.numbering}>01</h3>
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <div className={styles.overviewContent}>
                            <p className={styles.overviewParagraph}>
                                lorum ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec vel sapien eget nunc
                                efficitur efficitur. Sed at ligula a enim
                                efficitur commodo. Curabitur ac odio id nisl
                                convallis tincidunt. Nulla facilisi. In hac
                                habitasse platea dictumst. Proin ut dui sed
                                metus fermentum bibendum.
                            </p>
                            <div className={styles.overviewImages}>
                                <img
                                    className={styles.overviewImage}
                                    src={'/images/can/Hibiscus.png'}
                                />
                                <img
                                    className={styles.overviewImage}
                                    src={'/images/can/Hibiscus.png'}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.understanding}>
                        <h3 className={styles.numbering}>02</h3>
                        <h2 className={styles.sectionTitle}>
                            Understanding Apprentice Needs
                        </h2>
                    </div>

                    <div className={styles.solution}>
                        <h3 className={styles.numbering}>03</h3>
                        <h2 className={styles.sectionTitle}>Our solution</h2>
                    </div>

                    <div className={styles.research}>
                        <h3 className={styles.numbering}>04</h3>
                        <h2 className={styles.sectionTitle}>Research</h2>
                    </div>

                    <div className={styles.designProcess}>
                        <h3 className={styles.numbering}>05</h3>
                        <h2 className={styles.sectionTitle}>Design Process</h2>
                    </div>

                    <div className={styles.finalDesign}>
                        <h3 className={styles.numbering}>06</h3>
                        <h2 className={styles.sectionTitle}>Final Design</h2>
                    </div>

                    <div className={styles.promoMaterial}>
                        <h3 className={styles.numbering}>07</h3>
                        <h2 className={styles.sectionTitle}>
                            Promotional Material
                        </h2>
                    </div>

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
            </div>
        </article>
    );
}
