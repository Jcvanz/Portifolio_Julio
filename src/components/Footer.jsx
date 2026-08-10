import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 relative z-10 w-full flex justify-center py-10 border-t border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-gray-400 text-sm text-center font-mono">
          Desenvolvido por <span className="text-cyan-400 font-semibold">{personalInfo.name}</span> &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
