import { Facebook, Instagram, Linkedin, Youtube, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { EMAIL, LOCATIONS, telLink, WHATSAPP_DISPLAY, whatsappLink } from '@/lib/supabase';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  'Website Development',
  'E-Commerce',
  'ERP',
  'Mobile Apps',
  'UI/UX',
  'SEO',
];

const SOCIALS = [
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
  { label: 'GitHub', icon: Github, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10 inline-block">
              <Logo />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
              We Build High-Performance Digital Experiences.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-ink-300 ring-1 ring-white/10 transition hover:bg-brand-600 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink-400 transition hover:text-white">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-ink-400 transition hover:text-white">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={telLink} className="flex items-center gap-2 text-ink-400 hover:text-white">
                  <Phone className="h-4 w-4 text-brand-400" /> {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-ink-400 hover:text-white">
                  <Mail className="h-4 w-4 text-brand-400" /> {EMAIL}
                </a>
              </li>
              {LOCATIONS.map((loc) => (
                <li key={loc} className="flex items-center gap-2 text-ink-400">
                  <MapPin className="h-4 w-4 text-brand-400" /> {loc}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink('Hello Web Studio Labs, I would like to discuss a project.')}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp mt-5 w-full text-xs"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">© {new Date().getFullYear()} Web Studio Labs — All Rights Reserved.</p>
          <p className="text-xs text-ink-500">Since 2023 • Multan, Pakistan &amp; Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
