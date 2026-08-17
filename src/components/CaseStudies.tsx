import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { supabase } from '@/lib/supabase';
import type { CaseStudy } from '@/lib/types';

const STEPS = [
  { key: 'client_industry', label: 'Client / Industry' },
  { key: 'challenge', label: 'Challenge' },
  { key: 'strategy', label: 'Strategy' },
  { key: 'design', label: 'Design' },
  { key: 'development', label: 'Development' },
  { key: 'result', label: 'Result' },
] as const;

export function CaseStudies() {
  const [items, setItems] = useState<CaseStudy[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    supabase
      .from('case_studies')
      .select('id,title,client_industry,challenge,strategy,design,development,features,technologies,result,image_url')
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setItems(data as CaseStudy[]);
      });
  }, []);

  const current = items[active];

  return (
    <section id="case-studies" className="container-px py-16 sm:py-24">
      <SectionHeading
        eyebrow="Case Studies"
        title="From Challenge to Solution"
        subtitle="A transparent look at how we turn business problems into shipped software."
      />

      {items.length === 0 ? (
        <p className="mt-12 text-center text-sm text-ink-500">
          Case studies are being prepared. They will appear here once published.
        </p>
      ) : (
        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          <Reveal>
            <ol className="relative space-y-1 border-l border-ink-200 pl-4">
              {items.map((item, i) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                      active === i ? 'bg-brand-50' : 'hover:bg-ink-100'
                    }`}
                  >
                    <span
                      className={`-ml-[1.4rem] inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                        active === i ? 'bg-brand-600 text-white' : 'bg-white text-ink-600 ring-1 ring-ink-200'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm font-semibold text-ink-800">{item.title}</span>
                  </button>
                </li>
              ))}
            </ol>
          </Reveal>

          {current && (
            <Reveal delay={100}>
              <article className="card overflow-hidden p-6 sm:p-8">
                {current.image_url && (
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <img src={current.image_url} alt={current.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                  </div>
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                  {STEPS.map((step) => {
                    const value = (current as unknown as Record<string, string>)[step.key];
                    return (
                      <div key={step.key} className="rounded-xl bg-ink-50 p-4 ring-1 ring-ink-100">
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{step.label}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{value || '—'}</p>
                      </div>
                    );
                  })}
                </div>
                {(current.features.length > 0 || current.technologies.length > 0) && (
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {current.features.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Features</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {current.features.map((f) => <span key={f} className="chip">{f}</span>)}
                        </div>
                      </div>
                    )}
                    {current.technologies.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Technologies</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {current.technologies.map((t) => <span key={t} className="chip">{t}</span>)}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <a href="#contact" className="btn-primary mt-7">
                  View Full Case Study <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          )}
        </div>
      )}
    </section>
  );
}
