import styles from './Scroll.module.css';

interface ScrollProps {
    onClick: () => void;
}

export default function Scroll({onClick}: ScrollProps) {
    return (
        <button className={styles.scroll} onClick={onClick}>
            <div className={styles.scroll__text}>SCROLL</div>
            <img
                className={styles.scroll__arrow}
                src='/images/icon/Purp Down Arrow No Fill.svg'
                alt='Down arrow'
            />
        </button>
    );
}
