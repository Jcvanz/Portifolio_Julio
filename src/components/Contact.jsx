import React, { useState } from 'react';
import { MessageSquare, Mail, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const LinkedinIcon = ({ className = "w-8 h-8 text-blue-400" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const WhatsAppIcon = ({ className = "w-8 h-8 text-green-400" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  // Função para copiar o e-mail com feedback visual temporário
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <section id="contact" className="w-full relative z-10 py-24 bg-slate-900/30 border-t border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="flex items-center gap-3 mb-12 justify-center">
          <div className="h-px bg-gradient-to-l from-cyan-500/50 to-transparent flex-1 mr-4 max-w-xs hidden sm:block"></div>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
          <h3 className="text-white text-2xl md:text-3xl font-mono uppercase tracking-widest text-center">
            Vamos <span className="text-cyan-400 font-bold">Conversar?</span>
          </h3>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
          <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1 ml-4 max-w-xs hidden sm:block"></div>
        </div>

        <p className="text-center text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto font-light">
          Sinta-se à vontade para entrar em contato para conversarmos sobre tecnologia, desenvolvimento ou oportunidades de trabalho. Estou sempre aberto a novas conexões.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          <a
            href={`https://wa.me/${personalInfo.phone}?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center transform hover:-translate-y-2 cursor-pointer"
          >
            <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors duration-500 rounded-2xl pointer-events-none"></div>
            <div className="w-16 h-16 mb-6 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300">
              <WhatsAppIcon className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-white font-bold text-xl mb-2">WhatsApp</h4>
            <p className="text-gray-400 text-sm">Me mande uma mensagem direta</p>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center transform hover:-translate-y-2 cursor-pointer"
          >
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500 rounded-2xl pointer-events-none"></div>
            <div className="w-16 h-16 mb-6 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
              <LinkedinIcon className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-white font-bold text-xl mb-2">LinkedIn</h4>
            <p className="text-gray-400 text-sm">Vamos nos conectar</p>
          </a>

          <button
            onClick={handleCopyEmail}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center transform hover:-translate-y-2 cursor-pointer w-full focus:outline-none"
          >
            <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-500 rounded-2xl pointer-events-none"></div>
            
            <div className="w-16 h-16 mb-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300">
              {copied ? (
                <Check className="w-8 h-8 text-green-400 animate-in zoom-in-50 duration-200" />
              ) : (
                <Mail className="w-8 h-8 text-cyan-400" />
              )}
            </div>
            
            <h4 className="text-white font-bold text-xl mb-2">
              {copied ? 'E-mail Copiado!' : 'E-mail'}
            </h4>
            <p className="text-gray-400 text-sm">
              {copied ? personalInfo.email : 'Clique para copiar endereço'}
            </p>
          </button>

        </div>
      </div>
    </section>
  );
};
