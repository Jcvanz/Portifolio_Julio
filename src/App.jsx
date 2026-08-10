import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoreStacks } from './components/CoreStacks';
import { AboutRadar } from './components/AboutRadar';
import { Experience } from './components/Experience';
import { GithubMatrix } from './components/GithubMatrix';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white overflow-x-hidden relative selection:bg-cyan-500 selection:text-slate-950">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none z-0"></div>

      <ParticleCanvas />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <CoreStacks />
          <AboutRadar />
          <Experience />
          <GithubMatrix />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
