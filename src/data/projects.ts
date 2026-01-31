export interface Project {
    id: number;
    title: string;
    role: string;
    year: number;
    heroImage: string;
    description: string;
    tools: string[];
    images: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Geometea',
        role: 'Graphic Design / Marketing',
        year: 2025,
        heroImage: '/videos/Can.mp4',
        description:
            'The tea market is saturated with branding that leans heavily into being “holistic” or “close to nature,” often resulting in similar visuals and muted packaging. Geometea was created to intentionally flip that narrative and stand apart on the shelf. By using unique 2D geometric patterns on each can, Geometea presents an updated, modern interpretation of what a tea brand can be. In a crowded aisle defined by clichés and sameness, Geometea is a provocative outlier that creates a moment of visual disruption and invites curiosity before the first sip.',
        tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Blender'],
        images: [
            '/images/can/3 Can Mockup.png',
            '/images/can/Hibiscus.png',
            '/images/can/Oolong.png',
            '/images/can/Chamomile.png',
        ],
    },
    {
        id: 2,
        role: 'Brand Design',
        title: 'G-Adventures Travel Magazine',
        year: 2024,
        heroImage: '/images/magazine/Front Cover Mockup.png',
        description:
            'Sustainability in digital design goes beyond just aesthetics. It encompasses choosing efficient color palettes that reduce energy consumption on screens, optimizing image compression without sacrificing quality, and designing with minimal resources in mind. Modern web applications can significantly reduce their carbon footprint through thoughtful design decisions. By considering the environmental impact of every pixel and interaction, designers contribute to a more sustainable digital ecosystem while maintaining beautiful, functional user experiences.',
        tools: ['Adobe InDesign', 'Adobe Photoshop'],
        images: [
            '/images/magazine/Front Cover Mockup.png',
            '/images/magazine/VEnice Spread.png',
            '/images/magazine/Rome Spread Mockup.png',
        ],
    },
    {
        id: 3,
        role: 'UX/UI Design',
        title: 'Project 3',
        year: 2024,
        heroImage:
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        description:
            "Accessibility in design is not a feature—it's a fundamental principle. Creating interfaces that work for everyone, regardless of ability, requires understanding color contrast ratios, keyboard navigation, screen reader compatibility, and motion sensitivity. When designers prioritize accessibility from the beginning, they often discover that solutions benefit all users, not just those with disabilities. Inclusive design thinking leads to clearer typography, simpler navigation structures, and more intuitive interactions that enhance the entire user experience.",
        tools: ['Adobe Creative Suite', 'Prototype.js', 'WCAG Standards'],
        images: [
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
        ],
    },
    {
        id: 4,
        role: 'Typography Design',
        title: 'Project 4',
        year: 2024,
        heroImage:
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        description:
            'Typography is the voice of visual design. The choice of typeface, weight, size, and spacing communicates tone and hierarchy before a single word is read. Modern type systems combine multiple font families to create depth and visual interest while maintaining readability. Understanding the psychology behind typeface selection—serifs for tradition and authority, sans-serifs for modernity and clarity—enables designers to align typography with brand messaging. When typography is done right, it becomes invisible, allowing the message to shine through clearly.',
        tools: ['Typetool', 'FontLab', 'Font Awesome'],
        images: [
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
        ],
    },
    {
        id: 5,
        role: 'Design Research',
        title: 'Project 5',
        year: 2024,
        heroImage:
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        description:
            "User research and data-driven design decisions separate great designs from mediocre ones. By conducting user interviews, usability testing, and analyzing behavioral data, designers gain insight into real user needs and pain points. This information informs every design decision from information architecture to microinteractions. When design is rooted in user understanding rather than assumptions, the result is a product that resonates with its audience and solves actual problems. Data-driven design is not about removing creativity—it's about directing creativity toward meaningful solutions.",
        tools: ['Hotjar', 'Maze', 'Google Analytics'],
        images: [
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
        ],
    },
    {
        role: 'Motion Design',
        id: 6,
        title: 'Project 6',
        year: 2024,
        heroImage:
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        description:
            "Motion design breathes life into static interfaces. Thoughtful animations and transitions guide user attention, provide feedback, and create delight. However, motion should serve a purpose—every animation should enhance usability or communication rather than distract. Microinteractions, from button hover states to loading animations, build trust and engagement. When motion design is subtle and purposeful, users don't consciously notice it, yet they feel the difference in how natural and responsive the interface feels.",
        tools: ['Framer Motion', 'Cinema 4D', 'After Effects'],
        images: [
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
        ],
    },
];
