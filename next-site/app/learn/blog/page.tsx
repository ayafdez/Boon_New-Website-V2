import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { format, parseISO } from 'date-fns';

const POSTS_PER_PAGE = 12;

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description: 'Insights and perspectives on leadership, management, and organizational development from the Boon team.',
  path: '/learn/blog',
});

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

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const posts = allBlogs.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const currentPage = Math.max(1, Number(searchParams.page) || 1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Blog', path: '/learn/blog' },
  ]);

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <main className="bg-white min-h-[60vh]">
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase border border-gray-100">
            Boon Blog
          </div>
          <h1 className="text-6xl md:text-[92px] font-black text-[#2E353D] leading-[0.85] tracking-tighter mb-10 max-w-5xl">
            Insights & <span className="text-[#466FF6] italic font-serif">Perspectives</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Articles on leadership, management, and organizational development from our team and network.
          </p>
        </div>
      </section>
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          {paginatedPosts.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-400 font-medium">Blog posts coming soon. Check back for updates.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/learn/blog/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-boon-blue/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-8">
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.categories.slice(0, 2).map((category) => (
                            <span
                              key={category}
                              className="text-[10px] tracking-[0.15em] font-black text-boon-blue uppercase bg-boon-light-blue/30 px-3 py-1 rounded-full"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      )}
                      <h2 className="text-xl font-black text-boon-charcoal mb-3 group-hover:text-boon-blue transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100">
                        <span className="text-gray-400 font-medium">{format(parseISO(post.date), 'MMM d, yyyy')}</span>
                        {post.author && (
                          <span className="text-boon-charcoal font-bold">{getAuthorDisplayName(post.author)}</span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav aria-label="Blog pagination" className="flex items-center justify-center gap-3 mt-16">
                  {currentPage > 1 && (
                    <Link
                      href={currentPage === 2 ? '/learn/blog' : `/learn/blog?page=${currentPage - 1}`}
                      className="px-6 py-3 rounded-[15px] border border-gray-200 text-sm font-bold text-[#2E353D] hover:border-[#466FF6] hover:text-[#466FF6] transition-all"
                    >
                      Previous
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Link
                      key={page}
                      href={page === 1 ? '/learn/blog' : `/learn/blog?page=${page}`}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                        page === currentPage
                          ? 'bg-[#466FF6] text-white'
                          : 'text-gray-400 hover:text-[#466FF6] hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </Link>
                  ))}
                  {currentPage < totalPages && (
                    <Link
                      href={`/learn/blog?page=${currentPage + 1}`}
                      className="px-6 py-3 rounded-[15px] border border-gray-200 text-sm font-bold text-[#2E353D] hover:border-[#466FF6] hover:text-[#466FF6] transition-all"
                    >
                      Next
                    </Link>
                  )}
                </nav>
              )}
            </>
          )}
        </div>
      </section>
    </main>
    </>
  );
}
