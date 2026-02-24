'use client';

import { useState } from 'react';
import Link from 'next/link';

// ── Timeline products ─────────────────────────────────────────────────────────
const products = [
  {
    name: 'Boon Scale',
    desc: '1:1 coaching for everyone, not just execs',
    href: '/solutions/scale',
    dotColor: '#466FF6',
    linkColor: '#466FF6',
  },
  {
    name: 'Boon Together',
    desc: 'Team sessions that build shared language and capability',
    href: '/solutions/together',
    dotColor: '#FFC969',
    linkColor: '#FFC969',
  },
  {
    name: 'Boon Grow',
    desc: 'Structured development for new and rising managers',
    href: '/solutions/grow',
    dotColor: '#FF6D6A',
    linkColor: '#FF6D6A',
  },
  {
    name: 'Boon Exec',
    desc: 'Strategic sparring for senior leadership',
    href: '/solutions/exec',
    dotColor: '#C47ACC',
    linkColor: '#C47ACC',
  },
];

// ── Configurator scenarios ────────────────────────────────────────────────────
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

// Bar colors per product
const BAR_COLORS: Record<string, string> = {
  SCALE: '#466FF6',
  GROW: '#FF8D80',
  EXEC: '#C47ACC',
  TOGETHER: '#FFC969',
};

export function SystemArchitect() {
  const [stage, setStage] = useState<ConfigKey>('GROW');

  return (
    <div className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ── Part 1: Timeline ────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="label-text text-[10px] text-boon-blue mb-6">
            The System Architecture
          </p>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[0.9] text-boon-charcoal">
            Four products. One{' '}
            <span className="font-serif italic text-boon-blue">continuous</span>{' '}
            thread.
          </h2>
        </div>

        {/* Gradient timeline line + dots */}
        <div className="relative mb-10 max-w-6xl mx-auto">
          <div
            className="absolute top-1/2 left-0 right-0 h-[3px] -translate-y-1/2"
            style={{
              background: 'linear-gradient(to right, #466FF6 0%, #FFC969 33%, #FF6D6A 66%, #C47ACC 100%)',
              borderRadius: '999px',
            }}
          />
          <div className="relative flex justify-between items-center" style={{ height: '24px' }}>
            {products.map((product) => (
              <div
                key={product.name}
                className="w-4 h-4 rounded-full border-2 border-white"
                style={{
                  backgroundColor: product.dotColor,
                  boxShadow: `0 0 0 2px ${product.dotColor}33`,
                  zIndex: 10,
                  position: 'relative',
                }}
              />
            ))}
          </div>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 max-w-6xl mx-auto mb-32">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col gap-2">
              <h3 className="font-sans font-bold text-lg text-boon-charcoal leading-tight tracking-tight">
                {product.name}
              </h3>
              <p className="text-sm font-body text-gray-500 leading-relaxed">
                {product.desc}
              </p>
              <Link
                href={product.href}
                className="mt-2 inline-flex items-center gap-1 group label-text text-[10px] tracking-widest uppercase"
                style={{ color: product.linkColor }}
              >
                Learn More
                <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* ── Part 2: Configurator ─────────────────────────────────────────── */}
        <div className="border-t border-gray-100 pt-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-32 items-center">

            {/* Left — scenario selector */}
            <div>
              <p className="label-text text-[10px] text-boon-blue mb-6">
                System Configuration
              </p>
              <h2 className="font-sans text-3xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[0.9] mb-10 text-boon-charcoal">
                Map the system to the right{' '}
                <span className="font-serif italic text-boon-blue">pressure point</span>.
              </h2>

              <div className="flex flex-col gap-4">
                {(Object.keys(configs) as ConfigKey[]).map((k) => (
                  <button
                    key={k}
                    onClick={() => setStage(k)}
                    className={`text-left p-8 rounded-[20px] border transition-all duration-300 ${
                      stage === k
                        ? 'bg-boon-light-blue/30 border-boon-blue shadow-lg'
                        : 'bg-white border-gray-100 opacity-40 hover:opacity-100'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <div className="label-text text-[10px] text-boon-blue">
                        {configs[k].title}
                      </div>
                      {stage === k && <div className="w-2 h-2 rounded-full bg-boon-blue" />}
                    </div>
                    <div className="font-sans font-bold text-base text-boon-charcoal tracking-tight">
                      {configs[k].desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right — allocation bars */}
            <div className="bg-boon-off-white rounded-[20px] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <svg className="w-64 h-64" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="space-y-10 relative z-10">
                {Object.entries(configs[stage].mix).map(([key, width]) => (
                  <div key={key}>
                    <div className="flex justify-between items-end mb-3">
                      <span className="font-sans font-bold text-base text-boon-charcoal tracking-tight">
                        Boon {key.charAt(0) + key.slice(1).toLowerCase()}
                      </span>
                      <span className="label-text text-[10px] text-gray-400">
                        Example allocation
                      </span>
                    </div>
                    <div className="h-4 bg-white rounded-full overflow-hidden border border-gray-100 shadow-inner p-0.5">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width, backgroundColor: BAR_COLORS[key] }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-white rounded-[20px] shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <p className="label-text text-[10px] text-gray-400 mb-2">System Focus</p>
                  <h4 className="font-sans text-xl md:text-2xl font-bold text-boon-charcoal tracking-tight">
                    {configs[stage].focus}
                  </h4>
                </div>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-3 label-text text-[11px] text-boon-blue group hover:gap-5 transition-all font-extrabold tracking-widest uppercase"
                >
                  Get Full Blueprint
                  <span className="text-lg group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
