'use client';

import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';

export default function Home() {
    return (
        <>
            <main className="container max-w-5xl xl:max-w-6xl mx-auto">
                <Hero />
            </main>
        </>
    )
}
