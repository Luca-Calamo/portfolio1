import {useParams, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {projects} from '../data/projects';
import styles from './Project.module.css';
import CaseStudy from './CaseStudy';

export default function Project() {
    const {id} = useParams<{id: string}>();
    const currentId = parseInt(id || '1');
    const project = projects.find((p) => p.id === currentId);
    const nextProject = projects.find((p) => p.id === currentId + 1);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [zoomLevel, setZoomLevel] = useState<number>(1);
    const [panOffset, setPanOffset] = useState<{x: number; y: number}>({
        x: 0,
        y: 0,
    });
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragStart, setDragStart] = useState<{x: number; y: number}>({
        x: 0,
        y: 0,
    });

    const handleZoomIn = () => {
        setZoomLevel((prev) => (prev < 3 ? prev + 0.5 : prev));
    };

    const handleZoomOut = () => {
        setZoomLevel((prev) => (prev > 1 ? prev - 0.5 : prev));
    };

    const handleImageSelect = (imagePath: string) => {
        setSelectedImage(imagePath);
        setZoomLevel(1);
        setPanOffset({x: 0, y: 0});
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoomLevel > 1) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - panOffset.x,
                y: e.clientY - panOffset.y,
            });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && zoomLevel > 1) {
            setPanOffset({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            handleZoomIn();
        } else {
            handleZoomOut();
        }
    };

    useEffect(() => {
        if (zoomLevel === 1) {
            setPanOffset({x: 0, y: 0});
        }
    }, [zoomLevel]);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h1>Project not found</h1>
                <Link to='/portfolio'>Back to Portfolio</Link>
            </div>
        );
    }

    // If it's a case study, render the CaseStudy component instead
    if (project.isCaseStudy) {
        return <CaseStudy />;
    }

    return (
        <article className={styles.project}>
            <div className={styles.container}>
                <div className={styles.heroSection}>
                    <h1 className={styles.title}>{project.title}</h1>

                    <div className={styles.metadata}>
                        <div className={styles.metadataItem}>
                            <span className={styles.label}>Role</span>
                            <span className={styles.value}>{project.role}</span>
                        </div>
                        <div className={styles.metadataItem}>
                            <span className={styles.label}>Year</span>
                            <span className={styles.value}>{project.year}</span>
                        </div>
                        <div className={styles.metadataItem}>
                            <span className={styles.label}>Tools</span>
                            <div className={styles.toolsList}>
                                {project.tools.map((tool) => (
                                    <span key={tool} className={styles.tool}>
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    {project.links && project.links.length > 0 && (
                        <div className={styles.linksSection}>
                            <div className={styles.linksList}>
                                {project.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={styles.projectLink}
                                    >
                                        <span>
                                            {link.type.charAt(0).toUpperCase() +
                                                link.type.slice(1)}
                                        </span>
                                        <span className={styles.arrow}>→</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className={styles.mainImage}>
                        {project.heroImage.endsWith('.mp4') ? (
                            <video
                                src={project.heroImage}
                                autoPlay
                                loop
                                muted
                            />
                        ) : (
                            <img
                                src={project.heroImage}
                                alt={project.title}
                                onClick={() =>
                                    handleImageSelect(project.heroImage)
                                }
                                style={{cursor: 'pointer'}}
                            />
                        )}
                    </div>
                </div>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>The Process</h2>
                    <p className={styles.description}>{project.description}</p>
                </section>

                <div className={styles.imageGalleryContainer}>
                    {project.images.map((img, index) => (
                        <div key={index} className={styles.imageGallery}>
                            <img
                                src={img}
                                alt={`Image ${index + 1}`}
                                onClick={() => handleImageSelect(img)}
                                style={{cursor: 'pointer'}}
                            />
                        </div>
                    ))}
                </div>

                {nextProject && (
                    <section className={styles.upNext}>
                        <h2 className={styles.sectionTitle}>Up Next</h2>
                        <Link
                            to={`/project/${nextProject.id}`}
                            className={styles.nextProjectLink}
                        >
                            <span>{nextProject.title}</span>
                            <span className={styles.arrow}>→</span>
                        </Link>
                    </section>
                )}
            </div>
            {selectedImage && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className={styles.modalContent}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        <button
                            className={styles.closeButton}
                            onClick={() => setSelectedImage(null)}
                            aria-label='Close image view'
                        >
                            ✕
                        </button>
                        <div
                            className={styles.zoomControls}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.zoomButton}
                                onClick={handleZoomOut}
                            >
                                −
                            </button>
                            <span className={styles.zoomLevel}>
                                {Math.round(zoomLevel * 100)}%
                            </span>
                            <button
                                className={styles.zoomButton}
                                onClick={handleZoomIn}
                            >
                                +
                            </button>
                        </div>
                        <div
                            className={styles.imageContainer}
                            style={{
                                cursor:
                                    zoomLevel > 1 && isDragging
                                        ? 'grabbing'
                                        : zoomLevel > 1
                                          ? 'grab'
                                          : 'default',
                            }}
                        >
                            <img
                                src={selectedImage}
                                alt='Full screen view'
                                className={styles.fullScreenImage}
                                onMouseDown={handleMouseDown}
                                onWheel={handleWheel}
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                                }}
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
}
