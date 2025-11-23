import React from 'react';
import { motion } from 'framer-motion';

const QuantumSection: React.FC = () => {
  return (
    <section id="quantum" className="py-32 bg-[#050507] relative px-4">
      <div className="container mx-auto max-w-[980px] relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6"
          >
            Quantum & Spirit.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-2xl text-text-secondary max-w-2xl mx-auto"
          >
            The Quantum-Consciousness Resonance Field (QCRF) unifies physics and mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-bg-secondary p-10 rounded-3xl"
            >
                <span className="text-accent-blue font-semibold text-sm mb-4 block">QPT Theory</span>
                <h3 className="text-3xl font-bold text-white mb-4">Quantum Preexistence.</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                    All computational solutions are encoded in the topology of vacuum fluctuations (Ω field) at the birth of the universe. Consciousness "downloads" these paths rather than creating them.
                </p>
            </motion.div>

            <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-bg-secondary p-10 rounded-3xl"
            >
                <span className="text-accent-purple font-semibold text-sm mb-4 block">IQCH Hypothesis</span>
                <h3 className="text-3xl font-bold text-white mb-4">Instantaneous Computing.</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                    Denying the need for evolutionary computation. Through topological resonance of the vacuum ground state, solutions are extracted instantly.
                </p>
            </motion.div>
        </div>

        {/* Equation Display */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          className="bg-bg text-center py-20 border-t border-b border-white/10"
        >
             <p className="text-text-secondary font-medium mb-8 uppercase tracking-widest text-xs">Unified Field Equation</p>
             <div className="text-4xl md:text-6xl font-serif italic text-white font-light tracking-wide opacity-90">
                □ρ - ∇²ρ + λρ³ = k · E<sub className="text-2xl">ent</sub> · C<sub className="text-2xl">con</sub>
             </div>
             <p className="mt-8 text-text-secondary max-w-lg mx-auto">
                Where consciousness coherence (C) directly influences the energy density of the field through quantum entanglement (E).
             </p>
        </motion.div>

      </div>
    </section>
  );
};

export default QuantumSection;