'use client';
import { navData } from '@/app/data/content';

export default function Navbar() {
    return (
        <header className="w-full">
            <div className="navbar bg-base-100 shadow-sm max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8">
                <div className="navbar-start">
                    {/* Mobile Dropdown */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-200 border border-base-300 rounded-box z-50 mt-3 w-52 p-2 shadow-lg space-y-1"
                        >
                            {navData.links.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} className="text-base-content hover:text-success font-medium">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            {navData.resumeButton && (
                                <li className="pt-2">
                                    <a
                                        href={navData.resumeButton.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-success btn-sm justify-center"
                                    >
                                        {navData.resumeButton.label}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Brand / Home Link */}
                    <a href="#hero" className="btn btn-ghost text-xl font-bold tracking-tight text-base-content">
                        {navData.brand}
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-end hidden lg:flex items-center gap-2">
                    <ul className="menu menu-horizontal px-1 gap-1">
                        {navData.links.map((link, idx) => (
                            <li key={idx}>
                                <a
                                    href={link.href}
                                    className="text-base-content/80 hover:text-base-content hover:bg-base-200 font-medium transition-colors rounded-btn text-sm"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {navData.resumeButton && (
                        <a
                            href={navData.resumeButton.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success btn-sm font-semibold rounded-btn"
                        >
                            {navData.resumeButton.label}
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
}
