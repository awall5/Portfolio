import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Discovery",
    description: "Understanding goals and requirements.",
  },
  {
    id: "02",
    title: "Design",
    description: "Creating intuitive visual systems.",
  },
  {
    id: "03",
    title: "Build",
    description: "Writing clean, efficient code.",
  },
  {
    id: "04",
    title: "Launch",
    description: "Deploying to the world.",
  }
];

const Process = () => {
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
    <section id="process" className="py-32 relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Process
          </h2>
          <div className="h-[1px] w-full bg-white/10"></div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={item}
              className="relative group"
            >
              <span className="text-6xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300 absolute -top-8 -left-4 -z-10">
                {step.id}
              </span>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
