import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Layout, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Design",
      description: "Crafting intuitive interfaces that delight users.",
    },
    {
      icon: Code,
      title: "Development",
      description: "Building robust and scalable web applications.",
    },
    {
      icon: Layout,
      title: "Strategy",
      description: "Planning digital products for maximum impact.",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Optimizing experiences for every device.",
    }
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
    <section id="services" className="py-32 relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
            >
              <div className="mb-6 text-gray-400 group-hover:text-white transition-colors duration-300">
                <service.icon size={32} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
