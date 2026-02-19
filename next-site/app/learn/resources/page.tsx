import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Resources',
  description: 'Practical frameworks, guides, and tools for leadership development from Boon.',
  path: '/learn/resources',
});

const contentLinks = [
  {
    label: 'Case Studies',
    href: '/learn/case-studies',
    description: 'Real results from organizations using Boon to develop leaders at every level.',
  },
  {
    label: 'Blog',
    href: '/learn/blog',
    description: 'Insights on coaching, leadership development, and building high-performing teams.',
  },
  {
    label: 'Podcast',
    href: '/learn/podcast',
    description: 'Conversations with leaders and coaches on what actually drives growth.',
  },
  {
    label: 'Events',
    href: '/learn/live',
    description: 'Live workshops, webinars, and community events for people leaders.',
  },
];

const typeStyles: Record<string, { color: string; bg: string; icon: React.ReactNode }> = {
  Guide: {
    color: '#466FF6',
    bg: 'rgba(70, 111, 246, 0.08)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#466FF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  Infographic: {
    color: '#FF6D6A',
    bg: 'rgba(255, 109, 106, 0.08)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6D6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 16V12" /><path d="M12 16V8" /><path d="M16 16v-2" />
      </svg>
    ),
  },
  Ebook: {
    color: '#C47ACC',
    bg: 'rgba(196, 122, 204, 0.08)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C47ACC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
  Whitepaper: {
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.08)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  Article: {
    color: '#FFC969',
    bg: 'rgba(255, 201, 105, 0.08)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFC969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
};

const toolkitResources: {
  title: string;
  type: string;
  description: string;
  downloadUrl?: string;
  href?: string;
}[] = [
  {
    title: 'Coaching vs. Mentoring: What\u2019s the Difference?',
    type: 'Guide',
    description: 'When to use coaching, when to use mentoring, and how to combine them for maximum development impact.',
    href: '/learn/resources/coaching-vs-mentoring',
  },
  {
    title: 'Measuring Coaching ROI',
    type: 'Guide',
    description: 'A practical framework for measuring what coaching actually delivers, from leading indicators to business outcomes.',
    href: '/learn/resources/measuring-coaching-roi',
  },
  {
    title: 'How to Build a Leadership Development Program',
    type: 'Guide',
    description: 'From needs assessment to measurement, a step-by-step guide to building a program that changes behavior.',
    href: '/learn/resources/building-a-leadership-development-program',
  },
  {
    title: 'Leadership Development for Remote & Hybrid Teams',
    type: 'Guide',
    description: 'What changes when your team is distributed, and how to develop leaders who manage people they don\u2019t see every day.',
    href: '/learn/resources/leadership-development-remote-teams',
  },
  {
    title: 'The First-Time Manager Problem Nobody Talks About',
    type: 'Article',
    description: 'Why the transition from IC to manager fails so often, and what organizations can do differently.',
    href: '/learn/blog/first-time-manager',
  },
  {
    title: 'How to Make a Business Case for Scaling Coaching',
    type: 'Guide',
    description: 'A step-by-step framework to help HR leaders build a business case for coaching, gain leadership approval, and connect coaching to measurable business results.',
    downloadUrl: 'https://content.boon-health.com/hubfs/Ebook%20%E2%80%9CBuilding%20a%20business%20case%20for%20coaching%E2%80%9D%20V3.pdf',
  },
  {
    title: 'Leadership Skill Gap',
    type: 'Infographic',
    description: 'Identifies the 5 biggest leadership skill gaps and their organizational impact, with practical development recommendations.',
    downloadUrl: 'https://storage.googleapis.com/boon-public-assets/Leadership-Skill-Gap-Infographic.pdf',
  },
  {
    title: 'The Whole-Manager Playbook',
    type: 'Ebook',
    description: 'How Boon develops critical leadership skills managers need, building confidence, resilience, and high-performing teams beyond technical competencies.',
    downloadUrl: 'https://storage.googleapis.com/boon-public-assets/Boon_The-Whole-Manager-Playbook.pdf',
  },
  {
    title: 'Boon Coaching vs Therapy',
    type: 'Guide',
    description: 'A clear comparison of Boon\'s forward-focused coaching methodology and therapy approaches, helping you understand which is right for your team.',
    downloadUrl: 'https://content.boon-health.com/hubfs/PDFs/Boon_Coaching%20vs.%20Therapy.pdf',
  },
  {
    title: 'Empower Your Workforce',
    type: 'Ebook',
    description: 'How personalized coaching improves retention, enhances well-being, and drives productivity across your organization.',
    downloadUrl: 'https://content.boon-health.com/hubfs/PDFs/Boon_Ebook_Empower-Your-Workforce_2024.pdf',
  },
  {
    title: 'Boon Boosts Resilience',
    type: 'Whitepaper',
    description: 'How Boon coaches help organizations strengthen resilience, overcome challenges, and achieve lasting personal growth.',
    downloadUrl: 'https://content.boon-health.com/hubfs/PDFs/BoonHealth_Resilience.pdf',
  },
];

export default function ResourcesPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Resources', path: '/learn/resources' },
  ]);

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <main className="bg-white">
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase border border-gray-100">
            Resources
          </div>
          <h1 className="text-6xl md:text-[92px] font-black text-[#2E353D] leading-[0.85] tracking-tighter mb-10 max-w-5xl">
            Guides & <span className="text-[#466FF6] italic font-serif">Toolkits</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Practical frameworks and tools for leadership development.
          </p>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/learn/resources/what-is-leadership-development"
            className="group block bg-gradient-to-br from-[#1A253B] to-[#1e2d4a] rounded-3xl p-10 md:p-14 hover:shadow-2xl transition-all"
          >
            <span className="inline-block text-[10px] tracking-widest font-black text-[#FF8D80] uppercase mb-4">
              Featured Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 max-w-2xl">
              What Is Leadership Development?{' '}
              <span className="text-[#466FF6] italic font-serif">The Complete Guide.</span>
            </h2>
            <p className="text-lg text-white/70 font-medium leading-relaxed max-w-2xl mb-6">
              Everything you need to know about building a leadership development program that actually works. 20 min read.
            </p>
            <span className="inline-flex items-center gap-2 text-[#FF8D80] font-semibold text-sm group-hover:gap-3 transition-all">
              Read the guide <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Content Cross-Links */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-[#2E353D] tracking-tighter mb-12">
            Explore our content.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {contentLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white rounded-[48px] p-10 border border-gray-100 hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-black text-[#2E353D] mb-4 group-hover:text-[#466FF6] transition-colors">
                  {link.label}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Toolkit Library */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-8 uppercase border border-gray-100">
            Toolkit Library
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#2E353D] tracking-tighter mb-6">
            Leadership toolkit library.
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl mb-16">
            Downloadable frameworks, guides, and tools built from thousands of real coaching sessions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolkitResources.map((resource) => {
              const cardContent = (
                <>
                  <div
                    className="relative aspect-[4/3] flex items-center justify-center"
                    style={{ backgroundColor: typeStyles[resource.type]?.bg || '#F9FAFB' }}
                  >
                    <div className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      {typeStyles[resource.type]?.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="inline-block text-[10px] tracking-widest font-black text-[#466FF6] uppercase mb-3">
                      {resource.type}
                    </span>
                    <h3 className="text-xl font-black text-[#2E353D] mb-3 group-hover:text-[#466FF6] transition-colors leading-tight">
                      {resource.title}
                    </h3>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </>
              );

              if (resource.href) {
                return (
                  <Link
                    key={resource.title}
                    href={resource.href}
                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#466FF6]/30 transition-all"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <a
                  key={resource.title}
                  href={resource.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#466FF6]/30 transition-all"
                >
                  {cardContent}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
