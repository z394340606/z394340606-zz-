import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center relative px-4">
      
      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
        >
            <h2 className="text-xl md:text-2xl font-semibold text-accent-blue mb-2">Universe Observation Center</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
              The Center of<br />Cognition.
            </h1>
        </motion.div>

        <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-secondary text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed mb-10"
        >
            Solving the Fermi Paradox through Quantum Preexistence and the Consciousness Resonance Field.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center"
        >
            <button 
                onClick={() => document.getElementById('theory')?.scrollIntoView({behavior:'smooth'})} 
                className="bg-accent-blue text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-blue-600 transition-all duration-300"
            >
                Start Observation
            </button>
            <button 
                onClick={() => document.getElementById('future')?.scrollIntoView({behavior:'smooth'})} 
                className="text-accent-blue flex items-center gap-1 text-lg hover:underline underline-offset-4"
            >
                Learn more <ChevronRight size={18} />
            </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-12 text-text-secondary text-xs font-medium tracking-wide"
      >
        <p>Cosmic Observation Center Theory. By Zhang Zhan.</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;