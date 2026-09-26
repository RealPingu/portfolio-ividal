// app/components/Navbar/navbar.tsx
'use client';

import React from 'react';
import { useLanguage } from '@/app/context/language-context';
import { useTheme } from '@/app/context/theme-context';

export default function Navbar() {
    const { lang, toggleLang, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="w-full">
            <div className="navbar bg-base-100/90 backdrop-blur-md shadow-xs max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-8 flex-nowrap justify-between">
                {/* Left Side: Hamburger (mobile/tablet) + Brand */}
                <div className="navbar-start flex items-center gap-1 w-auto">
                    {/* Mobile Dropdown (Sections Only) */}
                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost p-1.5 sm:p-2"
                            aria-label="Toggle navigation menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-200 border border-base-300 rounded-box z-50 mt-3 w-48 p-2 shadow-lg space-y-1"
                        >
                            {t.navData.links.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-base-content hover:text-success font-medium py-2"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Brand / Home Link */}
                    <a
                        href="#hero"
                        className="btn btn-ghost text-lg sm:text-xl font-bold tracking-tight text-base-content shrink-0 px-1 sm:px-2"
                    >
                        {t.navData.brand}
                    </a>
                </div>

                {/* Right Side: Desktop Nav Links + Controls (Language, Theme, Resume) */}
                <div className="navbar-end flex items-center gap-1.5 sm:gap-2.5 w-auto flex-nowrap shrink-0">
                    {/* Desktop Section Links (visible on lg+) */}
                    <ul className="menu menu-horizontal px-1 gap-1 hidden lg:flex flex-nowrap whitespace-nowrap">
                        {t.navData.links.map((link, idx) => (
                            <li key={idx}>
                                <a
                                    href={link.href}
                                    className="text-base-content/80 hover:text-base-content hover:bg-base-200 font-medium transition-colors rounded-btn text-sm whitespace-nowrap"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Language Switcher (Always on the right of the navbar) */}
                    <button
                        onClick={toggleLang}
                        className="btn btn-ghost btn-xs sm:btn-sm font-bold text-xs tracking-wider border border-base-300 px-2 sm:px-2.5 rounded-btn hover:border-base-content/30 shrink-0"
                        title={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                        aria-label="Toggle language"
                    >
                        {lang === 'en' ? (
                            <span><strong className="text-success font-black">EN</strong> / ES</span>
                        ) : (
                            <span>EN / <strong className="text-success font-black">ES</strong></span>
                        )}
                    </button>

                    {/* Theme Switcher (Always on the right of the navbar) */}
                    <button
                        onClick={toggleTheme}
                        className="btn btn-ghost btn-xs sm:btn-sm btn-circle border border-base-300 hover:border-base-content/30 text-base-content/80 hover:text-base-content shrink-0"
                        title={theme === 'retro' ? 'Dark theme' : 'Light theme'}
                        aria-label="Toggle theme"
                    >
                        {theme === 'retro' ? (
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2A1 1 0 008 2.36a10.14 10.14 0 1014 11.69 1 1 0 00-.36-1.05z" />
                            </svg>
                        ) : (
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm0-10a1 1 0 001-1V3a1 1 0 00-2 0v1a1 1 0 001 1zm0 14a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm8-8a1 1 0 00-1-1h-1a1 1 0 000 2h1a1 1 0 001-1zM6 12a1 1 0 00-1-1H4a1 1 0 000 2h1a1 1 0 001-1zm11.66-5.66a1 1 0 00-1.41 0l-.71.71a1 1 0 101.41 1.41l.71-.71a1 1 0 000-1.41zm-9.9 9.9a1 1 0 00-1.41 0l-.71.71a1 1 0 101.41 1.41l.71-.71a1 1 0 000-1.41zm9.9 0l-.71-.71a1 1 0 00-1.41 1.41l.71.71a1 1 0 001.41-1.41zm-9.9-9.9l-.71-.71a1 1 0 00-1.41 1.41l.71.71a1 1 0 001.41-1.41z" />
                            </svg>
                        )}
                    </button>

                    {/* Resume / CV Button (Always on the right of the navbar on all screens) */}
                    {t.navData.resumeButton && (
                        <a
                            href={t.navData.resumeButton.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success btn-xs sm:btn-sm font-semibold rounded-btn shrink-0"
                        >
                            {t.navData.resumeButton.label}
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
}
