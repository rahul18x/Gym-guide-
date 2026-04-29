import { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import PhaseSelector from './components/home/PhaseSelector';
import StatsSection from './components/home/StatsSection';
import AICoach from './components/coach/AICoach';

export default function App() {
  const [selectedPhase, setSelectedPhase] = useState('bulking');

  return (
    <div className="min-min-h-screen relative pb-20">
      <Header />
      
      <main>
        <Hero />
        
        <PhaseSelector 
          selectedPhase={selectedPhase} 
          onSelect={setSelectedPhase} 
        />
        
        <StatsSection />
        
        {/* Call to Action Section */}
        <section className="py-40 bg-brand-primary text-brand-ink border-y-4 border-brand-ink">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-8xl md:text-[10rem] mb-12 leading-[0.8] tracking-tighter">
              READY TO ENTER <br />
              <span className="italic font-serif font-black flex items-center justify-center gap-6">
                <span className="h-[2px] w-20 bg-brand-ink hidden md:block"></span>
                THE FORGE
                <span className="h-[2px] w-20 bg-brand-ink hidden md:block"></span>
              </span>
            </h2>
            <p className="text-2xl mb-16 max-w-2xl mx-auto font-bold uppercase tracking-tight">
              Join 12,000+ athletes who switched from generic routines to 
              elite-level seasonal programming.
            </p>
            <button className="bg-brand-ink text-brand-paper px-16 py-6 font-display font-bold text-2xl hover:bg-brand-paper hover:text-brand-ink border-2 border-brand-ink transition-all cursor-pointer">
              START TRANSFORMATION
            </button>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-brand-paper border-t-2 border-brand-ink">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-20 border-b border-brand-ink/10">
              <div className="max-w-xs">
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-display font-bold tracking-tight text-3xl uppercase">FORGE<span className="text-brand-primary italic">FIT</span></span>
                </div>
                <p className="text-sm font-medium text-brand-ink/60">
                  The definitive guide to seasonal training. Volume 04 // Winter Cycle Protocol.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
                <div className="space-y-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">Protocol</div>
                  <div className="flex flex-col gap-2 text-sm font-bold uppercase">
                    <a href="#" className="hover:text-brand-primary">Bulking</a>
                    <a href="#" className="hover:text-brand-primary">Cutting</a>
                    <a href="#" className="hover:text-brand-primary">Recomp</a>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">Network</div>
                  <div className="flex flex-col gap-2 text-sm font-bold uppercase">
                    <a href="#" className="hover:text-brand-primary">Instagram</a>
                    <a href="#" className="hover:text-brand-primary">X / Forge</a>
                    <a href="#" className="hover:text-brand-primary">Discord</a>
                  </div>
                </div>
              </div>
           </div>

           <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-bold text-brand-ink/30 uppercase tracking-[0.2em]">
                  © 2026 FORGE RIGOROUS METHODOLOGY. ALL RIGHTS RESERVED.
                </div>
                <div className="text-[10px] font-bold text-brand-primary bg-brand-ink inline-block px-2 py-0.5 w-fit uppercase tracking-[0.3em]">
                  CREATED BY _RAHUL18X
                </div>
              </div>
              
              <div className="flex gap-10 text-[10px] font-bold text-brand-ink/50 uppercase tracking-widest">
                <a href="#" className="hover:text-brand-ink underline">Privacy Protocol</a>
                <a href="#" className="hover:text-brand-ink underline">Terms of Service</a>
                <a href="#" className="hover:text-brand-ink underline">API Access</a>
              </div>
           </div>
        </div>
      </footer>

      {/* AI Coach Overlay */}
      <AICoach />
    </div>
  );
}

