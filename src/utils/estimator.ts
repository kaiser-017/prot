import { EstimatorAddon, EstimatorCalculation, ProjectScopeType, TimelineType } from '../types/portfolio';

export const AVAILABLE_ADDONS: EstimatorAddon[] = [
  {
    id: 'motion',
    label: 'Custom Framer Motion & Interactive Canvas',
    description: 'Bespoke micro-interactions, smooth scroll triggers, and visual storytelling.',
    price: 600,
    days: 4,
  },
  {
    id: 'cms',
    label: 'Headless CMS Integration (Sanity / Contentful)',
    description: 'Empower your team to publish blog posts, case studies, and products easily.',
    price: 800,
    days: 5,
  },
  {
    id: 'seo_cro',
    label: 'Deep SEO & Conversion Optimization Pack',
    description: 'Structured metadata, schema markup, 100/100 Lighthouse performance, and analytics funnel setup.',
    price: 500,
    days: 3,
  },
  {
    id: 'figma_source',
    label: 'Full Figma Design System & Component Library',
    description: 'Complete scalable UI kit with typography, tokens, auto-layout variants, and dark mode.',
    price: 700,
    days: 4,
  },
  {
    id: 'ab_testing',
    label: 'A/B Testing Infrastructure & Heatmap Tracking',
    description: 'Deploy split variant hooks and PostHog / Microsoft Clarity event pipelines.',
    price: 450,
    days: 3,
  },
];

export interface ScopeConfig {
  label: string;
  tagline: string;
  baseMin: number;
  baseMax: number;
  daysMin: number;
  daysMax: number;
}

export const SCOPE_CONFIGS: Record<ProjectScopeType, ScopeConfig> = {
  landing: {
    label: 'High-Converting Landing Page',
    tagline: 'Singular focus page engineered to turn cold traffic into paying customers or booked calls.',
    baseMin: 2200,
    baseMax: 3500,
    daysMin: 7,
    daysMax: 14,
  },
  website: {
    label: 'Multi-Page Brand Website (4-8 pages)',
    tagline: 'Comprehensive corporate or studio presence with dynamic portfolio, services, and company story.',
    baseMin: 4500,
    baseMax: 7000,
    daysMin: 18,
    daysMax: 28,
  },
  webapp: {
    label: 'Full Web App Front-End & Product UI',
    tagline: 'Production-ready dashboard, authentication, state architecture, and complex user flows.',
    baseMin: 6500,
    baseMax: 10500,
    daysMin: 25,
    daysMax: 42,
  },
  redesign: {
    label: 'UI/UX & Conversion Rate Overhaul',
    tagline: 'Audit of your existing site, pinpointing UX friction, and rebuilding for elevated aesthetic and 2x conversion.',
    baseMin: 3200,
    baseMax: 4800,
    daysMin: 12,
    daysMax: 20,
  },
};

export const TIMELINE_MULTIPLIERS: Record<TimelineType, { priceMult: number; daysMult: number; label: string }> = {
  fast: {
    priceMult: 1.25, // Priority expedited delivery surcharge
    daysMult: 0.65,  // Fast turnaround
    label: 'Expedited (Sprint Priority)',
  },
  standard: {
    priceMult: 1.0,
    daysMult: 1.0,
    label: 'Standard Pace',
  },
  flexible: {
    priceMult: 0.95, // 5% discount for flexible calendar
    daysMult: 1.3,
    label: 'Flexible Start',
  },
};

/**
 * Calculates project investment range and estimated delivery timeframe
 */
export function calculateProjectEstimate(
  scope: ProjectScopeType,
  selectedAddonIds: string[],
  timeline: TimelineType
): EstimatorCalculation {
  const scopeConfig = SCOPE_CONFIGS[scope] || SCOPE_CONFIGS.landing;
  const timelineConfig = TIMELINE_MULTIPLIERS[timeline] || TIMELINE_MULTIPLIERS.standard;

  // Addons total
  const selectedAddons = AVAILABLE_ADDONS.filter((addon) => selectedAddonIds.includes(addon.id));
  const addonPriceTotal = selectedAddons.reduce((sum, item) => sum + item.price, 0);
  const addonDaysTotal = selectedAddons.reduce((sum, item) => sum + item.days, 0);

  // Raw totals
  const subtotalMin = scopeConfig.baseMin + addonPriceTotal;
  const subtotalMax = scopeConfig.baseMax + addonPriceTotal;

  // Apply timeline speed multiplier
  const totalMin = Math.round((subtotalMin * timelineConfig.priceMult) / 50) * 50;
  const totalMax = Math.round((subtotalMax * timelineConfig.priceMult) / 50) * 50;

  // Days calculation
  const totalDaysMin = Math.max(5, Math.round((scopeConfig.daysMin + addonDaysTotal * 0.5) * timelineConfig.daysMult));
  const totalDaysMax = Math.max(totalDaysMin + 3, Math.round((scopeConfig.daysMax + addonDaysTotal * 0.7) * timelineConfig.daysMult));

  const formatWeeks = (days: number): string => {
    if (days < 10) return `${days} business days`;
    const weeks = Math.round((days / 5) * 10) / 10;
    return `~${weeks} weeks`;
  };

  return {
    basePriceMin: scopeConfig.baseMin,
    basePriceMax: scopeConfig.baseMax,
    addonTotal: addonPriceTotal,
    totalMin,
    totalMax,
    estimatedDaysMin: totalDaysMin,
    estimatedDaysMax: totalDaysMax,
    formattedRange: `$${totalMin.toLocaleString()} – $${totalMax.toLocaleString()} USD`,
    formattedTimeline: `${formatWeeks(totalDaysMin)} to ${formatWeeks(totalDaysMax)}`,
  };
}

/**
 * Validates lead contact submission
 */
export function validateInquiryForm(data: {
  name: string;
  email: string;
  message: string;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your name or brand name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid work email address.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please share a brief summary of your project goals (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
