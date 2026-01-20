import { Link } from "react-router-dom"
import { projects } from "../data/projects"
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Hey there, I'm Luca!</h1>
                <p className={styles.subtitle}>Digital Marketer / Designer</p>
            </section>

            <section className={styles.featured}>
                <div className={styles.masonryGrid}>
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            to={`/project/${project.id}`}
                            className={styles.masonryItem}
                        >
                            {project.heroImage.endsWith('.mp4') ? (
                                <video
                                    src={project.heroImage}
                                    autoPlay
                                    loop
                                    muted
                                    className={styles.image}
                                />
                            ) : (
                                <img
                                    src={project.heroImage}
                                    alt={project.title}
                                    className={styles.image}
                                />
                            )}
                            <div className={styles.overlay}>
                                <h3>{project.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}
