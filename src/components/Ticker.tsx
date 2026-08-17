const ITEMS = [
  'Website Development',
  'E-Commerce Solutions',
  'Custom ERP Software',
  'Mobile App Development',
  'UI/UX Design',
  'SEO & Performance',
  'Secure Web Applications',
  'Cloud & Database Solutions',
  'Website Maintenance',
  'Worldwide Services',
];

export function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-ink-200 bg-white/70 py-2.5 backdrop-blur">
      <div className="mask-fade-r flex">
        <ul className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
          {doubled.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm font-medium text-ink-700">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
