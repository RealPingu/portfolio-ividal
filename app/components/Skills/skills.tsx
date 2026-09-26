// app/components/Skills/skills.tsx
'use client';

import React from 'react';
import { useLanguage } from '@/app/context/language-context';
import Section from '@/app/components/UI/section';

const dotColors = ["bg-success", "bg-secondary", "bg-warning", "bg-info"];

export default function Skills() {
    const { t } = useLanguage();
    const { skillsData } = t;

    return (
        <Section id="skills" className="space-y-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
                    {skillsData.title}
                </h2>
                <p className="text-base-content/70 text-base md:text-lg mt-2">
                    {skillsData.subtitle}
                </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
                {skillsData.categories.map((category, idx) => (
                    <div
                        key={idx}
                        className="card bg-base-200 shadow-sm border border-base-300 p-6 space-y-4 hover:shadow-md transition-all duration-300"
                    >
                        <h3 className="text-lg md:text-xl font-bold text-base-content flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${dotColors[idx % dotColors.length]} inline-block`}></span>
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="badge badge-lg bg-base-100 border-base-300 text-base-content hover:badge-success hover:border-success cursor-default transition-all duration-200 hover:scale-105 px-3.5 py-3 text-sm font-medium shadow-2xs h-auto"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
