import type {
  CertificationTrack,
  Course,
  LearningPath,
  Milestone,
  PlatformStat,
  Testimonial,
} from '../types'

export const heroHighlights = [
  { label: 'Instructor-led cohorts', value: 'Live + On-demand' },
  { label: 'Certification readiness', value: 'Built-in labs' },
  { label: 'Career outcomes', value: 'Guaranteed portfolio' },
]

export const featuredCourses: Course[] = [
  {
    id: 'react-architect',
    title: 'React Architecture & Performance',
    description:
      'Design scalable component systems, optimize rendering, and ship enterprise-ready React platforms.',
    category: 'Frontend Engineering',
    level: 'Advanced',
    duration: '8 weeks',
    lessons: 24,
    tags: ['React 19', 'MUI', 'Vite', 'Testing'],
    nextCohort: 'Jan 6, 2026',
    progress: 65,
    learners: 1280,
    rating: 4.9,
    skills: ['Server Components', 'Design Systems', 'Performance budgets'],
  },
  {
    id: 'cloud-native',
    title: 'Cloud-Native APIs with Node & GraphQL',
    description:
      'Master distributed API design, observability, and zero-downtime deployments on modern cloud runtimes.',
    category: 'Backend & Cloud',
    level: 'Intermediate',
    duration: '6 weeks',
    lessons: 18,
    tags: ['Node.js', 'GraphQL', 'K8s', 'Terraform'],
    nextCohort: 'Feb 3, 2026',
    learners: 980,
    rating: 4.8,
    skills: ['Schema design', 'Service mesh', 'Chaos testing'],
  },
  {
    id: 'ai-product',
    title: 'Responsible AI Product Delivery',
    description:
      'Ship AI-powered experiences with measurable safety guardrails, evaluation pipelines, and compliance.',
    category: 'AI Delivery',
    level: 'Beginner',
    duration: '5 weeks',
    lessons: 15,
    tags: ['LLMs', 'Prompt Ops', 'Evaluation'],
    nextCohort: 'Mar 10, 2026',
    learners: 640,
    rating: 4.7,
    skills: ['Prompt design', 'Safety reviews', 'Model monitoring'],
  },
]

export const recommendedCourses: Course[] = [
  {
    id: 'ux-engineering',
    title: 'Design Systems for Engineers',
    description:
      'Blend accessibility, motion, and semantic tokens to ship inclusive, adaptive interfaces.',
    category: 'UI Engineering',
    level: 'Intermediate',
    duration: '4 weeks',
    lessons: 12,
    tags: ['ARIA', 'Figma tokens', 'Storybook'],
    nextCohort: 'Jan 27, 2026',
    learners: 540,
    rating: 4.8,
    skills: ['Design tokens', 'Accessibility audits', 'Storybook automation'],
  },
  {
    id: 'site-reliability',
    title: 'Reliability Engineering Foundations',
    description:
      'Incident response, golden signals, and progressive delivery modeled after elite SRE teams.',
    category: 'DevOps',
    level: 'Advanced',
    duration: '7 weeks',
    lessons: 20,
    tags: ['SLOs', 'Chaos', 'Progressive Delivery'],
    nextCohort: 'Feb 17, 2026',
    learners: 410,
    rating: 4.9,
    skills: ['Error budgets', 'Incident comms', 'Release automation'],
  },
]

export const certificationTracks: CertificationTrack[] = [
  {
    id: 'full-stack-lead',
    title: 'Full-Stack Tech Lead',
    description:
      'Lead squads shipping cross-platform experiences with measurable quality gates and DevEx improvements.',
    durationWeeks: 12,
    credential: 'Learning OS Tech Leadership Certificate',
    skillFocus: [
      'Architecture decision records',
      'Cross-team roadmaps',
      'Observability strategies',
    ],
    outcomes: [
      'Author production-ready RFCs',
      'Coach engineers through PR reviews',
      'Stand up performance dashboards',
    ],
    capstone: 'Lead a simulated product launch covering roadmap to retrospective.',
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Platform Architect',
    description:
      'Design secure, autoscaling infrastructure patterns across multi-cloud workloads.',
    durationWeeks: 14,
    credential: 'Learning OS Cloud Architecture Certificate',
    skillFocus: ['Platform SLOs', 'FinOps modeling', 'Reference architectures'],
    outcomes: [
      'Publish landing zone blueprints',
      'Automate compliance drift detection',
      'Model cost/perf scenarios for execs',
    ],
    capstone: 'Deliver a review-ready cloud platform architecture dossier.',
  },
  {
    id: 'ai-strategist',
    title: 'AI Delivery Strategist',
    description:
      'Translate business goals into responsible AI delivery plans with measurable safeguards.',
    durationWeeks: 10,
    credential: 'Learning OS Responsible AI Certificate',
    skillFocus: ['Evaluation harnesses', 'Policy alignment', 'Human-in-the-loop'],
    outcomes: [
      'Score model quality with automated rubrics',
      'Ship red-team playbooks',
      'Operationalize AI ethics reviews',
    ],
    capstone: 'Run a cross-functional AI readiness audit with exec handoff.',
  },
]

