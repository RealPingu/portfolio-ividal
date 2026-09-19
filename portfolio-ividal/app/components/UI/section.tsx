import React from 'react';

type SectionProps = {
    id: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
    return (
        <section id={id}
            className={`snap-start min-h-[calc(100vh-5rem)] flex flex-col justify-center py-10 ${className}`}
        >
            {children}
        </section>
    )
}
