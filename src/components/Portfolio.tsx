import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink, FileText } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';
import { supabase } from '@/lib/supabase';
import type { Project } from '@/lib/types';

const FILTERS = ['All', 'E-Commerce', 'ERP', 'Business', 'Portfolio', 'Mobile Apps', 'Web Apps'];

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('projects')
      .select('id,name,category,industry,description,technologies,features,image_url,live_url')
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setProjects(data as Project[]);
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [projects, active],
  );

  return (
    <section id="portfolio" className="bg-white py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Featured Portfolio"
          title="Our Selected Work"
          subtitle="240+ projects completed for businesses and organizations across different industries."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                active === f
                  ? 'bg-brand-600 text-white shadow-glow'
                  : 'bg-ink-100 text-ink-700 hover:bg-ink-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card h-96 animate-pulse bg-ink-100/60" />
              ))
            : filtered.map((p, i) => (
                <Reveal key={p.id} delay={i * 70}>
                  <article className="card card-hover group flex h-full flex-col overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                      <SmartImage
                        src={p.image_url}
                        alt={p.name}
                        fallbackLabel={p.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 chip bg-white/90 backdrop-blur">
                        {p.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-ink-900">{p.name}</h3>
                        <span className="rounded-md bg-ink-50 px-2 py-0.5 text-xs font-medium text-ink-500 ring-1 ring-ink-200">
                          {p.industry}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.technologies.slice(0, 4).map((t) => (
                          <span key={t} className="chip text-[11px]">{t}</span>
                        ))}
                      </div>
                      <ul className="mt-3 space-y-1">
                        {p.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-center gap-1.5 text-xs text-ink-500">
                            <span className="h-1 w-1 rounded-full bg-brand-500" /> {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto flex gap-2 pt-5">
                        {p.live_url ? (
                          <a href={p.live_url} target="_blank" rel="noreferrer" className="btn-secondary flex-1 text-xs">
                            <ExternalLink className="h-3.5 w-3.5" /> Live Website
                          </a>
                        ) : (
                          <span className="btn-secondary flex-1 cursor-default text-xs opacity-60">
                            <ExternalLink className="h-3.5 w-3.5" /> Preview
                          </span>
                        )}
                        <a href="#case-studies" className="btn-ghost flex-1 text-xs">
                          <FileText className="h-3.5 w-3.5" /> Case Study
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
        </div>

        {!loading && filtered.length === 0 && (
          <p className="mt-12 text-center text-sm text-ink-500">
            No projects in this category yet. Check back soon.
          </p>
        )}

        <p className="mt-8 flex items-center justify-center gap-1.5 text-center text-xs text-ink-400">
          <ArrowUpRight className="h-3.5 w-3.5" /> Portfolio content is fully editable from the admin panel.
        </p>
      </div>
    </section>
  );
}
