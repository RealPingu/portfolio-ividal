'use client';
import { aboutData } from "@/app/data/content";
import Section from "@/app/components/UI/section";

export default function About() {
    return (
        <Section id="about" className="space-y-12">
            <div className="text-center  max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
                    {aboutData.title}
                </h2>
                <p className="text-base-content/70 text-base md:text-lg">
                    {aboutData.subtitle}
                </p>
            </div>
            {/* Single-Column Alternating Cards */}
            <div className="flex flex-col gap-8 max-w-5xl mx-auto w-full">
                {aboutData.cards.map((card, idx) => {
                    const isReversed = idx % 2 === 1;

                    return (
                        <div
                            key={idx}
                            className={`card lg:card-side bg-base-200 shadow-sm border border-base-300 overflow-hidden hover:shadow-md transition-all duration-300 ${
                                isReversed ? 'lg:flex-row-reverse' : ''
                            }`}
                        >
                            {/* 1. Image slot */}
                            <figure className="lg:w-1/3 min-h-48 lg:min-h-full bg-base-300/60 flex items-center justify-center shrink-0">
                                {card.image ? (
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-sm opacity-40 italic">
                                        [ Image space ]
                                    </span>
                                )}
                            </figure>

                            {/* 2. Card Body */}
                            <div className="card-body lg:w-2/3 p-6 lg:p-8 justify-center space-y-2">
                                <h2 className="card-title text-xl lg:text-2xl font-bold text-base-content">
                                    {card.title}
                                </h2>
                                <p className="text-base-content/80 text-sm md:text-base leading-relaxed">
                                    {card.text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
