import {Link} from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to='/' className={styles.logo}>
                    <span
                        style={{display: 'flex', alignItems: 'center', gap: 16}}
                    >
                        <img
                            src='/images/logo/Purple Logo.svg'
                            alt='Luca Calamo Logo'
                            style={{
                                height: 48,
                                width: 'auto',
                                display: 'block',
                            }}
                        />
                    </span>
                </Link>
                <nav className={styles.nav}>
                    <Link to='/' className={styles.link}>
                        Home
                    </Link>
                    <Link to='/portfolio' className={styles.link}>
                        Portfolio
                    </Link>
                </nav>
            </div>
        </header>
    );
}
