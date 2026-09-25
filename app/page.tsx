'use client';

import Hero from './components/Hero/hero';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
        </>
    )
}
