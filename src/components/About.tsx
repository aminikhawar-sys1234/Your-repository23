import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const OFFERINGS = [
  'Website Development',
  'E-Commerce',
  'ERP',
  'Mobile Applications',
  'UI/UX',
  'SEO',
  'Business Automation',
];

export function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="section-eyebrow">About</span>
              <h2 className="section-title mt-3">About Web Studio Labs</h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600">
                Established in 2023, Web Studio Labs is a professional digital development company
                delivering modern digital solutions for businesses in Pakistan and worldwide. We
                combine engineering discipline with design taste to ship software that performs.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                From high-performance websites and e-commerce platforms to custom ERP systems and
                mobile applications, we focus on what matters: fast, secure, scalable products that
                move your business forward — with clear communication throughout.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {OFFERINGS.map((o) => (
                  <span key={o} className="chip">{o}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-accent-50 p-6 ring-1 ring-brand-100">
                <p className="font-display text-3xl font-extrabold text-brand-700">2023</p>
                <p className="mt-1 text-sm text-ink-600">Established</p>
              </div>
              <div className="rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-200">
                <p className="font-display text-3xl font-extrabold text-ink-900">240+</p>
                <p className="mt-1 text-sm text-ink-600">Projects shipped</p>
              </div>
              <div className="rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-200">
                <p className="font-display text-3xl font-extrabold text-ink-900">7+</p>
                <p className="mt-1 text-sm text-ink-600">Countries served</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-accent-50 to-brand-50 p-6 ring-1 ring-accent-100">
                <p className="font-display text-3xl font-extrabold text-accent-600">99%</p>
                <p className="mt-1 text-sm text-ink-600">Client satisfaction</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
