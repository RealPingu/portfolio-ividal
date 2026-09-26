import React from 'react';

type SectionProps = {
    id: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
    return (
        <section
            id={id}
            className={`min-h-[calc(100vh-5rem)] flex flex-col justify-start py-8 ${className}`}
        >
            {children}
        </section>
    );
}
