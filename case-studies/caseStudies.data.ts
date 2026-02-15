export interface CaseStudyMetadata {
  slug: string;
  title: string;
  program: 'Scale' | 'Grow' | 'Exec' | 'Together';
  audience: string;
  summary: string;
  tags: string[];
  logo: string;
  heroImage: string;
}

export const CASE_STUDIES: CaseStudyMetadata[] = [
  {
    slug: 'm3-insurance',
    title: 'M3 Insurance: Increasing Leadership Capacity Without Adding Manager Overhead',
    program: 'Scale',
    audience: 'HR and People Leaders',
    summary: 'How M3 Insurance delivered measurable behavior change and supported their people without adding administrative pressure on managers.',
    tags: ['Leadership Capacity', 'Manager Effectiveness', 'Scalable Coaching'],
    logo: 'https://storage.googleapis.com/boon-public-assets/m3.png',
    heroImage: 'https://storage.googleapis.com/boon-public-assets/m3casestudy.png'
  },
  {
    slug: 'consensys',
    title: 'Syncing a Decentralized Culture during Hypergrowth',
    program: 'Together',
    audience: 'Engineering Leaders & Remote Teams',
    summary: 'How one of the world\'s leading Web3 companies used Boon Together to maintain high-trust alignment across a globally distributed, decentralized team.',
    tags: ['Web3', 'Remote-First', 'Hypergrowth'],
    logo: 'Consensys',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    slug: 'rsc-mechanical',
    title: 'Field-Tested Resilience: Modernizing Traditional Leadership',
    program: 'Grow',
    audience: 'Mid-Level Operations Managers',
    summary: 'RSC Mechanical integrated Boon Grow to support field managers transitioning from technical roles to leadership in a high-stakes, traditional industry.',
    tags: ['Operations', 'Industrial', 'Manager Ramp'],
    logo: 'RSC Mechanical',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    slug: 'trinet',
    title: 'Enterprise Leadership Logic at Scale',
    program: 'Exec',
    audience: 'Senior VPs & C-Suite',
    summary: 'TriNet leveraged Boon Exec to provide strategic sparring for senior leaders, ensuring decision quality remained high during significant market shifts.',
    tags: ['HR Tech', 'Enterprise', 'Executive Support'],
    logo: 'TriNet',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  }
];