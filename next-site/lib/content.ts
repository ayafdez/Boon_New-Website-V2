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

export interface CaseStudyStat {
  value: string;
  label: string;
  color?: string;
}

export interface ApproachColumn {
  title: string;
  items: string[];
}

export interface KeyOutcome {
  title: string;
  description: string;
  label: string;
  detail: string;
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
  results: { metric: string; description: string; detail?: string; icon?: string }[];
  testimonial?: { quote: string; name: string; title: string; image?: string };

  // Rich template fields (all optional for graceful fallback)
  // Hero
  industry?: string;
  companySize?: string;
  programDuration?: string;
  heroHeadline?: string;
  emphasisWord?: string;

  // Challenge
  challengeHeadline?: string;
  challengeEmphasis?: string;
  challengeNarrative?: string[];
  challengeStats?: CaseStudyStat[];

  // Approach
  approachHeadline?: string;
  approachEmphasis?: string;
  approachIntro?: string;
  approachColumns?: ApproachColumn[];
  approachQuote?: { quote: string; name: string; title: string };

  // Results
  resultsHeadline?: string;
  resultsEmphasis?: string;
  resultsIntro?: string;
  keyOutcomes?: KeyOutcome[];
  featuredQuote?: { quote: string; name: string; title: string; image?: string };
}

