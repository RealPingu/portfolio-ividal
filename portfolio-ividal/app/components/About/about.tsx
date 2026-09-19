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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {aboutData.cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="card bg-base-200 shadow-sm border border-base-300 overflow-hidden hover:shadow-md transition-all duration-300"
                    >
                        {/* Image slot (empty placeholder for now) */}
                        <figure className="h-48 bg-base-300/60 flex items-center justify-center">
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

                        {/* Card Body */}
                        <div className="card-body p-6 space-y-2">
                            <h2 className="card-title text-xl font-bold text-base-content">
                                {card.title}
                            </h2>
                            <p className="text-base-content/80 text-sm md:text-base leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
