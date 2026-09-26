// app/components/Hero/scroll-indicator.tsx
'use client';

import React from 'react';
import { useLanguage } from '@/app/context/language-context';

export default function ScrollIndicator() {
    const { t } = useLanguage();

    return (
        <a
            href="#about"
            aria-label={t.scrollIndicatorLabel}
            className="group flex flex-col items-center gap-1.5 text-base-content/50 hover:text-base-content transition-colors duration-300 cursor-pointer pt-6 md:pt-4"
        >
            {/* Mouse contour */}
            <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5 transition-colors">
                <span className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>

            {/* Down arrow */}
            <svg
                className="w-4 h-4 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </a>
    );
}
