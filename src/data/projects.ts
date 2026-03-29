export interface Project {
    id: number;
    title: string;
    role: string;
    year: number;
    heroImage: string;
    description: string;
    tools: string[];
    images: string[];
    isCaseStudy?: boolean;
    sections?: Array<{
        title: string;
        content: string;
    }>;
    links?: Array<{
        type: string;
        url: string;
    }>;
}

export const projects: Project[] = [
    {
        id: 1,
        isCaseStudy: true,
        title: 'ProLog',
        role: 'Project Manager',
        year: 2025,
        heroImage: '/images/prolog/Dashboard_Mockup.png',
        description: '',
        tools: [
            'Figma',
            'Trello',
            'Adobe Illustrator',
            'Adobe Photoshop',
            'Adobe Premiere Pro',
            'Microsoft Excel',
            'React Expo',
            'Javascript',
        ],
        images: ['/images/img1.png', '/images/img2.png'],
        sections: [],
    },
    {
        id: 5,
        role: 'Graphic Design',
        title: 'YumYum Land',
        year: 2024,
        heroImage: '/images/yumyumland/Brownie.png',
        description:
            'Food design transcends function—it communicates flavor, quality, and personality through visual language. Each dessert in YumYum Land was crafted with a distinct visual identity, using bold color palettes and expressive typography to capture the essence of its character. Through thoughtful illustration and strategic composition, the collection creates an engaging brand experience that invites curiosity and celebrates the joy of indulgence.',
        tools: ['Adobe Illustrator', 'Adobe Photoshop'],
        images: [
            '/images/yumyumland/Cookie.png',
            '/images/yumyumland/Cupcake.png',
            '/images/yumyumland/Brownie.png',
        ],
    },
    {
        id: 2,
        title: 'Geometea',
        role: 'Graphic Design / Marketing',
        year: 2025,
        heroImage: '/videos/Can.mp4',
        description:
            'The tea market is saturated with branding that leans heavily into being “holistic” or “close to nature,” often resulting in similar visuals and muted packaging. Geometea was created to intentionally flip that narrative and stand apart on the shelf. By using unique geometric patterns on each can, Geometea presents an updated, modern interpretation of what a tea brand can be. In a crowded aisle defined by clichés and sameness, Geometea is a provocative outlier that creates a moment of visual disruption and invites curiosity before the first sip.',
        tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Blender'],
        images: [
            '/images/can/3 Can Mockup.png',
            '/images/can/Hibiscus.png',
            '/images/can/Oolong.png',
            '/images/can/Chamomile.png',
        ],
    },
    {
        id: 4,
        role: 'Design / Layout Design',
        title: 'G-Adventures',
        year: 2024,
        heroImage: '/images/magazine/Front Cover Mockup.png',
        description:
            'This project is  designed to present Italy as a cohesive cultural experience rather than a collection of familiar tourist imagery. Italy is often portrayed through its ancient statues and historic structures,  while this magazine showcases its living spirit, vibrant culture, and emotions it brings out. A minimalist design allows the emotions of the subjects to pull the reader in, resonating with their desire for excitement. The cover being one connecting image represents the continuity of their journey, doubling as a striking visual that stands out on shelves. The final message speaks to the reader, inspiring them to step into the adventure and answer the call.',
        tools: ['Adobe InDesign', 'Adobe Photoshop'],
        images: [
            '/images/magazine/Rome_Mockup.png',
            '/images/magazine/Venice Spread Mockup.png',
            '/images/magazine/Florence_Mockup.png',
            '/images/magazine/Cover Spread.png',
        ],
    },
    {
        id: 3,
        role: 'Typography Design',
        title: 'Bleach Poster',
        year: 2024,
        heroImage: '/images/bleach/Ipad_Design.png',
        description:
            'Costume design in manga and anime transcends mere aesthetics — it communicates character identity, social hierarchy, and cultural significance through visual language. This museum exhibition explores how Bleach uses silhouette, color, and symbolic elements to distinguish characters and their narrative roles. From the structured elegance of Shihakusho uniforms to the elaborate, otherworldly designs of the Arrancar and Sternritter, each garment conveys power, conflict, and individuality. By showcasing these designs in detail, the exhibition reveals how exceptional character design elevates storytelling and creates instantly recognizable visual identities that transcend the page.',

        tools: ['Adobe InDesign', 'Adobe Photoshop'],
        images: ['/images/bleach/Poster_Design.png'],
        links: [
            {
                type: 'Ipad Animation',
                url: 'https://indd.adobe.com/view/479ac20c-915f-459c-b387-66339eb13449',
            },
            {
                type: 'Poster Animation',
                url: 'https://indd.adobe.com/view/b981c3b0-81f0-4143-858d-d1fd0ec418ab',
            },
        ],
    },

    {
        id: 6,
        role: 'Design Research',
        title: 'Project 5',
        year: 2024,
        heroImage: '/images/Under_Construction.jpeg',
        description:
            "User research and data-driven design decisions separate great designs from mediocre ones. By conducting user interviews, usability testing, and analyzing behavioral data, designers gain insight into real user needs and pain points. This information informs every design decision from information architecture to microinteractions. When design is rooted in user understanding rather than assumptions, the result is a product that resonates with its audience and solves actual problems. Data-driven design is not about removing creativity—it's about directing creativity toward meaningful solutions.",
        tools: ['Hotjar', 'Maze', 'Google Analytics'],
        images: [
            '/images/Under_Construction.jpeg',
            '/images/Under_Construction.jpeg',
            '/images/Under_Construction.jpeg',
            '/images/Under_Construction.jpeg',
        ],
    },
];
