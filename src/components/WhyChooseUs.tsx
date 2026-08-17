import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { Check } from 'lucide-react';

const POINTS = [
  'Professional Development Team',
  'Modern UI/UX',
  'Fast Loading Websites',
  'Mobile Responsive',
  'SEO Ready',
  'Secure Development',
  'Scalable Architecture',
  'Advanced Features',
  'Business-Focused Solutions',
  'Post-Launch Support',
  'Worldwide Service',
  'Transparent Communication',
];

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-white py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Businesses Choose Us"
          subtitle="We combine engineering discipline with design taste — and communicate clearly the whole way."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p} delay={i * 40}>
              <div className="flex items-center gap-3 rounded-xl bg-ink-50 p-4 ring-1 ring-ink-100 transition-colors hover:bg-brand-50 hover:ring-brand-200">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-ink-800">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
