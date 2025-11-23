import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Hexagon, GitMerge, Activity } from 'lucide-react';

const BentoCard: React.FC<{ 
    title: string; 
    desc: string; 
    icon?: React.ReactNode; 
    className?: string;
    delay?: number;
    highlight?: boolean;
}> = ({ title, desc, icon, className, delay = 0, highlight = false }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`bg-bg-secondary p-8 rounded-3xl flex flex-col justify-between overflow-hidden relative group transition-colors duration-500 hover:bg-[#252527] ${className}`}
  >
    <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4 text-text-secondary">
             {icon && <span className={`${highlight ? 'text-white' : 'text-text-secondary'}`}>{icon}</span>}
             <h3 className={`text-sm font-semibold uppercase tracking-wider ${highlight ? 'text-accent-purple' : ''}`}>Theory</h3>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">{title}</h2>
        <p className="text-text-secondary text-lg font-medium leading-relaxed">{desc}</p>
    </div>
    
    {highlight && (
         <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-purple/20 blur-[80px] rounded-full pointer-events-none" />
    )}
  </motion.div>
);

const TheorySection: React.FC = () => {
  return (
    <section id="theory" className="py-32 bg-bg px-4">
      <div className="container mx-auto max-w-[980px]">
        
        <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            One Universe.<br/>One Observer.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-text-secondary font-medium max-w-2xl leading-relaxed"
          >
             The solution to the Fermi Paradox isn't distance. It's existence. The "Cosmic Bubble" structure permits only a single advanced observer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Feature */}
            <BentoCard 
                title="The Observer Bubble"
                desc="Our universe is an independent bubble born from quantum vacuum fluctuations. Monte Carlo simulations suggest the probability of two simultaneous technical civilizations is less than 0.3%."
                icon={<Hexagon />}
                className="md:col-span-2 min-h-[400px]"
                highlight={true}
                delay={0.2}
            />

            <BentoCard 
                title="Cognitive Center"
                desc="Not a physical center, but a relational one. The observer constructs the universe through the act of observation."
                icon={<Activity />}
                delay={0.3}
            />

            <BentoCard 
                title="Participatory Genesis"
                desc="We don't just find the universe; we 'download' pre-existing historical paths through conscious quantum measurement."
                icon={<GitMerge />}
                delay={0.4}
            />
            
             <BentoCard 
                title="Fermi's Answer"
                desc="Why is it silent out there? Because the stage spotlight is physically limited to one actor. We are the collapse mechanism for this reality."
                icon={<Eye />}
                className="md:col-span-2 bg-[#151516]"
                delay={0.5}
            />
        </div>
      </div>
    </section>
  );
};

export default TheorySection;