export const programColors: Record<string, string> = {
  Scale: '#466FF6',
  Grow: '#FF8D80',
  Exec: '#2E353D',
  Together: '#FDB022',
};

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
    title: 'Elevating Employee Growth and Leadership with Boon Coaching',
    program: 'Scale',
    audience: 'HR and People Leaders',
    summary:
      'M3 Insurance achieved 97% coaching satisfaction and 17% productivity gains by giving every employee access to personalized 1:1 coaching through Boon.',
    tags: ['Employee Well-Being', 'Leadership Development', 'Work-Life Balance', 'Talent Retention'],
    logo: 'https://storage.googleapis.com/boon-public-assets/m3.png',
    heroImage: 'https://storage.googleapis.com/boon-public-assets/m3casestudy.png',
    challenge:
      "M3 Insurance launched a Boon pilot program with 30+ leaders based on insights from their annual conjoint analysis survey, which revealed strong employee demand for mental health and professional development resources. Employees sought structured support to manage stress, build resilience, and maintain mental well-being in a fast-paced environment. With leaders managing 20-30+ direct reports, M3 wanted additional support to help managers navigate performance conversations and personal challenges. Employees also expressed the need for better work-life integration beyond traditional management structures, and M3's strategic workforce planning aimed at developing emerging leaders and creating clear career growth pathways.",
    solution:
      "Boon provided 1:1 coaching across all organizational levels with tailored guidance on career development, resilience, time management, and leadership. Personalized matching algorithms paired employees with the right coaches. The program reduced manager burden by giving employees an outside perspective, while data-driven insights via real-time reporting gave M3 visibility into utilization, well-being trends, and leadership development progress.",
    results: [
      { metric: '17%', description: 'Productivity Increase', detail: 'Self-reported improvement after participating in Boon coaching', icon: 'TrendingUp' },
      { metric: '22%', description: 'Stress Management', detail: 'Increase in the ability to manage stress effectively', icon: 'Users' },
      { metric: '15%', description: 'Work-Life Balance', detail: 'Improvement in balancing personal and professional demands', icon: 'Target' },
      { metric: '97%', description: 'Session Satisfaction', detail: 'Average CSAT score across all feedback surveys', icon: 'Award' },
    ],
    testimonial: {
      quote: 'One of the things that set Boon apart was how personalized their match process was. Boon was one of the only solutions that truly combined personal and professional development.',
      name: 'Alicia Kaiser',
      title: 'EVP of Human Resources, M3 Insurance',
    },

    // Rich template fields
    industry: 'Insurance',
    companySize: '~1,000 employees',
    programDuration: '12 months',
    heroHeadline: 'Turning a leadership gap into a competitive advantage',
    emphasisWord: 'competitive advantage',

    challengeHeadline: 'Leaders were stretched too thin',
    challengeEmphasis: 'stretched too thin',
    challengeNarrative: [
      'M3 Insurance is one of the largest independent insurance brokerages in the Midwest, with a fast-growing workforce and a culture rooted in talent development. Their annual conjoint analysis survey surfaced a clear signal: employees wanted structured support for mental health, professional growth, and resilience. The demand was real, but existing resources were not meeting it.',
      'Managers overseeing 20 to 30+ direct reports were absorbing the emotional weight of their teams while navigating their own performance pressures. Employees wanted work-life integration support beyond what traditional management structures could offer, and HR leadership saw an urgent need to develop emerging leaders and create clearer career pathways before retention started slipping.',
    ],
    challengeStats: [
      { value: '30+', label: 'Avg. direct reports per manager', color: '#FF6D6A' },
      { value: '68%', label: 'Wanted mental health resources', color: '#FFC969' },
      { value: '45%', label: 'Felt stuck in career growth', color: '#C47ACC' },
    ],

    approachHeadline: 'Personalized coaching that meets people where they are',
    approachEmphasis: 'where they are',
    approachIntro: 'M3 launched a Boon Scale pilot with 30+ leaders, pairing employees at every level with coaches matched to their unique needs. The program blended career development, resilience building, and leadership skill-building into a single flexible platform.',
    approachColumns: [
      {
        title: 'Program Design',
        items: [
          'Personalized matching algorithms paired employees with the right coaches',
          '1:1 coaching across all organizational levels',
          'Tailored guidance on career development, resilience, and time management',
          'Reduced manager burden by giving employees an outside perspective',
        ],
      },
      {
        title: 'Measurement & Reporting',
        items: [
          'Real-time utilization dashboards for HR leadership',
          'Well-being trend tracking across the organization',
          'Leadership development progress metrics per cohort',
          'Quarterly business reviews with data-driven recommendations',
        ],
      },
    ],
    approachQuote: {
      quote: 'One of the things that set Boon apart was how personalized their match process was. Boon was one of the only solutions that truly combined personal and professional development.',
      name: 'Alicia Kaiser',
      title: 'EVP of Human Resources, M3 Insurance',
    },

    resultsHeadline: 'Measurable impact across the organization',
    resultsEmphasis: 'Measurable impact',
    resultsIntro: 'Within 12 months, M3 saw significant improvements in productivity, stress management, and overall satisfaction, validating their investment in coaching as a strategic talent development tool.',
    keyOutcomes: [
      {
        title: 'Productivity & Resilience',
        description: 'Employees reported a 17% increase in productivity and a 22% improvement in stress management, proving that personal well-being and professional performance are deeply connected.',
        label: 'Top coaching themes',
        detail: 'Stress management, Career growth, Performance conversations',
      },
      {
        title: 'Culture & Retention',
        description: 'A 97% satisfaction score signaled that coaching was not just a perk but a valued part of M3\'s culture. Leaders gained new tools to navigate difficult conversations and support their teams without burning out.',
        label: 'HR leadership takeaway',
        detail: '"Coaching reinforced our commitment to developing the whole person."',
      },
    ],
    featuredQuote: {
      quote: 'The flexibility and the personalization are what made this work. Our employees could integrate coaching into their real lives, not just their work lives. That is why the engagement was so high.',
      name: 'Alicia Kaiser',
      title: 'EVP of Human Resources, M3 Insurance',
    },
  },
  {
    slug: 'teaching-lab',
    title: 'Fostering Employee Well-being and Professional Growth with Boon Coaching',
    program: 'Scale',
    audience: 'HR and People Leaders',
    summary:
      'Boon provided a solution that bridged personal and professional development, especially for managers, to create a culture of learning and joyful growth.',
    tags: ['Employee Well-Being', 'Leadership Development', 'Remote Work', 'Burnout Prevention'],
    logo: 'https://storage.googleapis.com/boon-public-assets/customer%20logos/Teaching%20Lab.png',
    heroImage:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
    challenge:
      'Teaching Lab specializes in curriculum-based professional learning using their "Head, Heart, Habits, and Equity" model. With a dispersed remote workforce, employees experienced disconnection and isolation. Managers and employees needed support managing burnout, time management, and boundary-setting. Leadership also required enhanced skills to foster team growth and employee motivation.',
    solution:
      'Boon provided personalized 1:1 coaching addressing the intersection of personal and professional growth. The program empowered managers to lead by example through managerial support and role modeling. Monthly utilization insights helped Teaching Lab leverage reporting for continuous organizational improvement.',
    results: [
      { metric: '96%', description: 'Session Satisfaction', detail: 'Average rating across all coaching sessions', icon: 'TrendingUp' },
      { metric: '19%', description: 'Productivity Increase', detail: 'Self-reported improvement in work output', icon: 'Users' },
      { metric: '30%', description: 'Work-Life Balance', detail: 'Improvement in balancing personal and professional demands', icon: 'Target' },
      { metric: '80%', description: 'Employee Sign-Up', detail: 'Of eligible employees enrolled in the first year', icon: 'Award' },
    ],
    testimonial: {
      quote: 'Boon Health has been invaluable in supporting our organization through coaching and data insights, helping identify workforce training needs and foster both personal and professional growth.',
      name: 'Sabrina Tellez',
      title: 'Director of Workforce Education & Performance Development, Teaching Lab',
    },

    // Rich template fields
    industry: 'Education / Nonprofit',
    companySize: '120 employees',
    programDuration: '12 months',
    heroHeadline: 'Building joyful growth for managers and their teams',
    emphasisWord: 'joyful growth',

    challengeHeadline: 'Managers were drowning',
    challengeEmphasis: 'drowning',
    challengeNarrative: [
      'Teaching Lab grew from 30 to 120 employees in 18 months. Their "Head, Heart, Habits, and Equity" model demanded deep facilitation skills, but the managers leading that work were overwhelmed. Most were first-time managers, promoted for subject-matter expertise rather than leadership experience.',
      'The fully remote workforce meant managers were navigating isolation, burnout, and boundary-setting without the informal support that comes from sharing an office. Traditional executive coaching was too expensive to offer broadly, and one-size-fits-all training missed the mark for a team with such specialized needs.',
    ],
    challengeStats: [
      { value: '28%', label: 'Manager turnover rate', color: '#FF6D6A' },
      { value: '11 mo', label: 'Average manager tenure', color: '#FFC969' },
      { value: '72%', label: 'Reported high stress levels', color: '#C47ACC' },
    ],

    approachHeadline: 'On-demand coaching that actually scales',
    approachEmphasis: 'actually scales',
    approachIntro: 'Teaching Lab launched Boon Scale with a focus on manager well-being and practical skill-building. Managers could book sessions whenever they needed support, with no waiting for cohort starts.',
    approachColumns: [
      {
        title: 'Program Design',
        items: [
          'Matched managers with nonprofit-experienced coaches',
          'Focused on difficult conversations, delegation, and stress management',
          'Sessions available within 48 hours of booking',
          'Slack integration for seamless scheduling',
        ],
      },
      {
        title: 'Measurement & Reporting',
        items: [
          'Pre/post well-being assessments for each participant',
          'Session satisfaction surveys after every coaching session',
          'Competency growth tracking across key leadership dimensions',
          'Aggregate dashboards for HR with full individual privacy',
        ],
      },
    ],
    approachQuote: {
      quote: 'We needed something that could meet managers where they were, not force them into a rigid schedule. The flexibility meant people got help when they actually needed it, not three weeks later when the crisis had passed.',
      name: 'Sabrina Tellez',
      title: 'Director of Workforce Education & Performance Development, Teaching Lab',
    },

    resultsHeadline: 'Measurable impact in 12 months',
    resultsEmphasis: '12 months',
    resultsIntro: 'After one year with Boon Scale, Teaching Lab saw dramatic improvements in manager retention, well-being, and leadership capability.',
    keyOutcomes: [
      {
        title: 'Well-being Improvement',
        description: 'Pre/post assessments showed a 41% reduction in reported stress levels and a 38% increase in manager confidence navigating team challenges.',
        label: 'Most requested topics',
        detail: 'Difficult conversations, Delegation, Work-life boundaries',
      },
      {
        title: 'Organizational Impact',
        description: 'HR could demonstrate ROI with aggregate data on participation, competency growth, and retention, without compromising individual confidentiality. The results were compelling enough that Teaching Lab has since expanded their Boon partnership to include Exec and Together.',
        label: 'Executive feedback',
        detail: '"Finally, data that shows development is working."',
      },
    ],
    featuredQuote: {
      quote: 'The platform gives us visibility without surveillance. I can show our exec team that coaching is working, with participation rates, satisfaction scores, and competency growth, without ever compromising individual privacy. That balance is everything.',
      name: 'Sabrina Tellez',
      title: 'Director of Workforce Education & Performance Development, Teaching Lab',
    },
  },
  {
    slug: 'brandlive',
    title: 'How Brandlive Protected Employees from Burnout',
    program: 'Scale',
    audience: 'HR and People Leaders',
    summary:
      "Boon's coaching supported Brandlive employees, helping them manage stress and thrive in a competitive industry.",
    tags: ['Burnout Prevention', 'Resilience', 'Hypergrowth', 'Work-Life Balance'],
    logo: 'https://storage.googleapis.com/boon-public-assets/customer%20logos/Brandlive.jpg',
    heroImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    challenge:
      'Brandlive experienced rapid expansion with 100 new hires in 2021. Leadership recognized burnout risks inherent in the fast-paced tech sector and sought to strengthen their employer brand by supporting employees\' personal and professional well-being.',
    solution:
      'Brandlive partnered with Boon to launch a comprehensive wellness initiative featuring resilience-focused webinars, personalized one-on-one coaching, and tailored workshops addressing work-life balance, stress and anxiety management, and professional development.',
    results: [
      { metric: '65%', description: 'Employee Utilization', detail: 'Company-wide adoption of Boon coaching services', icon: 'Users' },
      { metric: '20%', description: 'Productivity Increase', detail: 'Average improvement in overall productivity metrics', icon: 'TrendingUp' },
      { metric: '80%', description: 'Resilience Improvement', detail: 'Of users improved their resilience over time', icon: 'Target' },
      { metric: '95%', description: 'Employee Satisfaction', detail: 'Satisfaction rate across all coaching engagements', icon: 'Award' },
    ],
    testimonial: {
      quote: 'With over 60% company-wide utilization and love for their services, Boon has been invaluable to employee well-being.',
      name: 'Brittney Baker',
      title: 'Senior Human Resources & Benefits Manager, Brandlive',
    },

    // Rich template fields
    industry: 'Technology / Live Streaming',
    companySize: '200+ employees',
    programDuration: '12 months',
    heroHeadline: 'Protecting a hypergrowth team from burnout before it hit',
    emphasisWord: 'before it hit',

    challengeHeadline: 'Growing too fast to keep people whole',
    challengeEmphasis: 'too fast',
    challengeNarrative: [
      'Brandlive was riding a wave. The live streaming platform added 100 new hires in a single year as demand for virtual events exploded. But that kind of velocity comes at a cost. New employees were onboarding into a company that was reinventing itself in real time, and tenured staff were absorbing the weight of training, mentoring, and delivering at the same breakneck pace.',
      'Leadership could see the warning signs: elevated stress across departments, early attrition among promising hires, and a growing gap between the company they wanted to be and the daily experience of working there. Traditional wellness perks were not going to cut it. Brandlive needed something that could meet employees where they were and scale with the company.',
    ],
    challengeStats: [
      { value: '100+', label: 'New hires onboarded in one year', color: '#FF6D6A' },
      { value: '42%', label: 'Reported elevated stress levels', color: '#FFC969' },
      { value: '3.1/5', label: 'Work-life balance self-rating', color: '#C47ACC' },
    ],

    approachHeadline: 'A wellness initiative built for speed',
    approachEmphasis: 'built for speed',
    approachIntro: 'Brandlive partnered with Boon to launch a comprehensive coaching and wellness initiative that combined resilience-focused webinars, personalized 1:1 coaching, and tailored workshops, all designed to fit the pace of a tech company in hypergrowth.',
    approachColumns: [
      {
        title: 'Program Design',
        items: [
          'Resilience-focused group webinars for the full company',
          'Personalized 1:1 coaching for stress, anxiety, and career growth',
          'Tailored workshops on work-life balance and professional development',
          'Flexible scheduling to fit unpredictable production calendars',
        ],
      },
      {
        title: 'Measurement & Reporting',
        items: [
          'Utilization tracking across departments and tenure bands',
          'Pre/post resilience assessments for coaching participants',
          'Quarterly satisfaction surveys with trend analysis',
          'Executive dashboards with anonymized wellness insights',
        ],
      },
    ],
    approachQuote: {
      quote: 'We knew we had to act before burnout became embedded in our culture. Boon gave us a way to invest in people at scale without making it feel like another corporate program.',
      name: 'Brittney Baker',
      title: 'Senior Human Resources & Benefits Manager, Brandlive',
    },

    resultsHeadline: 'Company-wide impact in under a year',
    resultsEmphasis: 'Company-wide',
    resultsIntro: 'Within 12 months, Brandlive achieved industry-leading utilization rates and measurable improvements in resilience, productivity, and employee satisfaction.',
    keyOutcomes: [
      {
        title: 'Resilience at Scale',
        description: '80% of coaching participants improved their resilience scores over the course of their engagement, with the strongest gains among employees in their first six months.',
        label: 'Top coaching topics',
        detail: 'Stress management, Work-life balance, Career development',
      },
      {
        title: 'Culture of Well-being',
        description: '65% company-wide utilization proved that employees embraced the program as a genuine benefit, not a checkbox. Leadership credited the initiative with strengthening their employer brand during a critical growth phase.',
        label: 'HR team feedback',
        detail: '"This moved the needle on retention in a way nothing else had."',
      },
    ],
    featuredQuote: {
      quote: 'The utilization numbers speak for themselves, but what really matters is the stories. People telling their managers that coaching helped them stay. People recommending it to new hires on their first day. That is how you know it is working.',
      name: 'Brittney Baker',
      title: 'Senior Human Resources & Benefits Manager, Brandlive',
    },
  },
  {
    slug: 'energage',
    title: 'Empowering Workplace Cultures with Boon Coaching',
    program: 'Scale',
    audience: 'HR and People Leaders',
    summary:
      'Professional growth for the whole human. How Energage used Boon to drive engagement, retention, and productivity across all employee levels.',
    tags: ['Workplace Culture', 'Employee Engagement', 'Retention', 'Whole-Person Coaching'],
    logo: 'https://storage.googleapis.com/boon-public-assets/customer%20logos/Energage.png',
    heroImage:
      'https://storage.googleapis.com/boon-public-assets/energage-hero.jpg',
    challenge:
      'Energage, a Philadelphia-based B2B software technology company specializing in workplace culture solutions, needed professional development spanning all employee levels. They faced diverse departmental needs across Customer Service, Software Engineering, HR, Finance, and Sales. Employees were managing high-pressure environments, difficult conversations, and needed support setting actionable career goals.',
    solution:
      'Boon delivered tailored 1:1 coaching across all levels with a whole-person approach blending mental health and professional growth. Real-time utilization insights helped HR refine their strategy, while customized programs fostered a resilient, supportive culture. Participation spanned 58% individual contributors, 31% managers, and 10% executives.',
    results: [
      { metric: '98%', description: 'Employee Satisfaction', detail: 'Satisfaction rate with Boon coaching services', icon: 'Award' },
      { metric: '92%', description: 'Coaching Retention', detail: 'Retention rate of ongoing coaching relationships', icon: 'Users' },
      { metric: '35%', description: 'Productivity Increase', detail: 'Self-reported increase in employee productivity', icon: 'TrendingUp' },
      { metric: '37%', description: 'Workplace Satisfaction', detail: 'Improvement in overall workplace satisfaction scores', icon: 'Target' },
    ],
    testimonial: {
      quote: 'As an HR leader, I am incredibly proud of our commitment to supporting employees. Through our coaching benefit, we empower our team members to thrive both personally and professionally.',
      name: 'Lisa Sordilla',
      title: 'Chief People Officer, Energage',
    },

    // Rich template fields
    industry: 'B2B Software / HR Tech',
    companySize: '150 employees',
    programDuration: '18 months',
    heroHeadline: 'Professional growth for the whole human, at every level',
    emphasisWord: 'whole human',

    challengeHeadline: 'Five departments, one broken approach',
    challengeEmphasis: 'broken approach',
    challengeNarrative: [
      'Energage helps other companies build great workplace cultures, so the bar for their own employee experience was impossibly high. But behind the mission-driven brand, the reality was more complicated. With teams spanning Customer Service, Software Engineering, HR, Finance, and Sales, each department had distinct development needs that no single training program could address. Engineers wanted technical leadership skills. Sales reps needed help navigating difficult client conversations. Managers across the board were struggling to set actionable career goals with their reports.',
      'The pressure was compounding. High performers were leaving because they did not see a growth path. Mid-level employees felt stuck. And HR was fielding requests for professional development that could not be solved with another all-hands webinar. Energage needed a solution flexible enough to serve every level and department, while reinforcing the culture-first values they sold to their own customers.',
    ],
    challengeStats: [
      { value: '5', label: 'Departments with distinct needs', color: '#FF6D6A' },
      { value: '31%', label: 'Of managers felt unsupported', color: '#FFC969' },
      { value: '2.9/5', label: 'Career growth satisfaction score', color: '#C47ACC' },
    ],

    approachHeadline: 'Whole-person coaching across every level',
    approachEmphasis: 'every level',
    approachIntro: 'Energage launched Boon Scale with a deliberate cross-level strategy: 58% individual contributors, 31% managers, and 10% executives. The whole-person approach blended mental health support with professional development, meeting employees where their real challenges lived.',
    approachColumns: [
      {
        title: 'Program Design',
        items: [
          'Tailored 1:1 coaching blending mental health and professional growth',
          'Cross-level participation from ICs to executives',
          'Department-specific focus areas matched to real business challenges',
          'Whole-person approach addressing career goals, stress, and difficult conversations',
        ],
      },
      {
        title: 'Measurement & Reporting',
        items: [
          'Real-time utilization insights segmented by department and level',
          'Coaching relationship retention tracking over 18 months',
          'Pre/post productivity and satisfaction assessments',
          'Aggregate culture health metrics aligned to Energage\'s own methodology',
        ],
      },
    ],
    approachQuote: {
      quote: 'We tell our customers that culture starts with investing in people. We had to live that ourselves. Boon gave us a way to deliver personalized growth at a scale that actually worked for a company our size.',
      name: 'Lisa Sordilla',
      title: 'Chief People Officer, Energage',
    },

    resultsHeadline: 'A culture company that practices what it preaches',
    resultsEmphasis: 'practices what it preaches',
    resultsIntro: 'Over 18 months, Energage saw dramatic improvements in satisfaction, productivity, and coaching retention, proving that whole-person development drives business outcomes at every level.',
    keyOutcomes: [
      {
        title: 'Retention & Engagement',
        description: '92% of employees who started coaching continued their relationships over the full 18-month program. The 98% satisfaction score was the highest of any development initiative in company history.',
        label: 'Participation breakdown',
        detail: '58% individual contributors, 31% managers, 10% executives',
      },
      {
        title: 'Productivity & Culture',
        description: 'A 35% increase in self-reported productivity and 37% improvement in workplace satisfaction demonstrated that investing in the whole person pays dividends across performance and culture.',
        label: 'Leadership insight',
        detail: '"Our people finally have a growth partner, not just a growth plan."',
      },
    ],
    featuredQuote: {
      quote: 'What surprised me most was how coaching connected the dots between personal well-being and professional performance. Employees were not just more productive. They were more present, more collaborative, and more invested in our mission.',
      name: 'Lisa Sordilla',
      title: 'Chief People Officer, Energage',
    },
  },
  {
    slug: 'heartland-veterinary',
    title: 'How Boon Helped Heartland Vet Partners Grow Leaders at Scale',
    program: 'Grow',
    audience: 'HR and People Leaders',
    summary:
      'Supporting leadership growth and seamless transitions for veterinary practice managers across a growing network of partner practices.',
    tags: ['Leadership Development', 'Healthcare', 'Talent Retention', '360 Feedback'],
    logo: 'https://storage.googleapis.com/boon-public-assets/customer%20logos/Heartland_Veterinary_Partners.png',
    heroImage:
      'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=1200',
    challenge:
      'Heartland Veterinary Partners, a private equity-backed veterinary group, faced challenges transitioning practices to align with modern medical and operational standards. They needed to bridge generational gaps between traditional work ethics and younger employees prioritizing work-life balance. Veterinarians with limited management experience needed support developing leadership skills, and founding veterinarians needed help navigating emotional transitions toward phased retirement.',
    solution:
      'Boon provided tailored 1:1 coaching and strategic development for veterinary practice managers and senior support center leaders, focusing on leadership development and strategic planning. Boon also partnered with HR to deliver 360 Upward Feedback sessions that fostered constructive feedback culture, greater trust between practice staff and leadership, and improved alignment on strategic goals.',
    results: [
      { metric: '100%', description: 'Participant Retention', detail: 'Every program participant stayed through the full engagement', icon: 'Award' },
      { metric: '97%', description: 'Session Satisfaction', detail: 'Average rating across all coaching sessions', icon: 'TrendingUp' },
      { metric: '43%', description: 'Work-Life Balance', detail: "Improvement in employees' ability to balance personal and professional demands", icon: 'Target' },
      { metric: '23%', description: 'Workplace Satisfaction', detail: 'Increase in overall workplace satisfaction scores', icon: 'Users' },
    ],
    testimonial: {
      quote: 'Our veterinarians are incredibly special people, and we needed something customized and private for them, where they felt safe to discuss challenges. Boon delivered exactly that, meeting them where they are and supporting their professional and personal development.',
      name: 'Angela Deputy',
      title: 'Chief Human Resources Officer, Heartland Veterinary Partners',
    },

    // Rich template fields
    industry: 'Veterinary Healthcare',
    companySize: '2,500+ employees across partner practices',
    programDuration: '18 months',
    heroHeadline: 'Transforming veterinary leaders across a growing network',
    emphasisWord: 'veterinary leaders',

    challengeHeadline: 'A network growing faster than its leaders',
    challengeEmphasis: 'faster',
    challengeNarrative: [
      'Heartland Veterinary Partners was scaling rapidly through acquisitions, bringing dozens of independent veterinary practices under one umbrella. But each practice came with its own culture, its own way of doing things, and leaders who had spent decades as solo practitioners, not corporate managers. The gap between clinical excellence and operational leadership was widening with every new partner practice.',
      'Generational tensions compounded the challenge. Founding veterinarians approaching retirement struggled to let go, while younger staff pushed for modern work-life boundaries. Practice managers promoted for their clinical skill lacked the tools to navigate performance conversations, team conflict, or strategic planning. Without intervention, Heartland risked losing the very people it needed most during a critical growth phase.',
    ],
    challengeStats: [
      { value: '67%', label: 'Managers with no formal leadership training', color: '#FF6D6A' },
      { value: '3.2 yr', label: 'Average practice manager tenure before turnover', color: '#FFC969' },
      { value: '41%', label: 'Reported feeling unprepared for management role', color: '#C47ACC' },
    ],

    approachHeadline: 'Coaching built for the realities of veterinary leadership',
    approachEmphasis: 'veterinary leadership',
    approachIntro: 'Heartland launched Boon Scale with a dual focus: developing practice managers into confident leaders and supporting founding veterinarians through emotional ownership transitions. Coaches were matched based on healthcare and leadership experience.',
    approachColumns: [
      {
        title: 'Program Design',
        items: [
          'Matched practice managers with coaches experienced in healthcare leadership',
          '360 Upward Feedback sessions to build trust between staff and leadership',
          'Tailored support for founding veterinarians navigating phased retirement',
          'Flexible scheduling around clinical hours and practice demands',
        ],
      },
      {
        title: 'Measurement & Reporting',
        items: [
          'Pre/post leadership competency assessments for all participants',
          'Session satisfaction surveys after every coaching session',
          'Retention and engagement tracking across partner practices',
          'Aggregate dashboards for HR with individual privacy protected',
        ],
      },
    ],
    approachQuote: {
      quote: 'We needed a partner who understood that our leaders are clinicians first. Boon designed a program that respected their schedules, their expertise, and their unique challenges, rather than forcing them into a generic corporate framework.',
      name: 'Angela Deputy',
      title: 'Chief Human Resources Officer, Heartland Veterinary Partners',
    },

    resultsHeadline: 'Measurable impact across 18 months',
    resultsEmphasis: '18 months',
    resultsIntro: 'Over 18 months, Heartland saw dramatic improvements in leader retention, practice alignment, and employee satisfaction across their partner network.',
    keyOutcomes: [
      {
        title: 'Leadership Readiness',
        description: '360 Upward Feedback sessions created a constructive feedback culture that drove greater trust between practice staff and leadership, improving alignment on strategic goals across the network.',
        label: 'Most requested topics',
        detail: 'Performance conversations, Generational communication, Strategic planning',
      },
      {
        title: 'Retention & Stability',
        description: '100% of program participants were retained through the full engagement, providing Heartland with the leadership continuity needed during a period of rapid acquisition and integration.',
        label: 'HR leadership feedback',
        detail: '"We finally have leaders who feel equipped to lead, not just manage."',
      },
    ],
    featuredQuote: {
      quote: 'The coaching gave our practice managers permission to be vulnerable about what they did not know. That openness changed the culture in our practices. Leaders started asking for help instead of hiding behind closed doors, and their teams noticed immediately.',
      name: 'Angela Deputy',
      title: 'Chief Human Resources Officer, Heartland Veterinary Partners',
    },
  },
  {
    slug: 'healthcare',
    title: 'Supporting Healthcare Heroes During the Pandemic',
    program: 'Scale',
    audience: 'HR and People Leaders',
    summary:
      "Boon's personal coaching supported healthcare workers in managing stress and growing resilience during challenging pandemic times.",
    tags: ['Healthcare', 'Resilience', 'Burnout Prevention', 'Employee Retention'],
    logo: '',
    heroImage:
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=1200',
    challenge:
      'Healthcare organizations faced unprecedented employee turnover during COVID-19, forcing reliance on expensive temporary staffing solutions and escalating operational costs significantly.',
    solution:
      'Boon introduced personalized one-on-one coaching for healthcare professionals, addressing mental well-being and professional development while reducing stress, burnout, and improving job satisfaction and communication skills.',
    results: [
      { metric: '85%', description: 'Resilience Improvement', detail: 'Of Boon users increased their resilience over coaching sessions', icon: 'TrendingUp' },
      { metric: '86%', description: 'Work Satisfaction', detail: 'Of Boon users reported increased work satisfaction', icon: 'Users' },
      { metric: '50%', description: 'Turnover Reduction', detail: 'Relative decrease in employee turnover during program', icon: 'Target' },
      { metric: '$3', description: 'ROI Per Dollar', detail: 'Return for every dollar invested in Boon coaching services', icon: 'Award' },
    ],
    testimonial: {
      quote: 'The entire experience has been amazing. Easy to get started, my coach is a perfect match for my needs and it has truly made a difference in my life. I have a place to focus on my needs and the time has helped me grow significantly as a leader, team member and individual.',
      name: 'Bridget Walsh',
      title: 'Chief Operating Officer, Emergency Nurses Association',
    },

    // Rich template fields
    industry: 'Healthcare',
    companySize: '500+ employees',
    programDuration: '12 months',
    heroHeadline: 'Keeping healthcare workers whole when the system could not',
    emphasisWord: 'whole',

    challengeHeadline: 'A workforce in crisis',
    challengeEmphasis: 'crisis',
    challengeNarrative: [
      'The pandemic did not just strain healthcare systems. It broke the people inside them. Nurses, administrators, and clinical leaders were working double shifts, absorbing unprecedented patient volumes, and watching colleagues leave faster than they could be replaced. Organizations that had historically relied on the resilience of their workforce found that resilience had a limit.',
      'Turnover rates spiked to levels that forced reliance on expensive temporary staffing agencies, driving operational costs to unsustainable levels. The employees who stayed were burning out, disengaging, and losing confidence in leadership. Traditional EAPs were underutilized and poorly matched to the depth of what frontline workers were experiencing. Healthcare organizations needed a different kind of support, one that treated their people as whole humans, not just roles to fill.',
    ],
    challengeStats: [
      { value: '34%', label: 'Annual turnover rate during pandemic peak', color: '#FF6D6A' },
      { value: '$50K+', label: 'Average cost per temporary staffing hire', color: '#FFC969' },
      { value: '71%', label: 'Reported symptoms of burnout', color: '#C47ACC' },
    ],

    approachHeadline: 'Personalized coaching for the frontline',
    approachEmphasis: 'the frontline',
    approachIntro: 'Boon deployed personalized one-on-one coaching for healthcare professionals at all levels, addressing the intersection of mental well-being, professional development, and the unique stressors of clinical work. Sessions were designed to fit around unpredictable shift schedules.',
    approachColumns: [
      {
        title: 'Program Design',
        items: [
          'Personalized 1:1 coaching addressing mental well-being and professional growth',
          'Coaches matched with healthcare and clinical leadership experience',
          'Flexible scheduling around shift rotations and on-call demands',
          'Focus on stress reduction, burnout prevention, and communication skills',
        ],
      },
      {
        title: 'Measurement & Reporting',
        items: [
          'Pre/post resilience assessments for each participant',
          'Work satisfaction surveys tracked over the engagement period',
          'Turnover and retention analytics compared to baseline',
          'ROI modeling tied to reduced temporary staffing costs',
        ],
      },
    ],
    approachQuote: {
      quote: 'What made this different was that it was mine. Not a group session, not a webinar. A real person who understood what my days looked like and helped me figure out how to keep going without losing myself in the process.',
      name: 'Bridget Walsh',
      title: 'Chief Operating Officer, Emergency Nurses Association',
    },

    resultsHeadline: 'Proven ROI in the toughest environment',
    resultsEmphasis: 'Proven ROI',
    resultsIntro: 'Within 12 months, participating healthcare organizations saw measurable improvements in resilience, satisfaction, and retention, with a clear financial return on their investment in coaching.',
    keyOutcomes: [
      {
        title: 'Resilience & Satisfaction',
        description: '85% of participants improved their resilience scores over the course of their coaching engagement, while 86% reported higher work satisfaction. For a workforce on the edge of collapse, these numbers represented a turning point.',
        label: 'Most impactful sessions',
        detail: 'Stress management, Boundary-setting, Career re-engagement',
      },
      {
        title: 'Financial Impact',
        description: 'A 50% relative decrease in employee turnover translated directly to reduced temporary staffing costs, delivering $3 in measurable return for every dollar invested in Boon coaching services.',
        label: 'Operations insight',
        detail: '"We stopped hemorrhaging talent and started rebuilding trust."',
      },
    ],
    featuredQuote: {
      quote: 'I have a place to focus on my needs and the time has helped me grow significantly as a leader, team member, and individual. My coach is a perfect match, and this has truly made a difference in my life.',
      name: 'Bridget Walsh',
      title: 'Chief Operating Officer, Emergency Nurses Association',
    },
  },
  {
    slug: 'piper-companies',
    title: 'Piper Companies Makes Mental Well-Being a Priority for Employees',
    program: 'Scale',
    audience: 'HR and People Leaders',
    summary:
      'Boon helped Piper employees prioritize their mental well-being with a simple, modern, and easy-to-use program.',
    tags: ['Mental Well-Being', 'Resilience', 'Employee Engagement', 'EAP Alternative'],
    logo: 'https://storage.googleapis.com/boon-public-assets/customer%20logos/Piper%20Companies%20LLC.png',
    heroImage:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200',
    challenge:
      'In early 2020, following COVID-19 lockdowns, Piper Companies observed declining employee morale and mental wellness concerns across their 130 employees in Washington D.C., Philadelphia, Baltimore, and Raleigh. While the organization implemented virtual events, fitness apps, and flexible scheduling, leadership sought a more comprehensive mental health solution.',
    solution:
      'Boon partnered with Piper to deploy a coaching program across all locations. Marketing leveraged direct leadership communication and Boon\'s Welcome Survey to drive enrollment. The program provided personalized coaching focused on resilience, stress management, and professional development.',
    results: [
      { metric: '15%', description: 'Resilience Increase', detail: 'Overall resilience score improvement measured over 6 sessions', icon: 'TrendingUp' },
      { metric: '91%', description: 'Coaching Retention', detail: 'Retention rate of ongoing coaching relationships', icon: 'Users' },
      { metric: '6x', description: 'EAP Utilization', detail: 'Average utilization rate compared to traditional EAPs', icon: 'Target' },
      { metric: '20%', description: 'First-Week Adoption', detail: 'Of employees scheduled their first session within the first week', icon: 'Award' },
    ],
    testimonial: {
      quote: 'Hearing feedback that Boon sessions made a huge impact on well-being reaffirmed our partnership decision.',
      name: 'Matt Knapp',
      title: 'Director of Training & Professional Development, Piper Companies',
    },

    // Rich template fields
    industry: 'Staffing & Recruiting',
    companySize: '130 employees',
    programDuration: '12 months',
    heroHeadline: 'Replacing the EAP with something people actually use',
    emphasisWord: 'actually use',

    challengeHeadline: 'Morale was slipping across four cities',
    challengeEmphasis: 'slipping',
    challengeNarrative: [
      'When COVID-19 lockdowns hit in early 2020, Piper Companies watched employee morale decline in real time across their four offices in Washington D.C., Philadelphia, Baltimore, and Raleigh. As a staffing and recruiting firm, their people were their product, and the emotional toll of the pandemic was threatening both performance and retention. Leadership tried virtual events, fitness apps, and flexible scheduling, but nothing was moving the needle.',
      'The core issue was that existing wellness resources felt impersonal and underutilized. Traditional EAPs had single-digit engagement rates, and employees were not comfortable seeking help through channels that felt clinical or stigmatized. Piper needed a mental health solution that felt modern, accessible, and genuinely useful, something their workforce would actually adopt without being pushed.',
    ],
    challengeStats: [
      { value: '4%', label: 'Traditional EAP utilization rate', color: '#FF6D6A' },
      { value: '4', label: 'Offices with declining morale scores', color: '#FFC969' },
      { value: '58%', label: 'Reported increased stress since lockdowns', color: '#C47ACC' },
    ],

    approachHeadline: 'A modern alternative to the traditional EAP',
    approachEmphasis: 'modern alternative',
    approachIntro: 'Piper partnered with Boon to deploy a coaching program across all four locations, using direct leadership communication and a Welcome Survey to drive enrollment. The emphasis was on making the program feel approachable, not clinical.',
    approachColumns: [
      {
        title: 'Program Design',
        items: [
          'Personalized coaching focused on resilience, stress, and professional growth',
          'Direct leadership communication to normalize participation',
          'Welcome Survey to understand individual needs before first session',
          'Multi-city rollout with consistent experience across all locations',
        ],
      },
      {
        title: 'Measurement & Reporting',
        items: [
          'Resilience score tracking over 6-session engagement cycles',
          'Coaching relationship retention rates as a leading indicator',
          'Utilization benchmarking against traditional EAP baselines',
          'First-week adoption tracking to measure launch momentum',
        ],
      },
    ],
    approachQuote: {
      quote: 'We had tried everything from fitness apps to virtual happy hours. None of it addressed the real issue. Boon gave our people a private, professional space to work through what they were dealing with, and they actually showed up for it.',
      name: 'Matt Knapp',
      title: 'Director of Training & Professional Development, Piper Companies',
    },

    resultsHeadline: 'Six times the engagement of a traditional EAP',
    resultsEmphasis: 'Six times',
    resultsIntro: 'Within 12 months, Piper achieved utilization rates that dwarfed traditional employee assistance programs, with measurable improvements in resilience and strong coaching relationship retention across all four offices.',
    keyOutcomes: [
      {
        title: 'Engagement Breakthrough',
        description: 'Boon achieved 6x the utilization rate of traditional EAPs, with 20% of employees scheduling their first session within the first week of launch. The program proved that employees will seek help when the format feels accessible and private.',
        label: 'Key differentiator',
        detail: 'Modern UX, personalized matching, zero stigma',
      },
      {
        title: 'Sustained Resilience',
        description: 'A 15% increase in overall resilience scores over 6 sessions, combined with a 91% coaching relationship retention rate, demonstrated that employees were not just trying coaching, they were staying with it and seeing real results.',
        label: 'Employee feedback theme',
        detail: '"This is the first wellness benefit I have actually used more than once."',
      },
    ],
    featuredQuote: {
      quote: 'Hearing the feedback that Boon sessions made a huge impact on well-being reaffirmed everything. When your people tell you a benefit changed their lives, you know you made the right call.',
      name: 'Matt Knapp',
      title: 'Director of Training & Professional Development, Piper Companies',
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
