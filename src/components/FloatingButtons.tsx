import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { telLink, whatsappLink } from '@/lib/supabase';

export function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col gap-3 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <a
        href={telLink}
        aria-label="Call Web Studio Labs"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-glow transition hover:scale-105 hover:bg-brand-700"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={whatsappLink('Hello Web Studio Labs, I would like to discuss a project.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-glow transition hover:scale-105 hover:bg-emerald-600"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
        <MessageCircle className="relative h-6 w-6" />
      </a>
    </div>
  );
}

export function ScrollTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-5 left-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-700 shadow-card ring-1 ring-ink-200 transition hover:bg-ink-100"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
