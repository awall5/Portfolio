import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`mx-auto max-w-2xl glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'bg-black/50 backdrop-blur-xl border-white/10' : 'bg-transparent border-transparent'
          }`}>
            {/* Logo */}
            <a href="#" className="text-sm font-display font-bold text-white tracking-widest uppercase">
              {personalInfo.name.split(' ')[0]}.
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:opacity-90 transition-colors uppercase tracking-wider"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-1"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-32 px-6"
          >
            <div className="flex flex-col gap-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-bold text-white hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-12 flex gap-8">
                <a href={personalInfo.github} className="text-gray-400 hover:text-white"><Github size={24} /></a>
                <a href={personalInfo.linkedin} className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white"><Mail size={24} /></a>
              </div>
              <div className="pt-8">
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
