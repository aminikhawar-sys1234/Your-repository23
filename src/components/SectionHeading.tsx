import { type ReactNode } from 'react';
import { getIcon } from '@/lib/icons';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  icon?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', icon }: Props) {
  const Icon = icon ? getIcon(icon) : null;
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <span className="section-eyebrow">
          {Icon && <Icon className="h-3.5 w-3.5" />}
          {eyebrow}
        </span>
      )}
      <h2 className="section-title mt-3 text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 text-balance">{subtitle}</p>
      )}
    </div>
  );
}
