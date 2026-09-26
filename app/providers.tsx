// app/providers.tsx
'use client';

import React from 'react';
import { LanguageProvider } from '@/app/context/language-context';
import { ThemeProvider } from '@/app/context/theme-context';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </ThemeProvider>
    );
}
