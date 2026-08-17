import { useEffect, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { supabase } from '@/lib/supabase';
import { getIcon } from '@/lib/icons';
import type { TeamMember } from '@/lib/types';

export function Team() {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    supabase
      .from('team_members')
      .select('id,role,description,icon')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .then(({ data, error }) => {
        if (!error && data) setMembers(data as TeamMember[]);
      });
  }, []);

  return (
    <section id="team" className="container-px py-16 sm:py-24">
      <SectionHeading
        eyebrow="The Team"
        title="Built by a Professional Development Team"
        subtitle="Role-based specialists covering every part of a modern digital product — from design to deployment."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m, i) => {
          const Icon = getIcon(m.icon);
          return (
            <Reveal key={m.id} delay={i * 70}>
              <article className="card card-hover group h-full p-6 text-center">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-accent-50 text-brand-600 ring-1 ring-brand-100">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink-900">{m.role}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{m.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-8 text-center text-xs text-ink-400">
        Role-based representation. Personal details appear once team information is provided.
      </p>
    </section>
  );
}
