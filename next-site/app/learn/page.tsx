import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Learn',
  description:
    'Explore Boon\'s learning resources: blog posts, case studies, podcasts, events, and leadership development guides.',
  path: '/learn',
});

const resources = [
  {
    id: 'blog',
    title: 'Boon Blog',
    subtitle: 'Insights & Perspectives',
    description: 'Articles on leadership, management, and organizational development.',
    href: '/learn/blog',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    subtitle: 'Impact Stories',
    description: 'Real results from organizations using the Boon system.',
    href: '/learn/case-studies',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'podcast',
    title: 'The Human Layer',
    subtitle: 'Podcast',
    description: 'Conversations with operators about leadership in practice.',
    href: '/learn/podcast',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    id: 'live',
    title: 'Boon Live',
    subtitle: 'Events & Webinars',
    description: 'Interactive sessions and live learning experiences.',
    href: '/learn/live',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'resources',
    title: 'Resources',
    subtitle: 'Guides & Toolkits',
    description: 'Practical frameworks and tools for leadership development.',
    href: '/learn/resources',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function LearnPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase border border-gray-100">
            Learn Hub
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-[92px] font-black text-[#2E353D] leading-tight lg:leading-[0.85] tracking-tighter mb-10 max-w-5xl">
            Resources for <span className="text-[#466FF6] italic font-serif">growing leaders</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Insights, case studies, and practical tools from the Boon team and our network of operator coaches.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                href={resource.href}
                className="group bg-white p-6 md:p-12 rounded-[48px] border border-gray-100 hover:border-[#466FF6] hover:shadow-xl transition-all"
              >
                <div className="text-gray-400 group-hover:text-[#466FF6] transition-colors mb-8">
                  {resource.icon}
                </div>
                <div className="text-[10px] font-black text-[#466FF6] uppercase tracking-widest mb-2">
                  {resource.subtitle}
                </div>
                <h2 className="text-2xl font-black text-[#2E353D] mb-4">{resource.title}</h2>
                <p className="text-gray-500 font-medium leading-relaxed mb-8">{resource.description}</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-[#466FF6] transition-colors">
                  Explore <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
