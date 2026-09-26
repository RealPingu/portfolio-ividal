// app/data/content.en.ts

import { ContentDictionary } from './types';

export const contentEn: ContentDictionary = {
    heroData: {
        greeting: "Hi, I'm",
        name: "Inti Vidal",
        degrees: [
            "Civil IT Engineer",
            "Bachelor of Science in Computer Science",
        ],
        university: "Universidad Técnica Federico Santa María",
        about: "Welcome to my web portfolio. I build modern solutions focused on the requirements of my clients. I'm interested in everything tech, exploring new sides of the industry and implementing new ideas.",
        buttons: {
            getResume: { label: "Get my resume", href: "/intividal_cv_en.pdf" },
        },
        portrait: "/images/hero/inti-portrait-colored.jpg",
    },
    navData: {
        brand: "Inti Vidal",
        links: [
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
        ],
        resumeButton: { label: "Resume", href: "/intividal_cv_en.pdf" },
    },
    aboutData: {
        title: "My Journey",
        subtitle: "A brief look into my background, focus, and perspective on engineering.",
        cards: [
            {
                title: "Background & Education",
                text: "Ever since childhood, I've had a close relationship with technology—especially video games. At 6 years old, my parents got me a PS1, and at 9, I had my first desktop computer (one of those heavy CRT monitors). Naturally, this sparked a deep curiosity about how computers work inside. That passion led me to study and graduate as a Civil IT Engineer from Universidad Técnica Federico Santa María, one of the top engineering universities in the country.",
                image: "/images/about/card-retro-pc.jpg",
            },
            {
                title: "Work & Experience",
                text: "Currently, I am looking for the next step in my professional career. I have contributed to multiple projects that directly impact people and organizations, focusing on delivering simple, robust, and straightforward solutions with a disciplined engineering approach.",
                image: "/images/about/card-tie.jpg",
            },
            {
                title: "Aspirations & Goals",
                text: "The future of programming is exciting. The rise of AI presents new challenges, but it also unlocks incredible possibilities and discoveries. Now more than ever, having a deep, comprehensive foundation in software engineering is essential.",
                image: "/images/about/card-ai-triangle-v2.jpg",
            },
        ],
    },
    skillsData: {
        title: "Skills",
        subtitle: "A toolkit developed across software engineering, systems, and full-stack development.",
        categories: [
            {
                title: "Languages & Core",
                skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "Bash / Shell", "HTML / CSS"],
            },
            {
                title: "FullStack & Frameworks",
                skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "DaisyUI", "Frappe Framework", "Jinja3", "Framer Motion"],
            },
            {
                title: "Systems, Cloud & DevOps",
                skills: ["Linux CLI", "Docker", "GitHub & GitLab CI/CD", "DigitalOcean", "AWS", "Google Cloud (GCP)"],
            },
            {
                title: "Databases, Observability & Practices",
                skills: ["PostgreSQL", "InfluxDB", "Grafana", "MongoDB", "SQLite", "RESTful APIs", "Agile / Scrum (Scrum Master)", "Object-Oriented Design (OOD)"],
            },
        ],
    },
    projectsData: {
        title: "Projects",
        subtitle: "Featured software engineering, machine learning, and systems optimization work.",
        projects: [
            {
                name: "Antipatrón: Dark Patterns Narrative Game",
                role: "Memoria / Thesis Project (2025 – 2026)",
                description: "An interactive FullStack narrative web game designed to educate and evaluate user awareness of deceptive UI/UX design patterns. Features modular component architecture, dynamic dialogue engine with Framer Motion animations, and cloud relational database telemetry in PostgreSQL.",
                technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel Postgres"],
                image: "/images/projects/project-antipatron.svg",
                codeUrl: "https://github.com/RealPingu/proyecto-memoria",
                demoUrl: "https://proyecto-memoria-mocha.vercel.app/",
                demoLabel: "Live Demo",
                thesisUrl: "https://repositorio.usm.cl/handle/123456789/78930",
            },
            {
                name: "Refracted Speech: AI Speech Pathology",
                role: "Scrum Master & ML Pipeline (2023 – 2024)",
                description: "A machine learning screening platform designed to assess dysarthria probability from acoustic voice samples recorded on mobile devices. Coordinated Agile sprint planning and cross-functional pipelines between acoustic preprocessing, feature extraction, and classification models.",
                technologies: ["Python", "Machine Learning", "Acoustic Preprocessing", "Agile / Scrum", "Data Pipelines"],
                image: "/images/projects/project-speech.svg",
                codeUrl: "https://github.com/RealPingu/RefractedSpeech-ProductPage",
                demoUrl: "https://refracted-speech.feriadesoftware.cl/",
                demoLabel: "Official Website",
            },
            {
                name: "IVNeovimConfig: My working configuration",
                role: "Developer Tooling & Configuration (2025 – 2026)",
                description: "A custom daily-driver Neovim setup built for Neovim 0.12+ and WSL2. Highlights native package management with zero plugin-manager bloat, an automated Wallpaper Engine integration to display live animated wallpapers through a transparent terminal, and an optional VimTeX environment.",
                technologies: ["Lua", "Neovim", "WSL2", "LSP", "Treesitter", "Bash"],
                image: "/images/projects/project-neovim.svg",
                codeUrl: "https://github.com/RealPingu/IVNeovimConfig",
                demoUrl: "",
            },
            {
                name: "Truck-and-Drone Delivery Optimization (k-MVDRP)",
                role: "Algorithmic Engineering (2024)",
                description: "High-performance combinatorial optimization algorithms in C++ solving the coordinated Multi-visit Drone Routing Problem (k-MVDRP / mFSTSP). Models multi-package payload capacity, decoupled launch and rendezvous synchronization between mobile trucks and drone fleets, and mission makespan minimization.",
                technologies: ["C++17", "Combinatorial Optimization", "Heuristic Search", "OOP", "Data Structures"],
                image: "/images/projects/project-drone.svg",
                codeUrl: "https://github.com/RealPingu/Proyecto-IA-2024",
                demoUrl: "",
            },
        ],
    },
    contactData: {
        title: "Get in Touch",
        subtitle: "Whether you have an opportunity, a project to collaborate on, or just want to connect, feel free to reach out.",
        cards: [
            {
                title: "Offer A Job Opportunity?",
                text: "I am open to discussing full-time software engineering roles and collaborations. With strong foundations in systems, web development, and algorithmic optimization, I am interested in roles that tackle exciting and meaningful challenges.",
            },
            {
                title: "Build Something Together?",
                text: "I love designing and engineering robust software solutions from concept to deployment. If you have an innovative idea, a system to optimize, or an MVP to build, let's create something great together.",
            },
            {
                title: "Connect & Chat?",
                text: "I'm always eager to exchange ideas with fellow engineers, researchers, and tech enthusiasts. Let's connect on LinkedIn or over email!",
            },
        ],
        banner: {
            title: "Ready to talk?",
            subtitle: "Pick whichever communication channel you prefer.",
        },
        links: [
            {
                label: "Email Me",
                href: "mailto:inti.vidal@usm.cl",
                icon: "email",
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/inti-vidal",
                icon: "linkedin",
            },
            {
                label: "GitHub",
                href: "https://github.com/RealPingu",
                icon: "github",
            },
        ],
    },
    scrollIndicatorLabel: "Scroll to About section",
};