export const certificationJourney: Milestone[] = [
  {
    title: 'Foundations Sprint',
    description: 'Live cohort onboarding, baseline assessment, and learning plan calibration.',
    duration: 'Week 1',
    deliverable: 'Personalized learning canvas aligned with your role goals.',
  },
  {
    title: 'Applied Projects',
    description: 'Pair-programming labs, instructor feedback, and async mission briefs.',
    duration: 'Weeks 2-6',
    deliverable: 'Three production-grade portfolio artifacts reviewed by mentors.',
  },
  {
    title: 'Capstone Delivery',
    description: 'Cross-functional simulation with stakeholder reviews and live demo.',
    duration: 'Weeks 7-9',
    deliverable: 'End-to-end solution spec plus recorded stakeholder walkthrough.',
  },
  {
    title: 'Certification Review',
    description: 'Panel-grade assessment, mastery rubric, and growth plan handoff.',
    duration: 'Week 10',
    deliverable: 'Accredited certification plus recommendations for the next milestone.',
  },
]

export const learningPaths: LearningPath[] = [
  {
    id: 'path-fullstack',
    title: 'Full-Stack Excellence',
    summary:
      'Grow from product-minded engineer to cross-team technical leader with guided practice and mentoring.',
    steps: [
      {
        label: 'Stabilize Fundamentals',
        description: 'React architecture, accessibility, and automated testing foundations.',
        duration: 'Weeks 1-3',
      },
      {
        label: 'Ship Production Features',
        description: 'Incremental rollout strategies, DevOps handoffs, and quality automation.',
        duration: 'Weeks 4-6',
      },
      {
        label: 'Lead the Initiative',
        description: 'Architecture reviews, cost modelling, and engineering playbooks.',
        duration: 'Weeks 7-9',
      },
    ],
    recommendedTracks: ['full-stack-lead', 'cloud-architect'],
  },
  {
    id: 'path-ai',
    title: 'Responsible AI Delivery',
    summary:
      'Operationalize AI experiences with measurable guardrails, evaluation frameworks, and executive alignment.',
    steps: [
      {
        label: 'Identify Use Cases',
        description: 'Map business goals to AI outcomes, define success metrics, form policy guardrails.',
        duration: 'Weeks 1-2',
      },
      {
        label: 'Prototype & Evaluate',
        description: 'Experiment safely, benchmark output quality, implement bias detection.',
        duration: 'Weeks 3-5',
      },
      {
        label: 'Scale & Govern',
        description: 'Set up monitoring, retention policies, and response playbooks for operations.',
        duration: 'Weeks 6-8',
      },
    ],
    recommendedTracks: ['ai-strategist'],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sofia Park',
    role: 'Engineering Manager',
    company: 'Atlas Fintech',
    quote:
      'Our squad shipped a full redesign in half the time because the cohort mirrored real ceremonies and playbooks.',
    completedTrack: 'Full-Stack Tech Lead',
    avatarColor: '#8B5CF6',
  },
  {
    id: 't2',
    name: 'Isaac Romero',
    role: 'Principal Cloud Architect',
    company: 'Northwind Energy',
    quote:
      'The architecture review panel felt like a genuine board. The rubric and mentor pairing were unmatched.',
    completedTrack: 'Cloud Platform Architect',
    avatarColor: '#0EA5E9',
  },
  {
    id: 't3',
    name: 'Maya Desai',
    role: 'Product Director, AI',
    company: 'Brightspace Labs',
    quote:
      'We left with a production-ready AI governance framework and executive-ready narrative in four weeks.',
    completedTrack: 'AI Delivery Strategist',
    avatarColor: '#F97316',
  },
]

export const platformStats: PlatformStat[] = [
  { label: 'Graduation rate', value: '92%', helper: 'completed capstones with distinction' },
  { label: 'Career lift', value: '28%', helper: 'average comp increase in 6 months' },
  { label: 'Mentor network', value: '120+', helper: 'industry leads across 12 countries' },
  { label: 'Live sessions', value: '40 hrs', helper: 'per cohort with async support' },
]
