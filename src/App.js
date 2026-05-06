import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import AboutMe from './LearnMore';
import Starfield from './components/Starfield';
import HeroPage from './pages/HeroPage';
import TargetCursor from './TargetCursor';
import Shuffle from './components/Shuffle';
import { gsap } from 'gsap';

// Lazy load non-hero sections
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  const [isAboutPage, setIsAboutPage] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showNavLogo, setShowNavLogo] = useState(false);

  useEffect(() => {
    // We always show the loader on mount now to satisfy the "wow" factor on refresh
    setShowLoader(true);
    setShowNavLogo(false);
  }, []);

  const loaderOverlayRef = useRef(null);
  const loaderLogoRef = useRef(null);
  const loaderCaptionRef = useRef(null);
  const navLogoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loaderOverlayRef.current) {
        gsap.to(loaderOverlayRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            setShowNavLogo(true);
            setShowLoader(false);
            sessionStorage.setItem('loaderShown', 'true');
          }
        });
      } else {
        setShowNavLogo(true);
        setShowLoader(false);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  
   const triggerTransition = (targetState) => {
     setIsAboutPage(targetState);
     window.scrollTo(0, 0);
   };

  return (
    <div className="min-h-screen text-slate-100 font-sans overflow-x-hidden relative">
      <TargetCursor
        targetSelector="a, button, .cursor-target"
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      {showLoader && (
        <div
          ref={loaderOverlayRef}
          className={`fixed inset-0 z-[10001] flex items-center justify-center bg-space-950 transition-opacity duration-700 ${
            showLoader ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative flex flex-col items-center gap-5 px-6 text-center">
            <div ref={loaderLogoRef} className="origin-center flex items-center justify-center">
              <Shuffle
                text="FEBY"
                shuffleDirection="right"
                duration={0.8}
                animationMode="evenodd"
                shuffleTimes={3}
                ease="power3.out"
                stagger={0.05}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion
                loop={false}
                loopDelay={0}
                colorFrom="#F472B6"
                colorTo="#FFFFFF"
                className="font-pixel text-4xl md:text-5xl text-white"
              />
            </div>
          </div>
        </div>
      )}

      <Starfield />



      {isAboutPage ? (
        <AboutMe onBack={() => triggerTransition(false)} />
      ) : (
        <>
          {/* Navbar - Centered Layout */}
          <nav className="fixed w-full bg-space-950/40 backdrop-blur-md z-50 border-b border-white/5 transition-all duration-300 px-8 py-5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Logo */}
              <div
                ref={navLogoRef}
                className="font-pixel text-xl md:text-2xl tracking-[0.06em] text-white flex items-center cursor-pointer"
                style={{ opacity: showNavLogo ? 1 : 0 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {showNavLogo && (
                  <div className="flex items-center">
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
                      className="font-pixel text-xl md:text-2xl tracking-[0.06em] text-white"
                    />
                  </div>
                )}
              </div>

              {/* Centered Navigation */}
              <div className="flex gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 items-center">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors relative group"
                >
                  Home
                </a>
                <a href="#about-me" className="hover:text-white transition-colors relative group">
                  About
                </a>
                <a href="#skills" className="hover:text-white transition-colors relative group">
                  Experience
                </a>
                <a href="#projects" className="hover:text-white transition-colors relative group">
                  Projects
                </a>
                <a href="#awards" className="hover:text-white transition-colors relative group">
                  Certifications
                </a>
                <a href="#contact" className="hover:text-white transition-colors relative group">
                  Contact
                </a>
              </div>
            </div>
          </nav>

          {/* All Page Sections */}
          <HeroPage />
          <Suspense fallback={<div className="h-20" />}>
            <SkillsPage />
            <ProjectsPage />
            <CertificationsPage />
            <ContactPage />
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;
