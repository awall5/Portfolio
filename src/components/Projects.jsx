import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects as dataProjects } from '../data';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  // Map resume projects to the display shape used by this component
  const projects = dataProjects.map((p, i) => {
    const id = String(i + 1).padStart(2, '0');
    const title = p.title;
    const description = p.description || '';
    const tech = p.techStack || [];
    const category = tech[0] || 'Web App';
    // extract year from period if possible
    let year = '';
    if (p.period) {
      const m = p.period.match(/(20\d{2}|\d{4})/);
      year = m ? m[0] : '';
    }

    // choose a sensible preview image per project (fallback to generic unsplash)
    let image = '';
    if (p.url && p.url.includes('blooddonation')) image = 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?fit=crop&w=1200&h=800';
    else if (p.title.toLowerCase().includes('food')) image = 'https://images.unsplash.com/photo-1540420773422-74f02b6b9b40?fit=crop&w=1200&h=800';
    else if (p.title.toLowerCase().includes('weather')) image = 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?fit=crop&w=1200&h=800';
    else if (p.title.toLowerCase().includes('laptop')) image = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?fit=crop&w=1200&h=800';
    else image = p.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=1200&h=800';

    return {
      id,
      title,
      category,
      year,
      image,
      tech,
      description,
      url: p.url || '#',
    };
  });

  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const listItem = {
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
    <section id="projects" className="py-32 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex items-end justify-between border-b border-white/10 pb-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Selected Works
            </h2>
            <p className="text-gray-400 text-lg max-w-md font-light">
              A collection of projects that define my journey in digital product creation.
            </p>
          </div>
          <span className="text-gray-500 font-mono hidden md:block">
            (0{projects.length})
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sticky Image Preview (Desktop) */}
          <div className="hidden lg:block w-1/2 relative">
            <div className="sticky top-32 h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoveredIndex}
                  src={projects[hoveredIndex].image}
                  alt={projects[hoveredIndex].title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-gray-400 mb-2 font-mono">{projects[hoveredIndex].category}</p>
                    <p className="text-white text-lg font-light max-w-md">{projects[hoveredIndex].description}</p>
                  </div>
                  <div className="flex gap-2">
                    {projects[hoveredIndex].tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs text-white border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project List */}
          <motion.div 
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={listItem}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`group py-12 border-b border-white/10 cursor-pointer transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="text-sm font-mono text-gray-500 pt-2">
                    {project.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <div className="lg:hidden mb-6 rounded-xl overflow-hidden h-64 w-full">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-light">{project.category}</span>
                      <span className="text-gray-500 font-mono text-sm">{project.year}</span>
                    </div>
                  </div>
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="text-white" size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
