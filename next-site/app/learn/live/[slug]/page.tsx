import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allBoonLives } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { format, parseISO } from 'date-fns';

interface PageProps {
  params: { slug: string };
}

interface Speaker {
  name: string;
  title: string;
  company: string;
  image?: string;
}

// Decode HTML entities like &amp; to &
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

// Extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/,
    /youtube\.com\/watch\?.*v=([^&\s]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Parse speakers from JSON string or extract from content
function parseSpeakers(speakersJson?: string): Speaker[] {
  if (!speakersJson) return [];
  try {
    return JSON.parse(speakersJson);
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  return allBoonLives.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const event = allBoonLives.find((e) => e.slug === params.slug);
  if (!event) return {};

  const title = decodeHtmlEntities(event.title);

  return {
    title: `${title} | Boon Live`,
    description: event.excerpt || event.description,
  };
}

function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component />;
}

export default function BoonLiveEventPage({ params }: PageProps) {
  const event = allBoonLives.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  const title = decodeHtmlEntities(event.title);
  const speakers = parseSpeakers(event.speakersJson);
  const videoId = event.youtubeUrl ? getYouTubeVideoId(event.youtubeUrl) : null;
  // Safely access body.code - may be undefined in some environments
  const body = event.body as unknown as { code?: string; raw?: string };
  const bodyCode = body?.code;

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section with Video */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-24 bg-boon-light-blue/30">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/learn/live"
            className="inline-flex items-center gap-2 text-boon-blue text-sm font-bold mb-8 hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Boon Live
          </Link>

          {/* Video Embed */}
          {videoId && (
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-10">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          )}

          {/* Title */}
          <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-black text-boon-blue leading-[1.1] tracking-tight mb-2">
            {title.includes(':') ? (
              <>
                {title.split(':')[0]}:
                <br />
                <span className="text-boon-charcoal">{title.split(':').slice(1).join(':').trim()}</span>
              </>
            ) : (
              title
            )}
          </h1>

          <p className="text-gray-500 font-medium mt-4 mb-8">
            Watch on <span className="font-bold">YouTube</span> for the transcript.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            {event.youtubeUrl && (
              <a
                href={event.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-boon-coral text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Now
              </a>
            )}
            {event.downloadUrl && (
              <a
                href={event.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-boon-coral px-8 py-4 rounded-full font-bold text-base border-2 border-boon-coral hover:bg-boon-coral hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Webinar Summary PDF
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      {speakers.length > 0 && (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-boon-light-blue/20 rounded-3xl p-8 md:p-12 border border-boon-blue/10">
              <h2 className="font-sans text-2xl md:text-3xl font-black text-boon-charcoal mb-8">
                {speakers.map((s, i) => (
                  <span key={s.name}>
                    <span className="text-boon-blue">{s.name}</span>
                    <span className="text-gray-400 font-medium"> ({s.company})</span>
                    {i < speakers.length - 1 && (i === speakers.length - 2 ? ', and ' : ', ')}
                  </span>
                ))}
                <span className="text-boon-charcoal"> explored:</span>
              </h2>

              {/* Speaker Avatars */}
              <div className="flex flex-wrap gap-6 mt-8">
                {speakers.map((speaker) => (
                  <div key={speaker.name} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-boon-blue/20 flex items-center justify-center overflow-hidden">
                      {speaker.image ? (
                        <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-boon-blue font-bold text-lg">
                          {speaker.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-boon-charcoal">{speaker.name}</p>
                      <p className="text-sm text-gray-500">{speaker.title}</p>
                      <p className="text-sm text-boon-blue font-medium">{speaker.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Topic Summary Callout */}
      {event.topicSummary && (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-boon-blue/5 to-boon-coral/5 rounded-3xl p-8 md:p-12 border-l-4 border-boon-blue">
              <h3 className="font-sans text-xl font-black text-boon-charcoal mb-4">What We Covered</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-lg">
                {event.topicSummary}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Key Takeaways Section */}
      {event.keyTakeaways && event.keyTakeaways.length > 0 && (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-sans text-3xl md:text-4xl font-black text-boon-blue mb-10">
              Key Takeaways
            </h2>
            <div className="space-y-6">
              {event.keyTakeaways.map((takeaway, index) => {
                const parts = takeaway.split(':');
                const hasTitle = parts.length > 1;
                return (
                  <div
                    key={index}
                    className="flex gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-boon-blue/10 flex items-center justify-center">
                      <span className="text-boon-blue font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      {hasTitle ? (
                        <>
                          <p className="font-bold text-boon-charcoal mb-1">{parts[0]}</p>
                          <p className="text-gray-600 leading-relaxed">{parts.slice(1).join(':').trim()}</p>
                        </>
                      ) : (
                        <p className="text-gray-600 leading-relaxed">{takeaway}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Content Section (for any additional MDX content) */}
      <article className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-boon max-w-none">
            {bodyCode && <MDXContent code={bodyCode} />}
          </div>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-boon-blue relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-boon-coral/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 blur-2xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-sans text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
            Curious how Boon can help your company navigate the shift?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-boon-coral text-white px-10 py-5 rounded-full font-sans font-bold text-lg shadow-xl hover:scale-105 transition-all"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/learn/live"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-10 py-5 rounded-full font-sans font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              More Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
