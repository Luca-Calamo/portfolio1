import {motion, useTransform, useScroll} from 'framer-motion';
import {useRef, useState, useEffect} from 'react';
import styles from './Horizontal_Scroll.module.css';

interface Horizontal_ScrollProps {
    images: string[];
}

const Horizontal_Scroll = ({images}: Horizontal_ScrollProps) => {
    const targetRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [scrollDistance, setScrollDistance] = useState('-95%');
    const {scrollYProgress} = useScroll({
        target: targetRef,
    });

    useEffect(() => {
        const updateScrollDistance = () => {
            if (trackRef.current) {
                const trackWidth = trackRef.current.scrollWidth;
                const containerWidth =
                    trackRef.current.parentElement?.clientWidth || 0;

                // Calculate how far we need to scroll
                // We want to end when the last image is fully visible
                const distanceNeeded = trackWidth - containerWidth;

                // Convert to percentage of track width
                const scrollPercentage = -(distanceNeeded / trackWidth) * 100;

                setScrollDistance(`${scrollPercentage}%`);
            }
        };

        // Update on mount and when images change
        updateScrollDistance();
        window.addEventListener('resize', updateScrollDistance);

        return () => window.removeEventListener('resize', updateScrollDistance);
    }, [images]);

    const x = useTransform(scrollYProgress, [0, 1], ['1%', scrollDistance]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <section ref={targetRef} className={styles.carouselContainer}>
            <div className={styles.stickyWrapper}>
                <motion.div
                    ref={trackRef}
                    style={{x}}
                    className={styles.carouselTrack}
                >
                    {images.map((imageUrl, index) => (
                        <div key={index} className={styles.carouselCard}>
                            <img
                                src={imageUrl}
                                alt={`Carousel image ${index + 1}`}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Horizontal_Scroll;
