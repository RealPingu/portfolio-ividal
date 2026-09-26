// app/context/theme-context.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'retro' | 'dim';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('retro');

    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio_theme') as Theme | null;
        if (savedTheme === 'retro' || savedTheme === 'dim') {
            setThemeState(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (typeof window !== 'undefined') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme: Theme = prefersDark ? 'dim' : 'retro';
            setThemeState(initialTheme);
            document.documentElement.setAttribute('data-theme', initialTheme);
        }

        // Listen for OS color scheme preference changes if no manual preference is saved
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('portfolio_theme')) {
                const autoTheme: Theme = e.matches ? 'dim' : 'retro';
                setThemeState(autoTheme);
                document.documentElement.setAttribute('data-theme', autoTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem('portfolio_theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const toggleTheme = () => {
        const nextTheme: Theme = theme === 'retro' ? 'dim' : 'retro';
        setTheme(nextTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
