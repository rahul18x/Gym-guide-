import { motion } from 'motion/react';
import { TRAINING_PHASES, type TrainingPhase } from '@/src/constants';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface Props {
  selectedPhase: string;
  onSelect: (id: string) => void;
}

export default function PhaseSelector({ selectedPhase, onSelect }: Props) {
  const current = TRAINING_PHASES.find(p => p.id === selectedPhase) || TRAINING_PHASES[0];

  return (
    <section className="py-24 bg-brand-paper border-y-2 border-brand-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Phase List */}
          <div className="w-full md:w-1/3 space-y-6">
            <h2 className="text-xs font-bold text-brand-ink opacity-40 uppercase tracking-[0.3em] mb-10">Select Your Season</h2>
            {TRAINING_PHASES.map((phase) => (
              <button
                key={phase.id}
                onClick={() => onSelect(phase.id)}
                className={cn(
                  "w-full text-left p-6 transition-all border-2 flex items-center justify-between group cursor-pointer",
                  selectedPhase === phase.id 
                    ? "bg-brand-primary border-brand-ink text-brand-ink" 
                    : "bg-brand-paper border-brand-ink text-brand-ink hover:bg-brand-primary/40"
                )}
              >
                <div className="flex items-center gap-4">
                  <phase.icon size={24} />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Phase {phase.id === 'bulking' ? '01' : phase.id === 'cutting' ? '02' : '03'}</div>
                    <div className="font-display text-2xl uppercase">{phase.title}</div>
                  </div>
                </div>
                <ArrowUpRight className={cn("transition-transform", selectedPhase === phase.id ? "translate-x-1 -translate-y-1" : "opacity-0 group-hover:opacity-100")} size={20} />
              </button>
            ))}
          </div>

          {/* Phase Details */}
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 card-editorial border-2 border-brand-ink relative overflow-hidden active"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8 border-b-2 border-brand-ink pb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Protocol // {current.id.toUpperCase()}</span>
                <h3 className="text-5xl">{current.title}</h3>
              </div>

              <p className="text-4xl font-serif italic font-black text-brand-ink mb-12">
                "{current.motto}"
              </p>

              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-[10px] font-bold text-brand-ink uppercase tracking-[0.2em] mb-6 border-b border-brand-ink pb-2">Phase Objectives</h4>
                  <ul className="space-y-4">
                    {current.goals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-3 text-brand-ink font-medium">
                        <CheckCircle2 size={18} className="shrink-0 mt-1" />
                        {goal}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-12">
                    <h4 className="text-[10px] font-bold text-brand-ink uppercase tracking-[0.2em] mb-6 border-b border-brand-ink pb-2">Nutrition Focus</h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-4 border border-brand-ink bg-brand-paper/50">
                        <div className="text-[10px] text-brand-ink opacity-40 uppercase mb-2">Calories</div>
                        <div className="text-sm font-bold">{current.nutrition.calories}</div>
                      </div>
                      <div className="p-4 border border-brand-ink bg-brand-paper/50">
                        <div className="text-[10px] text-brand-ink opacity-40 uppercase mb-2">Protein</div>
                        <div className="text-sm font-bold">{current.nutrition.protein}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-brand-ink uppercase tracking-[0.2em] mb-6 border-b border-brand-ink pb-2">Sample Routine</h4>
                  <div className="space-y-8">
                    {current.sampleWorkout.map((routine, i) => (
                      <div key={i}>
                        <div className="text-lg font-display font-bold mb-6 uppercase italic border-l-4 border-brand-ink pl-4">{routine.name}</div>
                        <div className="space-y-2">
                          {routine.exercises.map((ex, j) => (
                            <div key={j} className="flex justify-between items-center p-3 border-b border-brand-ink/10 text-sm hover:bg-brand-paper/30">
                              <span className="font-medium">{ex.name}</span>
                              <span className="font-serif italic font-black">{ex.sets} × {ex.reps}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background number */}
            <div className="absolute -bottom-10 -right-10 text-[200px] font-display font-black text-brand-ink/10 pointer-events-none select-none">
              {current.id.substring(0, 1).toUpperCase()}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
