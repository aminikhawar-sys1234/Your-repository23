import { useEffect, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { supabase } from '@/lib/supabase';
import { getIcon } from '@/lib/icons';
import type { Technology } from '@/lib/types';

const CATEGORIES = ['Frontend', 'Backend', 'Database', 'CMS', 'Mobile', 'Cloud', 'Design'];

export function TechStack() {
  const [tech, setTech] = useState<Technology[]>([]);

  useEffect(() => {
    supabase
      .from('technologies')
      .select('id,name,category,icon')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .then(({ data, error }) => {
        if (!error && data) setTech(data as Technology[]);
      });
  }, []);

  return (
    <section id="tech" className="container-px py-16 sm:py-24">
      <SectionHeading
        eyebrow="Technology Stack"
        title="Tools We Build With"
        subtitle="A modern, proven stack — chosen for performance, maintainability and scale."
      />
      <div className="mt-12 space-y-10">
        {CATEGORIES.map((cat) => {
          const items = tech.filter((t) => t.category === cat);
          if (items.length === 0) return null;
          return (
            <Reveal key={cat}>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink-500">{cat}</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  {items.map((t) => {
                    const Icon = getIcon(t.icon);
                    return (
                      <div
                        key={t.id}
                        className="group relative flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-ink-200 shadow-card transition-all hover:-translate-y-0.5 hover:ring-brand-300"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-semibold text-ink-800">{t.name}</span>
                        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-ink-900 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                          {t.category}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
