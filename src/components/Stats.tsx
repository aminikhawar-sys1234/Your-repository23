import { useCountUp } from '@/lib/useCountUp';
import { useInView } from '@/lib/useInView';

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 240, suffix: '+', label: 'Projects Completed' },
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Industries Served' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

function StatCard({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.value, 1600, start);
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
        <span className="gradient-text">{value}</span>
        <span className="text-brand-600">{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-ink-600">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <section className="container-px py-16 sm:py-20">
      <div ref={ref} className="grid grid-cols-2 gap-8 rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink-200 sm:grid-cols-4 sm:p-10">
        {STATS.map((s) => (
          <StatCard key={s.label} stat={s} start={inView} />
        ))}
      </div>
      <p className="mt-6 text-center text-sm font-medium text-ink-500">
        Serving businesses worldwide since 2023
      </p>
    </section>
  );
}
