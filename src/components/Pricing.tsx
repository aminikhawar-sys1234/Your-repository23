import { useEffect, useState } from 'react';
import { Check, Star } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { supabase } from '@/lib/supabase';
import { whatsappLink } from '@/lib/supabase';
import type { PricingPackage } from '@/lib/types';

export function Pricing() {
  const [packages, setPackages] = useState<PricingPackage[]>([]);

  useEffect(() => {
    supabase
      .from('pricing_packages')
      .select('id,name,description,features,delivery,is_popular')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .then(({ data, error }) => {
        if (!error && data) setPackages(data as PricingPackage[]);
      });
  }, []);

  return (
    <section id="pricing" className="container-px py-16 sm:py-24">
      <SectionHeading
        eyebrow="Pricing"
        title="Packages That Scale With You"
        subtitle="Transparent packages — final pricing is confirmed after a short scope call. Request a quote for your project."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg, i) => (
          <Reveal key={pkg.id} delay={i * 70}>
            <article
              className={`relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft ${
                pkg.is_popular ? 'ring-2 ring-brand-500' : 'ring-1 ring-ink-200'
              }`}
            >
              {pkg.is_popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-glow">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-ink-900">{pkg.name}</h3>
              <p className="mt-1.5 text-sm text-ink-600">{pkg.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-400">
                Delivery: {pkg.delivery}
              </p>
              <ul className="mt-4 flex-1 space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                    <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Hello Web Studio Labs, I would like a quote for the ${pkg.name} package.`)}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 w-full ${pkg.is_popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                Request a Quote
              </a>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center gap-1 text-xs text-ink-400">
        <Star className="h-3.5 w-3.5 text-amber-400" />
        Every package includes responsive design, SEO setup, security and post-launch support.
      </div>
    </section>
  );
}
