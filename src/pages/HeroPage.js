import React, { Suspense, lazy } from 'react';
const resumePDF = '/assets/FELICES-FEBY_CV.pdf';
import { ChevronDown } from 'lucide-react';
import ScrollVelocity from '../components/ScrollVelocity';
import PixelShuffleText from '../components/PixelShuffleText';
import Shuffle from '../components/Shuffle';
import userImage from '../assets/user-image.webp';
import { motion } from 'framer-motion';

// Lazy load 3D components
const CloudOrbit = lazy(() => import('../components/CloudOrbit').then(module => ({ default: module.CloudOrbit })));
const OrbitingImage = lazy(() => import('../components/CloudOrbit').then(module => ({ default: module.OrbitingImage })));

const HeroPage = () => {

  return (
    <>
      {/* Hero Section */}
      <header
        id="home"
        className="min-h-screen relative overflow-hidden pt-24 pb-48 px-6 md:px-8 flex items-center"
      >
        {/* Ambient pink glow removed to avoid background override */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-stellar-600/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.45em] text-nebula-300/90">
              Web Developer • QA Tester
            </div>

            <div className="mt-6 md:mt-8 relative">
              <h1 className="relative z-10 text-[2.8rem] sm:text-[4rem] md:text-[5.4rem] lg:text-[6.4rem] font-black leading-[0.88] tracking-[-0.04em] drop-shadow-[0_12px_40px_rgba(244,114,182,0.25)] font-pixel uppercase flex flex-col items-center lg:items-start">
                <Shuffle
                  text="FEBY"
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
                  className="text-white inline-block cursor-pointer"
                />
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-nebula-200 to-nebula-400 tracking-[-0.05em]">
                  ANGELA
                </span>
              </h1>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href={resumePDF}
                download
                className="inline-flex items-center gap-2 rounded-full border border-nebula-400/40 bg-nebula-500/15 px-6 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-nebula-300 hover:bg-nebula-500/25 hover:shadow-[0_0_30px_rgba(244,114,182,0.22)]"
              >
                Download Resume
              </a>

              <a
                href="#about-me"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-slate-200 transition-all duration-300 hover:border-nebula-400/40 hover:text-white"
              >
                Explore About Me
                <ChevronDown size={14} className="rotate-270" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Full Stack</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">UI Systems</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">QA Testing</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="w-full h-[650px] lg:h-[760px] flex items-center justify-center relative lg:-mt-10">
              
              {/* Stellar Portal Backdrop */}
              <div className="absolute w-[450px] h-[450px] md:w-[550px] md:h-[550px] bg-nebula-500/20 rounded-full blur-[100px] animate-pulse-slow" />
              
              {/* Cloud Orbiting Icons for Hero */}
              <Suspense fallback={null}>
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                  <CloudOrbit
                    duration={3}
                    size={0}
                    className="scale-75 md:scale-100"
                  >
                    {/* Floating User Image */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="relative z-10 w-[300px] md:w-[450px] flex justify-center items-center group pointer-events-auto"
                    >
                      <img 
                        src={userImage.src || userImage} 
                        alt="Feby Angela"
                        className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(219,39,119,0.3)] group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                      />
                      
                      {/* Subtle Image Fades */}
                      <div className="absolute inset-0 bg-gradient-to-t from-space-950/20 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Orbiting Icons - Hero Set */}
                    {[
                      // Inner Ring (Radius 240-260)
                      { speed: 20, radius: 240, size: 52, startAt: 0, images: [{ name: "React", url: "https://cdn.simpleicons.org/react" }] },
                      { speed: 20, radius: 240, size: 52, startAt: 0.33, images: [{ name: "JavaScript", url: "https://cdn.simpleicons.org/javascript" }] },
                      { speed: 20, radius: 240, size: 52, startAt: 0.66, images: [{ name: "Laravel", url: "https://cdn.simpleicons.org/laravel" }] },
                      
                      // Outer Ring (Radius 320-350)
                      { speed: 28, radius: 340, size: 44, startAt: 0.15, images: [{ name: "PHP", url: "https://cdn.simpleicons.org/php" }] },
                      { speed: 28, radius: 340, size: 44, startAt: 0.4, images: [{ name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss" }] },
                      { speed: 28, radius: 340, size: 44, startAt: 0.65, images: [{ name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/white" }] },
                      { speed: 28, radius: 340, size: 44, startAt: 0.9, images: [{ name: "GitHub", url: "https://cdn.simpleicons.org/github/white" }] },
                    ].map((orbit, index) => (
                      <OrbitingImage
                        key={index}
                        speed={orbit.speed}
                        radius={orbit.radius}
                        size={orbit.size}
                        startAt={orbit.startAt}
                        images={orbit.images}
                        className="pointer-events-auto"
                      />
                    ))}
                  </CloudOrbit>
                </div>
              </Suspense>

            </div>
          </div>
        </div>
      </header>

      {/* Floating Scroll Divider */}
      <div className="relative -mt-48 md:-mt-64 z-30 pointer-events-none overflow-hidden">
        <div className="py-8 bg-transparent">
          <ScrollVelocity
            texts={['Experience', 'Full Stack Development']} 
            velocity={50}
            className="text-white/25 font-pixel uppercase tracking-[0.2em] text-4xl md:text-6xl"
            numCopies={8}
            damping={50}
            stiffness={400}
          />
        </div>
      </div>

      {/* About Me Section */}
      <section id="about-me" className="pt-32 pb-60 px-6 max-w-7xl mx-auto scroll-mt-20 relative z-10">
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
            
            {/* Left side: Cloud Orbiting Icons */}
            <div className="w-full lg:w-1/2 flex justify-center items-center h-[450px] relative">
              {/* Ambient glow behind the orbit */}
              <div className="absolute inset-0 bg-nebula-500/5 rounded-full blur-[100px] pointer-events-none" />
              
              <Suspense fallback={<div className="w-64 h-64 animate-pulse bg-white/5 rounded-full" />}>
                <CloudOrbit
                  duration={3}
                  size={120}
                  images={[
                    { name: "React", url: "https://cdn.simpleicons.org/react" },
                    { name: "JavaScript", url: "https://cdn.simpleicons.org/javascript" },
                    { name: "PHP", url: "https://cdn.simpleicons.org/php" },
                    { name: "Laravel", url: "https://cdn.simpleicons.org/laravel" }
                  ]}
                  className="scale-90 md:scale-110"
                >
                  {[
                    // Ring 1 - Inner (Radius 100)
                    { speed: 20, radius: 100, size: 48, startAt: 0, images: [{ name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss" }] },
                    { speed: 20, radius: 100, size: 48, startAt: 0.33, images: [{ name: "Figma", url: "https://cdn.simpleicons.org/figma" }] },
                    { speed: 20, radius: 100, size: 48, startAt: 0.66, images: [{ name: "GitHub", url: "https://cdn.simpleicons.org/github/white" }] },
                    
                    // Ring 2 - Middle (Radius 160)
                    { speed: 25, radius: 160, size: 44, startAt: 0, images: [{ name: "Firebase", url: "https://cdn.simpleicons.org/firebase" }] },
                    { speed: 25, radius: 160, size: 44, startAt: 0.25, images: [{ name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/white" }] },
                    { speed: 25, radius: 160, size: 44, startAt: 0.5, images: [{ name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb" }] },
                    { speed: 25, radius: 160, size: 44, startAt: 0.75, images: [{ name: "MySQL", url: "https://cdn.simpleicons.org/mysql" }] },
                    
                    // Ring 3 - Outer (Radius 220)
                    { speed: 30, radius: 220, size: 40, startAt: 0, images: [{ name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql" }] },
                    { speed: 30, radius: 220, size: 40, startAt: 0.33, images: [{ name: "GSAP", url: "https://cdn.simpleicons.org/greensock" }] },
                    { speed: 30, radius: 220, size: 40, startAt: 0.66, images: [{ name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs" }] },
                  ].map((orbit, index) => (
                    <OrbitingImage
                      key={index}
                      speed={orbit.speed}
                      radius={orbit.radius}
                      size={orbit.size}
                      startAt={orbit.startAt}
                      images={orbit.images}
                    />
                  ))}
                </CloudOrbit>
              </Suspense>
            </div>

            {/* Right side: About Text */}
            <div className="w-full lg:w-1/2 py-10 flex flex-col justify-center text-left">
              <div className="mb-8 inline-flex items-center">
                <span className="font-pixel text-sm uppercase tracking-[0.2em] text-slate-200">About Me</span>
              </div>

              <p className="text-xl md:text-2xl text-slate-100 font-medium leading-relaxed mb-6 max-w-xl">
                I am a Web Developer and QA Tester specializing in <span className="text-nebula-400">React, Laravel, and PHP</span>.
              </p>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                I deliver polished, functional products by combining logical rigor with creative design across <span className="text-white font-semibold">various modern tech stacks</span>.
              </p>


            </div>

          </div>
        </div>
      </section>


    </>
  );
};

export default HeroPage;
