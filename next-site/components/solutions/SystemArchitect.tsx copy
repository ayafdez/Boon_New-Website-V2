'use client';

import Link from 'next/link';

const products = [
  {
    name: 'Boon Scale',
    desc: '1:1 coaching for everyone, not just execs',
    href: '/scale',
    dotColor: '#466FF6',
    linkColor: '#466FF6',
  },
  {
    name: 'Boon Together',
    desc: 'Team sessions that build shared language and capability',
    href: '/together',
    dotColor: '#FFC969',
    linkColor: '#FFC969',
  },
  {
    name: 'Boon Grow',
    desc: 'Structured development for new and rising managers',
    href: '/grow',
    dotColor: '#FF6D6A',
    linkColor: '#FF6D6A',
  },
  {
    name: 'Boon Exec',
    desc: 'Strategic sparring for senior leadership',
    href: '/exec',
    dotColor: '#C47ACC',
    linkColor: '#C47ACC',
  },
];

export function SystemArchitect() {
  return (
    <div className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="label-text text-[10px] text-boon-blue mb-6"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            The System Architecture
          </p>
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#2E353D',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Four products. One{' '}
            <span
              style={{
                fontFamily: 'DM Serif Text, serif',
                fontStyle: 'italic',
                color: '#466FF6',
                fontWeight: 400,
              }}
            >
              continuous
            </span>{' '}
            thread.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-10">
          {/* Gradient line */}
          <div
            className="absolute top-1/2 left-0 right-0 h-[3px] -translate-y-1/2"
            style={{
              background:
                'linear-gradient(to right, #466FF6 0%, #FFC969 33%, #FF6D6A 66%, #C47ACC 100%)',
              borderRadius: '999px',
            }}
          />

          {/* Dots */}
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

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col gap-2">
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  color: '#2E353D',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                }}
              >
                {product.name}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8125rem',
                  color: '#6B7280',
                  lineHeight: 1.5,
                }}
              >
                {product.desc}
              </p>
              <Link
                href={product.href}
                className="mt-2 inline-flex items-center gap-1 group"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: product.linkColor,
                  textDecoration: 'none',
                }}
              >
                Learn More
                <span
                  className="transition-transform group-hover:translate-x-1"
                  style={{ display: 'inline-block' }}
                >
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
