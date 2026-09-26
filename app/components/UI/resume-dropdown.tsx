// app/components/UI/resume-dropdown.tsx
'use client';

import React from 'react';
import { useLanguage } from '@/app/context/language-context';

interface ResumeDropdownProps {
    className?: string;
    sizeClassName?: string;
    label?: string;
}

export default function ResumeDropdown({
    className = '',
    sizeClassName = 'btn-xs sm:btn-sm',
    label,
}: ResumeDropdownProps) {
    const { lang, t } = useLanguage();

    const displayLabel = label || t.navData.resumeButton?.label || (lang === 'en' ? 'Resume' : 'CV');
    const activeHref = lang === 'en' ? '/intividal_cv_en.pdf' : '/intividal_cv_es.pdf';

    const enOptionLabel = lang === 'en' ? 'English' : 'Inglés';
    const esOptionLabel = lang === 'en' ? 'Spanish' : 'Español';

    return (
        <div className={`inline-flex items-stretch shrink-0 ${className}`}>
            {/* Primary Action Button (Downloads/Opens CV matching active language) */}
            <a
                href={activeHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-success rounded-r-none border-r-0 font-semibold ${sizeClassName}`}
            >
                {displayLabel}
            </a>

            {/* Dropdown Toggle (Allows selecting EN or ES version explicitly) */}
            <div className="dropdown dropdown-end">
                <div
                    tabIndex={0}
                    role="button"
                    className={`btn btn-success rounded-l-none border-l border-success-content/20 px-1.5 sm:px-2 ${sizeClassName}`}
                    aria-label="Select resume language"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <ul
                    tabIndex={-1}
                    className="dropdown-content z-50 mt-1 w-36 p-1.5 bg-base-200 border border-base-300 rounded-box shadow-xl space-y-1.5"
                >
                    <li>
                        <a
                            href="/intividal_cv_en.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-xs sm:text-sm font-semibold py-2 px-3.5 rounded-full border border-base-300 bg-base-100 hover:bg-success hover:text-success-content hover:border-success transition-all text-base-content text-center shadow-2xs"
                        >
                            {enOptionLabel}
                        </a>
                    </li>
                    <li>
                        <a
                            href="/intividal_cv_es.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-xs sm:text-sm font-semibold py-2 px-3.5 rounded-full border border-base-300 bg-base-100 hover:bg-success hover:text-success-content hover:border-success transition-all text-base-content text-center shadow-2xs"
                        >
                            {esOptionLabel}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
