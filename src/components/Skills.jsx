import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import { Code, Database, Layout, Terminal } from 'lucide-react';

const Skills = () => {
  const categories = [
    { title: 'Languages', icon: Code, items: skills.languages },
    { title: 'Web Development', icon: Layout, items: skills.web },
    { title: 'Tools & Platforms', icon: Database, items: skills.tools },
    { title: 'Soft Skills', icon: Terminal, items: skills.softSkills },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Expertise
          </h2>
          <div className="h-[1px] w-full bg-white/10"></div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group border border-white/10 p-8 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <category.icon size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-white/10 text-gray-400 text-sm rounded-full font-light"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
