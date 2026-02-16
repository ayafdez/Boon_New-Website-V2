/**
 * Content Abstraction Layer
 *
 * This module provides a clean interface for fetching content.
 * Currently uses static data, but can be swapped to headless WordPress or any CMS.
 *
 * To switch to WordPress:
 * 1. Set WORDPRESS_API_URL in .env.local
 * 2. Implement the WordPress fetch functions below
 * 3. Update the exported functions to use WordPress instead of static data
 */

// ===========================================
// TYPES
// ===========================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: {
    name: string;
    image?: string;
  };
  featuredImage?: string;
  tags: string[];
  category?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  program: 'Scale' | 'Grow' | 'Exec' | 'Together';
  audience: string;
  summary: string;
  tags: string[];
  logo: string;
  heroImage: string;
  content?: string;
  challenge: string;
  solution: string;
  results: { metric: string; description: string }[];
  testimonial?: { quote: string; name: string; title: string };
}

export interface Coach {
  id: string;
  name: string;
  title: string;
  specialty?: string;
  image: string;
  bio?: string;
  quote?: string;
}

// ===========================================
// STATIC DATA (Replace with CMS fetch later)
// ===========================================

const STATIC_CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'm3-insurance',
    title: 'M3 Insurance: Increasing Leadership Capacity Without Adding Manager Overhead',
    program: 'Scale',
    audience: 'HR and People Leaders',
    summary:
      'How M3 Insurance delivered measurable behavior change and supported their people without adding administrative pressure on managers.',
    tags: ['Leadership Capacity', 'Manager Effectiveness', 'Scalable Coaching'],
    logo: 'https://storage.googleapis.com/boon-public-assets/m3.png',
    heroImage: 'https://storage.googleapis.com/boon-public-assets/m3casestudy.png',
    challenge:
      'M3 Insurance was growing quickly, promoting strong individual contributors into management roles. But their new managers were struggling with the transition. HR was fielding more escalations, engagement scores were dipping, and there was no scalable way to develop 40+ managers without pulling them away from their teams for days at a time.',
    solution:
      'Boon Scale gave every manager access to a dedicated coach in 15-minute sessions that fit around their existing workflow. No travel, no all-day workshops, no disruption. Coaches met managers where they were, working on real situations they were navigating that week. HR got a dashboard showing participation and growth trends without needing to chase down attendance.',
    results: [
      { metric: '91%', description: 'of managers reported improved confidence in handling difficult conversations' },
      { metric: '3.2x', description: 'increase in proactive 1:1 meeting frequency with direct reports' },
      { metric: '0', description: 'additional hours of administrative overhead for the HR team' },
    ],
    testimonial: {
      quote: 'We finally found something that actually changes behavior, not just checks a training box. Our managers are showing up differently in their one-on-ones, and their teams can feel it.',
      name: 'Sarah Mitchell',
      title: 'VP of People, M3 Insurance',
    },
  },
  {
    slug: 'consensys',
    title: 'Syncing a Decentralized Culture during Hypergrowth',
    program: 'Together',
    audience: 'Engineering Leaders & Remote Teams',
    summary:
      "How one of the world's leading Web3 companies used Boon Together to maintain high-trust alignment across a globally distributed, decentralized team.",
    tags: ['Web3', 'Remote-First', 'Hypergrowth'],
    logo: 'https://storage.googleapis.com/boon-public-assets/consensys-logo.png',
    heroImage:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    challenge:
      'ConsenSys grew from 200 to over 900 employees in under two years, spread across 30+ countries with no central office. Their decentralized ethos was core to their identity, but it was also creating silos. Leadership teams in different regions were making decisions in isolation, and the trust required for high-stakes collaboration was eroding as new faces outnumbered familiar ones.',
    solution:
      'Boon Together facilitated structured team coaching sessions for cross-functional leadership pods. Each pod met bi-weekly with a coach who helped them surface misalignments early, practice transparent decision-making, and build the relational trust that remote work erodes over time. The program was designed to respect their decentralized culture while creating shared rituals.',
    results: [
      { metric: '47%', description: 'reduction in cross-team decision escalations within 6 months' },
      { metric: '4.6/5', description: 'average participant rating for session value and relevance' },
      { metric: '82%', description: 'of leaders reported stronger trust with peers in other regions' },
    ],
    testimonial: {
      quote: 'In a decentralized org, trust is the infrastructure. Boon helped us build that infrastructure intentionally instead of hoping it would happen on its own.',
      name: 'David Kim',
      title: 'Director of People Operations, ConsenSys',
    },
  },
  {
    slug: 'rsc-mechanical',
    title: 'Field-Tested Resilience: Modernizing Traditional Leadership',
    program: 'Grow',
    audience: 'Mid-Level Operations Managers',
    summary:
      'RSC Mechanical integrated Boon Grow to support field managers transitioning from technical roles to leadership in a high-stakes, traditional industry.',
    tags: ['Operations', 'Industrial', 'Manager Ramp'],
    logo: 'https://storage.googleapis.com/boon-public-assets/rsc-logo.png',
    heroImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    challenge:
      'RSC Mechanical promotes from within. Their best technicians become field supervisors, but technical excellence does not translate to people management. New supervisors were defaulting to command-and-control styles, turnover among field crews was climbing, and safety incident reports were trending upward as communication broke down between crews and leadership.',
    solution:
      'Boon Grow paired each field supervisor with a coach who understood the realities of managing in high-stakes, physical environments. Sessions focused on practical skills: how to give feedback on a job site, how to run a productive morning huddle, how to handle conflict between crew members without escalating. Coaches adapted to the rhythm of construction schedules, meeting supervisors early mornings or during downtime.',
    results: [
      { metric: '34%', description: 'reduction in voluntary turnover among field crews within the first year' },
      { metric: '2.8x', description: 'increase in supervisor-initiated safety conversations per week' },
      { metric: '96%', description: 'of participants said coaching helped them handle a real situation better' },
    ],
    testimonial: {
      quote: 'Our guys are not the type to sit in a classroom. But they will talk to a coach who gets what their day actually looks like. That made all the difference.',
      name: 'Mike Reeves',
      title: 'Operations Director, RSC Mechanical',
    },
  },
  {
    slug: 'trinet',
    title: 'Enterprise Leadership Logic at Scale',
    program: 'Exec',
    audience: 'Senior VPs & C-Suite',
    summary:
      'TriNet leveraged Boon Exec to provide strategic sparring for senior leaders, ensuring decision quality remained high during significant market shifts.',
    tags: ['HR Tech', 'Enterprise', 'Executive Support'],
    logo: 'https://storage.googleapis.com/boon-public-assets/trinet-logo.png',
    heroImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    challenge:
      'TriNet was navigating a major market correction while simultaneously integrating two acquisitions. Their senior leadership team was stretched thin, making high-stakes decisions under pressure without a confidential sounding board. Board dynamics were shifting, and several VPs were struggling to align their teams around a revised strategy without the usual planning cycles.',
    solution:
      'Boon Exec matched each senior leader with a seasoned executive coach for ongoing strategic sparring sessions. Unlike traditional executive coaching engagements that take months to set up, Boon had coaches deployed within two weeks. Sessions focused on real-time decision quality: pressure-testing strategic assumptions, preparing for difficult board conversations, and building alignment across the newly merged leadership team.',
    results: [
      { metric: '100%', description: 'of participating executives continued beyond the initial engagement' },
      { metric: '5 weeks', description: 'average time to resolve a cross-functional strategic conflict, down from 12' },
      { metric: '4.9/5', description: 'executive satisfaction rating, the highest across all TriNet development programs' },
    ],
    testimonial: {
      quote: 'At this level, you cannot just take a course. You need someone who has been where you are and can help you think more clearly when everything is moving fast. Boon delivered that.',
      name: 'Jennifer Park',
      title: 'Chief People Officer, TriNet',
    },
  },
];

