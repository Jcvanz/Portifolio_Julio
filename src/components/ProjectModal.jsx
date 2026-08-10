import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(34,211,238,0.15)] p-6 md:p-8 flex flex-col justify-between z-10 transform animate-in fade-in zoom-in-95 duration-200">
        <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]">
              {project.title}
            </h4>
            <div className="w-10 h-0.5 bg-cyan-400 mt-2 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
          </div>

          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer"
            aria-label="Fechar Modal"
          >
            <X size={18} />
          </button>
        </div>

        {project.image && (
          <div className="w-full h-48 rounded-xl overflow-hidden mb-4 border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex-1 overflow-y-auto mb-6 pr-2 max-h-48 text-gray-300 text-sm leading-relaxed scrollbar-thin">
          <p>{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[11px] font-mono text-cyan-200 bg-cyan-950/60 border border-cyan-500/30 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <a
            href={project.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 font-bold text-sm transition-all shadow-[0_0_12px_rgba(34,211,238,0.15)]"
          >
            Ver Projeto <ExternalLink size={16} />
          </a>

          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-gray-200 cursor-pointer transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
