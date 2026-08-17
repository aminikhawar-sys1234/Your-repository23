import { type ReactNode } from 'react';
import { useInView } from '@/lib/useInView';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
};

export function Reveal({ children, delay = 0, className = '', as = 'div' }: Props) {
  const { ref, inView } = useInView();
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-700 ease-out ${className} ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
