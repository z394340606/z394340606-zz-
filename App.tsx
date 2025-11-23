import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TheorySection from './components/TheorySection';
import MigrationSection from './components/MigrationSection';
import QuantumSection from './components/QuantumSection';
import FutureSection from './components/FutureSection';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HashRouter>
      <div className="relative min-h-screen bg-bg text-text-primary selection:bg-accent-blue selection:text-white font-sans">
        
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-white/20 origin-left z-50 mix-blend-difference"
          style={{ scaleX }}
        />

        {/* Dynamic Background - Galaxy */}
        <ParticleBackground />
        
        <Navbar />

        <main className="relative z-10">
          <HeroSection />
          <TheorySection />
          <MigrationSection />
          <QuantumSection />
          <FutureSection />
        </main>

        <footer className="relative z-10 bg-bg border-t border-white/5 py-12">
          <div className="container mx-auto px-6 max-w-[980px] text-xs text-text-secondary">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <p className="font-semibold text-white mb-1">Universe Observation Center</p>
                    <p>Theory by Zhang Zhan</p>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
            <p className="mt-8 opacity-50">Copyright © 2025 COSMOS. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </HashRouter>
  );
};

export default App;