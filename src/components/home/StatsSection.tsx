import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Wk 1', mass: 80, strength: 100 },
  { name: 'Wk 2', mass: 80.5, strength: 105 },
  { name: 'Wk 3', mass: 81.2, strength: 108 },
  { name: 'Wk 4', mass: 81.5, strength: 115 },
  { name: 'Wk 5', mass: 82.1, strength: 120 },
  { name: 'Wk 6', mass: 82.8, strength: 125 },
];

export default function StatsSection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-8xl mb-8 leading-tight">TRACK EVERY <br /><span className="text-stroke-editorial text-brand-ink italic font-serif normal-case text-6xl">Gram of Progress</span></h2>
            <p className="text-xl text-brand-ink/70 mb-10 max-w-md font-medium">
              Integration with Forge Analytics allows you to monitor volume, 
              intensity, and body composition changes in real-time. 
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-4 h-4 bg-brand-primary border border-brand-ink group-hover:rotate-45 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">Hypertrophy Index Auto-Sync</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-4 h-4 bg-brand-primary border border-brand-ink group-hover:rotate-45 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">Metabolic Load Monitoring</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-4 h-4 bg-brand-primary border border-brand-ink group-hover:rotate-45 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">RPE Heatmapping</span>
              </div>
            </div>
          </div>

          <div className="card-editorial border-2 border-brand-ink p-10 h-[500px]">
             <div className="flex items-center justify-between mb-12 border-b border-brand-ink pb-6">
               <span className="text-xs font-bold uppercase tracking-widest opacity-40">Performance Tracking // VOL. 04</span>
               <div className="flex gap-6 text-[10px] font-bold">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 bg-brand-ink" />
                   <span>STRENGTH</span>
                 </div>
                 <div className="flex items-center gap-2 text-brand-ink/40">
                   <div className="w-3 h-3 border border-brand-ink" />
                   <span>LEAN MASS</span>
                 </div>
               </div>
             </div>

             <ResponsiveContainer width="100%" height="70%">
                <LineChart data={data}>
                  <XAxis 
                    dataKey="name" 
                    stroke="rgba(0,0,0,0.2)" 
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis 
                    stroke="rgba(0,0,0,0.2)" 
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '2px solid #000', color: '#000', borderRadius: '0' }}
                    itemStyle={{ color: '#000', fontWeight: 'bold' }}
                  />
                  <Line 
                    type="stepAfter" 
                    dataKey="strength" 
                    stroke="#000" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: '#E2FF31', stroke: '#000', strokeWidth: 2 }} 
                    activeDot={{ r: 8, strokeWidth: 0 }} 
                  />
                  <Line 
                    type="stepAfter" 
                    dataKey="mass" 
                    stroke="rgba(0,0,0,0.2)" 
                    strokeWidth={2} 
                    strokeDasharray="8 8"
                  />
                </LineChart>
             </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
