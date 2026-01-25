import { useParams, Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { projects } from "../data/projects"
import styles from "./Project.module.css"
import Scroll from "../components/Scroll"

export default function Project() {
    const { id } = useParams<{ id: string }>()
    const currentId = parseInt(id || "1")
    const project = projects.find((p) => p.id === currentId)
    const nextProject = projects.find((p) => p.id === currentId + 1)
    const mockupRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    const handleScrollToMockup = () => {
        mockupRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h1>Project not found</h1>
                <Link to="/portfolio">Back to Portfolio</Link>
            </div>
        )
    }

    return (
        <article className={styles.project}>
            <div className={styles.container}>
                <div className={styles.heroSection}>
                    <section className={styles.header}>
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
                    </section>

                    <div className={styles.mainImage}>
                        {project.heroImage.endsWith('.mp4') ? (
                            <video src={project.heroImage} autoPlay loop muted />
                        ) : (
                            <img src={project.heroImage} alt={project.title} />
                        )}
                    </div>

                    <div className={styles.scrollButton}>
                        <Scroll onClick={handleScrollToMockup} />
                    </div>
                </div>

                <div className={styles.mockupImage} ref={mockupRef}>
                    <img src={project.mockupImage} alt={`${project.title} mockup`} />
                </div>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>The Process</h2>
                    <p className={styles.description}>{project.description}</p>
                </section>

                <div className={styles.toolImages}>
                    {project.images.map((img, index) => (
                        <div key={index} className={styles.toolImage}>
                            <img src={img} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>

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
    )
}
