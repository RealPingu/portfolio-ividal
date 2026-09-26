// app/components/About/timeline.tsx
'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/app/context/language-context';
import { TimelineItem } from '@/app/data/types';

export default function CareerTimeline() {
    const { lang, t } = useLanguage();
    const { aboutData } = t;
    const [isExpanded, setIsExpanded] = useState(false);

    if (!aboutData.timeline || aboutData.timeline.length === 0) {
        return null;
    }

    const getItemColors = (type: TimelineItem['type']) => {
        switch (type) {
            case 'graduation':
                return {
                    badgeClass: 'badge-accent',
                    dotClass: 'bg-accent text-accent-content border-accent shadow-accent/20',
                    lineClass: 'bg-accent/40',
                };
            case 'work':
                return {
                    badgeClass: 'badge-success',
                    dotClass: 'bg-success text-success-content border-success shadow-success/20',
                    lineClass: 'bg-success/40',
                };
            case 'education':
            default:
                return {
                    badgeClass: 'badge-info',
                    dotClass: 'bg-info text-info-content border-info shadow-info/20',
                    lineClass: 'bg-info/40',
                };
        }
    };

    const getIcon = (type: TimelineItem['type']) => {
        if (type === 'graduation') {
            return (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 12.5L4.5 11v4.5c0 3.04 3.36 5.5 7.5 5.5s7.5-2.46 7.5-5.5V11L12 14.5z" />
                </svg>
            );
        }
        if (type === 'work') {
            return (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            );
        }
        return (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
        );
    };

    return (
        <div
            onClick={() => setIsExpanded((prev) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsExpanded((prev) => !prev);
                }
            }}
            aria-expanded={isExpanded}
            className={`w-full border-2 rounded-box p-5 sm:p-7 cursor-pointer select-none transition-all duration-200 ${
                isExpanded
                    ? 'bg-base-200/90 border-accent shadow-md ring-2 ring-accent/20'
                    : 'bg-base-200/40 border-base-300 hover:border-accent hover:bg-base-300/60 hover:shadow-lg hover:-translate-y-0.5'
            }`}
        >
            {/* Top Toolbar: Clean Header with Accent Dot */}
            <div className="flex items-center gap-2 border-b border-base-300/70 pb-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block"></span>
                <h3 className="font-bold text-sm sm:text-base text-base-content">
                    {aboutData.timelineTitle || (lang === 'en' ? 'Milestone Timeline' : 'Línea de Hitos')}
                </h3>
            </div>

            {/* Desktop View: Horizontal Track */}
            <div className="hidden lg:grid grid-cols-5 gap-4 relative">
                {/* Horizontal continuous connecting line */}
                <div className="absolute top-6 left-10 right-10 h-0.5 bg-base-300/80 -z-0" />

                {aboutData.timeline.map((item, idx) => {
                    const { badgeClass, dotClass } = getItemColors(item.type);

                    return (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-2 px-1">
                            {/* Top Node Icon */}
                            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-md ${dotClass}`}>
                                {getIcon(item.type)}
                            </div>

                            {/* Period Badge */}
                            <span className={`badge ${badgeClass} text-xs font-semibold py-0.5 px-2.5 h-auto rounded-full whitespace-normal leading-snug`}>
                                {item.period}
                            </span>

                            {/* Title & Organization */}
                            <div className="space-y-0.5 w-full">
                                <h4 className="font-bold text-xs sm:text-sm text-base-content leading-snug">
                                    {item.title}
                                </h4>
                                <p className="text-xs font-medium text-base-content/70">
                                    {item.organization}
                                </p>
                            </div>

                            {/* Collapsible Description */}
                            {isExpanded && (
                                <div className="w-full pt-2 mt-1 border-t border-base-300/60 text-xs text-base-content/80 leading-relaxed text-left">
                                    <p>{item.description}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Mobile / Tablet View: Vertical Timeline */}
            <div className="block lg:hidden">
                <ul className="timeline timeline-vertical timeline-compact">
                    {aboutData.timeline.map((item, idx) => {
                        const { badgeClass, dotClass, lineClass } = getItemColors(item.type);
                        const isLast = idx === aboutData.timeline.length - 1;

                        return (
                            <li key={idx}>
                                {idx > 0 && <hr className={lineClass} />}
                                <div className="timeline-middle">
                                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shadow-xs ${dotClass}`}>
                                        {getIcon(item.type)}
                                    </div>
                                </div>
                                <div className="timeline-end timeline-box bg-base-100 border border-base-300 rounded-box p-3 my-1.5 w-full shadow-2xs space-y-1">
                                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                                        <span className={`badge ${badgeClass} text-xs font-semibold py-0.5 px-2 h-auto rounded-full`}>
                                            {item.period}
                                        </span>
                                        <span className="text-xs font-medium text-base-content/60">
                                            {item.organization}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-sm text-base-content leading-snug">
                                        {item.title}
                                    </h4>

                                    {/* Collapsible Description */}
                                    {isExpanded && (
                                        <div className="pt-2 mt-1 border-t border-base-300 text-xs text-base-content/80 leading-relaxed">
                                            <p>{item.description}</p>
                                        </div>
                                    )}
                                </div>
                                {!isLast && <hr className={lineClass} />}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
