import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    LUCA
                </Link>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.link}>
                        Home
                    </Link>
                    <Link to="/portfolio" className={styles.link}>
                        Portfolio
                    </Link>
                </nav>
            </div>
        </header>
    )
}
