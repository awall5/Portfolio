import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Globe, Circle } from 'lucide-react';
import profileImg from '../assets/IMG_0828.PNG';
import { personalInfo } from '../data';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const textReveal = {
    hidden: { y: "100%" },
    visible: { 
      y: "0%", 
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      
      {/* Background Grid with Spotlight */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none transition-opacity duration-300"
        style={{
          maskImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      ></div>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[80px]"></div>
      </div>

      {/* Profile Image Background Layer */}
      <div className="absolute right-0 top-0 h-full w-1/2 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        <img 
          src={profileImg} 
          alt="" 
          className="w-full h-full object-cover opacity-60"
          style={{ objectPosition: '50% 15%' }}
        />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 w-full">
        
        {/* Top Metadata */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-start mb-24 w-full border-b border-white/10 pb-8"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-white/20"></div>
            <span className="text-sm font-medium text-gray-400 tracking-widest uppercase">{personalInfo.name}</span>
          </div>

          <div className="hidden md:flex gap-12 text-sm font-medium text-gray-400">
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span>Based in India</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-green-400">Available for work</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h1 className="text-[10vw] leading-[0.9] font-display font-bold tracking-tighter text-white mb-8 relative z-20">
            <div className="overflow-hidden">
              <motion.span variants={textReveal} className="block">
                BUILDING
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span variants={textReveal} className="block">
                DIGITAL VALUE.
              </motion.span>
            </div>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/10 pt-12">
          <div className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed font-light"
            >
              I help brands and agencies create <span className="text-white">high-end digital experiences</span> that are performant, accessible, and designed to convert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <a 
                href="#projects"
                className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-200 transition-all w-fit"
              >
                View Selected Work
                <ArrowDownRight className="group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
