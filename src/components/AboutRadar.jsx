import React from 'react';
import { MapPin } from 'lucide-react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { personalInfo, skillsRadarData } from '../data/portfolioData';

// Registra os plugins necessários do Chart.js
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const AboutRadar = () => {
  // Configuração dos dados do Gráfico Radar
  const data = {
    labels: skillsRadarData.labels,
    datasets: [
      {
        label: 'Proficiência (%)',
        data: skillsRadarData.values,
        backgroundColor: 'rgba(34, 211, 238, 0.25)',
        borderColor: '#22d3ee', 
        borderWidth: 2,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#22d3ee',
        pointRadius: 4,
      },
    ],
  };

  // Opções de personalização visual do Radar Chart para tema Dark
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: '#22d3ee',
        bodyColor: '#fff',
        borderColor: 'rgba(34, 211, 238, 0.3)',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 100,
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: '#cbd5e1',
          font: {
            size: 11,
            family: 'monospace',
          },
        },
        ticks: {
          display: false,
          stepSize: 20,
        },
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16 pt-10 mt-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Coluna Esquerda: Texto de Perfil Profissional */}
        <div className="space-y-6 order-2 lg:order-1">
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl text-white font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Sobre Mim
              </span>
            </h3>
            
            {personalInfo.city && (
              <div className="flex items-center gap-2 text-cyan-400/80 font-mono text-sm">
                <MapPin size={16} />
                <span>{personalInfo.city}, {personalInfo.state}</span>
              </div>
            )}
          </div>
          
          <div className="border-l-2 border-cyan-500/50 pl-5 space-y-4 text-gray-300 leading-relaxed text-base md:text-lg">
            {personalInfo.aboutText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {personalInfo.softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-mono text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.1)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Coluna Direita: Container do Gráfico Radar */}
        <div className="group relative p-8 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-md overflow-hidden hover:border-cyan-500/30 transition-all duration-500 shadow-2xl order-1 lg:order-2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0,transparent_100%)] pointer-events-none"></div>
          
          <h4 className="text-cyan-400 font-mono tracking-widest uppercase mb-1 text-center text-sm">
            Radar de Skills
          </h4>
          <p className="text-gray-500 text-xs text-center mb-6 font-mono">
            Análise de Proficiência Estratégica
          </p>
          
          <div className="w-full max-w-[340px] mx-auto aspect-square relative z-10">
            <Radar data={data} options={options} />
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-[50px] pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};
