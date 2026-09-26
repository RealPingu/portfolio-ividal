// app/data/content.es.ts

import { ContentDictionary } from './types';

export const contentEs: ContentDictionary = {
    heroData: {
        greeting: "Hola, soy",
        name: "Inti Vidal",
        degrees: [
            "Ingeniero Civil Informático",
            "Licenciado en Ciencias de la Información",
        ],
        university: "Universidad Técnica Federico Santa María",
        about: "Bienvenido a mi portafolio web. Construyo soluciones modernas enfocadas en los requerimientos de mis clientes. Me interesa todo lo relacionado con la tecnología, explorar nuevas áreas de la industria e implementar nuevas ideas.",
        buttons: {
            getResume: { label: "Obtén mi CV", href: "/intividal_cv_es.pdf" },
        },
        portrait: "/images/hero/inti-portrait-colored.jpg",
    },
    navData: {
        brand: "Inti Vidal",
        links: [
            { label: "Sobre mí", href: "#about" },
            { label: "Habilidades", href: "#skills" },
            { label: "Proyectos", href: "#projects" },
            { label: "Contacto", href: "#contact" },
        ],
        resumeButton: { label: "CV", href: "/intividal_cv_es.pdf" },
    },
    aboutData: {
        timelineTitle: "Línea de Tiempo: Experiencia y Educación",
        timelineSubtitle: "Hitos principales a lo largo de mi formación universitaria y experiencia profesional en ingeniería de software.",
        timeline: [
            {
                period: "2019",
                title: "Ingreso a Ingeniería Civil Informática",
                organization: "Universidad Técnica Federico Santa María (UTFSM)",
                description: "Inicio de la carrera universitaria con foco en arquitectura de software, sistemas distribuidos, POO, estructuras de datos y optimización algorítmica.",
                type: "education",
            },
            {
                period: "Dic. 2023 – Feb. 2024",
                title: "Práctica Profesional (Ingeniería de Software)",
                organization: "Meterbee SpA",
                description: "Desarrollo de pipeline de observabilidad telemétrica para bombas mineras con InfluxDB/Grafana API y automatización de reportes en Python.",
                type: "work",
            },
            {
                period: "Jul. 2024 – Ago. 2024",
                title: "Práctica Profesional (Ingeniería de Software)",
                organization: "Eproc Soluciones de Software SpA",
                description: "Integración de servicios web de firma digital en la plataforma central empresarial mediante APIs RESTful resilientes.",
                type: "work",
            },
            {
                period: "Oct. 2025 – Ene. 2026",
                title: "Desarrollador Junior",
                organization: "Meterbee SpA",
                description: "Implementación de plataforma FullStack con Python (Frappe/Jinja3), despliegue en Ubuntu/DigitalOcean, GitLab CI/CD y procesamiento OCR.",
                type: "work",
            },
            {
                period: "7 de Agosto, 2026",
                title: "Defensa de Memoria y Titulación Oficial",
                organization: "Universidad Técnica Federico Santa María (UTFSM)",
                description: "Defensa exitosa de la memoria de título sobre Dark Patterns (Antipatrón), obteniendo oficialmente el título de Ingeniero Civil Informático.",
                type: "graduation",
            },
        ],
        title: "Mi Trayectoria",
        subtitle: "Un recorrido completo por mi formación académica, trayectoria profesional y perspectiva de ingeniería.",
        cards: [
            {
                title: "Educación y Antecedentes",
                text: "Desde pequeño he tenido una relación cercana con la tecnología, especialmente con los videojuegos. A los 6 años mis padres me regalaron una PS1, y a los 9 tuve mi primera computadora de escritorio (de esas con monitores CRT pesados). Naturalmente, esto despertó en mí una profunda curiosidad por entender cómo funcionan las computadoras por dentro. Esa pasión me llevó a estudiar y graduarme como Ingeniero Civil Informático en la Universidad Técnica Federico Santa María, una de las universidades de ingeniería más prestigiosas del país.",
                image: "/images/about/card-retro-pc.jpg",
            },
            {
                title: "Trabajo y Experiencia",
                text: "Actualmente busco dar el siguiente paso en mi carrera profesional. He colaborado en múltiples proyectos que impactan directamente a personas y organizaciones, enfocándome en entregar soluciones simples, robustas y directas con una rigurosa disciplina de ingeniería.",
                image: "/images/about/card-tie.jpg",
            },
            {
                title: "Aspiraciones y Metas",
                text: "El futuro de la programación es emocionante. El auge de la IA presenta nuevos desafíos, pero también desbloquea increíbles posibilidades y descubrimientos. Ahora más que nunca, contar con fundamentos sólidos y profundos en ingeniería de software es fundamental.",
                image: "/images/about/card-ai-triangle-v2.jpg",
            },
        ],
    },
    skillsData: {
        title: "Habilidades",
        subtitle: "Un conjunto de herramientas desarrollado a lo largo de la ingeniería de software, sistemas y desarrollo full-stack.",
        categories: [
            {
                title: "Lenguajes y Core",
                skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "Bash / Shell", "HTML / CSS"],
            },
            {
                title: "FullStack y Frameworks",
                skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "DaisyUI", "Frappe Framework", "Jinja3", "Framer Motion"],
            },
            {
                title: "Sistemas, Cloud y DevOps",
                skills: ["Linux CLI", "Docker", "GitHub & GitLab CI/CD", "DigitalOcean", "AWS", "Google Cloud (GCP)"],
            },
            {
                title: "Bases de Datos, Observabilidad y Prácticas",
                skills: ["PostgreSQL", "InfluxDB", "Grafana", "MongoDB", "SQLite", "APIs RESTful", "Agile / Scrum (Scrum Master)", "Diseño Orientado a Objetos (POO)"],
            },
        ],
    },
    projectsData: {
        title: "Proyectos",
        subtitle: "Trabajos destacados en ingeniería de software, machine learning y optimización de sistemas.",
        projects: [
            {
                name: "Antipatrón: Juego Narrativo sobre Dark Patterns",
                role: "Proyecto de Memoria de Título (2025 – 2026)",
                description: "Un juego web narrativo interactivo FullStack diseñado para educar y evaluar la percepción del usuario sobre patrones de diseño engañosos (Dark Patterns) en UI/UX. Cuenta con una arquitectura de componentes modular, un motor de diálogo dinámico con animaciones en Framer Motion y telemetría en base de datos relacional con PostgreSQL.",
                technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel Postgres"],
                image: "/images/projects/project-antipatron.svg",
                codeUrl: "https://github.com/RealPingu/proyecto-memoria",
                demoUrl: "https://proyecto-memoria-mocha.vercel.app/",
                demoLabel: "Demo en Vivo",
                thesisUrl: "https://repositorio.usm.cl/handle/123456789/78930",
            },
            {
                name: "Refracted Speech: IA en Patologías del Habla",
                role: "Scrum Master y Pipeline de ML (2023 – 2024)",
                description: "Plataforma de detección basada en machine learning diseñada para evaluar la probabilidad de disartria a partir de muestras de voz acústicas grabadas en dispositivos móviles. Coordinación de sprints ágiles y pipelines entre preprocesamiento acústico, extracción de características y modelos de clasificación.",
                technologies: ["Python", "Machine Learning", "Preprocesamiento Acústico", "Agile / Scrum", "Pipelines de Datos"],
                image: "/images/projects/project-speech.svg",
                codeUrl: "https://github.com/RealPingu/RefractedSpeech-ProductPage",
                demoUrl: "https://refracted-speech.feriadesoftware.cl/",
                demoLabel: "Sitio Oficial",
            },
            {
                name: "IVNeovimConfig: Mi configuración de trabajo",
                role: "Herramientas de Desarrollo y Configuración (2025 – 2026)",
                description: "Configuración personalizada para el uso diario de Neovim construida para Neovim 0.12+ y WSL2. Destaca por gestión nativa de paquetes sin sobrecarga de administradores de plugins, integración automatizada con Wallpaper Engine para mostrar fondos animados a través de una terminal transparente y un entorno opcional de VimTeX.",
                technologies: ["Lua", "Neovim", "WSL2", "LSP", "Treesitter", "Bash"],
                image: "/images/projects/project-neovim.svg",
                codeUrl: "https://github.com/RealPingu/IVNeovimConfig",
                demoUrl: "",
            },
            {
                name: "Optimización de Entregas con Camión y Drones (k-MVDRP)",
                role: "Ingeniería Algorítmica (2024)",
                description: "Algoritmos de optimización combinatoria y búsqueda heurística en C++ para resolver el problema de ruteo coordinado de camión y flota de drones (k-MVDRP / mFSTSP). Modela capacidad de carga útil multi-paquete, sincronización de despegue y aterrizaje desacoplada y minimización del tiempo total de misión (makespan).",
                technologies: ["C++17", "Optimización Combinatoria", "Búsqueda Heurística", "POO", "Estructuras de Datos"],
                image: "/images/projects/project-drone.svg",
                codeUrl: "https://github.com/RealPingu/Proyecto-IA-2024",
                demoUrl: "",
            },
        ],
    },
    contactData: {
        title: "Contáctame",
        subtitle: "Ya sea que tengas una oportunidad laboral, un proyecto para colaborar o simplemente quieras conectar, no dudes en escribirme.",
        cards: [
            {
                title: "Oportunidades Laborales",
                text: "Estoy abierto a discutir roles de ingeniería de software a tiempo completo y colaboraciones. Con mi sólida formación en sistemas, desarrollo web y optimización algorítmica, me interesan roles que aborden desafíos emocionantes y significativos.",
            },
            {
                title: "Construir Algo Juntos",
                text: "Me apasiona diseñar e implementar soluciones de software robustas desde la idea hasta el despliegue. Si tienes una idea innovadora, un sistema que optimizar o un MVP que construir, creemos algo genial juntos.",
            },
            {
                title: "Conectar y Conversar",
                text: "Siempre tengo entusiasmo por intercambiar ideas con otros ingenieros, investigadores y apasionados de la tecnología. ¡Conectemos en LinkedIn o por correo electrónico!",
            },
        ],
        banner: {
            title: "¿Te interesa mi perfil?",
            subtitle: "Elige el canal de comunicación que prefieras.",
        },
        links: [
            {
                label: "Escríbeme",
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
    scrollIndicatorLabel: "Desplazarse a la sección Sobre mí",
};
