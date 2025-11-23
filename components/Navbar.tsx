import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', id: 'hero' },
    { name: 'Theory', id: 'theory' },
    { name: 'Migration', id: 'migration' },
    { name: 'Quantum', id: 'quantum' },
    { name: 'Future', id: 'future' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg-secondary/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6 md:px-12 max-w-[980px] h-12 flex justify-between items-center text-xs tracking-wide font-medium text-text-secondary">
          
          <div 
            className="cursor-pointer text-white hover:opacity-80 transition-opacity" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
             <span className="font-semibold text-sm tracking-tight">COSMOS</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-white transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
             <button onClick={() => scrollToSection('theory')} className="bg-white text-black px-3 py-1 rounded-full text-[10px] font-semibold hover:bg-gray-200 transition-colors">
                Read Paper
             </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white">
              <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 z-40 bg-black pt-20 px-6 md:hidden"
            >
                <div className="flex flex-col gap-6 text-xl font-semibold text-text-primary">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="text-left py-2 border-b border-white/10"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;