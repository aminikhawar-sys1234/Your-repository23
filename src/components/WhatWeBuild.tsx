import { ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { getIcon } from '@/lib/icons';

type Category = {
  title: string;
  description: string;
  technologies: string;
  icon: string;
};

const CATEGORIES: Category[] = [
  {
    title: 'E-Commerce Websites',
    description:
      'Online stores, product catalogs, shopping carts, checkout systems, payment integrations and order management.',
    technologies: 'Next.js • WooCommerce • Stripe',
    icon: 'shopping-cart',
  },
  {
    title: 'Business Websites',
    description:
      'Corporate websites, service websites, company profiles, landing pages and professional business websites.',
    technologies: 'React • WordPress • Tailwind',
    icon: 'layout',
  },
  {
    title: 'Custom ERP Software',
    description:
      'Inventory, sales, purchases, customers, suppliers, invoices, reports, accounting workflows and business management.',
    technologies: 'Laravel • Node.js • PostgreSQL',
    icon: 'database',
  },
  {
    title: 'Mobile Applications',
    description:
      'Android/iOS applications, business apps, customer apps, booking apps and custom mobile solutions.',
    technologies: 'React Native • Flutter',
    icon: 'smartphone',
  },
  {
    title: 'Web Applications',
    description:
      'Dashboards, portals, SaaS platforms, management systems and custom web applications.',
    technologies: 'React • Supabase • Node.js',
    icon: 'layers',
  },
  {
    title: 'UI/UX Design',
    description:
      'Modern interfaces, responsive layouts, conversion-focused user experiences and premium visual design.',
    technologies: 'Figma • Design Systems',
    icon: 'palette',
  },
];

export function WhatWeBuild() {
  return (
    <section id="solutions" className="container-px py-16 sm:py-24">
      <SectionHeading
        eyebrow="What We Build"
        title="Digital Solutions Built for Real Businesses"
        subtitle="From first website to custom ERP, we build the digital products that move your business forward."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat, i) => {
          const Icon = getIcon(cat.icon);
          return (
            <Reveal key={cat.title} delay={i * 80}>
              <article className="card card-hover group h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-accent-50 text-brand-600 ring-1 ring-brand-100">
                    <Icon className="h-6 w-6" />
                  </span>
                  <ArrowRight className="h-4 w-4 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-brand-500" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{cat.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-400">
                  {cat.technologies}
                </p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                  View Details <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
