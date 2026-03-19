import { useState, useEffect } from 'react';
import type { Project } from '../../data/projects';
import styles from './ParallaxCardSlider.module.css';

const isVideo = (url: string): boolean => {
	return /\.(mp4|webm|ogg|mov)$/i.test(url);
};

interface ParallaxCardSliderProps {
	projects: Project[];
}

const AUTOPLAY_INTERVAL = 5000;

export default function ParallaxCardSlider({ projects }: ParallaxCardSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoplay, setIsAutoplay] = useState(true);

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % projects.length);
		setIsAutoplay(false);
	};

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
		setIsAutoplay(false);
	};

	useEffect(() => {
		if (!isAutoplay) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % projects.length);
		}, AUTOPLAY_INTERVAL);

		return () => clearInterval(interval);
	}, [isAutoplay, projects.length]);

	const currentProject = projects[currentIndex];
	const nextProject = projects[(currentIndex + 1) % projects.length];
	const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

	return (
		<div className={styles.slider}>
			<button
				className={`${styles.sliderBtn} ${styles.sliderBtnPrev}`}
				onClick={handlePrev}
				aria-label="Previous project"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="m15 18-6-6 6-6" />
				</svg>
			</button>

			<div className={styles.slidesWrapper} key={currentIndex}>
				<div className={styles.slides}>
					{/* Previous Slide */}
					<div className={styles.slide} data-previous>
						<div className={styles.slideInner}>
							<div className={styles.slideImageWrapper}>
								{isVideo(prevProject.heroImage) ? (
									<video
										src={prevProject.heroImage}
										autoPlay
										muted
										loop
										className={styles.slideImage}
									/>
								) : (
									<img
										src={prevProject.heroImage}
										alt={prevProject.title}
										className={styles.slideImage}
									/>
								)}
							</div>
						</div>
					</div>

					{/* Current Slide */}
					<div className={styles.slide} data-current>
						<div className={styles.slideInner}>
							<div className={styles.slideImageWrapper}>
								{isVideo(currentProject.heroImage) ? (
									<video
										src={currentProject.heroImage}
										autoPlay
										muted
										loop
										className={styles.slideImage}
									/>
								) : (
									<img
										src={currentProject.heroImage}
										alt={currentProject.title}
										className={styles.slideImage}
									/>
								)}
							</div>
						</div>
					</div>

					{/* Next Slide */}
					<div className={styles.slide} data-next>
						<div className={styles.slideInner}>
							<div className={styles.slideImageWrapper}>
								{isVideo(nextProject.heroImage) ? (
									<video
										src={nextProject.heroImage}
										autoPlay
										muted
										loop
										className={styles.slideImage}
									/>
								) : (
									<img
										src={nextProject.heroImage}
										alt={nextProject.title}
										className={styles.slideImage}
									/>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className={styles.slidesInfos}>
					{/* Previous Info */}
					<div className={styles.slideInfo} data-previous>
						<div className={styles.slideInfoInner}>
							<div className={styles.slideInfoTextWrapper}>
								<div className={styles.slideInfoText} data-title>
									<span>{prevProject.title}</span>
								</div>
							</div>
						</div>
					</div>

					{/* Current Info */}
					<div className={styles.slideInfo} data-current>
						<div className={styles.slideInfoInner}>
							<div className={styles.slideInfoTextWrapper}>
								<div className={styles.slideInfoText} data-title>
									<span>{currentProject.title}</span>
								</div>
							</div>
						</div>
					</div>

					{/* Next Info */}
					<div className={styles.slideInfo} data-next>
						<div className={styles.slideInfoInner}>
							<div className={styles.slideInfoTextWrapper}>
								<div className={styles.slideInfoText} data-title>
									<span>{nextProject.title}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<button
				className={`${styles.sliderBtn} ${styles.sliderBtnNext}`}
				onClick={handleNext}
				aria-label="Next project"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="m9 18 6-6-6-6" />
				</svg>
			</button>
		</div>
	);
}
