import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import Shuffle from '../components/Shuffle';

const ContactPage = () => {
  return (
    <footer id="contact" className="py-24 px-6 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nebula-600/10 rounded-full blur-[100px] -z-10" />

      <div className="text-center mb-12 relative z-10">
        <Shuffle
          text="Contact"
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

      {/* Contact Links */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <a href="tel:09944450774" className="flex items-center gap-4 hover:text-cosmic-400 transition-all group scale-100 hover:scale-105">
            <div className="relative">
              <div className="p-4 glass rounded-2xl group-hover:bg-cosmic-500 group-hover:text-white transition-all duration-300">
                <Phone size={24} className="text-cosmic-400 group-hover:text-white" />
              </div>
              <span className="absolute -top-2 -right-2 bg-white text-space-950 text-[10px] px-2 py-0.5 rounded-full font-black tracking-widest uppercase">DITO</span>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Call me on DITO</p>
              <p className="text-xl font-bold text-white">09944450774</p>
            </div>
          </a>

          <a href="tel:09551593904" className="flex items-center gap-4 hover:text-cosmic-400 transition-all group scale-100 hover:scale-105">
            <div className="relative">
              <div className="p-4 glass rounded-2xl group-hover:bg-cosmic-500 group-hover:text-white transition-all duration-300">
                <Phone size={24} className="text-cosmic-400 group-hover:text-white" />
              </div>
              <span className="absolute -top-2 -right-2 bg-white text-space-950 text-[10px] px-2 py-0.5 rounded-full font-black tracking-widest uppercase">TM</span>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Call me on TM</p>
              <p className="text-xl font-bold text-white">09551593904</p>
            </div>
          </a>
        </div>

        <div className="hidden lg:block w-px h-12 bg-white/10" />
        <div className="hidden lg:block w-px h-12 bg-white/10" />

        <a href="mailto:felicesfebyangela@gmail.com" className="flex items-center gap-4 hover:text-nebula-400 transition-all group scale-100 hover:scale-105">
          <div className="p-4 glass rounded-2xl group-hover:bg-nebula-500 group-hover:text-white transition-all duration-300">
            <Mail size={24} className="text-nebula-400 group-hover:text-white" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Send an email</p>
            <p className="text-xl font-bold text-white">felicesfebyangela@gmail.com</p>
          </div>
        </a>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        <a
          href="https://github.com/Fibii44"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-white text-space-950 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all hover:-translate-y-2 shadow-xl group"
        >
          <Github size={22} className="group-hover:scale-110 transition-transform" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/feby-angela-felices-4b288b394/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-cosmic-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-cosmic-500 transition-all hover:-translate-y-2 shadow-xl shadow-cosmic-900/40 group"
        >
          <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
          <span>LinkedIn</span>
        </a>
      </div>

      <p className="text-slate-500 font-medium">© 2026 Feby Angela Felices • Malaybalay City, Bukidnon.</p>
    </footer>
  );
};

export default ContactPage;
