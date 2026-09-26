// app/components/Hero/hero.tsx                                                        
'use client';

import React from 'react';
import { useLanguage } from '@/app/context/language-context';
import Portrait from '@/app/components/Hero/portrait';
import Section from '@/app/components/UI/section';
import ScrollIndicator from '@/app/components/Hero/scroll-indicator';

export default function Hero() {
    const { t } = useLanguage();
    const { heroData } = t;

    return (
        <Section id="hero" className="flex-col justify-between items-center px-5">
            {/* Main Content (Text + Portrait) */}
            <div className="flex-1 w-full flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-16">
                {/* Left Column: Text */}
                <div className="flex-1 flex flex-col gap-3 text-center md:text-left">
                    <div>
                        <span className="text-lg opacity-75">{heroData.greeting}</span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-1 text-base-content">
                            {heroData.name}
                        </h1>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
                            {heroData.degrees.map((role, idx) => (
                                <span key={idx} className="badge badge-info text-xs md:text-sm">
                                    {role}
                                </span>
                            ))}
                            {heroData.university && (
                                <span className="badge badge-outline text-xs md:text-sm">
                                    {heroData.university}
                                </span>
                            )}
                        </div>
                    </div>

                    <p className="mt-0 text-base-content/80 max-w-lg leading-relaxed text-base md:text-lg">
                        {heroData.about}
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a
                            href={heroData.buttons.getResume.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                        >
                            {heroData.buttons.getResume.label}
                        </a>
                    </div>
                </div>

                {/* Right Column: Portrait */}
                <div className="shrink-0">
                    <Portrait src={heroData.portrait} alt={heroData.name} />
                </div>
            </div>

            {/* Bottom Animated Scroll Indicator */}
            <ScrollIndicator />
        </Section>
    );
}
