import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/seo';
import { getCaseStudies } from '@/lib/content';

export const metadata: Metadata = generatePageMetadata({
  title: 'Case Studies',
  description:
    'Explore how organizations are using Boon to transform their leadership development and achieve measurable results.',
  path: '/learn/case-studies',
});

const programColors = {
  Scale: '#466FF6',
  Grow: '#FF8D80',
  Exec: '#2E353D',
  Together: '#FDB022',
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase border border-gray-100">
            Case Studies
          </div>
          <h1 className="text-6xl md:text-[92px] font-black text-[#2E353D] leading-[0.85] tracking-tighter mb-10 max-w-5xl">
            Real results from <span className="text-[#466FF6] italic font-serif">real organizations</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            See how companies are using Boon to build leadership capability at scale.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/learn/case-studies/${study.slug}`}
                className="group bg-white rounded-[48px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={study.heroImage}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div
                    className="absolute top-6 left-6 px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest"
                    style={{ backgroundColor: programColors[study.program] }}
                  >
                    Boon {study.program}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black text-[#2E353D] mb-4 group-hover:text-[#466FF6] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed mb-6">{study.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-[10px] font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
