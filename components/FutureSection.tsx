import React from 'react';
import { motion } from 'framer-motion';

const FutureSection: React.FC = () => {
  return (
    <section id="future" className="py-32 bg-bg px-4">
      <div className="container mx-auto max-w-[980px]">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Future of Civilization</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                As the sole advanced observer, our survival determines the certainty of cosmic history.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
                 { title: "Cognitive Revolution", desc: "Shift from Earth-centric to Cognition-centric. Enhancing C_conscious through quantum training." },
                 { title: "Tech Convergence", desc: "Quantum-enhanced BCI using SQUID sensors to capture microtubule signals." },
                 { title: "Cosmic Responsibility", desc: "Establishing the 'Observer Ethics Alliance' to protect vacuum stability." }
             ].map((item, index) => (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-bg-secondary hover:bg-[#252527] transition-colors"
                 >
                     <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                     <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                 </motion.div>
             ))}
        </div>

        <div className="mt-32 text-center">
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.alert('Connection protocol initiated.')}
                className="bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
                Join the Network
            </motion.button>
            <p className="mt-6 text-xs text-text-secondary tracking-wide">
                SECURE CHANNEL: QCRF_V1.0
            </p>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;