const STATIC_BLOG_POSTS: BlogPost[] = [
  // Placeholder - add blog posts here or fetch from CMS
];

// ===========================================
// CONTENT FETCHING FUNCTIONS
// ===========================================

/**
 * Get all case studies
 */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  // TODO: Replace with WordPress/CMS fetch
  // if (process.env.WORDPRESS_API_URL) {
  //   return fetchWordPressCaseStudies();
  // }
  return STATIC_CASE_STUDIES;
}

/**
 * Get a single case study by slug
 */
export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | null> {
  const caseStudies = await getCaseStudies();
  return caseStudies.find((cs) => cs.slug === slug) || null;
}

/**
 * Get all case study slugs (for static generation)
 */
export async function getCaseStudySlugs(): Promise<string[]> {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((cs) => cs.slug);
}

/**
 * Get all blog posts
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  // TODO: Replace with WordPress/CMS fetch
  return STATIC_BLOG_POSTS;
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}

/**
 * Get all blog post slugs (for static generation)
 */
export async function getBlogPostSlugs(): Promise<string[]> {
  const posts = await getBlogPosts();
  return posts.map((p) => p.slug);
}

// ===========================================
// WORDPRESS INTEGRATION (Future)
// ===========================================

// Uncomment and implement when ready to use WordPress

// async function fetchWordPressCaseStudies(): Promise<CaseStudy[]> {
//   const response = await fetch(`${process.env.WORDPRESS_API_URL}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       query: `
//         query GetCaseStudies {
//           caseStudies {
//             nodes {
//               slug
//               title
//               ...
//             }
//           }
//         }
//       `,
//     }),
//     next: { revalidate: 3600 }, // Revalidate every hour
//   });
//   const data = await response.json();
//   return transformWordPressCaseStudies(data);
// }
