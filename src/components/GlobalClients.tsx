import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const COUNTRIES = ['Pakistan', 'UAE', 'Saudi Arabia', 'UK', 'USA', 'Canada', 'Australia'];

export function GlobalClients() {
  return (
    <section id="global" className="container-px py-16 sm:py-24">
      <SectionHeading
        eyebrow="Global Reach"
        title="Serving Businesses Worldwide"
        subtitle="From Multan and Dubai to clients across four continents."
      />
      <div className="relative mt-12 overflow-hidden rounded-3xl bg-ink-950 p-8 text-white shadow-soft sm:p-12">
        <div className="absolute inset-0 bg-grid-light opacity-10 [background-size:32px_32px]" />
        <div className="relative grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm text-ink-300">
                We work async-first across time zones, with clear English communication and reliable
                delivery. Your location is never a blocker.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {COUNTRIES.map((c) => (
                  <li key={c} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative mx-auto aspect-[16/10] w-full max-w-md">
              <WorldMap />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WorldMap() {
  const dots = [
    { top: '52%', left: '62%' },
    { top: '44%', left: '54%' },
    { top: '46%', left: '58%' },
    { top: '34%', left: '47%' },
    { top: '40%', left: '26%' },
    { top: '30%', left: '22%' },
    { top: '70%', left: '82%' },
  ];
  return (
    <div className="relative h-full w-full rounded-2xl bg-white/5 ring-1 ring-white/10">
      <div className="absolute inset-0 bg-grid-light opacity-20 [background-size:24px_24px]" />
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2"
          style={{ top: d.top, left: d.left }}
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-accent-400/70" style={{ animationDelay: `${i * 300}ms` }} />
          <span className="absolute inset-0 rounded-full bg-accent-400 ring-2 ring-white/40" />
        </span>
      ))}
    </div>
  );
}
