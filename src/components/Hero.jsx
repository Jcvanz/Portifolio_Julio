import React from 'react';
import { Code, Download, Rocket, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-8rem)] px-4 md:px-6 pt-28 pb-16 relative z-10">
      
      {/* Coluna Esquerda: Apresentação & Descrição */}
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6 z-10 relative">
        
        <h2 className="text-cyan-400 font-medium tracking-widest uppercase text-xs md:text-sm flex items-center gap-2">
          <span className="w-6 md:w-8 h-px bg-cyan-400"></span>
          {personalInfo.welcomeTitle}
        </h2>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
          Olá, eu sou <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            {personalInfo.name}
          </span>
        </h1>
        
        <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light flex items-center gap-3">
          <Code className="text-cyan-500 w-6 h-6" />
          {personalInfo.profession}
        </h3>
        
        <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed border-l-2 border-cyan-500/50 pl-4">
          {personalInfo.summary}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 md:pt-6 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-8 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:-translate-y-1"
          >
            Entrar em Contato
          </a>
          
          <a
            href={personalInfo.cvUrl}
            download={personalInfo.cvName}
            className="w-full sm:w-auto justify-center px-8 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 bg-white/5 backdrop-blur-sm"
          >
            <Download size={18} />
            Baixar CV
          </a>
        </div>
      </div>

      {/* Coluna Direita: Card Futurista de Status do Sistema */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 relative z-10">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="relative w-80 h-96 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden group hover:border-cyan-500/50 transition-all duration-700 shadow-2xl hover:scale-105">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,1)] animate-scan"></div>
          
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <Rocket className="text-cyan-400 w-6 h-6" />
            </div>
            <div className="text-right">
              <div className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase">System Status</div>
              <div className="text-white text-xs font-semibold flex items-center gap-2 justify-end mt-1 bg-white/5 px-2 py-1 rounded border border-white/5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                Online & Ready
              </div>
            </div>
          </div>
          
          <div className="space-y-3 relative z-10">
            <div className="text-gray-400 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
              <Terminal className="w-4 h-4 text-gray-400" />
              Core Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {personalInfo.systemStatus.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="h-24 w-full border border-white/10 rounded bg-black/60 p-3 font-mono text-[10px] text-green-400/80 overflow-hidden relative shadow-inner">
            <div className="relative z-0 space-y-1">
              <p className="text-gray-400">&gt; root@portfolio:~# init</p>
              <p className="text-gray-500 text-green-400">&gt; Loading skills... [OK]</p>
              <p className="text-gray-500 text-green-400">&gt; Fetching repos... [OK]</p>
              <p className="text-cyan-400">
                &gt; Awaiting connection...<span className="animate-pulse">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
