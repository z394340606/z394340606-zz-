import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '0', progress: 0 },
  { year: '20k', progress: 10 },
  { year: '50k', progress: 25 },
  { year: '100k', progress: 80 },
  { year: '200k', progress: 100 },
];

const MigrationSection: React.FC = () => {
  return (
    <section id="migration" className="py-32 bg-bg px-4 overflow-hidden">
      <div className="container mx-auto max-w-[980px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <div>
            <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8 }}
                 className="relative w-full aspect-square bg-bg-secondary rounded-full flex items-center justify-center mb-10 md:mb-0"
            >
                 {/* Abstract visual for migration */}
                 <div className="absolute inset-4 rounded-full border border-white/5 opacity-50"></div>
                 <div className="absolute inset-12 rounded-full border border-white/5 opacity-50"></div>
                 <div className="absolute inset-24 rounded-full border border-white/5 opacity-50"></div>
                 
                 <div className="w-3/4 h-2/3">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis dataKey="year" hide />
                            <Tooltip 
                                cursor={{stroke: 'rgba(255,255,255,0.1)'}}
                                contentStyle={{ backgroundColor: '#1d1d1f', border: 'none', borderRadius: '8px', color: '#f5f5f7' }}
                            />
                            <Line 
                                type="basis" 
                                dataKey="progress" 
                                stroke="#30d158" 
                                strokeWidth={4}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                    <p className="text-center text-xs text-text-secondary mt-4 font-medium tracking-wide uppercase">Genetic Acceleration Anomaly</p>
                 </div>
            </motion.div>
          </div>

          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Interstellar<br/>Heritage.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary font-medium leading-relaxed mb-8"
            >
              We are not native to Earth. We are the descendants of the initial observers, migrating from the Virgo Supercluster over 10 billion years.
            </motion.p>
            
            <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="space-y-6"
            >
                <div className="border-t border-white/10 pt-6">
                    <h4 className="text-white font-semibold text-lg mb-2">Genetic Evidence</h4>
                    <p className="text-text-secondary">FOXP2 mutations occurred in 500k years versus the expected 10m. This accelerated evolution suggests external intervention.</p>
                </div>
                <div className="border-t border-white/10 pt-6">
                    <h4 className="text-white font-semibold text-lg mb-2">Quantum Encoding</h4>
                    <p className="text-text-secondary">98% of "Junk DNA" contains quantum-encoded information density far exceeding biological necessity.</p>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MigrationSection;