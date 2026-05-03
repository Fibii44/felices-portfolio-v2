"use client"

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { projects } from '../lib/projects';
import { ArrowLeft, Rocket, Globe, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from '../components/Starfield';
import { CloudOrbit, OrbitingImage } from '../components/CloudOrbit';
import Particles from '../components/Particles';
import TargetCursor from '../TargetCursor';
import Shuffle from '../components/Shuffle';

const ProjectDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const [selectedImg, setSelectedImg] = React.useState(null);
  
  // Safety filter: handle spaces/hyphens and case sensitivity
  const project = projects?.find(p => {
    const rawSlug = params?.slug || '';
    const slug = String(rawSlug).toLowerCase().replace(/%20| /g, '-');
    return p.id.toLowerCase() === slug;
  });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center p-8">
          <h1 className="text-4xl font-pixel mb-6">PROJECT NOT FOUND</h1>
          <p className="text-slate-400 mb-8 font-sans">The mission coordinates for this project are missing.</p>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-nebula-500/20 border border-nebula-500/50 rounded-full text-white font-pixel text-xs hover:bg-nebula-500/40 transition-all"
          >
            RETURN TO BASE
          </button>
        </div>
      </div>
    );
  }

  const allImages = project?.extraImages ? [project.src, ...project.extraImages] : [project.src];
  const currentImgIndex = allImages.indexOf(selectedImg);

  const handleNext = (e) => {
    e?.stopPropagation();
    if (!allImages.length) return;
    const nextIndex = (currentImgIndex + 1) % allImages.length;
    setSelectedImg(allImages[nextIndex]);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (!allImages.length) return;
    const prevIndex = (currentImgIndex - 1 + allImages.length) % allImages.length;
    setSelectedImg(allImages[prevIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImg) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImg, currentImgIndex]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-nebula-500/30 relative">
      <TargetCursor />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleCount={150}
          particleSpread={10}
          speed={0.05}
          particleColors={['#f472b6', '#ffffff']}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={1}
          cameraDistance={20}
        />
      </div>
      <Starfield />

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 cursor-zoom-out"
          >
            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 md:left-8 z-[110] p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 md:right-8 z-[110] p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </>
            )}

            <motion.div
              key={selectedImg}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5"
              />

              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-pixel tracking-widest text-white/60">
                {currentImgIndex + 1} / {allImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-md border-b border-white/5 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => router.push('/#projects')}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </button>
          <div className="font-pixel text-lg text-white">Project Details</div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags?.map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-white mb-6 font-pixel uppercase leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
              {project.desc}
            </p>
          </div>

          {/* Hero Image */}
          <div
            className={`relative ${project.tags?.some(t => t.toLowerCase().includes('mobile')) ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-video'} w-full rounded-3xl overflow-hidden border border-white/10 mb-16 shadow-2xl cursor-zoom-in group bg-slate-900`}
            onClick={() => setSelectedImg(project.src)}
          >
            <img
              src={project.src}
              alt={project.title}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('bg-slate-900', 'flex', 'items-center', 'justify-center');
              }}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left: Main Content */}
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-pixel text-white mb-8 uppercase">Project Overview</h2>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed text-base whitespace-pre-line">
                {project.longDesc?.split('\n').map((line, idx) => {
                  if (line.trim().startsWith('•')) {
                    return (
                      <div key={idx} className="flex items-start gap-4 my-3 group">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-nebula-500 shadow-[0_0_10px_rgba(244,114,182,0.5)] group-hover:scale-125 transition-transform shrink-0" />
                        <span className="text-slate-300 group-hover:text-white transition-colors text-sm md:text-base">
                          {line.trim().substring(1).trim()}
                        </span>
                      </div>
                    );
                  }
                      const isHeader = line.includes(':');
                      return (
                        <p 
                          key={idx} 
                          className={isHeader 
                            ? "text-white font-pixel text-[11px] uppercase tracking-[0.25em] mt-12 mb-6" 
                            : "text-slate-400"
                          }
                        >
                          {line}
                        </p>
                      );
                })}
              </div>

              {/* Tech Stack Architecture - Legend (Left) */}
              {project.stack && project.stack.length > 0 && (
                <div className="mt-24 space-y-12">
                    <h2 className="text-2xl font-pixel text-white uppercase">
                      <Shuffle 
                        text="Tech Architecture" 
                        tag="span" 
                        colorFrom="#F472B6" 
                        colorTo="#FFFFFF" 
                      />
                    </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {project.stack.map((group, i) => (
                      <div key={i} className="space-y-4">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-nebula-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-nebula-500 animate-pulse" />
                          {group.category}
                        </h3>
                        <div className="flex flex-col gap-2.5">
                          {group.items.map((item, j) => (
                            <div key={j} className="flex items-center gap-3 group/item">
                              <div className="w-1 h-1 rounded-full bg-white/20 group-hover/item:bg-nebula-400 transition-colors" />
                              <span className="text-sm text-slate-400 group-hover/item:text-white transition-colors">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.extraImages && project.extraImages.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-2xl font-pixel text-white mb-8 uppercase">
                      <Shuffle 
                        text={project.tags.includes('Game Dev') ? 'Game Gallery' : 'Project Gallery'} 
                        tag="span" 
                        colorFrom="#F472B6" 
                        colorTo="#FFFFFF" 
                      />
                    </h2>
                  <div className={`grid gap-6 ${
                    project.tags.some(t => {
                      const tag = t.toLowerCase();
                      return tag.includes('mobile') || tag.includes('android') || tag.includes('kotlin');
                    })
                      ? 'grid-cols-2 sm:grid-cols-4' 
                      : 'grid-cols-1 md:grid-cols-2'
                  }`}>
                    {project.extraImages.map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedImg(img)}
                        className="rounded-2xl overflow-hidden border border-white/10 shadow-xl cursor-zoom-in bg-white/5 h-fit max-h-[450px]"
                      >
                        <img
                          src={img}
                          alt={`Gallery ${idx}`}
                          className="w-full h-auto object-contain object-top max-h-[450px]"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Sidebar Info */}
            <div className="space-y-10">
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-8">
                <div>
                  <h3 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-nebula-400 mb-4">
                    <Tag size={12} /> Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-white/70">{tag}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-stellar-400 mb-4">
                    <Calendar size={12} /> Project Year
                  </h3>
                  <p className="text-sm text-slate-300">2024 - 2025</p>
                </div>

                {/* Conditional Source Code Button */}
                {project.link && (
                  <div className="pt-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-nebula-400/50 hover:bg-white/[0.08]"
                    >
                      {/* Subtle background glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-nebula-500/0 via-nebula-500/5 to-nebula-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                      
                      <svg className="w-5 h-5 text-nebula-400 transition-transform duration-300 group-hover/btn:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-4.51-2-7-2" />
                      </svg>
                      <span className="font-pixel text-[10px] uppercase tracking-[0.2em] text-white">View Source Code</span>
                    </a>
                  </div>
                )}
              </div>

              <div className="pt-[250px]">
                {project.stack && project.stack.length > 0 && (
                  <div className="relative h-[500px] w-full flex items-center justify-center scale-100 opacity-80 hover:opacity-100 transition-opacity">
                    <CloudOrbit
                      size={120}
                      duration={3}
                      className="bg-transparent border-none shadow-none overflow-visible"
                    >
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-16 h-16 rounded-full bg-space-900 border border-white/20 flex items-center justify-center relative shadow-xl backdrop-blur-md">
                          <Rocket size={20} className="text-nebula-400" />
                        </div>
                      </div>

                      {project.stack.flatMap((group, groupIdx) =>
                        group.items.map((item, itemIdx, arr) => {
                          const tech = item.toLowerCase().replace(/ /g, '');
                          
                          // Enhanced Icon Mapping logic
                          let iconUrl = "";
                          if (tech.includes('firebase')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg';
                          else if (tech.includes('android')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg';
                          else if (tech.includes('kotlin')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg';
                          else if (tech.includes('java')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg';
                          else if (tech.includes('mongodb')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg';
                          else if (tech.includes('node')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg';
                          else if (tech.includes('react')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
                          else if (tech.includes('laravel')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg';
                          else if (tech.includes('php')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg';
                          else if (tech.includes('tailwind')) iconUrl = 'https://cdn.simpleicons.org/tailwindcss/38B2AC';
                          else if (tech.includes('javascript')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
                          else if (tech.includes('html5')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg';
                          else if (tech.includes('css3')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg';
                          else if (tech.includes('arduino')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg';
                          else if (tech.includes('esp32')) iconUrl = 'https://cdn.simpleicons.org/espressif/E7352C';
                          else if (tech.includes('mysql')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg';
                          else if (tech.includes('git')) iconUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg';
                          else {
                            // Generic fallback for things like "Blade", "REST API", etc.
                            const genericIcon = tech.includes('api') || tech.includes('database') || tech.includes('atlas') ? 'mongodb' : 'javascript';
                            iconUrl = tech.includes('blade') ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' : 
                                      `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${genericIcon}/${genericIcon}-original.svg`;
                          }

                          return (
                            <OrbitingImage
                              key={`${groupIdx}-${itemIdx}`}
                              radius={70 + (groupIdx * 50)}
                              speed={45 + (groupIdx * 20)}
                              size={40}
                              startAt={(itemIdx / arr.length) + (groupIdx * 0.3)}
                              images={[{ url: iconUrl, name: item }]}
                              className="border-white/10 bg-white/[0.05] backdrop-blur-md"
                            />
                          );
                        })
                      )}
                    </CloudOrbit>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectDetailsPage;
