import type { Metadata } from 'next';
import Link from 'next/link';
import { allPodcasts } from 'contentlayer/generated';
import { generatePageMetadata } from '@/lib/seo';
import { format, parseISO } from 'date-fns';

export const metadata: Metadata = generatePageMetadata({
  title: 'The Human Layer Podcast',
  description: 'Conversations with operators about leadership in practice. The Human Layer podcast by Boon.',
  path: '/learn/podcast',
});

export default function PodcastPage() {
  const episodes = allPodcasts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="bg-white min-h-[60vh]">
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase border border-gray-100">
            The Human Layer
          </div>
          <h1 className="text-6xl md:text-[92px] font-black text-[#2E353D] leading-[0.85] tracking-tighter mb-10 max-w-5xl">
            The <span className="text-[#466FF6] italic font-serif">Podcast</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Conversations with operators about leadership in practice.
          </p>
        </div>
      </section>
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          {episodes.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-400 font-medium">Episodes coming soon. Subscribe to be notified.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {episodes.map((episode) => (
                <Link
                  key={episode.slug}
                  href={`/learn/podcast/${episode.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  {episode.featuredImage && (
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      <img
                        src={episode.featuredImage}
                        alt={episode.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {episode.categories && episode.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {episode.categories.slice(0, 2).map((category) => (
                          <span
                            key={category}
                            className="text-[10px] tracking-widest font-bold text-[#466FF6] uppercase"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="text-xl font-bold text-[#2E353D] mb-3 group-hover:text-[#466FF6] transition-colors line-clamp-2">
                      {episode.title}
                    </h2>
                    {episode.excerpt && (
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        {episode.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{format(parseISO(episode.date), 'MMMM d, yyyy')}</span>
                      {episode.author && <span>{episode.author}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
