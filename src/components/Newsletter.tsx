import { useState, type FormEvent } from 'react';
import { Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.length < 5 || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    const { error } = await supabase.from('newsletter_subscribers').insert({ email: email.trim() });
    if (error) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  }

  return (
    <section className="container-px py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-ink-950 p-8 text-center text-white shadow-soft sm:p-14">
        <div className="absolute inset-0 bg-grid-light opacity-10 [background-size:32px_32px]" />
        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <Mail className="h-6 w-6" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
            Stay Ahead With Digital Insights
          </h2>
          <p className="mt-3 text-sm text-ink-300">
            Practical notes on web development, e-commerce, ERP and growth — straight to your inbox.
          </p>

          {status === 'success' ? (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-5 py-2.5 text-sm font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <CheckCircle2 className="h-4 w-4" /> You're subscribed. Thanks!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="you@company.com"
                required
                aria-label="Email address"
                className="flex-1 rounded-full border-0 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-ink-400 ring-1 ring-white/20 focus:ring-2 focus:ring-brand-400"
              />
              <button type="submit" disabled={status === 'loading'} className="btn-primary">
                {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Subscribe <Send className="h-4 w-4" /></>}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="mt-3 text-xs text-red-300">Please enter a valid email address.</p>
          )}
        </div>
      </div>
    </section>
  );
}
