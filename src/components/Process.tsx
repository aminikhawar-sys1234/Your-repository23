import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const STEPS = [
  { n: '01', title: 'Discovery', desc: 'We learn your business, goals and constraints before any code is written.' },
  { n: '02', title: 'Strategy', desc: 'We define scope, architecture and a roadmap that fits your timeline.' },
  { n: '03', title: 'UI/UX Design', desc: 'We design interfaces that are clear, on-brand and conversion-focused.' },
  { n: '04', title: 'Development', desc: 'We build with clean, maintainable code and regular reviews.' },
  { n: '05', title: 'Testing', desc: 'We test across devices and browsers so nothing breaks in the wild.' },
  { n: '06', title: 'Deployment', desc: 'We launch with zero-downtime and proper monitoring in place.' },
  { n: '07', title: 'Support', desc: 'We stay available for updates, fixes and improvements after launch.' },
];

export function Process() {
  return (
    <section id="process" className="bg-white py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Process"
          title="A Clear Path from Idea to Launch"
          subtitle="Seven focused stages that keep scope, quality and communication on track."
        />
        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="relative">
                  <div className="relative z-10 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-600 ring-1 ring-ink-200 shadow-card">
                    <span className="font-display text-lg font-bold">{s.n}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-ink-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
