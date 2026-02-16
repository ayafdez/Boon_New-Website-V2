import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allPodcasts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { format, parseISO } from 'date-fns';

interface PageProps {
  params: { slug: string };
}

interface Timestamp {
  time: string;
  label: string;
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

// Parse timestamps from JSON string
function parseTimestamps(timestampsJson?: string): Timestamp[] {
  if (!timestampsJson) return [];
  try {
    return JSON.parse(timestampsJson);
  } catch {
    return [];
  }
}

// Convert timestamp string (e.g., "03:25" or "1:23:45") to seconds
function timestampToSeconds(time: string): number {
  const parts = time.split(':').map(Number);
  if (parts.length === 3) {
    // HH:MM:SS
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    // MM:SS
    return parts[0] * 60 + parts[1];
  }
  return 0;
}

// Build YouTube URL with timestamp
function getYouTubeUrlWithTimestamp(videoId: string, time: string): string {
  const seconds = timestampToSeconds(time);
  return `https://www.youtube.com/watch?v=${videoId}&t=${seconds}s`;
}

export async function generateStaticParams() {
  return allPodcasts.map((episode) => ({
    slug: episode.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const episode = allPodcasts.find((e) => e.slug === params.slug);
  if (!episode) return {};

  const title = decodeHtmlEntities(episode.title);

  return {
    title: `${title} | The Human Layer Podcast`,
    description: episode.excerpt || episode.description,
  };
}

function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component />;
}

export default function PodcastEpisodePage({ params }: PageProps) {
  const episode = allPodcasts.find((e) => e.slug === params.slug);

  if (!episode) {
    notFound();
  }

  const title = decodeHtmlEntities(episode.title);
  const videoId = episode.youtubeUrl ? getYouTubeVideoId(episode.youtubeUrl) : null;
  const timestamps = parseTimestamps(episode.timestampsJson);
  // Safely access body.code - may be undefined in some environments
  const body = episode.body as unknown as { code?: string; raw?: string };
  const bodyCode = body?.code;

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section with Video */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-boon-light-blue/30 via-white to-boon-soft-coral/10">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/learn/podcast"
            className="inline-flex items-center gap-2 text-boon-blue text-sm font-bold mb-8 hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Podcast
          </Link>

          {/* Video Embed */}
          {videoId && (
            <div className="relative w-full aspect-video rounded-[35px] overflow-hidden shadow-2xl mb-10">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          )}

          {/* Episode Info */}
          {episode.categories && episode.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {episode.categories.map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center bg-boon-blue/10 text-boon-blue text-[10px] tracking-[0.2em] font-black px-4 py-2 rounded-[15px] uppercase"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-black text-boon-charcoal leading-[1.1] tracking-tight mb-4">
            {title}
          </h1>

          {/* Episode Meta */}
          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm font-medium mb-8">
            {episode.episodeNumber && (
              <span className="bg-boon-coral/10 text-boon-coral px-3 py-1 rounded-[15px] font-bold">
                Episode {episode.episodeNumber}
              </span>
            )}
            <time dateTime={episode.date}>
              {format(parseISO(episode.date), 'MMMM d, yyyy')}
            </time>
            {episode.duration && (
              <>
                <span className="text-gray-300">•</span>
                <span>{episode.duration}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Guest Section */}
      {episode.guest && (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-boon-blue/5 to-boon-coral/5 rounded-[35px] p-8 md:p-10 border border-gray-100">
              <h2 className="text-sm font-black text-boon-blue uppercase tracking-wider mb-6">
                Featured Guest
              </h2>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-boon-blue/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {episode.guestImage ? (
                    <img src={episode.guestImage} alt={episode.guest} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-boon-blue font-black text-2xl md:text-3xl">
                      {episode.guest.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-sans text-2xl md:text-3xl font-black text-boon-charcoal mb-2">
                    {episode.guest}
                  </h3>
                  {episode.guestTitle && (
                    <p className="text-gray-600 font-medium text-lg">{episode.guestTitle}</p>
                  )}
                  {episode.guestCompany && (
                    <p className="text-boon-blue font-bold">{episode.guestCompany}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Timestamps Section */}
      {timestamps.length > 0 && (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-[35px] p-8 md:p-10 border border-gray-100 shadow-sm">
              <h2 className="font-sans text-2xl font-black text-boon-charcoal mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-boon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Episode Chapters
              </h2>
              <div className="space-y-3">
                {timestamps.map((timestamp, index) => (
                  videoId ? (
                    <a
                      key={index}
                      href={getYouTubeUrlWithTimestamp(videoId, timestamp.time)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-boon-light-blue/20 transition-colors cursor-pointer group"
                    >
                      <span className="font-mono text-boon-blue font-bold bg-boon-blue/10 px-3 py-1 rounded-lg text-sm flex-shrink-0 group-hover:bg-boon-blue group-hover:text-white transition-colors">
                        {timestamp.time}
                      </span>
                      <span className="text-gray-700 font-medium group-hover:text-boon-charcoal transition-colors">
                        {timestamp.label}
                      </span>
                    </a>
                  ) : (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl"
                    >
                      <span className="font-mono text-boon-blue font-bold bg-boon-blue/10 px-3 py-1 rounded-lg text-sm flex-shrink-0">
                        {timestamp.time}
                      </span>
                      <span className="text-gray-700 font-medium">
                        {timestamp.label}
                      </span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Subscribe Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-sans text-2xl md:text-3xl font-black text-boon-charcoal mb-4">
              Listen & Subscribe
            </h2>
            <p className="text-gray-500 font-medium">
              Available on your favorite podcast platforms
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {episode.youtubeUrl && (
              <a
                href={episode.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FF0000] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            )}
            {episode.spotifyUrl && (
              <a
                href={episode.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1DB954] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Spotify
              </a>
            )}
            {episode.appleUrl && (
              <a
                href={episode.appleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F452FF] to-[#832BC1] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392l-2.016.588c-.228-1.272-.852-2.46-1.608-3.188-1.14-1.152-2.424-1.776-4.076-1.776-1.608 0-3.192.48-4.392 1.392-1.488 1.14-2.412 3.108-2.412 5.208 0 2.352 1.248 4.38 3.036 5.496 1.512.948 3.204 1.308 5.208 1.308l.18.012c1.296 0 2.544-.324 3.756-.888.516-.24 1.224-.648 1.74-1.008l1.224 1.764c-.972.636-1.788 1.104-2.544 1.404-1.428.564-2.988.852-4.62.852h-.18c-2.388 0-4.62-.564-6.432-1.86C5.148 16.968 3.5 14.436 3.5 11.58c0-2.676 1.2-5.088 3.132-6.732C8.496 3.252 10.704 2.568 13.2 2.568h-.024c-.084-.012.084 0 0 0h.024v.012-.012zm-.156 5.568c1.26 0 2.316.48 3.132 1.368.42.456.756.996.924 1.62l-1.836.564c-.12-.384-.324-.756-.636-1.044-.456-.42-1.008-.66-1.632-.66-.624 0-1.164.228-1.596.636-.504.48-.804 1.2-.804 1.98 0 .768.324 1.5.9 2.004.384.336.936.54 1.512.54.564 0 1.116-.18 1.548-.54.324-.264.6-.636.756-1.044l1.848.552c-.228.672-.612 1.26-1.116 1.74-.756.72-1.728 1.14-2.844 1.14-1.116 0-2.124-.42-2.916-1.188-.804-.78-1.248-1.848-1.248-3.024 0-1.188.456-2.244 1.272-3.012.768-.732 1.776-1.14 2.904-1.14-.012 0 .036 0 0 0l-.168-.012z"/>
                </svg>
                Apple Podcasts
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      {episode.keyTakeaways && episode.keyTakeaways.length > 0 && (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-sans text-3xl md:text-4xl font-black text-boon-blue mb-10">
              Key Takeaways
            </h2>
            <div className="space-y-6">
              {episode.keyTakeaways.map((takeaway, index) => {
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

      {/* Product Cards Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-boon-light-blue/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl md:text-4xl font-black text-boon-charcoal mb-4">
              Explore Boon&apos;s <span className="text-boon-blue">Solutions</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
              Scalable coaching programs designed to develop leaders at every level
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Scale */}
            <Link
              href="/solutions/scale"
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-boon-blue/30 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-boon-blue/10 flex items-center justify-center mb-6 group-hover:bg-boon-blue/20 transition-colors">
                <svg className="w-6 h-6 text-boon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-sans text-xl font-black text-boon-charcoal mb-2 group-hover:text-boon-blue transition-colors">
                Scale
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Executive coaching for senior leaders driving organizational change
              </p>
            </Link>

            {/* Grow */}
            <Link
              href="/solutions/grow"
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-boon-blue/30 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-boon-coral/10 flex items-center justify-center mb-6 group-hover:bg-boon-coral/20 transition-colors">
                <svg className="w-6 h-6 text-boon-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-sans text-xl font-black text-boon-charcoal mb-2 group-hover:text-boon-coral transition-colors">
                Grow
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manager development program combining coaching with structured learning
              </p>
            </Link>

            {/* Exec */}
            <Link
              href="/solutions/exec"
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-boon-blue/30 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-sans text-xl font-black text-boon-charcoal mb-2 group-hover:text-purple-600 transition-colors">
                Exec
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Premium 1:1 coaching for C-suite and executive leadership
              </p>
            </Link>

            {/* Together */}
            <Link
              href="/solutions/together"
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-boon-blue/30 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-sans text-xl font-black text-boon-charcoal mb-2 group-hover:text-green-600 transition-colors">
                Together
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Team coaching to build alignment, trust, and high performance
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-boon-blue relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-boon-coral/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 blur-2xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-sans text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
            Want to develop leaders who drive results?
          </h2>
          <p className="text-white/80 font-medium text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s talk about how Boon can help your organization build leadership capacity at scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-boon-coral text-white px-10 py-5 rounded-[15px] font-sans font-bold text-lg shadow-xl hover:scale-105 transition-all"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/learn/podcast"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-10 py-5 rounded-full font-sans font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              More Episodes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
