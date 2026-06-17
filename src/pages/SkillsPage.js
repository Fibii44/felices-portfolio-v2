import React, { useState } from 'react';
import Shuffle from '../components/Shuffle';
import { motion } from 'framer-motion';
import Marquee from '../components/Marquee';
import PixelCard from '../components/PixelCard';

const experiences = [
  {
    role: "Full Stack Dev",
    company: "ManPro HRMS",
    description: "Implemented core backend structures, optimized queries, and created robust UI flows to facilitate worker performance tracking.",
    skills: ['Laravel', 'PHP', 'React', 'MySQL'],
    color: "from-nebula-400 to-cosmic-400",
    glow: "bg-nebula-500/20",
    border: "group-hover:border-nebula-400/40"
  },
  {
    role: "UI/UX Designer",
    company: "ManPro HRMS",
    description: "Architected interactive mockups and intuitive visual schemas that bridged visual clarity with efficient admin navigation.",
    skills: ['Figma', 'Prototyping', 'User Flows'],
    color: "from-cosmic-400 to-stellar-400",
    glow: "bg-cosmic-500/20",
    border: "group-hover:border-cosmic-400/40"
  },
  {
    role: "QA Tester",
    company: "ManPro HRMS",
    description: "Handled testing across modules, successfully identifying logical errors and ensuring seamless interface stability.",
    skills: ['Manual Testing', 'Unit Tests', 'Bug Tracking'],
    color: "from-stellar-400 to-nebula-400",
    glow: "bg-stellar-500/20",
    border: "group-hover:border-stellar-400/40"
  }
];

const internshipWorks = [
  {
    title: "Formatting Module",
    tags: ["Dev", "PHP", "Laravel"],
    description: "Developed and implemented a robust formatting module for HRMS data processing, ensuring consistency across various system outputs.",
    glow: "bg-nebula-500/20",
    border: "group-hover:border-nebula-400/40"
  },
  {
    title: "UI/UX design of manpro version 3",
    tags: ["Design", "Figma", "UI/UX"],
    description: "Conceptualized and designed the complete interface overhaul for version 3, focusing on user efficiency and modern aesthetics.",
    glow: "bg-cosmic-500/20",
    border: "group-hover:border-cosmic-400/40"
  },
  {
    title: "QA the manpro version 3",
    tags: ["QA", "Testing", "Bug Fix"],
    description: "Conducted extensive quality assurance testing for version 3, identifying critical bugs and ensuring a polished release.",
    glow: "bg-stellar-500/20",
    border: "group-hover:border-stellar-400/40"
  }
];

const SkillsPage = () => {
  const [shuffleKeys, setShuffleKeys] = useState(experiences.map(() => 0));
  const [internshipShuffleKeys, setInternshipShuffleKeys] = useState(internshipWorks.map(() => 0));

  const handleMouseEnter = (index) => {
    setShuffleKeys(prev => {
      const newKeys = [...prev];
      newKeys[index] += 1;
      return newKeys;
    });
  };

  const handleInternshipMouseEnter = (index) => {
    setInternshipShuffleKeys(prev => {
      const newKeys = [...prev];
      newKeys[index] += 1;
      return newKeys;
    });
  };

  return (
    <section id="skills" className="pt-12 pb-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="text-center mb-20 pt-10 px-4">
        <Shuffle
          text="Work Experience"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion
          loop={false}
          loopDelay={0}
          colorFrom="#F472B6"
          colorTo="#FFFFFF"
          className="font-pixel text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white inline-block leading-tight"
        />
      </div>

      <div className="mt-12 mb-6 text-center">
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase font-sans mb-4">
          Internship at <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-400 to-cosmic-400 font-pixel text-xl md:text-2xl">ManPro HRMS</span>
        </h3>
        <p className="text-slate-500 font-pixel text-[10px] uppercase tracking-widest">January - April 2026</p>
      </div>

      <div className="relative w-full pt-0 pb-10">
        <Marquee direction="left" duration={35} repeat={3} className="[--gap:2.5rem]">
          {experiences.map((exp, index) => (
            <div key={index} className="w-[320px] md:w-[380px] flex-shrink-0 py-10">
              <motion.div 
                onMouseEnter={() => handleMouseEnter(index)}
                className={`bg-white/[0.03] p-8 rounded-[2.5rem] border border-white/20 relative overflow-hidden group ${exp.border} transition-all duration-300 shadow-2xl hover:bg-white/[0.08] hover:border-white/30`}
              >
                {/* Glow effect */}
                <div className={`absolute -top-24 -left-24 w-48 h-48 ${exp.glow} opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-3xl pointer-events-none`} />
                
                <div className="flex flex-col mb-4">
                  <Shuffle
                    key={shuffleKeys[index]}
                    text={exp.role}
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion
                    loop={false}
                    loopDelay={0}
                    colorFrom="#F472B6"
                    colorTo="#FFFFFF"
                    className="font-pixel text-sm md:text-base font-bold text-white inline-block"
                  />
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-[10px] font-bold tracking-wider text-slate-300 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Core Skills Section */}
      <div className="mt-32">
        <div className="text-center mb-16 px-4">
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase font-sans mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-400 to-cosmic-400 font-pixel text-xl md:text-2xl">Internship Works</span>
          </h3>
          <p className="text-slate-500 font-pixel text-[10px] uppercase tracking-widest">Selected Contributions & Deliverables</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {internshipWorks.map((work, index) => (
            <motion.div 
              key={index} 
              className="h-full"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              <div 
                onMouseEnter={() => handleInternshipMouseEnter(index)}
                className={`bg-white/[0.03] p-8 rounded-[2.5rem] border border-white/20 relative overflow-hidden group ${work.border} transition-all duration-300 shadow-2xl hover:bg-white/[0.08] hover:border-white/30 h-full flex flex-col justify-between`}
              >
                {/* Glow effect */}
                <div className={`absolute -top-24 -left-24 w-48 h-48 ${work.glow} opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-3xl pointer-events-none`} />
                
                <div>
                  <div className="flex flex-col mb-4">
                    <Shuffle
                      key={internshipShuffleKeys[index]}
                      text={work.title}
                      shuffleDirection="right"
                      duration={0.35}
                      animationMode="evenodd"
                      shuffleTimes={1}
                      ease="power3.out"
                      stagger={0.03}
                      threshold={0.1}
                      triggerOnce={true}
                      triggerOnHover={true}
                      respectReducedMotion
                      loop={false}
                      loopDelay={0}
                      colorFrom="#F472B6"
                      colorTo="#FFFFFF"
                      className="font-pixel text-sm md:text-base font-bold text-white inline-block uppercase"
                    />
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                    {work.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {work.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-wider text-slate-300 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default SkillsPage;
