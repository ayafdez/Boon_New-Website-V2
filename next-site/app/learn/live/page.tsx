import type { Metadata } from 'next';
import Link from 'next/link';
import { allBoonLives } from 'contentlayer/generated';
import { generatePageMetadata, generateEventJsonLd, siteUrl } from '@/lib/seo';
import { format, parseISO } from 'date-fns';

export const metadata: Metadata = generatePageMetadata({
  title: 'Boon Live',
  description: 'Events, webinars, and live learning experiences from Boon.',
  path: '/learn/live',
});

export default function LivePage() {
  const now = new Date();
  const allEvents = allBoonLives.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const upcoming = allEvents.filter((e) => new Date(e.date) >= now);
  const past = allEvents.filter((e) => new Date(e.date) < now);

  const eventJsonLd = allEvents.map((event) =>
    generateEventJsonLd({
      name: event.title,
      startDate: event.date,
      description: event.excerpt,
      url: `${siteUrl}/learn/live/${event.slug}`,
      isUpcoming: new Date(event.date) >= now,
      hasRecording: !!(event.recordingUrl || event.youtubeUrl),
    })
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <main className="bg-white min-h-[60vh]">
        <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gray-50 text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase border border-gray-100">
              Boon Live
            </div>
            <h1 className="text-6xl md:text-[92px] font-black text-[#2E353D] leading-[0.85] tracking-tighter mb-10 max-w-5xl">
              Events & <span className="text-[#466FF6] italic font-serif">Webinars</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl">
              Interactive sessions and live learning experiences with our team and coaches.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-[#2E353D] tracking-tight mb-12">Upcoming Events</h2>
            {upcoming.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                <p className="text-gray-500 font-medium mb-4">No upcoming events right now.</p>
                <p className="text-gray-400 text-sm">Check back soon or follow us on LinkedIn to get notified.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcoming.map((event) => (
                  <Link
                    key={event.slug}
                    href={`/learn/live/${event.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    {event.featuredImage && (
                      <div className="aspect-video overflow-hidden bg-gray-100">
                        <img
                          src={event.featuredImage}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {event.categories && event.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {event.categories.slice(0, 2).map((category) => (
                            <span
                              key={category}
                              className="text-[10px] tracking-widest font-bold text-[#466FF6] uppercase"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-[#2E353D] mb-3 group-hover:text-[#466FF6] transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      {event.excerpt && (
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                          {event.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{format(parseISO(event.date), 'MMMM d, yyyy')}</span>
                        {event.author && <span>{event.author}</span>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Past Events */}
        {past.length > 0 && (
          <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black text-[#2E353D] tracking-tight mb-12">Past Events</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {past.map((event) => (
                  <Link
                    key={event.slug}
                    href={`/learn/live/${event.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    {event.featuredImage && (
                      <div className="aspect-video overflow-hidden bg-gray-100 relative">
                        <img
                          src={event.featuredImage}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {event.categories && event.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {event.categories.slice(0, 2).map((category) => (
                            <span
                              key={category}
                              className="text-[10px] tracking-widest font-bold text-[#466FF6] uppercase"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-[#2E353D] mb-3 group-hover:text-[#466FF6] transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      {event.excerpt && (
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                          {event.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{format(parseISO(event.date), 'MMMM d, yyyy')}</span>
                        {event.author && <span>{event.author}</span>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
