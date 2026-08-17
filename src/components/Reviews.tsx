import { useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { supabase } from '@/lib/supabase';
import type { Testimonial } from '@/lib/types';

export function Reviews() {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    supabase
      .from('testimonials')
      .select('id,client_name,location,company,project_type,rating,quote')
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setReviews(data as Testimonial[]);
      });
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, [reviews.length]);

  const current = reviews[index];

  return (
    <section id="reviews" className="bg-white py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What Our Clients Say"
          subtitle="Feedback from clients in Pakistan and around the world."
        />

        {reviews.length === 0 ? (
          <p className="mt-12 text-center text-sm text-ink-500">
            Reviews will appear here once published from the admin panel.
          </p>
        ) : (
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="relative rounded-3xl bg-gradient-to-br from-ink-50 to-brand-50 p-8 shadow-card ring-1 ring-ink-200 sm:p-12">
              <Quote className="absolute right-8 top-8 h-12 w-12 text-brand-200" />
              <div className="flex gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-ink-800 text-balance">
                “{current.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                  {current.client_name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-900">{current.client_name}</p>
                  <p className="text-xs text-ink-500">
                    {current.location}
                    {current.company ? ` • ${current.company}` : ''}
                    {current.project_type ? ` • ${current.project_type}` : ''}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-brand-600' : 'w-2 bg-ink-200'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <p className="mt-8 text-center text-xs text-ink-400">
          Reviews are editable placeholders until genuine testimonials are added from the admin panel.
        </p>
      </div>
    </section>
  );
}
