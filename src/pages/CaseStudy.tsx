import {useParams, Link} from 'react-router-dom';
import {useState} from 'react';
import {projects} from '../data/projects';
import styles from './CaseStudy.module.css';
import CompetitiveAnalysis from '../components/CompetitiveAnalysis/CompetitiveAnalysis';
// import TextCards from '../components/TextCards/TextCards';

export default function CaseStudy() {
    const {id} = useParams<{id: string}>();
    const currentId = parseInt(id || '1');
    const project = projects.find((p) => p.id === currentId);
    const nextProject = projects.find((p) => p.id === currentId + 1);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

                    {/* <img
                        className={styles.mainImage}
                        src={'/images/prolog/Dashboard_Mockup.png'}
                    /> */}
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
                                        apprentices in the skilled trades. It
                                        removes barriers by simplifying the
                                        complex apprenticeship journey and
                                        centralizing the overwhelming amount of
                                        information apprentices need to manage.
                                        ProLog tracks past progress and
                                        visualizes the future, helping
                                        apprentices understand where they are in
                                        their career progress and what steps
                                        come next.
                                    </p>
                                </div>

                                <img
                                    className={styles.bigImage}
                                    src={'/images/prolog/Dashboard_Mockup.png'}
                                    onClick={() => setSelectedImage('/images/prolog/Dashboard_Mockup.png')}
                                    style={{cursor: 'pointer'}}
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
                                        Apprenticeship takes over 6,000 hours.
                                        That's years bouncing between job sites,
                                        classrooms, and paperwork; never quite
                                        sure if you're actually making progress.
                                        The more we talked to apprentices, the
                                        clearer it became: people weren't
                                        quitting because the work was too hard.
                                        They were quitting because they felt
                                        lost. "How many hours do I actually
                                        have?" "What do I still need to learn?"
                                        "Am I even on track?" Nobody could give
                                        them straight answers. We realized we
                                        needed to build something that could
                                        answer one simple question: Where am I
                                        in my journey?
                                    </p>
                                </div>
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}                                    onClick={() => setSelectedImage('/images/Under_Construction.jpeg')}
                                    style={{cursor: 'pointer'}}                                />
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
                                    <div className={styles.cardContent}>
                                        <h4 className={styles.cardTitle}>
                                            Journey Visualization
                                        </h4>
                                        <p className={styles.cardText}>
                                            ProLog's dashboard uses a visual
                                            roadmap to show apprentices exactly
                                            where they are in their long
                                            journey, turning abstract progress
                                            into tangible milestones they can
                                            see and feel confident about.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.cardShadow}>
                                    <div className={styles.cardContent}>
                                        <h4 className={styles.cardTitle}>
                                            Centralized Information
                                        </h4>
                                        <p className={styles.cardText}>
                                            ProLog organizes scattered resource
                                            into one intuitive app, transforming
                                            a fragmented system into something
                                            actually usable.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.cardShadow}>
                                    <div className={styles.cardContent}>
                                        <h4 className={styles.cardTitle}>
                                            Removes Barriers
                                        </h4>
                                        <p className={styles.cardText}>
                                            ProLog cuts through the confusion by
                                            surfacing the right information at
                                            the right time, so apprentices can
                                            focus on learning their trade
                                            instead of navigating bureaucracy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.mainNumber}>04</h3>
                        <h2 className={styles.sectionTitle}>Research</h2>
                        {/* <div className={styles.group}>
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
                        </div> */}

                        <div className={styles.group}>
                            <div className={styles.subNumber}>4.1</div>
                            <div className={styles.subHeading}>
                                Competitive Analysis
                            </div>
                            <p className={styles.sectionParagraph}>
                                We analyzed existing tools and found a gap.
                                Government portals had comprehensive information
                                but poor mobile experiences. Productivity apps
                                could track hours but didn't understand trade
                                requirements. ProLog's advantage comes from
                                integration and specificity—focusing exclusively
                                on BC skilled trades let us build features like
                                discrepancy detection that would be impossible
                                in broader platforms.
                            </p>
                            <div
                                className={styles.competitiveAnalysisContainer}
                            >
                                <CompetitiveAnalysis />
                            </div>
                        </div>

                        <div className={styles.group}>
                            <div className={styles.subNumber}>4.2</div>
                            <div className={styles.subHeading}>
                                User Personas
                            </div>
                            <p className={styles.sectionParagraph}>
                                These personas guided our design decisions,
                                ensuring solutions stayed aligned with
                                apprentice needs while remaining consistent,
                                intuitive, and practical for their daily work
                            </p>
                            <div className={styles.gridTwo}>
                                <img
                                    className={styles.bigImage}
                                    src={'/images/prolog/Primary_User_Grey.png'}
                                    onClick={() => setSelectedImage('/images/prolog/Primary_User_Grey.png')}
                                    style={{cursor: 'pointer'}}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={
                                        '/images/prolog/Secondary_User_Grey.png'
                                    }
                                    onClick={() => setSelectedImage('/images/prolog/Secondary_User_Grey.png')}
                                    style={{cursor: 'pointer'}}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.group}>
                        <div className={styles.subNumber}>4.3</div>
                        <div className={styles.subHeading}>User Research</div>
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
                                This comprehensive user flow mapped the complete
                                journey through the ProLog app. Visualizing each
                                touchpoint and decision allowed us to spot
                                friction points, simplify navigation, and create
                                an intuitive experience for apprentices. It also
                                helped us prioritize features that directly
                                solved their biggest pain points around progress
                                tracking and training management.
                            </div>
                            <div className={styles.secContentContainer}>
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                    onClick={() => setSelectedImage('/images/Under_Construction.jpeg')}
                                    style={{cursor: 'pointer'}}
                                />
                            </div>
                        </div>

                        <div className={styles.group}>
                            <div className={styles.subNumber}>5.2</div>
                            <div className={styles.subHeading}>
                                Branding & Style Guide
                            </div>
                            <div className={styles.sectionParagraph}>
                                Our design philosophy centered on clarity and
                                simplicity. Since the apprenticeship process is
                                inherently complex and confusing, we wanted
                                ProLog to feel straightforward and approachable.
                                We chose Roboto for its clean readability on
                                mobile screens, developed a streamlined visual
                                language, and designed charts and data
                                visualizations that made progress tracking
                                immediately understandable at a glance. Every
                                design choice—from color palette to
                                iconography—was made to reduce cognitive load
                                and help apprentices focus on what matters:
                                their training and growth.
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
                                Our initial architecture included a "Resources"
                                page combining school info and financial
                                databases. User testing revealed this violated
                                our value proposition. We restructured around
                                four key areas: Dashboard, Work, School, and
                                Skills. This made the app feel cohesive rather
                                than scattered.
                            </div>
                            <div className={styles.gridTwoTwo}>
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                    onClick={() => setSelectedImage('/images/Under_Construction.jpeg')}
                                    style={{cursor: 'pointer'}}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                    onClick={() => setSelectedImage('/images/Under_Construction.jpeg')}
                                    style={{cursor: 'pointer'}}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                    onClick={() => setSelectedImage('/images/Under_Construction.jpeg')}
                                    style={{cursor: 'pointer'}}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                    onClick={() => setSelectedImage('/images/Under_Construction.jpeg')}
                                    style={{cursor: 'pointer'}}
                                />
                            </div>
                        </div>

                        <div className={styles.group}>
                            <div className={styles.subNumber}>5.4</div>
                            <div className={styles.subHeading}>
                                Lo-Fi Wireframes
                            </div>
                            <div className={styles.sectionParagraph}>
                                Our initial sketches were intentionally loose
                                and unpolished. The goal wasn't aesthetics—it
                                was understanding what information apprentices
                                needed most and how quickly they could access
                                it. The dashboard concept surfaced early on. We
                                constantly asked: if someone checks this app
                                during a 15-minute break, what needs to be
                                visible immediately? Progress tracking, hour
                                totals, and actionable next steps became our
                                priority. Everything else took a backseat.
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
                                <div className={styles.figmaContainer}>
                                    <iframe
                                        style={{
                                            border: '1px solid rgba(0, 0, 0, 0.1)',
                                        }}
                                        width='100%'
                                        height='600'
                                        src='https://embed.figma.com/proto/ZmmIx6VY9EicEFrv7Rvdjh/WireFrames?node-id=3814-20926&p=f&scaling=scale-down&content-scaling=fixed&page-id=2332%3A2031&starting-point-node-id=3814%3A20926&show-proto-sidebar=1&embed-host=share'
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                    onClick={() => setSelectedImage('/images/Under_Construction.jpeg')}
                                    style={{cursor: 'pointer'}}
                                />
                                <img
                                    className={styles.bigImage}
                                    src={'/images/Under_Construction.jpeg'}
                                    onClick={() => setSelectedImage('/images/Under_Construction.jpeg')}
                                    style={{cursor: 'pointer'}}
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
            {selectedImage && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className={styles.closeButton}
                            onClick={() => setSelectedImage(null)}
                            aria-label='Close image view'
                        >
                            ✕
                        </button>
                        <img
                            src={selectedImage}
                            alt='Full screen view'
                            className={styles.fullScreenImage}
                        />
                    </div>
                </div>
            )}
        </article>
    );
}
