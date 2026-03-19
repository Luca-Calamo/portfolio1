import {useState} from 'react';
import {projects} from '../data/projects';
import ParallaxCardSlider from '../components/Carousels/ParallaxCardSlider';
import InfiniteScrollCarousel from '../components/Carousels/InfiniteScrollCarousel';
import styles from './Portfolio.module.css';
import carouselStyles from './CarouselToggle.module.css';

type CarouselMode = 'parallax' | 'infinite';

export default function Portfolio() {
    const [carouselMode, setCarouselMode] = useState<CarouselMode>('parallax');

    return (
        <div className={styles.portfolio}>
            <div className={styles.container}>
                <h1 className={styles.title}>Portfolio</h1>

                {/* Carousel Mode Toggle */}
                <div className={carouselStyles.toggleContainer}>
                    <div className={carouselStyles.toggleLabel}>View Mode:</div>
                    <div className={carouselStyles.toggleSwitch}>
                        <button
                            className={`${carouselStyles.toggleBtn} ${
                                carouselMode === 'parallax'
                                    ? carouselStyles.active
                                    : ''
                            }`}
                            onClick={() => setCarouselMode('parallax')}
                            aria-pressed={carouselMode === 'parallax'}
                        >
                            3D Parallax
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
                    {carouselMode === 'parallax' && (
                        <ParallaxCardSlider
                            projects={projects}
                            key='parallax'
                        />
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
