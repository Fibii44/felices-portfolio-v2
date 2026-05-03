import React from 'react';
import { Trophy, BookOpen, Shield, Star } from 'lucide-react';
import { motion } from 'motion/react';
import Shuffle from '../components/Shuffle';
import PixelCard from '../components/PixelCard';

const CertificationsPage = () => {
  const [shuffleKeys, setShuffleKeys] = React.useState([0, 0, 0, 0]);

  const handleMouseEnter = (index) => {
    setShuffleKeys(prev => {
      const newKeys = [...prev];
      newKeys[index] += 1;
      return newKeys;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <>
      <section id="awards" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cosmic-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-nebula-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="text-center mb-20 relative z-10">
          <Shuffle
            text="Certifications & Awards"
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
            className="font-pixel text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white inline-block mb-4"
          />
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left relative z-10"
        >
          {/* ASEAN Hackathon */}
          <motion.div variants={itemVariants}>
            <div 
              onMouseEnter={() => handleMouseEnter(0)}
              className="p-10 h-full flex flex-col bg-white/[0.03] border border-white/20 rounded-[2.5rem] group relative overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30"
            >
              {/* Glow effect */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-cosmic-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-3xl pointer-events-none" />
              
              <div className="mb-6 relative z-10">
                <Shuffle
                  key={shuffleKeys[0]}
                  text="ASEAN Green Hackathon"
                  duration={0.35}
                  colorFrom="#F472B6"
                  colorTo="#FFFFFF"
                  className="text-base md:text-lg font-black text-white font-pixel tracking-tight mb-2 uppercase"
                />
                <p className="text-cosmic-400 font-pixel text-[10px] tracking-widest uppercase">Participant | 2025</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-sans relative z-10">
                Engaged in regional innovation focused on sustainable tech solutions, collaborating with international teams to solve pressing environmental challenges through innovative software architecture.
              </p>
            </div>
          </motion.div>

          {/* Academic Excellence */}
          <motion.div variants={itemVariants}>
            <div 
              onMouseEnter={() => handleMouseEnter(1)}
              className="p-10 h-full flex flex-col bg-white/[0.03] border border-white/20 rounded-[2.5rem] group relative overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30"
            >
              {/* Glow effect */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-nebula-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-3xl pointer-events-none" />
              
              <div className="mb-6 relative z-10">
                <Shuffle
                  key={shuffleKeys[1]}
                  text="Academic Excellence"
                  duration={0.35}
                  colorFrom="#F472B6"
                  colorTo="#FFFFFF"
                  className="text-base md:text-lg font-black text-white font-pixel tracking-tight mb-2 uppercase"
                />
                <p className="text-nebula-400 font-pixel text-[10px] tracking-widest uppercase">Consistent Recipient</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-sans relative z-10">
                Recognized for high academic performance and technical leadership throughout the BSIT program, maintaining excellence across core IT modules and practical projects.
              </p>
            </div>
          </motion.div>

          {/* Cisco Academy */}
          <motion.div variants={itemVariants}>
            <div 
              onMouseEnter={() => handleMouseEnter(2)}
              className="p-10 h-full flex flex-col bg-white/[0.03] border border-white/20 rounded-[2.5rem] group relative overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30"
            >
              {/* Glow effect */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-nebula-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-3xl pointer-events-none" />
              
              <div className="mb-6 relative z-10">
                <Shuffle
                  key={shuffleKeys[2]}
                  text="Cisco Academy"
                  duration={0.35}
                  colorFrom="#F472B6"
                  colorTo="#FFFFFF"
                  className="text-base md:text-lg font-black text-white font-pixel tracking-tight mb-2 uppercase"
                />
                <p className="text-nebula-400 font-pixel text-[10px] tracking-widest uppercase">Network Specialist</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-sans relative z-10 mb-6">
                Successfully completed CCNA modules 1-3 (Networking, Routing, and Enterprise Security) along with advanced Cybersecurity training, gaining deep expertise in global network architecture.
              </p>
            </div>
          </motion.div>

          {/* Industry Certifications */}
          <motion.div variants={itemVariants}>
            <div 
              onMouseEnter={() => handleMouseEnter(3)}
              className="p-10 h-full flex flex-col bg-white/[0.03] border border-white/20 rounded-[2.5rem] group relative overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30"
            >
              {/* Glow effect */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-stellar-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-3xl pointer-events-none" />
              
              <div className="mb-6 relative z-10">
                <Shuffle
                  key={shuffleKeys[3]}
                  text="Industry Certifications"
                  duration={0.35}
                  colorFrom="#F472B6"
                  colorTo="#FFFFFF"
                  className="text-base md:text-lg font-black text-white font-pixel tracking-tight mb-2 uppercase"
                />
                <p className="text-stellar-400 font-pixel text-[10px] tracking-widest uppercase">Technical Training</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-sans relative z-10 mb-6">
                Certified in Digital Literacy and completed DICT Special Technical Training, demonstrating a strong foundation in modern digital tools and specialized government-standard technical workflows.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default CertificationsPage;




