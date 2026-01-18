import { Link } from "react-router-dom"
import { projects } from "../data/projects"
import styles from "./Portfolio.module.css"

export default function Portfolio() {
    return (
        <div className={styles.portfolio}>
            <div className={styles.container}>
                <h1 className={styles.title}>Portfolio</h1>
                <div className={styles.projectsList}>
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            to={`/project/${project.id}`}
                            className={styles.projectItem}
                        >
                            <div className={styles.projectImage}>
                                <img src={project.heroImage} alt={project.title} />
                            </div>
                            <div className={styles.projectInfo}>
                                <h2>{project.title}</h2>
                                <p>{project.year}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
