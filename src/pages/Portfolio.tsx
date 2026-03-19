import {useState} from 'react';
import {projects} from '../data/projects';
import ScrollCarousel from '../components/Carousels/ScrollCarousel';
import InfiniteScrollCarousel from '../components/Carousels/InfiniteScrollCarousel';
import styles from './Portfolio.module.css';
import carouselStyles from './CarouselToggle.module.css';

type CarouselMode = 'scroll' | 'infinite';

export default function Portfolio() {
    const [carouselMode, setCarouselMode] = useState<CarouselMode>('scroll');

    return (
        <div className={styles.portfolio}>
            <div className={styles.container}>
                {/* Carousel Mode Toggle */}
                <div className={carouselStyles.toggleContainer}>
                    <div className={carouselStyles.toggleLabel}>View Mode:</div>
                    <div className={carouselStyles.toggleSwitch}>
                        <button
                            className={`${carouselStyles.toggleBtn} ${
                                carouselMode === 'scroll'
                                    ? carouselStyles.active
                                    : ''
                            }`}
                            onClick={() => setCarouselMode('scroll')}
                            aria-pressed={carouselMode === 'scroll'}
                        >
                            Scroll Carousel
                        </button>
                        <button
                            className={`${carouselStyles.toggleBtn} ${
                                carouselMode === 'infinite'
                                    ? carouselStyles.active
                                    : ''
                            }`}
                            onClick={() => setCarouselMode('infinite')}
                            aria-pressed={carouselMode === 'infinite'}
                        >
                            Infinite Scroll
                        </button>
                    </div>
                </div>

                {/* Carousel Display */}
                <div className={carouselStyles.carouselWrapper}>
                    {carouselMode === 'scroll' && (
                        <ScrollCarousel projects={projects} key='scroll' />
                    )}
                    {carouselMode === 'infinite' && (
                        <InfiniteScrollCarousel
                            projects={projects}
                            key='infinite'
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
