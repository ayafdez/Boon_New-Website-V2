import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';

export function BlogTeaser() {
  const latest = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 1)[0];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24" style={{ background: 'rgb(240, 243, 247)' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left — label + heading */}
        <div>
          <p className="label-text text-[10px] text-boon-blue mb-6">Blog</p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-boon-charcoal tracking-tight leading-[0.9]">
            Insights for leaders building{' '}
            <span className="font-serif italic text-boon-blue">what&apos;s next.</span>
          </h2>
        </div>

        {/* Right — latest post */}
        {latest && (
          <div className="flex flex-col gap-4">
            <Link
              href={`/learn/blog/${latest.slug}`}
              className="group"
            >
              <h3 className="font-sans font-bold text-boon-charcoal text-base md:text-lg leading-snug group-hover:text-boon-blue transition-colors underline underline-offset-4 decoration-boon-blue mb-3">
                {latest.title}
              </h3>
            </Link>

            {latest.excerpt && (
              <p className="text-sm md:text-base text-gray-500 font-body font-medium leading-relaxed">
                {latest.excerpt}
              </p>
            )}

            <div className="pt-2">
              <Link
                href="/learn/blog"
                className="inline-flex items-center gap-1 label-text text-[10px] text-boon-blue hover:gap-3 transition-all underline underline-offset-4"
              >
                View all articles →
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
