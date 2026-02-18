'use client';

import Link from 'next/link';
import { useState } from 'react';

// ── Inline SVG icons from uploaded files ──────────────────────────

function ScaleIcon() {
  return (
    <svg width="49" height="27" viewBox="0 0 49 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.25 25.2148L15.7473 10.7175L26.6136 21.5838L46.9474 1.24996" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M46.9473 13.5884V1.25006H34.6089" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GrowIcon() {
  return (
    <svg width="49" height="27" viewBox="0 0 49 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2252 25.4468H1.25V14.8778H12.2252V25.4468Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.7225 25.4468H18.7473V8.06407H29.7225V25.4468Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M47.2501 25.4463H36.2749V1.24992H47.2501V25.4463Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ExecIcon() {
  return (
    <svg width="39" height="45" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.1731 42.7886H30.327" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.9424 42.7886H27.5579V34.4808H10.9424V42.7886Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.55764 4.0194H1.25V11.1156C1.25 15.7036 4.96978 19.4233 9.55764 19.4233" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.9424 4.0194H37.25V11.1156C37.25 15.7036 33.5302 19.4233 28.9424 19.4233" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.9424 1.24979H9.55762V17.5204C9.55762 20.0903 10.5788 22.5557 12.3961 24.3729C14.2135 26.1903 16.678 27.2114 19.2486 27.2114H19.2515C21.8219 27.2114 24.2866 26.1903 26.1039 24.3729C27.9211 22.5557 28.9424 20.0903 28.9424 17.5204V1.24979Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.25 34.481V27.2117" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TogetherIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.8397 8.19931C28.8397 12.0372 25.7285 15.1484 21.8905 15.1484C18.0526 15.1484 14.9414 12.0372 14.9414 8.19931C14.9414 4.3614 18.0526 1.25019 21.8905 1.25019C25.7285 1.25019 28.8397 4.3614 28.8397 8.19931Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.1257 42.25H18.6228" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.1511 18.9363C15.3298 16.6053 18.4319 15.1482 21.8744 15.1482C25.3185 15.1482 28.4222 16.6068 30.601 18.9399" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40.7613 25.1046C40.7613 28.9425 37.6501 32.0537 33.8122 32.0537C29.9742 32.0537 26.863 28.9425 26.863 25.1046C26.863 21.2667 29.9742 18.1555 33.8122 18.1555C37.6501 18.1555 40.7613 21.2667 40.7613 25.1046Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.1257 42.25V40.74C25.1257 35.9426 29.0147 32.0535 33.8121 32.0535C38.6096 32.0535 42.4985 35.9426 42.4985 40.74V42.25H25.1257Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.9306 25.1493C16.9306 29.0121 13.7992 32.1436 9.93635 32.1436C6.07359 32.1436 2.94214 29.0121 2.94214 25.1493C2.94214 21.2865 6.07359 18.1551 9.93635 18.1551C13.7992 18.1551 16.9306 21.2865 16.9306 25.1493Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.25 42.25V40.74C1.25 35.9426 5.13899 32.0535 9.93641 32.0535C14.7338 32.0535 18.6228 35.9426 18.6228 40.74V42.25H1.25Z" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Card data ─────────────────────────────────────────────────────

const systemItems = [
  {
    id: 'scale',
    name: 'SCALE',
    icon: <ScaleIcon />,
    desc: '1:1 coaching for everyone—not just execs.',
    // coral-to-purple gradient matching Figma card 1
    gradient: 'radial-gradient(ellipse at bottom left, #FFB3C1 0%, #C4B5FD 60%, #EEF2FA 100%)',
  },
  {
    id: 'grow',
    name: 'GROW',
    icon: <GrowIcon />,
    desc: 'Cohort-based development for new and rising managers.',
    gradient: 'radial-gradient(ellipse at bottom left, #BFDBFE 0%, #DDD6FE 60%, #EEF2FA 100%)',
  },
  {
    id: 'exec',
    name: 'EXEC',
    icon: <ExecIcon />,
    desc: 'Strategic sparring for executive leadership.',
    gradient: 'radial-gradient(ellipse at bottom left, #A5F3FC 0%, #BAE6FD 60%, #EEF2FA 100%)',
  },
  {
    id: 'together',
    name: 'TOGETHER',
    icon: <TogetherIcon />,
    desc: 'Team sessions that build shared language and capability.',
    gradient: 'radial-gradient(ellipse at bottom left, #FDE68A 0%, #FCA5A5 60%, #EEF2FA 100%)',
  },
];

export function SystemArchitectureSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <p className="label-text text-[10px] text-[#466FF6] mb-6 tracking-[0.25em]">
            The System Architecture
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-black text-[#1A253B] leading-[1.05] tracking-tight mb-8">
            One leadership system.{' '}
            <span className="font-serif italic text-[#466FF6]">
              Not four disconnected programs.
            </span>
          </h2>
          <p className="text-lg text-gray-500 font-sans font-medium leading-relaxed max-w-3xl mx-auto">
            Boon unifies coaching, manager development, executive support, and shared capability into a single system designed to compound as organizations scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {systemItems.map((item) => {
            const isHovered = hovered === item.id;
            return (
              <Link
                key={item.id}
                href={`/solutions/${item.id}`}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative rounded-[35px] p-8 border border-gray-100 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-transparent min-h-[280px]"
              >
                {/* Gradient background — only on hover */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 rounded-[35px]"
                  style={{
                    background: item.gradient,
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                {/* Default bg when not hovered */}
                <div
                  className="absolute inset-0 rounded-[35px] bg-[#F4F6FB] transition-opacity duration-300"
                  style={{ opacity: isHovered ? 0 : 1 }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-5 flex-1">
                  {/* Icon */}
                  <div className="text-[#111A2B] w-fit">
                    {item.icon}
                  </div>

                  {/* Name */}
                  <h3 className="font-sans text-2xl font-medium text-[#1A253B] leading-tight">
                    Boon <strong className="font-black">{item.name}</strong>
                  </h3>

                  {/* Description */}
                  <p className="text-[#2E353D] font-sans font-normal text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Explore link */}
                <div className="relative z-10 mt-8">
                  <span className="label-text text-[10px] text-[#466FF6] tracking-[0.2em]">
                    EXPLORE PILLAR →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
