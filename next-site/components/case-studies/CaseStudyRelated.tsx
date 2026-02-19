import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy, programColors } from '@/lib/content';

interface Props {
  studies: CaseStudy[];
}

export function CaseStudyRelated({ studies }: Props) {
  if (studies.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-boon-charcoal tracking-tighter mb-12">
          More case studies.
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {studies.map((other) => (
            <Link
              key={other.slug}
              href={`/learn/case-studies/${other.slug}`}
              className="group bg-white rounded-[48px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={other.heroImage}
                  alt={other.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div
                  className="absolute top-6 left-6 px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest"
                  style={{ backgroundColor: programColors[other.program] }}
                >
                  Boon {other.program}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-boon-charcoal mb-4 group-hover:text-boon-blue transition-colors">
                  {other.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  {other.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/learn/case-studies"
            className="inline-block bg-boon-blue text-white px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
