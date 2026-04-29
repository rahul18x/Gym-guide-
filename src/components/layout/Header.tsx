import { Activity, LayoutDashboard, Target, Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-brand-paper/80 backdrop-blur-md border-b-2 border-brand-ink">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-ink flex items-center justify-center rotate-45">
            <Activity className="text-brand-primary -rotate-45" size={18} />
          </div>
          <span className="font-display font-bold tracking-tight text-2xl uppercase">FORGE<span className="text-brand-primary italic">FIT</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-widest text-brand-ink/60">
          <a href="#" className="hover:text-brand-ink transition-colors flex items-center gap-2">
            <LayoutDashboard size={14} />
            DASHBOARD
          </a>
          <a href="#" className="hover:text-brand-ink transition-colors flex items-center gap-2">
            <Target size={14} />
            SEASONS
          </a>
          <a href="#" className="hover:text-brand-ink transition-colors flex items-center gap-2">
            <Zap size={14} />
            INTENSITY
          </a>
        </nav>

        <button className="px-4 py-1.5 bg-brand-ink text-brand-paper text-[10px] font-bold hover:bg-brand-primary hover:text-brand-ink transition-all uppercase tracking-widest">
          Connect Stats
        </button>
      </div>
    </header>
  );
}
