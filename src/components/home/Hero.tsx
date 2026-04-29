import { motion } from 'motion/react';
import { ChevronRight, Dumbbell } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="editorial-grid absolute inset-0 opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[2px] w-12 bg-brand-ink" />
            <span className="text-brand-ink font-bold text-[10px] tracking-[0.3em] uppercase">Forging Elite Performance</span>
          </div>
          
          <h1 className="text-[12rem] md:text-[16rem] leading-[0.75] mb-12">
            <span className="block text-stroke-editorial text-brand-ink">STEEL</span>
            <span className="flex items-baseline gap-4">
              SEASON <Dumbbell className="text-brand-ink -mt-10" size={60} />
            </span>
            <span className="block italic font-serif text-[6rem] md:text-[10rem] normal-case text-brand-ink mt-8">The Architecture of Power</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mt-20 items-end">
            <p className="text-2xl text-brand-ink/80 font-medium leading-tight border-l-8 border-brand-primary pl-8">
              A comprehensive framework designed for maximal hypertrophy and neurological adaptation. 
              Precision-engineered to dominate.
            </p>

            <div className="flex flex-wrap gap-4 justify-end">
              <button className="btn-black flex items-center gap-2 hover:translate-x-2 transition-transform cursor-pointer">
                DOWNLOAD GUIDE <ChevronRight size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-brand-ink text-brand-ink font-bold uppercase tracking-widest text-sm hover:bg-brand-primary transition-colors cursor-pointer">
                VOL. 04 PROTOCOL
              </button>
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-4 gap-12 border-t-4 border-brand-ink pt-8">
            <div>
              <div className="text-[10px] font-bold text-brand-ink opacity-40 uppercase tracking-widest mb-2">Duration</div>
              <div className="text-3xl font-serif italic font-black">12 WEEKS</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-brand-ink opacity-40 uppercase tracking-widest mb-2">Frequency</div>
              <div className="text-3xl font-serif italic font-black">5 DAYS / WK</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-brand-ink opacity-40 uppercase tracking-widest mb-2">Focus</div>
              <div className="text-3xl font-serif italic font-black">HYPERTROPHY</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-brand-ink opacity-40 uppercase tracking-widest mb-2">Lifts tracked</div>
              <div className="text-3xl font-serif italic font-black">3.5 MILLION</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
