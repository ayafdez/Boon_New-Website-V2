import type { Metadata } from 'next';
import Link from 'next/link';
import { allPodcasts } from 'contentlayer/generated';
import { generatePageMetadata, generateBreadcrumbJsonLd, generatePodcastSeriesJsonLd } from '@/lib/seo';
import { format, parseISO } from 'date-fns';

export const metadata: Metadata = generatePageMetadata({
  title: 'The Human Layer Podcast',
  description: 'Conversations with operators about leadership in practice. The Human Layer podcast by Boon.',
  path: '/learn/podcast',
});

const authorNames: Record<string, string> = {
  'Boon_Alex': 'Alex Simmons',
  'boonhealthstg': 'Boon',
  'alex@boon.coach': 'Alex Simmons',
};

export default function PodcastPage() {
  const episodes = allPodcasts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Podcast', path: '/learn/podcast' },
  ]);

  const podcastSeriesJsonLd = generatePodcastSeriesJsonLd();

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastSeriesJsonLd) }} />
    <main className="bg-white min-h-[60vh]">
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase border border-gray-100">
            The Human Layer
          </div>
          <h1 className="text-6xl md:text-[92px] font-black text-[#2E353D] leading-[0.85] tracking-tighter mb-10 max-w-5xl">
            The <span className="text-[#466FF6] italic font-serif">Podcast</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mb-8">
            Conversations with operators about leadership in practice.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://open.spotify.com/show/boon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1DB954]/10 text-[#1DB954] px-5 py-3 rounded-full text-sm font-bold hover:bg-[#1DB954]/20 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
              Spotify
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/boon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D56DFB]/10 text-[#9933CC] px-5 py-3 rounded-full text-sm font-bold hover:bg-[#D56DFB]/20 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.199 1.272 1.86 2.7 2.037 4.379.039.37-.25.696-.62.726a.663.663 0 01-.727-.62c-.15-1.4-.702-2.58-1.707-3.647-1.355-1.42-3.138-2.18-5.04-2.18-1.9 0-3.683.76-5.038 2.18-1.005 1.067-1.557 2.248-1.707 3.648a.664.664 0 01-.727.62.672.672 0 01-.62-.727c.178-1.679.838-3.107 2.037-4.38 1.608-1.684 3.72-2.586 6.056-2.586zm.048 3.334c1.623 0 3.115.627 4.286 1.858.862.906 1.387 2.017 1.53 3.258a.655.655 0 01-.584.72.66.66 0 01-.72-.583c-.108-1.005-.54-1.877-1.227-2.598-.959-1.009-2.2-1.341-3.285-1.341-1.084 0-2.326.332-3.285 1.341-.687.721-1.119 1.593-1.228 2.598a.66.66 0 01-.72.584.655.655 0 01-.583-.72c.143-1.242.668-2.353 1.53-3.259 1.17-1.231 2.662-1.858 4.286-1.858zm-.04 4.716c1.385 0 2.509 1.124 2.509 2.509 0 .753-.313 1.533-.86 2.334-.38.558-.843 1.096-1.384 1.674a.664.664 0 01-.955.014c-.534-.567-.993-1.098-1.371-1.65-.555-.812-.87-1.597-.87-2.372 0-1.385 1.125-2.509 2.51-2.509h.42z"/></svg>
              Apple Podcasts
            </a>
            <a
              href="https://www.youtube.com/@boonhealth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF0000]/10 text-[#FF0000] px-5 py-3 rounded-full text-sm font-bold hover:bg-[#FF0000]/20 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </a>
          </div>
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
                      {episode.author && <span>{authorNames[episode.author] || episode.author}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
    </>
  );
}
