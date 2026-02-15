import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

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
    href: '/learn/events',
    description: 'Live workshops, webinars, and community events for people leaders.',
  },
];

export default function ResourcesPage() {
  return (
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

      {/* Toolkit Library Teaser */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-50 text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-8 uppercase border border-gray-100">
            Coming Soon
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#2E353D] tracking-tighter mb-6">
            Leadership toolkit library.
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
            Downloadable frameworks, conversation guides, and diagnostic tools built from thousands of real coaching sessions. Be the first to access our toolkit library when it launches.
          </p>
          <Link
            href="/demo"
            className="inline-block bg-[#466FF6] text-white px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl"
          >
            Book a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
