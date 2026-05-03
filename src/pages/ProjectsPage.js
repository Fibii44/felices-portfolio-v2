import React from 'react';
import { Rocket } from 'lucide-react';
import { ExpandableCard } from '../components/ExpandableCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../lib/projects';

const ProjectsPage = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="mt-24 py-24 mx-4 md:mx-10 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-cosmic-500/10 rounded-full blur-[100px]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 inline-flex items-center">
          <span className="font-pixel text-sm uppercase tracking-[0.2em] text-slate-200">Featured Projects</span>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ExpandableCard 
                title={project.title}
                src={project.src}
                description={project.tags.join(' • ')}
                className="cursor-target bg-white/[0.03] border border-white/20 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="flex flex-col gap-4 font-sans text-left mt-2">
                  <p className="text-slate-300 text-sm leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-nebula-500/10 text-nebula-400 border border-nebula-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="inline-flex items-center gap-2 rounded-full border border-cosmic-400/40 bg-cosmic-500/15 px-6 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-cosmic-300 hover:bg-cosmic-500/25 hover:shadow-[0_0_30px_rgba(244,114,182,0.22)] self-start mt-6 font-pixel"
                  >
                    <Rocket size={14} /> View Details
                  </Link>
                </div>
              </ExpandableCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;

