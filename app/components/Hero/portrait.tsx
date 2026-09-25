'use client';

export default function Portrait({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="aura rounded-full p-1 inline-block">
            <div className="hover-3d rounded-full">
                <figure className="size-80 lg:size-96 rounded-full overflow-hidden shadow-xl">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full"
                    />
                </figure>
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} />
                ))}
            </div>
        </div>
    );
}
