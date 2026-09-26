// app/context/language-context.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { content, ContentDictionary, Language } from '@/app/data/content';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    toggleLang: () => void;
    t: ContentDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Language>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('portfolio_lang') as Language | null;
        if (savedLang === 'en' || savedLang === 'es') {
            setLangState(savedLang);
            document.documentElement.lang = savedLang;
        } else if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('es')) {
            setLangState('es');
            document.documentElement.lang = 'es';
        }
    }, []);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('portfolio_lang', newLang);
        document.documentElement.lang = newLang;
    };

    const toggleLang = () => {
        const nextLang: Language = lang === 'en' ? 'es' : 'en';
        setLang(nextLang);
    };

    const t = content[lang];

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
