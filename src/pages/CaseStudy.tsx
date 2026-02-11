import {useParams, Link} from 'react-router-dom';
import {projects} from '../data/projects';
import styles from './CaseStudy.module.css';
// import TextCards from '../components/TextCards/TextCards';

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

                    <div className={styles.links}>
                        <a href='#' className={styles.linkItem}>
                            Figma
                        </a>
                        <a href='#' className={styles.linkItem}>
                            Github
                        </a>
                        <a href='#' className={styles.linkItem}>
                            Promotional Video
                        </a>
                        <a href='#' className={styles.linkItem}>
                            Instagram
                        </a>
                    </div>

                    <img
                        className={styles.mainImage}
                        src={'/images/Under_Construction.jpeg'}
                    />
                </div>

                {/* ------------------------------------------- Main Content ------------------------------------------- */}

                <div className={styles.content}>
                    <div className={styles.group}>
                        <div className={styles.section}>
                            <h3 className={styles.mainNumber}>01</h3>
                            <div className={styles.gridOneThree}>
                                <div className={styles.containerText}>
                                    <h2 className={styles.sectionTitle}>
                                        Overview
                                    </h2>
                                    <p className={styles.sectionParagraph}>
                                        ProLog is an AI-powered app that levels
                                        the playing field for neurodiverse
                                        apprentices in trades. It removes
                                        barriers by simplifying the complex
                                        apprenticeship journey and centralizing
                                        the overwhelming amount of information
                                        apprentices need to manage. ProLog
                                        tracks past progress and visualizes the
                                        future, helping apprentices understand
                                        where they are in their career progress
                                        and what steps come next.
                                    </p>
                                </div>

                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.group}>
                        <div className={styles.section}>
                            <div className={styles.gridOneThree}>
                                <div className={styles.containerText}>
                                    <h3 className={styles.mainNumber}>02</h3>
                                    <h2 className={styles.sectionTitle}>
                                        Understanding Apprentice Needs
                                    </h2>
                                    <p className={styles.sectionParagraph}>
                                        lorum ipsum dolor sit amet, consectetur
                                        adipiscing elit. Donec vel sapien eget
                                        nunc efficitur efficitur. Sed at ligula
                                        a enim
                                    </p>
                                </div>
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.group}>
                        <div className={styles.section}>
                            <h3 className={styles.mainNumber}>03</h3>
                            <h2 className={styles.sectionTitle}>
                                Our solution
                            </h2>
                            <div className={styles.gridThree}>
                                <div className={styles.cardShadow}>
                                    <h4 className={styles.cardTitle}>
                                        Card Title
                                    </h4>
                                    <p className={styles.cardText}>
                                        This is a description of the card
                                        content. It provides more details about
                                        the solution.
                                    </p>
                                </div>
                                <div className={styles.cardShadow}>
                                    <h4 className={styles.cardTitle}>
                                        Card Title
                                    </h4>
                                    <p className={styles.cardText}>
                                        This is a description of the card
                                        content. It provides more details about
                                        the solution.
                                    </p>
                                </div>
                                <div className={styles.cardShadow}>
                                    <h4 className={styles.cardTitle}>
                                        Card Title
                                    </h4>
                                    <p className={styles.cardText}>
                                        This is a description of the card
                                        content. It provides more details about
                                        the solution.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <div className={styles.group}>
                            <h3 className={styles.mainNumber}>04</h3>
                            <h2 className={styles.sectionTitle}>Research</h2>
                            <div className={styles.subNumber}>4.1</div>
                            <div className={styles.subHeading}>
                                Understanding the Problem
                            </div>
                            <div className={styles.secContentContainer}>
                                <div className={styles.gridTwo}>
                                    <div className={styles.cardShadow}>
                                        <h4 className={styles.cardTitle}>
                                            Card Title
                                        </h4>
                                        <p className={styles.cardText}>
                                            This is a description of the card
                                            content. It provides more details
                                            about the solution.
                                        </p>
                                    </div>
                                    <div className={styles.cardShadow}>
                                        <h4 className={styles.cardTitle}>
                                            Card Title
                                        </h4>
                                        <p className={styles.cardText}>
                                            This is a description of the card
                                            content. It provides more details
                                            about the solution.
                                        </p>
                                    </div>
                                    <p className={styles.underText}>
                                        lorum ipsum dolor sit amet, consectetur
                                        adipiscing elit. Donec vel sapien eget
                                        nunc efficitur efficitur. Sed at ligula
                                        a enim efficitur commodo. Curabitur ac
                                        odio id nisl convallis tincidunt. Nulla
                                        facilisi. In hac habitasse platea
                                        dictumst. Proin ut dui sed metus
                                        fermentum bibendum.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.group}>
                            <div className={styles.subNumber}>4.2</div>
                            <div className={styles.subHeading}>
                                Competitive Analysis
                            </div>
                            <p className={styles.sectionParagraph}>
                                lorum ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec vel sapien eget nunc
                                efficitur efficitur. Sed at ligula a enim
                                efficitur commodo. Curabitur ac odio id nisl
                                convallis tincidunt. Nulla facilisi. In hac
                                habitasse platea dictumst. Proin ut dui sed
                                metus fermentum bibendum.
                            </p>
                            <img
                                className={styles.bigImage}
                                src={'/images/Under_Construction.jpeg'}
                            />
                        </div>

                        <div className={styles.group}>
                            <div className={styles.subNumber}>4.3</div>
                            <div className={styles.subHeading}>
                                User Personas
                            </div>
                            <p className={styles.sectionParagraph}>
                                lorum ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec vel sapien eget nunc
                                efficitur efficitur. Sed at ligula a enim
                                efficitur commodo. Curabitur ac odio id nisl
                                convallis tincidunt. Nulla facilisi. In hac
                                habitasse platea dictumst. Proin ut dui sed
                                metus fermentum bibendum.
                            </p>
                            <img
                                className={styles.bigImage}
                                src={'/images/Under_Construction.jpeg'}
                            />
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.mainNumber}>05</h3>
                        <div className={styles.group}>
                            <h2 className={styles.sectionTitle}>
                                Design Process
                            </h2>
                            <div className={styles.subNumber}>5.1</div>
                            <div className={styles.subHeading}>User Flow</div>
                            <div className={styles.sectionParagraph}>
                                lorum ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec vel sapien eget nunc
                                efficitur efficitur. Sed at ligula a enim
                                efficitur commodo. Curabitur ac odio id nisl
                                convallis tincidunt. Nulla facilisi. In hac
                                habitasse platea dictumst. Proin ut dui sed
                                metus fermentum bibendum.
                            </div>
                            <div className={styles.secContentContainer}>
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                            </div>
                        </div>

                        <div className={styles.group}>
                            <div className={styles.subNumber}>5.2</div>
                            <div className={styles.subHeading}>Style Guide</div>
                            <div className={styles.sectionParagraph}>
                                lorum ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec vel sapien eget nunc
                                efficitur efficitur. Sed at ligula a enim
                                efficitur commodo. Curabitur ac odio id nisl
                                convallis tincidunt. Nulla facilisi. In hac
                                habitasse platea dictumst. Proin ut dui sed
                                metus fermentum bibendum.
                            </div>
                            <div className={styles.secContentContainer}>
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                            </div>
                        </div>

                        <div className={styles.group}>
                            <div className={styles.subNumber}>5.3</div>
                            <div className={styles.subHeading}>
                                Site Map Over Time
                            </div>
                            <div className={styles.sectionParagraph}>
                                lorum ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec vel sapien eget nunc
                                efficitur efficitur. Sed at ligula a enim
                                efficitur commodo. Curabitur ac odio id nisl
                                convallis tincidunt. Nulla facilisi. In hac
                                habitasse platea dictumst. Proin ut dui sed
                                metus fermentum bibendum.
                            </div>
                            <div className={styles.gridTwoTwo}>
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                            </div>
                        </div>

                        <div className={styles.group}>
                            <div className={styles.subNumber}>5.4</div>
                            <div className={styles.subHeading}>
                                Lo-Fi Wireframes
                            </div>
                            <div className={styles.sectionParagraph}>
                                lorum ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec vel sapien eget nunc
                                efficitur efficitur. Sed at ligula a enim
                                efficitur commodo. Curabitur ac odio id nisl
                                convallis tincidunt. Nulla facilisi. In hac
                                habitasse platea dictumst. Proin ut dui sed
                                metus fermentum bibendum.
                            </div>
                            <div className={styles.gridTwo}>
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.group}>
                        <div className={styles.section}>
                            <h3 className={styles.mainNumber}>06</h3>
                            <h2 className={styles.sectionTitle}>
                                Final Design
                            </h2>
                            <div className={styles.gridOne}>
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.mainNumber}>07</h3>
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
