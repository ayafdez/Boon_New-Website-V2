import { redirect } from 'next/navigation';

// Redirect /blog to /learn/blog for consistency
export default function BlogRedirect() {
  redirect('/learn/blog');
}
