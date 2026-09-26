// app/components/Contact/contact-actions.tsx
'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/app/context/language-context';

export default function ContactActions() {
    const { lang, t } = useLanguage();
    const { contactData } = t;
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent, email: string) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center sm:justify-end">
            {contactData.links.map((link, idx) => {
                if (link.icon === 'email') {
                    const rawEmail = link.href.replace('mailto:', '');

                    return (
                        <div key={idx} className="inline-flex items-stretch shrink-0 w-full sm:w-auto">
                            {/* Primary Action: Direct Mail Client */}
                            <a
                                href={link.href}
                                className="btn btn-secondary btn-sm sm:btn-md rounded-r-none border-r-0 gap-2 shadow-sm flex-1 sm:flex-initial justify-center"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                {link.label}
                            </a>

                            {/* Dropdown Toggle: Copy Email */}
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-secondary btn-sm sm:btn-md rounded-l-none border-l border-secondary-content/20 px-2 sm:px-2.5 shadow-sm"
                                    aria-label="Email options"
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
                                    className="dropdown-content z-50 mt-1 w-52 p-1.5 bg-base-200 border border-base-300 rounded-box shadow-xl space-y-1.5"
                                >
                                    <li>
                                        <button
                                            type="button"
                                            onClick={(e) => handleCopyEmail(e, rawEmail)}
                                            className="w-full flex items-center justify-between text-xs sm:text-sm font-semibold py-2 px-3.5 rounded-full border border-base-300 bg-base-100 hover:bg-secondary hover:text-secondary-content hover:border-secondary transition-all text-base-content shadow-2xs"
                                        >
                                            <span>
                                                {copied
                                                    ? (lang === 'en' ? 'Copied!' : '¡Copiado!')
                                                    : (lang === 'en' ? 'Copy Email' : 'Copiar Correo')}
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 shrink-0 ml-1.5 opacity-75"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                {copied ? (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                                ) : (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                )}
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    );
                }

                if (link.icon === 'linkedin') {
                    return (
                        <a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-neutral btn-sm sm:btn-md gap-2 shadow-sm w-full sm:w-auto justify-center"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            {link.label}
                        </a>
                    );
                }

                if (link.icon === 'github') {
                    return (
                        <a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-sm sm:btn-md gap-2 shadow-sm w-full sm:w-auto justify-center"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                />
                            </svg>
                            {link.label}
                        </a>
                    );
                }

                return null;
            })}
        </div>
    );
}
