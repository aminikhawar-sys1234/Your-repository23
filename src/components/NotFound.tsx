import { ArrowRight, Home, LayoutGrid, Mail } from 'lucide-react';
import { EMAIL } from '@/lib/supabase';

export function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-50 px-5">
      <div className="absolute inset-0 -z-10 bg-grid-light [background-size:36px_36px] opacity-60" />
      <div className="absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="text-center">
        <p className="font-display text-7xl font-extrabold tracking-tight text-ink-900 sm:text-8xl">
          <span className="gradient-text">404</span>
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink-900">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-600">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/" className="btn-primary">
            <Home className="h-4 w-4" /> Back Home
          </a>
          <a href="/#portfolio" className="btn-secondary">
            <LayoutGrid className="h-4 w-4" /> View Portfolio
          </a>
          <a href={`mailto:${EMAIL}`} className="btn-ghost">
            <Mail className="h-4 w-4" /> Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
