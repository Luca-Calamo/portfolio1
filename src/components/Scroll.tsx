import styles from './Scroll.module.css';

interface ScrollProps {
    onClick: () => void;
}

export default function Scroll({onClick}: ScrollProps) {
    return (
        <button className={styles.container} onClick={onClick}>
            <div className={styles.text}>SCROLL</div>
            <img
                className={styles.arrow}
                src='/images/icon/Purp Down Arrow No Fill.svg'
                alt='Down arrow'
            />
        </button>
    );
}
