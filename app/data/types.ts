// app/data/types.ts

export type Language = 'en' | 'es';

export interface ProjectItem {
    name: string;
    role: string;
    description: string;
    technologies: string[];
    image: string;
    codeUrl: string;
    demoUrl: string;
    demoLabel?: string;
    thesisUrl?: string;
}

export interface ContentDictionary {
    heroData: {
        greeting: string;
        name: string;
        degrees: string[];
        university: string;
        about: string;
        buttons: {
            getResume: { label: string; href: string };
        };
        portrait: string;
    };
    navData: {
        brand: string;
        links: { label: string; href: string }[];
        resumeButton: { label: string; href: string };
    };
    aboutData: {
        title: string;
        subtitle: string;
        cards: {
            title: string;
            text: string;
            image: string;
        }[];
    };
    skillsData: {
        title: string;
        subtitle: string;
        categories: {
            title: string;
            skills: string[];
        }[];
    };
    projectsData: {
        title: string;
        subtitle: string;
        projects: ProjectItem[];
    };
    contactData: {
        title: string;
        subtitle: string;
        cards: {
            title: string;
            text: string;
        }[];
        banner: {
            title: string;
            subtitle: string;
        };
        links: {
            label: string;
            href: string;
            icon: 'email' | 'linkedin' | 'github';
        }[];
    };
    scrollIndicatorLabel: string;
}
