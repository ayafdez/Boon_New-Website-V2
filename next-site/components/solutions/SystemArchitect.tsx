'use client';

import { useState } from 'react';
import Link from 'next/link';

const configs = {
  SCALE: {
    title: 'Market Expansion',
    desc: 'Scaling headcount without losing cultural coherence.',
    mix: { SCALE: '70%', GROW: '10%', EXEC: '5%', TOGETHER: '15%' },
    focus: 'Cultural Baseline',
  },
  GROW: {
    title: 'Leadership Gap Fix',
    desc: 'When middle management becomes the constraint on execution.',
    mix: { SCALE: '15%', GROW: '60%', EXEC: '10%', TOGETHER: '15%' },
    focus: 'Manager Readiness',
  },
  STABILIZE: {
    title: 'Resilience & Retention',
    desc: 'Retaining critical talent when pressure compounds.',
    mix: { SCALE: '10%', GROW: '20%', EXEC: '40%', TOGETHER: '30%' },
    focus: 'Exec Presence & Sync',
  },
};

type ConfigKey = keyof typeof configs;

export function SystemArchitect() {
  const [stage, setStage] = useState<ConfigKey>('GROW');

  return (
    <div className="py-32 px-6 bg-white border-y border-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-32 items-center">
          <div>
            <p className="label-text text-[10px] text-boon-blue mb-10">
              System Configuration
            </p>
            <h2 className="font-sans text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight lg:leading-[0.9] mb-12 text-boon-charcoal">
              Map the system to the right <br />
              <span className="font-serif italic text-boon-blue">pressure point</span>.
            </h2>

            <div className="flex flex-col gap-6">
              {(Object.keys(configs) as ConfigKey[]).map((k) => (
                <button
                  key={k}
                  onClick={() => setStage(k)}
                  className={`text-left p-10 rounded-[40px] border transition-all duration-500 ${
                    stage === k
                      ? 'bg-boon-light-blue/30 border-boon-blue shadow-xl'
                      : 'bg-white border-gray-100 opacity-40 hover:opacity-100'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="label-text text-[11px] text-boon-blue">
                      {configs[k].title}
                    </div>
                    {stage === k && <div className="w-2 h-2 rounded-full bg-boon-blue"></div>}
                  </div>
                  <div className="text-boon-charcoal text-lg font-body font-bold tracking-tight">{configs[k].desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-boon-off-white rounded-[32px] md:rounded-[72px] p-8 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <svg className="w-64 h-64" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="0.5" />
              </svg>
            </div>

            <div className="space-y-12 relative z-10">
              {Object.entries(configs[stage].mix).map(([key, width]) => (
                <div key={key}>
                  <div className="flex justify-between items-end mb-4">
                    <span
                      className={`text-xl font-sans font-bold tracking-tight ${
                        key === 'TOGETHER' ? 'text-boon-gold' : 'text-boon-charcoal'
                      }`}
                    >
                      BOON {key}
                    </span>
                    <span className="label-text text-[10px] text-gray-400">
                      Example allocation
                    </span>
                  </div>
                  <div className="h-5 bg-white rounded-full overflow-hidden border border-gray-100 shadow-inner p-1">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        key === 'TOGETHER' ? 'bg-boon-gold' : 'bg-boon-blue'
                      }`}
                      style={{ width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-12 bg-white rounded-[48px] shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="max-w-xs">
                <p className="label-text text-[10px] text-gray-300 mb-2">
                  System Focus
                </p>
                <h3 className="font-sans text-3xl font-bold text-boon-charcoal tracking-tight">
                  {configs[stage].focus}
                </h3>
              </div>
              <Link href="/demo" className="flex items-center gap-4 label-text text-[11px] text-boon-blue group hover:gap-6 transition-all">
                Get Full Blueprint{' '}
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
