import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { telLink, whatsappLink } from '@/lib/supabase';

const HERO_BG =
  'https://images.pexels.com/photos/34212916/pexels-photo-34212916.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_BG}
          alt="Software development laboratory with large monitors and code interfaces"
          className="h-full w-full object-cover opacity-25"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-50/70 via-ink-50/85 to-ink-50" />
        <div className="absolute inset-0 bg-grid-light [background-size:36px_36px] opacity-60" />
        <div className="absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 ring-1 ring-brand-200 shadow-soft animate-zoom-in">
            <Sparkles className="h-3.5 w-3.5" />
            Since 2023 • Global Digital Solutions
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 text-balance sm:text-6xl animate-fade-up">
            WEB STUDIO <span className="gradient-text">LABS</span>
          </h1>

          <p
            className="mt-5 font-display text-xl font-semibold text-ink-800 text-balance sm:text-2xl animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            We Build High-Performance Digital Experiences
          </p>

          <p
            className="mx-auto mt-3 max-w-2xl text-sm font-medium uppercase tracking-[0.12em] text-ink-500 sm:text-base animate-fade-up"
            style={{ animationDelay: '180ms' }}
          >
            Websites • E-Commerce • ERP Software • Mobile Apps • Digital Solutions
          </p>

          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-600 text-balance animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            Web Studio Labs is a professional digital development company delivering
            high-performance websites, e-commerce platforms, custom ERP systems, mobile applications
            and modern digital experiences for businesses in Pakistan and worldwide.
          </p>

          <div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            <a href="#portfolio" className="btn-primary w-full sm:w-auto">
              Explore Our Portfolio <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              Start Your Project
            </a>
          </div>

          <div
            className="mt-3 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            <a
              href={whatsappLink('Hello Web Studio Labs, I would like to discuss a project.')}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              Chat on WhatsApp
            </a>
            <a href={telLink} className="btn-ghost w-full sm:w-auto">
              <Phone className="h-4 w-4" /> Call Our Team
            </a>
          </div>
        </div>

        <div className="pointer-events-none mt-12 flex justify-center gap-6 text-ink-400">
          <div className="animate-float" style={{ animationDelay: '0s' }}>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-card ring-1 ring-ink-200">
              <span className="font-display text-lg font-bold text-brand-600">&lt;/&gt;</span>
            </span>
          </div>
          <div className="animate-float" style={{ animationDelay: '1.2s' }}>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-card ring-1 ring-ink-200">
              <span className="font-display text-lg font-bold text-accent-500">UI</span>
            </span>
          </div>
          <div className="animate-float" style={{ animationDelay: '2.4s' }}>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-card ring-1 ring-ink-200">
              <span className="font-display text-lg font-bold text-brand-600">ERP</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
