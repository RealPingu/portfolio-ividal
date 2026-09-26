// app/components/About/about.tsx
'use client';

import React from 'react';
import { useLanguage } from "@/app/context/language-context";
import Section from "@/app/components/UI/section";

export default function About() {
    const { t } = useLanguage();
    const { aboutData } = t;

    return (
        <Section id="about" className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
                    {aboutData.title}
                </h2>
                <p className="text-base-content/70 text-base md:text-lg mt-2">
                    {aboutData.subtitle}
                </p>
            </div>
            {/* Single-Column Alternating Cards */}
            <div className="flex flex-col gap-8 max-w-5xl mx-auto w-full">
                {aboutData.cards.map((card, idx) => {
                    const isReversed = idx % 2 === 1;

                    return (
                        <div
                            key={idx}
                            className={`card md:card-side bg-base-200 shadow-sm border border-base-300 overflow-hidden hover:shadow-md transition-all duration-300 ${
                                isReversed ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            {/* 1. Image slot */}
                            <figure className="w-full md:w-2/5 lg:w-1/3 aspect-video md:aspect-auto bg-base-300/60 flex items-center justify-center shrink-0 overflow-hidden">
                                {card.image ? (
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                ) : (
                                    <span className="text-sm opacity-40 italic">
                                        [ Image space ]
                                    </span>
                                )}
                            </figure>

                            {/* 2. Card Body */}
                            <div className="card-body flex-1 p-6 lg:p-8 justify-center space-y-2">
                                <h2 className="card-title text-xl lg:text-2xl font-bold text-base-content">
                                    {card.title}
                                </h2>
                                <p className="text-base-content/80 text-sm md:text-base leading-relaxed">
                                    {card.text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
