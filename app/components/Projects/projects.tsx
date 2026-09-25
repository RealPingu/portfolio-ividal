'use client';
import { projectsData } from '@/app/data/content';
import Section from '@/app/components/UI/section';
import ProjectActions from './project-actions';

export default function Projects() {
    return (
        <Section id="projects" className="space-y-12">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
                    {projectsData.title}
                </h2>
                <p className="text-base-content/70 text-base md:text-lg mt-2">
                    {projectsData.subtitle}
                </p>
            </div>

            {/* Projects List */}
            <div className="flex flex-col gap-8 max-w-5xl mx-auto w-full">
                {projectsData.projects.map((project, idx) => {
                    const isReversed = idx % 2 === 1;

                    return (
                        <div
                            key={idx}
                            className={`card md:card-side bg-base-200 shadow-sm border border-base-300 overflow-hidden hover:shadow-md transition-all duration-300 ${
                                isReversed ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Project Visual */}
                            <figure className="w-full md:w-2/5 lg:w-1/3 aspect-video md:aspect-auto bg-base-300/60 flex items-center justify-center shrink-0 overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover object-center"
                                    />
                                ) : (
                                    <span className="text-sm opacity-40 italic">
                                        [ Project Preview ]
                                    </span>
                                )}
                            </figure>

                            {/* Project Details */}
                            <div className="card-body flex-1 p-6 lg:p-8 space-y-3 justify-center">
                                <div>
                                    <span className="badge badge-accent badge-sm font-semibold mb-2">
                                        {project.role}
                                    </span>
                                    <h3 className="card-title text-xl lg:text-2xl font-bold text-base-content">
                                        {project.name}
                                    </h3>
                                </div>

                                <p className="text-base-content/80 text-sm md:text-base leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech stack tags */}
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {project.technologies.map((tech, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="badge badge-sm bg-base-100 border-base-300 text-base-content text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Extracted Modular Action Buttons */}
                                <ProjectActions
                                    codeUrl={project.codeUrl}
                                    demoUrl={project.demoUrl}
                                    demoLabel={'demoLabel' in project ? (project.demoLabel as string) : 'Live Demo'}
                                    thesisUrl={'thesisUrl' in project ? (project.thesisUrl as string) : undefined}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
