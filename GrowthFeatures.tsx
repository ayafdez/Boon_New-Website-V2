
import React, { useState, useEffect } from 'react';

// --- Economic Impact Model (Point 1 - Authority focused) ---
export const EconomicImpactModel: React.FC = () => {
  const [headcount, setHeadcount] = useState(500);
  const [managerRatio, setManagerRatio] = useState(10); // 1:10 ratio
  const [friction, setFriction] = useState('MODERATE');

  const frictionMultipliers = {
    LOW: 0.12,
    MODERATE: 0.24,
    HIGH: 0.42
  };

  const [impact, setImpact] = useState(0);

  useEffect(() => {
    // Structural Impact: (Headcount * Avg Salary $115k) * Friction Multiplier * Efficiency Leak
    const baselinePayroll = headcount * 115000;
    const humanCapitalDrag = baselinePayroll * frictionMultipliers[friction as keyof typeof frictionMultipliers] * 0.15;
    setImpact(Math.round(humanCapitalDrag));
  }, [headcount, friction]);

  return (
    <div className="bg-[#1A1F24] rounded-[64px] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl border border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#466FF6]/5 blur-[120px] rounded-full"></div>
      
      <div className="relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-24 items-center">
        <div>
          <p className="text-[#466FF6] font-black text-[10px] tracking-[0.5em] uppercase mb-10">Economic Impact Model</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-10">
            Quantify your <span className="text-[#466FF6]">Human Capital Drag</span>.
          </h2>
          <p className="text-white/40 text-xl font-medium leading-relaxed mb-16 max-w-xl">
            Turnover is only the visible surface. The true cost lies in "Organizational Drift"—the efficiency lost when leadership is reactive instead of synchronized.
          </p>
          
          <div className="space-y-16">
            <div className="group">
              <div className="flex justify-between mb-6">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Total Organization Headcount</label>
                <span className="text-2xl font-black text-white">{headcount.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="100" max="10000" step="100" value={headcount} 
                onChange={(e) => setHeadcount(parseInt(e.target.value))}
                className="w-full h-[2px] bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#466FF6]"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {['LOW', 'MODERATE', 'HIGH'].map((level) => (
                <button
                  key={level}
                  onClick={() => setFriction(level)}
                  className={`py-6 rounded-2xl border font-black text-[10px] tracking-widest transition-all ${friction === level ? 'bg-[#466FF6] border-[#466FF6] text-white' : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'}`}
                >
                  {level} FRICTION
                </button>
              ))}
            </div>
            <p className="text-[10px] text-white/20 font-medium italic uppercase tracking-widest">Friction accounts for alignment gaps, manager burnout, and knowledge siloing.</p>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-[56px] p-16 flex flex-col items-center text-center backdrop-blur-3xl shadow-2xl">
          <p className="text-[10px] font-black text-[#466FF6] uppercase tracking-[0.4em] mb-6">Estimated Performance Leakage</p>
          <div className="text-6xl md:text-[92px] font-black text-white tracking-tighter mb-6 leading-none">
            ${(impact / 1000000).toFixed(1)}M
          </div>
          <p className="text-white/40 font-medium text-lg leading-relaxed max-w-[280px] mb-12">
            Projected annual capital lost to organizational inefficiency and structural drift.
          </p>
          <button className="w-full bg-[#466FF6] text-white py-7 rounded-2xl font-black text-xl shadow-2xl shadow-[#466FF6]/20 hover:scale-[1.02] active:scale-95 transition-all">
            Audit Your Org Design
          </button>
          <div className="mt-10 flex items-center gap-3 text-white/20">
            <div className="w-1.5 h-1.5 bg-[#466FF6] rounded-full animate-pulse"></div>
            <span className="text-[9px] font-black uppercase tracking-widest">Verified by L&D Efficiency Benchmarks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- System Architect (Point 2 - Incorporating 'Together') ---
export const SystemArchitect: React.FC = () => {
  const [stage, setStage] = useState<'SCALE' | 'GROW' | 'STABILIZE'>('GROW');

  const configs = {
    SCALE: {
      title: "Market Expansion",
      desc: "Scaling headcount without losing cultural coherence.",
      mix: { SCALE: '70%', GROW: '10%', EXEC: '5%', TOGETHER: '15%' },
      focus: "Cultural Baseline"
    },
    GROW: {
      title: "Leadership Gap Fix",
      desc: "When middle management becomes the constraint on execution.",
      mix: { SCALE: '15%', GROW: '60%', EXEC: '10%', TOGETHER: '15%' },
      focus: "Manager Readiness"
    },
    STABILIZE: {
      title: "Resilience & Retention",
      desc: "Retaining critical talent when pressure compounds.",
      mix: { SCALE: '10%', GROW: '20%', EXEC: '40%', TOGETHER: '30%' },
      focus: "Exec Presence & Sync"
    }
  };

  return (
    <div className="py-32 px-6 bg-white border-y border-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-32 items-center">
          <div>
            <p className="text-[#466FF6] font-black text-[10px] tracking-[0.5em] uppercase mb-10">System Configuration</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-12 text-[#2E353D]">
              Map the system to your <br/><span className="text-[#466FF6] italic font-serif">pressure point</span>.
            </h2>
            
            <div className="flex flex-col gap-6">
              {Object.keys(configs).map((k) => (
                <button 
                  key={k}
                  onClick={() => setStage(k as any)}
                  className={`text-left p-10 rounded-[40px] border transition-all duration-500 ${stage === k ? 'bg-[#F4F7FF] border-[#466FF6] shadow-xl' : 'bg-white border-gray-100 opacity-40 hover:opacity-100'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-[11px] font-black uppercase tracking-widest text-[#466FF6]">{configs[k as keyof typeof configs].title}</div>
                    {stage === k && <div className="w-2 h-2 rounded-full bg-[#466FF6]"></div>}
                  </div>
                  <div className="text-[#2E353D] text-lg font-bold tracking-tight">{configs[k as keyof typeof configs].desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#F0F3F7] rounded-[72px] p-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5">
                <svg className="w-64 h-64" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="0.5" /></svg>
             </div>

             <div className="space-y-12 relative z-10">
                {Object.entries(configs[stage].mix).map(([key, width]) => (
                  <div key={key}>
                    <div className="flex justify-between items-end mb-4">
                      <span className={`text-xl font-black tracking-tight ${key === 'TOGETHER' ? 'text-[#FDB022]' : 'text-[#2E353D]'}`}>BOON {key}</span>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Example allocation</span>
                    </div>
                    <div className="h-5 bg-white rounded-full overflow-hidden border border-gray-100 shadow-inner p-1">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${key === 'TOGETHER' ? 'bg-[#FDB022]' : 'bg-[#466FF6]'}`}
                        style={{ width }}
                      ></div>
                    </div>
                  </div>
                ))}
             </div>
             
             <div className="mt-20 p-12 bg-white rounded-[48px] shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="max-w-xs">
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2">System Focus</p>
                  <h4 className="text-3xl font-black text-[#2E353D] tracking-tighter">{configs[stage].focus}</h4>
                </div>
                <button className="flex items-center gap-4 text-[#466FF6] font-black uppercase text-[11px] tracking-[0.3em] group hover:gap-6 transition-all">
                  Get Full Blueprint <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
