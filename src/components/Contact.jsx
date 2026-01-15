import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data';

const Contact = () => {
  

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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.12,
      }
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Let's work <br />
              <span className="text-gray-500">together.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-md mb-12">
              Currently available for freelance projects and open to full-time opportunities.
            </p>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {[
                { icon: Mail, href: `mailto:${personalInfo.email}` },
                { icon: Github, href: personalInfo.github },
                { icon: Linkedin, href: personalInfo.linkedin },
                { icon: Twitter, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={item}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
            action="https://formspree.io/f/mgvykqwo"
            method="POST"
          >
            <input type="hidden" name="_next" value="/" />
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider text-gray-500">Name</label>
              <input 
                type="text" 
                name="name"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-white outline-none transition-colors text-lg"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider text-gray-500">Email</label>
              <input 
                type="email" 
                name="email"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-white outline-none transition-colors text-lg"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider text-gray-500">Message</label>
              <textarea 
                rows="4"
                name="message"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-white outline-none transition-colors text-lg resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors mt-8">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
