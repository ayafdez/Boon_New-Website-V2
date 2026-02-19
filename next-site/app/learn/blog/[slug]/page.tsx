import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { format, parseISO } from 'date-fns';
import { generateArticleJsonLd, generateBreadcrumbJsonLd, siteUrl } from '@/lib/seo';

interface PageProps {
  params: { slug: string };
}

// Author display name mapping
const authorNames: Record<string, string> = {
  'bretamanda@gmail.com': 'Amanda Bret',
  'Boon_Alex': 'Alex Simmons',
  'boonhealthstg': 'Boon',
  'alex@boon.coach': 'Alex Simmons',
  'chris@boon.coach': 'Chris Henrichs',
  'jessica@boon.coach': 'Jessica Taylor',
  'robin@boon.coach': 'Robin Axelrod',
};

function getAuthorDisplayName(author: string): string {
  return authorNames[author] || author.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = allBlogs.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Boon Blog`,
    description: post.excerpt || post.description,
  };
}

function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component />;
}

export default function BlogPostPage({ params }: PageProps) {
  const post = allBlogs.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const authorDisplayName = post.author ? getAuthorDisplayName(post.author) : null;
  // Safely access body.code - may be undefined in some environments
  const body = post.body as unknown as { code?: string; raw?: string };
  const bodyCode = body?.code;

  const articleJsonLd = generateArticleJsonLd({
    title: post.title,
    description: post.excerpt || post.description || '',
    url: `${siteUrl}/learn/blog/${post.slug}`,
    publishedTime: post.date,
    authorName: authorDisplayName || 'Boon',
    image: post.featuredImage,
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Blog', path: '/learn/blog' },
    { name: post.title, path: `/learn/blog/${post.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-boon-navy">
        {/* Decorative gradient blobs */}
        <div
          className="absolute top-0 right-0 w-[60%] h-[80%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(70, 111, 246, 0.25) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[50%] h-[60%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at bottom left, rgba(255, 141, 128, 0.15) 0%, transparent 60%)',
          }}
        />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/learn/blog"
            className="inline-flex items-center gap-2 text-white/60 text-sm font-bold mb-10 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center bg-boon-blue/20 text-boon-light-blue text-[10px] tracking-[0.2em] font-black px-4 py-2 rounded-full uppercase border border-boon-blue/30"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-sans text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tight mb-8 max-w-4xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-white/60 font-medium leading-relaxed mb-10 max-w-2xl">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-6 pt-8 border-t border-white/10">
            {authorDisplayName && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-boon-blue/30 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {authorDisplayName.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{authorDisplayName}</p>
                  <p className="text-white/40 text-xs">Author</p>
                </div>
              </div>
            )}
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-white font-bold text-sm">
                {format(parseISO(post.date), 'MMMM d, yyyy')}
              </p>
              <p className="text-white/40 text-xs">Published</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-boon max-w-none">
            {bodyCode && <MDXContent code={bodyCode} />}
          </div>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-black text-boon-charcoal tracking-tight mb-6">
            Ready to transform your <span className="text-boon-blue font-serif italic">leadership development</span>?
          </h2>
          <p className="text-gray-500 font-medium text-lg mb-10 max-w-2xl mx-auto">
            Discover how Boon can help your organization build resilient, effective leaders at every level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/demo"
              className="inline-block bg-boon-coral text-white px-10 py-5 rounded-full font-sans font-bold text-lg shadow-xl shadow-boon-coral/20 hover:scale-105 transition-all"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/learn/blog"
              className="inline-block bg-white text-boon-charcoal px-10 py-5 rounded-full font-sans font-bold text-lg border border-gray-200 hover:border-gray-300 transition-all"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
