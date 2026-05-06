import React from 'react';
import { Trophy, BookOpen, Shield, Star } from 'lucide-react';
import { motion } from 'motion/react';
import Shuffle from '../components/Shuffle';
import PixelCard from '../components/PixelCard';
import MagicBento from '../components/MagicBento';

const CertificationsPage = () => {
  return (
    <>
      <section id="awards" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cosmic-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-nebula-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="text-center mb-16 relative z-10">
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
        
        {/* New Bento Section */}
        <div className="relative z-10 flex justify-center">
          <MagicBento 
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="244, 114, 182"
            disableAnimations={false}
          />
        </div>
      </section>
    </>
  );
};

export default CertificationsPage;




