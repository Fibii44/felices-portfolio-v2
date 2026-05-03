import React, { useState } from 'react';
import { X, Briefcase, Layers, Users, ShieldCheck, Rocket, Orbit, Sparkles, ChevronRight } from 'lucide-react';

const AboutMe = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  return (
    <div className="min-h-screen bg-space-950 flex flex-col animate-in fade-in duration-500 text-left relative overflow-hidden font-sans transition-colors duration-500 text-slate-100">
      
      {/* Starfield removed here as it is global in App.js */}
      
      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-white/5 fixed top-0 z-[200]">
        <div 
          className="h-full bg-gradient-to-r from-nebula-500 to-cosmic-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-700 ease-out" 
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      {/* Close Button */}
      <button 
        onClick={onBack}
        className="fixed top-8 right-8 p-3 text-slate-500 hover:text-white transition-all hover:rotate-90 z-[200] glass rounded-full"
      >
        <X size={32} />
      </button>

      <div className="flex-1 flex items-center justify-center px-6 py-12 relative z-10">
        <div className="max-w-4xl w-full">
          
          {/* Step 1: Philosophy */}
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right duration-500">
              <div className="p-5 glass w-fit rounded-3xl text-nebula-400 shadow-2xl border-nebula-500/20">
                <Orbit size={48} className="animate-pulse" />
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                My Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-400 to-cosmic-400">Philosophy.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed italic border-l-8 border-nebula-500 pl-8 glass py-6 rounded-r-3xl transition-colors">
                  "Automation can accelerate coding, but problem-solving and deep logic remain human responsibilities."
                </p>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl text-left">
                  I prioritize the <strong>'Why'</strong> before the <strong>'How'</strong>. 
                  In this vast digital universe, tools are like telescopes—they help us see further, but they cannot replace the <strong>curiosity and logic</strong> of the observer.
                </p>
              </div>
            </div>
          )}

          {/* Step 2: QA Experience */}
          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <div className="p-5 glass w-fit rounded-3xl text-cosmic-400 shadow-2xl border-cosmic-500/20">
                <ShieldCheck size={48} />
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-400 to-stellar-400">Assurance.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-xl text-slate-300 leading-relaxed">
                    I have a keen eye for detail, ensuring every "constellation" of code aligns perfectly. I ensure software isn't just functional, but <strong>stable and reliable</strong>.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-400 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-cosmic-500 animate-ping" />
                      Manual & Unit Testing
                    </li>
                    <li className="flex items-center gap-3 text-slate-400 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-cosmic-500" />
                      Bug Identification & Tracking
                    </li>
                  </ul>
                </div>
                <div className="p-8 glass rounded-[2.5rem] text-slate-200 shadow-xl relative overflow-hidden border-cosmic-500/20">
                   <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cosmic-500/10 rounded-full blur-2xl" />
                   <h4 className="text-lg font-bold mb-2 uppercase tracking-widest text-cosmic-400 flex items-center gap-2">
                     <Rocket size={18} /> The Mission
                   </h4>
                   <p className="text-sm leading-relaxed opacity-90 relative z-10">
                     Reducing technical debt and ensuring a seamless user experience by catching logical errors early in the development lifecycle.
                   </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Project Management */}
          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500 relative">
              <div className="space-y-4">
                <div className="p-5 glass w-fit rounded-3xl text-stellar-400 shadow-2xl border-stellar-500/20">
                  <Briefcase size={40} />
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                  Team <span className="text-stellar-400">Leadership.</span>
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl leading-relaxed text-left">
                  In my school projects, I act as the <strong>mission commander</strong>, bridging technical complexity with human collaboration to ensure a successful launch.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 glass border-white/5 rounded-[2rem] flex items-start gap-4 transition-all hover:bg-white/5 hover:border-stellar-500/30">
                  <div className="p-3 bg-stellar-500/20 rounded-2xl text-stellar-400"><Layers size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white">Task Management</h4>
                    <p className="text-sm text-slate-400">Managing sprints using <strong>ClickUp</strong> and <strong>Trello</strong>.</p>
                  </div>
                </div>

                <div className="p-6 glass border-white/5 rounded-[2rem] flex items-start gap-4 transition-all hover:bg-white/5 hover:border-stellar-500/30">
                  <div className="p-3 bg-stellar-500/20 rounded-2xl text-stellar-400"><Users size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white">Collaboration</h4>
                    <p className="text-sm text-slate-400">Facilitating logic breakdowns and technical accountability.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Goals */}
          {step === 4 && (
            <div className="space-y-6 animate-in slide-in-from-right duration-500">
              <div className="p-5 glass w-fit rounded-3xl text-nebula-400 shadow-2xl border-nebula-500/20 animate-bounce">
                <Sparkles size={48} />
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                Ready for <span className="text-nebula-400">Launch.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl text-left">
                I am seeking an <strong>IT Internship</strong> to apply my QA, PM, and Development skills. I want to join a professional crew where <strong>human logic</strong> and <strong>modern automation</strong> navigate complex digital horizons.
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-10 transition-colors">
            <button 
              onClick={() => step > 1 ? setStep(step - 1) : onBack()}
              className="text-slate-500 font-bold hover:text-white transition-colors uppercase tracking-widest text-sm flex items-center gap-2 group"
            >
              <ChevronRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span>{step === 1 ? 'Exit Orbit' : 'Previous Orbit'}</span>
            </button>
            <button 
              onClick={() => step < totalSteps ? setStep(step + 1) : onBack()}
              className="bg-white text-space-950 px-10 py-4 rounded-[1.5rem] font-black hover:bg-nebula-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 flex items-center gap-2"
            >
              <span>{step === totalSteps ? 'Final Destination' : 'Next Step'}</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;