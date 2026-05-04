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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sweepPhase, setSweepPhase] = useState('in');
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
    const morphTimer = setTimeout(() => {
      if (!loaderOverlayRef.current || !loaderLogoRef.current || !navLogoRef.current) {
        setShowNavLogo(true);
        setShowLoader(false);
        return;
      }

      const from = loaderLogoRef.current.getBoundingClientRect();
      const to = navLogoRef.current.getBoundingClientRect();

      const fromCenterX = from.left + from.width / 2;
      const fromCenterY = from.top + from.height / 2;
      const toCenterX = to.left + to.width / 2;
      const toCenterY = to.top + to.height / 2;

      const dx = toCenterX - fromCenterX;
      const dy = toCenterY - fromCenterY - 1;
      const scaleX = to.width / from.width;
      const scaleY = to.height / from.height;

      const tl = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
        onComplete: () => {
          setShowNavLogo(true);
          setShowLoader(false);
          sessionStorage.setItem('loaderShown', 'true');
        }
      });

      if (loaderCaptionRef.current) {
        tl.to(loaderCaptionRef.current, { opacity: 0, y: 10, duration: 0.25 }, 0);
      }

      tl.to(
        loaderLogoRef.current,
        {
          x: dx,
          y: dy,
          scaleX,
          scaleY,
          transformOrigin: '50% 50%',
          duration: 0.95
        },
        0.08
      );
      tl.to(loaderOverlayRef.current, { opacity: 0, duration: 0.55, ease: 'power2.out' }, 0.58);
    }, 1000);

    return () => {
      clearTimeout(morphTimer);
    };
  }, []);
  
  const triggerTransition = (targetState) => {
    setSweepPhase('in');
    setIsTransitioning(true);
    setTimeout(() => {
      setIsAboutPage(targetState);
      window.scrollTo(0, 0);
      setSweepPhase('out');
    }, 650);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1300);
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans scroll-smooth transition-colors duration-500 overflow-x-hidden relative">
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
              <span className="font-pixel text-4xl md:text-5xl text-white">FEBY</span>
            </div>
            <p ref={loaderCaptionRef} className="text-[10px] font-black uppercase tracking-[0.36em] text-nebula-300/80">
              Loading Portfolio
            </p>
          </div>
        </div>
      )}

      <Starfield />

      {/* Cloud SVG Transition */}
      {isTransitioning && (
        <div
          className={`fixed inset-0 z-[9999] pointer-events-none overflow-hidden ${
            sweepPhase === 'in' ? 'animate-cloud-sweep-in' : 'animate-cloud-sweep-out'
          }`}
        >
          <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.98" />
                <stop offset="30%" stopColor="#C084FC" stopOpacity="0.97" />
                <stop offset="60%" stopColor="#A855F7" stopOpacity="0.96" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.94" />
              </linearGradient>
            </defs>

            {/* Fluffy cloud blocks */}
            <rect x="40" y="320" width="120" height="120" fill="#DDD6FE" opacity="0.95" rx="20" />
            <rect x="100" y="280" width="140" height="100" fill="#E9D5FF" opacity="0.92" rx="20" />
            <rect x="160" y="340" width="110" height="130" fill="#D8B4FE" opacity="0.94" rx="20" />
            <rect x="20" y="380" width="95" height="140" fill="#C084FC" opacity="0.96" rx="20" />

            <rect x="280" y="300" width="130" height="110" fill="#E9D5FF" opacity="0.94" rx="20" />
            <rect x="330" y="250" width="145" height="95" fill="#DDD6FE" opacity="0.91" rx="20" />
            <rect x="380" y="330" width="120" height="140" fill="#D8B4FE" opacity="0.94" rx="20" />
            <rect x="250" y="370" width="115" height="125" fill="#C084FC" opacity="0.93" rx="20" />

            <rect x="520" y="280" width="155" height="105" fill="#DDD6FE" opacity="0.96" rx="20" />
            <rect x="580" y="230" width="160" height="90" fill="#E9D5FF" opacity="0.93" rx="20" />
            <rect x="650" y="310" width="135" height="145" fill="#D8B4FE" opacity="0.95" rx="20" />
            <rect x="490" y="350" width="130" height="140" fill="#C084FC" opacity="0.94" rx="20" />
            <rect x="580" y="370" width="120" height="135" fill="#B78EFF" opacity="0.92" rx="20" />

            <rect x="820" y="290" width="140" height="115" fill="#E9D5FF" opacity="0.94" rx="20" />
            <rect x="880" y="240" width="150" height="100" fill="#DDD6FE" opacity="0.91" rx="20" />
            <rect x="950" y="320" width="125" height="150" fill="#D8B4FE" opacity="0.94" rx="20" />
            <rect x="790" y="360" width="120" height="135" fill="#C084FC" opacity="0.92" rx="20" />

            <rect x="1100" y="310" width="130" height="120" fill="#E9D5FF" opacity="0.93" rx="20" />
            <rect x="1160" y="260" width="145" height="105" fill="#DDD6FE" opacity="0.90" rx="20" />
            <rect x="1220" y="340" width="115" height="140" fill="#D8B4FE" opacity="0.94" rx="20" />
            <rect x="1080" y="370" width="110" height="135" fill="#C084FC" opacity="0.92" rx="20" />

            <rect x="1280" y="330" width="100" height="130" fill="#D8B4FE" opacity="0.91" rx="20" />
            <rect x="1330" y="280" width="120" height="115" fill="#E9D5FF" opacity="0.93" rx="20" />
          </svg>
        </div>
      )}

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
