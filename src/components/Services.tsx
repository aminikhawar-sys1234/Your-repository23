import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { supabase } from '@/lib/supabase';
import { getIcon } from '@/lib/icons';
import type { Service } from '@/lib/types';

export function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    supabase
      .from('services')
      .select('id,name,description,icon')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .then(({ data, error }) => {
        if (!error && data) setServices(data as Service[]);
      });
  }, []);

  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Services"
          title="What We Can Build for You"
          subtitle="A full-spectrum digital development partner — from first website to custom software."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = getIcon(s.icon);
            return (
              <Reveal key={s.id} delay={i * 50}>
                <article className="card card-hover group h-full p-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-accent-50 text-brand-600 ring-1 ring-brand-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink-900">{s.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{s.description}</p>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700">
                    Get a quote <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
