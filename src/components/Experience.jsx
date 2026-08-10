import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { experiencesData } from '../data/portfolioData';

export const Experience = () => {
  const [activeExpId, setActiveExpId] = useState(experiencesData[0]?.id || 1);

  const activeExp = experiencesData.find((e) => e.id === activeExpId) || experiencesData[0];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 relative z-10">
      
      {/* Cabeçalho da Seção */}
      <div className="flex items-center gap-3 mb-10">
        <Briefcase className="w-7 h-7 text-white" />
        <h3 className="text-white text-xl md:text-2xl font-mono uppercase tracking-widest">
          Experiência <span className="text-cyan-400 font-bold">Profissional</span>
        </h3>
        <div className="h-px bg-gradient-to-r from-gray-500/50 to-transparent flex-1 ml-4"></div>
      </div>

      {/* Abas de Navegação das Empresas */}
      <div className="flex flex-wrap gap-3 mb-8">
        {experiencesData.map((exp) => {
          const isActive = exp.id === activeExpId;
          return (
            <button
              key={exp.id}
              onClick={() => setActiveExpId(exp.id)}
              className={`relative px-5 py-2.5 rounded-xl font-mono text-sm transition-all duration-300 border cursor-pointer ${
                isActive
                  ? 'bg-cyan-500/10 border-cyan-400/50 text-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.15)]'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {isActive && (
                <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              )}
              {exp.empresa}
            </button>
          );
        })}
      </div>

      {/* Conteúdo da Experiência Selecionada */}
      {activeExp && (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          <div className="lg:col-span-2 space-y-4">
            
            {/* Card Principal de Info */}
            <div className="group relative p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/[0.03] transition-colors duration-500 rounded-2xl pointer-events-none"></div>

              <h4 className="text-xl font-bold text-white mb-1 leading-tight">{activeExp.cargo}</h4>

              <p className="text-cyan-400 font-mono text-sm mb-4">{activeExp.empresa}</p>

              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/70"></div>
                <div className="h-px bg-white/10 flex-1"></div>
                <div className="w-1 h-1 rounded-full bg-white/20"></div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-500 font-mono uppercase tracking-wider block">Período</span>
                    <span className="text-white text-sm">{activeExp.periodo}</span>
                  </div>
                </li>

                {activeExp.local && (
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div>
                      <span className="text-xs text-gray-500 font-mono uppercase tracking-wider block">Local</span>
                      <span className="text-white text-sm">{activeExp.local}</span>
                    </div>
                  </li>
                )}

                {activeExp.tipo && (
                  <li className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div>
                      <span className="text-xs text-gray-500 font-mono uppercase tracking-wider block">Modalidade</span>
                      <span className="text-white text-sm">{activeExp.tipo}</span>
                    </div>
                  </li>
                )}
              </ul>
            </div>

            {/* Tecnologias Utilizadas no Cargo */}
            {activeExp.tecnologias && activeExp.tecnologias.length > 0 && (
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-3">Tecnologias</p>
                <div className="flex flex-wrap gap-2">
                  {activeExp.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Coluna Direita: Timeline de Descrição e Atribuições */}
          <div className="lg:col-span-3">
            <div className="relative p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm h-full">
              
              <div className="absolute top-4 right-4 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/40"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400/40"></div>
                <div className="w-2 h-2 rounded-full bg-green-400/40"></div>
              </div>

              <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-5">// principais responsabilidades</p>

              <div className="space-y-4">
                {activeExp.descricao.split('\n').map((line, idx) => (
                  <div key={idx} className="flex gap-3 group/item">
                    <div className="flex flex-col items-center mt-1.5 shrink-0">
                      <div className="w-2 h-2 rounded-full border-2 border-cyan-400/60 group-hover/item:bg-cyan-400 group-hover/item:border-cyan-400 transition-all duration-200"></div>
                      <div className="w-px flex-1 bg-white/10 mt-1"></div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed pb-3 group-hover/item:text-white transition-colors duration-200">
                      {line.trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
