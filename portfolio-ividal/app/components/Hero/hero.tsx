// app/components/Hero/hero.tsx                                                        
'use client';

import { heroData } from '@/app/data/content';
import Portrait from '@/app/components/Hero/portrait';

export default function Hero() {
    return (
        <section id="hero" className="flex flex-col-reverse md:flex-row items-center   
  justify-between gap-12 py-5 px-5">

            {/* Left Column: Text */}
            <div className="flex-1 flex flex-col gap-3 text-center md:text-left">
                <div>
                    <span className="text-lg opacity-75">{heroData.greeting}</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-1  
  text-base-content">
                        {heroData.name}
                    </h1>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
                        {heroData.degrees.map((role, idx) => (
                            <span key={idx} className="badge badge-info badge-      
  outline text-xs md:text-sm">
                                {role}
                            </span>
                        ))}
                    </div>
                </div>

                <p className="mt-0 text-base-content/80 max-w-lg leading-relaxed text-base  
  md:text-lg">
                    {heroData.about}
                </p>

                <div className="flex gap-4 justify-center md:justify-start">
                    <a href={heroData.buttons.getResume.href} className="btn btn-        
  primary">
                        {heroData.buttons.getResume.label}
                    </a>
                </div>
            </div>

            {/* Right Column: Portrait */}
            <div className="shrink-0">
                <Portrait src={heroData.portrait} alt={heroData.name} />
            </div>

        </section>
    );
}

