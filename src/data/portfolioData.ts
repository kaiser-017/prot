import { Project, ProcessStep, ClientReview } from '../types/portfolio';

export const PORTFOLIO_HERO_DATA = {
  kicker: 'CREATIVE DEVELOPER',
  titleLine1: 'Build digital',
  titleLine2: 'experiences that',
  titleLine3: 'last.',
  supporting:
    'Thoughtfully designed websites for brands that want to make a stronger impression. Specializing in high-converting landing pages, bespoke web development, and memorable UI/UX.',
  stats: [
    { value: '45+', label: 'Shipped Websites', sublabel: 'Across 12 countries' },
    { value: '+210%', label: 'Avg Conversion Lift', sublabel: 'Within 60 days of launch' },
    { value: '99.4%', label: 'On-Time Handover', sublabel: 'Strict milestone delivery' },
    { value: '5.0 ★', label: 'Client Feedback', sublabel: 'Across 30+ verified reviews' },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'bloom-studio',
    title: 'Bloom Studio',
    category: 'landing',
    categoryLabel: 'E-Commerce / Spatial Brand',
    client: 'Bloom Botanicals NY',
    year: '2024',
    tagline: 'Luxury floral & spatial botanical lookbook with frictionless checkout flow.',
    metric: '+185%',
    metricLabel: 'Checkout conversion rate jump within 30 days',
    liveUrl: 'https://bloom-studio.demo',
    featured: true,
    color: '#F4ECE4',
    accentColor: '#C65D3A',
    summary:
      'A bespoke editorial storefront merging tactile physical floral sculpture with effortless digital purchasing, resulting in an immediate 185% increase in seasonal bookings.',
    challenge:
      'The previous floral boutique site felt like a generic Shopify template. It lost 72% of high-net-worth clients during mobile browsing due to clunky image loading and impersonal catalog layouts.',
    solution:
      'Engineered an editorial lookbook architecture inspired by architectural journals, featuring instant image micro-caching, smooth scroll transitions, and a streamlined 2-tap bespoke inquiry drawer.',
    deliverables: ['Custom UI/UX in Figma', 'Next.js & Tailwind Front-End', 'Headless Checkout Architecture', 'Micro-interactions'],
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Shopify Storefront API'],
    testimonial: {
      quote:
        'Divu turned our visual identity into a digital masterpiece. Our direct online orders doubled in the first month alone, and our brand finally commands luxury market pricing.',
      author: 'Clara Vance',
      role: 'Creative Director & Founder',
      company: 'Bloom Botanicals NY',
    },
    previewType: 'bloom',
  },
  {
    id: 'nexora-ai',
    title: 'Nexora AI',
    category: 'webapp',
    categoryLabel: 'Developer Platform / SaaS',
    client: 'Nexora Cloud',
    year: '2024',
    tagline: 'High-contrast dark mode landing & interactive playground for distributed GPU clusters.',
    metric: '+240%',
    metricLabel: 'Developer trial signup & activation increase',
    liveUrl: 'https://nexora.tech',
    featured: true,
    color: '#0F1218',
    accentColor: '#38BDF8',
    summary:
      'Engineered an ultra-crisp developer platform landing page featuring live interactive terminal previews, real-time latency simulation, and single-click CLI copy triggers.',
    challenge:
      'Nexora possessed superior GPU inference infrastructure, but their original landing page confused engineers with jargon and hid the instant CLI installation command behind long scroll sections.',
    solution:
      'Built a stark, technical visual hierarchy adhering to Vercel-grade restraint: top-level copy snippet terminal, live ping benchmarks, and an interactive pricing slider based on GPU hours.',
    deliverables: ['Product Architecture & UX', 'Full React / TypeScript Applet', 'Interactive Terminal Emulator', 'Performance Optimization (100/100 Lighthouse)'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide', 'Geist Font'],
    testimonial: {
      quote:
        'Divu is that rare unicorn who has an exceptional eye for typography and whitespace while writing pristine, high-performance TypeScript. Our seed round investors specifically praised the website.',
      author: 'Kaelen Thorne',
      role: 'CTO & Co-Founder',
      company: 'Nexora Cloud',
    },
    previewType: 'nexora',
  },
  {
    id: 'monolith-atelier',
    title: 'Monolith Atelier',
    category: 'landing',
    categoryLabel: 'Architecture & Spatial Design',
    client: 'Monolith Studio Zurich',
    year: '2024',
    tagline: 'Minimalist architectural monograph featuring horizontal gallery pacing and travertine textures.',
    metric: 'Awwwards',
    metricLabel: 'Site of the Day Nominee & +320% client discovery calls',
    liveUrl: 'https://monolith-atelier.design',
    featured: true,
    color: '#EFECE6',
    accentColor: '#171717',
    summary:
      'An architectural monograph website designed for a Swiss atelier, presenting residential projects as curated physical exhibition rooms.',
    challenge:
      'The firm needed to transition from regional private commissions to international museum and gallery architecture competitions, requiring a digital presence of world-class prestige.',
    solution:
      'Crafted a brutalist-minimal editorial layout with generous breathing room, crisp tabular blueprint metadata, and smooth image reveal sequences.',
    deliverables: ['Brand Tone of Voice', 'Bespoke Design System', 'Responsive Web Framework', 'Interactive Blueprint Overlay'],
    techStack: ['Next.js', 'Tailwind CSS', 'WebGL Canvas', 'Geist Sans'],
    testimonial: {
      quote:
        'Working with Divu was the best investment our practice made this year. The portfolio reflects the quiet confidence and precision of our physical buildings.',
      author: 'Marcus Lindqvist',
      role: 'Principal Architect',
      company: 'Monolith Studio Zurich',
    },
    previewType: 'monolith',
  },
  {
    id: 'aura-sound-labs',
    title: 'Aura Sound Labs',
    category: 'webapp',
    categoryLabel: 'Hardware / Interactive Audio',
    client: 'Aura Acoustics Tokyo',
    year: '2024',
    tagline: 'Generative sound configurator & immersive hardware product launch page.',
    metric: '4.9 / 5.0',
    metricLabel: 'Hardware pre-order review score across 12,000 units',
    liveUrl: 'https://aurasound.audio',
    featured: false,
    color: '#121214',
    accentColor: '#C65D3A',
    summary:
      'An interactive sound simulation landing page allowing audiophiles to test spatial frequency response directly through their browser before pre-ordering.',
    challenge:
      'Hardware launches struggle with online conversion because customers cannot hear physical acoustic transducers through standard web specs.',
    solution:
      'Constructed a Web Audio API frequency visualizer inside an elegant tactile 3D control deck, letting users hear simulated binaural room response in real time.',
    deliverables: ['Interactive Audio Engine', 'E-commerce Pre-order Funnel', 'Framer Motion Gestures', 'Mobile Touch Optimization'],
    techStack: ['React', 'Web Audio API', 'Tailwind CSS', 'Framer Motion'],
    testimonial: {
      quote:
        'The interactive acoustic test doubled our pre-order conversion compared to our previous Kickstarter campaigns. Sensational craft.',
      author: 'Ren Takahashi',
      role: 'Head of Product',
      company: 'Aura Acoustics',
    },
    previewType: 'aura',
  },
  {
    id: 'vanguard-capital',
    title: 'Vanguard Capital',
    category: 'landing',
    categoryLabel: 'Fintech / Liquidity Treasury',
    client: 'Vanguard Liquidity Ltd.',
    year: '2024',
    tagline: 'High-converting institutional onboarding funnel and private wealth portal.',
    metric: '$48M+',
    metricLabel: 'Institutional liquidity secured via streamlined verification',
    liveUrl: 'https://vanguard-flow.finance',
    featured: false,
    color: '#FAFAFA',
    accentColor: '#10B981',
    summary:
      'Engineered a frictionless 4-step institutional onboarding flow replacing 14-page PDF paper forms with a compliant, encrypted digital experience.',
    challenge:
      'Institutional fund managers were abandoning account setup due to overly intimidating legalese and archaic spreadsheet uploads.',
    solution:
      'Streamlined the verification journey with automatic document verification cues, clean progress indicators, and instant validation feedback.',
    deliverables: ['Conversion Funnel Audit', 'Interactive Onboarding Flow', 'Design System (Tokens & Components)', 'Accessibility Compliance (WCAG AA)'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide'],
    testimonial: {
      quote:
        'Divu turned a complex compliance nightmare into a breezy, elegant 3-minute experience. Our completion rate increased from 34% to 88%.',
      author: 'Helena Rostova',
      role: 'Managing Director',
      company: 'Vanguard Liquidity',
    },
    previewType: 'vanguard',
  },
  {
    id: 'kinetic-type',
    title: 'Kinetic Type Lab',
    category: 'uiux',
    categoryLabel: 'Typography & Design System',
    client: 'Kinetic Independent Foundry',
    year: '2023',
    tagline: 'Experimental variable font specimen tester and digital type licensing engine.',
    metric: '+310%',
    metricLabel: 'Type license revenue growth post-redesign',
    liveUrl: 'https://kinetictype.foundry',
    featured: false,
    color: '#18181B',
    accentColor: '#F59E0B',
    summary:
      'An interactive playground where designers test variable font axes (weight, slant, optical size) with their own custom text strings and keyboard shortcuts.',
    challenge:
      'Traditional PDF type specimens made it impossible for contemporary digital designers to preview font rendering under responsive browser settings.',
    solution:
      'Built a live canvas specimen tool with instant CSS font-face generator, glyph viewer, and immediate commercial cart integration.',
    deliverables: ['Variable Font Engine', 'Glyph Matrix Viewer', 'Licensing Calculator', 'Micro-interactions'],
    techStack: ['Canvas 2D', 'React', 'Tailwind CSS', 'Geist Mono'],
    testimonial: {
      quote:
        'The variable font playground is now the standard in our industry. Sales skyrocketed the week we launched the new site.',
      author: 'Julian Moreau',
      role: 'Lead Type Designer',
      company: 'Kinetic Type',
    },
    previewType: 'kinetic',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    phase: 'Discovery & Strategy',
    title: 'Discover & Align',
    timeline: 'Days 1 – 4',
    tagline: 'Uncovering the unique angle that makes your offering irresistible to high-value buyers.',
    description:
      'Before touching a single pixel, we audit your target customer persona, existing conversion bottlenecks, and competitive landscape. We map user journeys that directly address buyer objections.',
    deliverables: [
      'Conversion Architecture Map',
      'Target Audience & Value Prop Matrix',
      'Site Information Hierarchy',
      'Wireframe Click-through in Figma',
    ],
    keyActions: [
      'In-depth 45-minute discovery workshop',
      'Analysis of top 5 competitors in your niche',
      'Defining core conversion events & tracking plan',
      'Establishing content structure & copy hooks',
    ],
  },
  {
    number: '02',
    phase: 'Visual Direction & UI/UX',
    title: 'Design & Prototype',
    timeline: 'Days 5 – 11',
    tagline: 'Crafting a distinctive, high-craft aesthetic that establishes instant market authority.',
    description:
      'Translating strategic wireframes into breathtaking, pixel-exact visual prototypes. We test typographic scales, motion choreography, responsive layout reflows, and micro-interactions.',
    deliverables: [
      'Interactive High-Fidelity Figma Prototype',
      'Design System (Tokens, Typography, Components)',
      'Mobile-First Layout Reflows',
      'Micro-interaction & Animation Guidelines',
    ],
    keyActions: [
      'Presenting 2 bespoke aesthetic art directions',
      'Figma prototype interactive walkthrough with you',
      'Color and typography harmony calibration',
      'Pre-coding feedback sprint and revisions',
    ],
  },
  {
    number: '03',
    phase: 'Engineering & Craft',
    title: 'Develop & Polish',
    timeline: 'Days 12 – 18',
    tagline: 'Clean, semantic TypeScript & Tailwind code engineered for 100/100 Lighthouse speed.',
    description:
      'Bringing the design to life with modern production-grade front-end code. Zero layout shifting, fluid 60fps animations, accessible ARIA controls, and seamless form integrations.',
    deliverables: [
      'Production-Ready Clean Git Codebase',
      '100/100 Lighthouse Performance Audit',
      'Full Cross-Browser & Device Testing',
      'Interactive State Handling & Form Validation',
    ],
    keyActions: [
      'Live staging preview link for real-time progress',
      'Fluid Framer Motion & CSS transition tuning',
      'Core Web Vitals & asset compression audit',
      'SEO metadata, OpenGraph cards & JSON-LD setup',
    ],
  },
  {
    number: '04',
    phase: 'Handover & Growth',
    title: 'Launch & Convert',
    timeline: 'Days 19 – 21',
    tagline: 'Flawless deployment with zero downtime and conversion tracking ready from minute one.',
    description:
      'Connecting your domain, setting up analytics and CRM webhook pipelines, and recording a personalized video walkthrough so you or your team can manage content with zero technical friction.',
    deliverables: [
      'Domain & SSL Production Deployment',
      'Analytics & Conversion Webhook Setup',
      'Loom Video Training & Documentation',
      '30-Day Post-Launch Bug-Free Warranty',
    ],
    keyActions: [
      'DNS migration & zero-downtime release',
      'Testing live lead submission and notifications',
      'Post-launch 30-day monitoring and support',
      'Conversion optimization review check-in',
    ],
  },
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    clientName: 'Sarah Jenkins',
    role: 'Founder & CEO',
    company: 'HyperScale AI',
    project: 'SaaS Platform Redesign',
    quote:
      'Divu completely transformed our pitch. When we send prospective customers and venture capitalists to our website now, the immediate response is always "Who built this site?". Our inbound demo requests skyrocketed by 210%.',
    metricResult: '+210% Inbound Demos',
    avatarSeed: 'sarah',
  },
  {
    id: 'rev-2',
    clientName: 'Julian Thorne',
    role: 'Head of Marketing',
    company: 'Arcadia Living',
    project: 'Direct-to-Consumer Brand Launch',
    quote:
      'Most developers only know how to code, and most designers have no clue about conversion math. Divu mastered both. He delivered the entire project 4 days ahead of schedule without a single bug.',
    metricResult: '4 Days Early Delivery',
    avatarSeed: 'julian',
  },
  {
    id: 'rev-3',
    clientName: 'Elena Rostova',
    role: 'VP of Product',
    company: 'Vanguard Capital',
    project: 'Fintech Client Onboarding Funnel',
    quote:
      'We had a 65% drop-off on our old onboarding flow. Divu redesigned the entire UX with clean micro-steps and instant validation. Our completion rate jumped to 89% in week two.',
    metricResult: '89% Funnel Completion',
    avatarSeed: 'elena',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How fast can we launch my new website or landing page?',
    answer:
      'A dedicated high-converting landing page typically launches in 7 to 12 business days. Comprehensive multi-page brand websites or full product front-ends take between 2 to 4 weeks. If you have an urgent product launch or funding announcement, expedited sprint delivery is available.',
  },
  {
    question: 'Why hire an independent specialist instead of an agency?',
    answer:
      'Agencies charge 3x to 5x more to cover account managers, office overhead, and junior staff. With me, you work 1-on-1 directly with a senior creative developer who designs and codes everything personally. You get lightning-fast turnaround, zero game of telephone, and higher craftsmanship.',
  },
  {
    question: 'How do you guarantee high conversion rates?',
    answer:
      'Great design is not just visual decoration; it is psychological clarity. We engineer the visual hierarchy so visitors instantly understand what you do, trust your credibility through strategic proof placement, and hit zero friction when booking a call or submitting an inquiry.',
  },
  {
    question: 'What happens after the website goes live?',
    answer:
      'Every project includes a 30-day post-launch warranty, full video training walkthrough, clean GitHub repository handover, and ongoing support options if you want continuous conversion optimization.',
  },
];
