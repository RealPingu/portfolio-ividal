// app/data/content.ts

import { ContentDictionary, Language } from './types';
import { contentEn } from './content.en';
import { contentEs } from './content.es';

export * from './types';
export { contentEn } from './content.en';
export { contentEs } from './content.es';

export const content: Record<Language, ContentDictionary> = {
    en: contentEn,
    es: contentEs,
};

// Backwards-compatible default exports (English)
export const heroData = content.en.heroData;
export const navData = content.en.navData;
export const aboutData = content.en.aboutData;
export const skillsData = content.en.skillsData;
export const projectsData = content.en.projectsData;
export const contactData = content.en.contactData;
