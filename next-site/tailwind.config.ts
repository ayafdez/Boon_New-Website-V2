import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'container': '35px',
        'btn': '15px',
      },
      colors: {
        // Primary Brand Colors
        'boon-blue': '#466FF6',
        'boon-deep-blue': '#365ABD',
        'boon-coral': '#FF6D6A',
        'boon-light-coral': '#FF8D80',
        'boon-light-blue': '#CCD9FF',
        'boon-off-white': '#F0F3F7',
        'boon-charcoal': '#2E353D',

        // Dark Mode / Authority Colors
        'boon-navy': '#1A253B',
        'boon-deep-navy': '#111A2B',

        // Accent Colors (Data Viz & Highlights)
        'boon-soft-coral': '#FFBBBB',
        'boon-purple': '#C47ACC',
        'boon-gold': '#FFC969',
        'boon-green': '#6CD893',

        // Legacy aliases (for backwards compatibility during migration)
        'boon-dark': '#2E353D',
        'boon-red': '#FF6D6A',
        'boon-yellow': '#FDB022',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'DM Serif Text', 'serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'boon-gradient': 'linear-gradient(135deg, #466FF6 0%, #FF6D6A 100%)',
        'boon-gradient-soft': 'linear-gradient(135deg, #CCD9FF 0%, #FFBBBB 100%)',
        'boon-gradient-hero': 'linear-gradient(180deg, #F0F3F7 0%, #CCD9FF 50%, #FFBBBB 100%)',
      },
      typography: {
        boon: {
          css: {
            '--tw-prose-body': '#6B7280',
            '--tw-prose-headings': '#2E353D',
            '--tw-prose-lead': '#4B5563',
            '--tw-prose-links': '#466FF6',
            '--tw-prose-bold': '#2E353D',
            '--tw-prose-counters': '#466FF6',
            '--tw-prose-bullets': '#466FF6',
            '--tw-prose-hr': '#E5E7EB',
            '--tw-prose-quotes': '#2E353D',
            '--tw-prose-quote-borders': '#466FF6',
            '--tw-prose-captions': '#6B7280',
            '--tw-prose-code': '#2E353D',
            '--tw-prose-pre-code': '#E5E7EB',
            '--tw-prose-pre-bg': '#1A253B',
            '--tw-prose-th-borders': '#D1D5DB',
            '--tw-prose-td-borders': '#E5E7EB',
            // Base styles
            fontSize: '1.125rem',
            lineHeight: '1.75',
            // Headings
            h1: {
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontWeight: '900',
              fontSize: '2.5rem',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
            },
            h2: {
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontWeight: '800',
              fontSize: '1.875rem',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            h3: {
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontWeight: '700',
              fontSize: '1.5rem',
              lineHeight: '1.3',
              letterSpacing: '-0.01em',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            h4: {
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontWeight: '700',
              fontSize: '1.25rem',
              lineHeight: '1.4',
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
            },
            // Paragraphs
            p: {
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: '500',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            // Links
            a: {
              fontWeight: '600',
              textDecoration: 'none',
              borderBottom: '2px solid #CCD9FF',
              transition: 'border-color 0.2s ease',
              '&:hover': {
                borderColor: '#466FF6',
              },
            },
            // Lists
            ul: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            ol: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            li: {
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: '500',
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            'ul > li::marker': {
              color: '#466FF6',
            },
            'ol > li::marker': {
              color: '#466FF6',
              fontWeight: '700',
            },
            // Blockquotes
            blockquote: {
              fontFamily: 'var(--font-dm-serif), DM Serif Text, serif',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              fontWeight: '400',
              borderLeftWidth: '4px',
              borderLeftColor: '#466FF6',
              paddingLeft: '1.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            // Strong/Bold
            strong: {
              fontWeight: '700',
              color: '#2E353D',
            },
            // Code
            code: {
              fontWeight: '500',
              backgroundColor: '#F3F4F6',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.375rem',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            // Pre/Code blocks
            pre: {
              borderRadius: '1rem',
              padding: '1.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            // Horizontal rule
            hr: {
              marginTop: '3rem',
              marginBottom: '3rem',
            },
            // Images
            img: {
              borderRadius: '1rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            // Tables
            table: {
              fontSize: '0.875rem',
            },
            'thead th': {
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontSize: '0.75rem',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
