import { Laptop, Smartphone, Code2 } from 'lucide-react';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-2.5" aria-label="Web Studio Labs home">
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 shadow-glow transition-transform duration-300 group-hover:scale-105" />
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
        <span className="relative flex items-center gap-0.5 text-white">
          <Laptop className="h-4 w-4" strokeWidth={2.4} />
          <Smartphone className="h-3 w-3 -ml-1.5 mt-2 opacity-90" strokeWidth={2.4} />
          <Code2 className="h-3.5 w-3.5 -ml-1 opacity-80" strokeWidth={2.6} />
        </span>
      </span>
      <span className={`flex flex-col leading-none ${compact ? 'scale-95' : ''}`}>
        <span className="font-display text-base font-extrabold tracking-tight text-ink-900">
          WEB STUDIO <span className="gradient-text">LABS</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
          Digital Solutions
        </span>
      </span>
    </a>
  );
}
