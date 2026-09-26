// app/components/Contact/contact.tsx
'use client';

import React from 'react';
import { useLanguage } from '@/app/context/language-context';
import Section from '@/app/components/UI/section';
import ContactActions from '@/app/components/Contact/contact-actions';

export default function Contact() {
    const { t } = useLanguage();
    const { contactData } = t;

    return (
        <Section id="contact" className="flex-col gap-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-base-content">
                    {contactData.title}
                </h2>
                <p className="text-base-content/80 text-base sm:text-lg">
                    {contactData.subtitle}
                </p>
            </div>

            {/* Prompt Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {contactData.cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="card bg-base-200 border border-base-300/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-box p-6 flex flex-col justify-between"
                    >
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-base-content">
                                {card.title}
                            </h3>
                            <p className="text-sm sm:text-base text-base-content/75 leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Direct Connect Banner */}
            <div className="w-full bg-base-200/70 border border-base-300 rounded-box p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-base-content">
                        {contactData.banner.title}
                    </h3>
                    <p className="text-sm text-base-content/70 mt-1">
                        {contactData.banner.subtitle}
                    </p>
                </div>

                <ContactActions />
            </div>
        </Section>
    );
}
