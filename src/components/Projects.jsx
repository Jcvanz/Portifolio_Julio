import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="w-full relative py-24 bg-slate-950/60 border-t border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="flex items-center gap-3 mb-16 justify-center">
            <div className="h-px bg-gradient-to-l from-cyan-500/50 to-transparent flex-1 mr-4 max-w-xs hidden sm:block"></div>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
            <h3 className="text-white text-2xl md:text-3xl font-mono uppercase tracking-widest text-center">
              Meus <span className="text-cyan-400 font-bold">Projetos</span>
            </h3>
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-1 ml-4 max-w-xs hidden sm:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group relative w-full h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-cyan-500/50 shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] bg-slate-900/60 transition-all duration-500 flex flex-col justify-end p-6"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent group-hover:via-slate-950/80 transition-all duration-500"></div>

                <div className="relative z-10 space-y-3">
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors drop-shadow-md">
                    {project.title}
                  </h4>

                  <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed opacity-90">
                    {project.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-cyan-400 text-xs font-bold hover:text-cyan-300 cursor-pointer flex items-center gap-1 transition-colors pt-1"
                  >
                    <span>Ler mais</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono text-cyan-200 bg-cyan-950/60 border border-cyan-500/30 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-gray-400 bg-white/5 rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-400 transition-all duration-500 pointer-events-none"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-blue-500/0 group-hover:border-blue-400 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 font-mono tracking-widest hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] group"
            >
              <span>Explorar Repositórios</span>
              <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

        </div>

      </section>
      {/* Modal de Detalhes do Projeto */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};
