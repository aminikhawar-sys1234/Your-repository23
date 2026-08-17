import { ArrowRight, BarChart3, Boxes, FileText, Users } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';
import { whatsappLink } from '@/lib/supabase';

const FEATURES = [
  'Inventory Management',
  'Sales Management',
  'Purchase Management',
  'Customer Management',
  'Supplier Management',
  'Stock Management',
  'Invoice Generation',
  'Reports',
  'User Roles',
  'Dashboard Analytics',
  'Offline / Online capability',
  'Thermal printing support',
];

const DASH_IMG = 'https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?auto=compress&cs=tinysrgb&h=600&w=900';

const METRICS = [
  { label: 'Revenue', icon: BarChart3 },
  { label: 'Inventory', icon: Boxes },
  { label: 'Invoices', icon: FileText },
  { label: 'Customers', icon: Users },
];

export function ErpShowcase() {
  return (
    <section id="erp" className="bg-white py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="ERP Software"
          title="Custom ERP Software for Modern Businesses"
          subtitle="One connected system for inventory, sales, purchases, invoices and reporting — built around how your team works."
        />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="font-display text-2xl font-bold text-ink-900">Run your whole operation in one place</h3>
              <p className="mt-3 text-ink-600">
                Replace spreadsheets and disconnected tools with a custom ERP that fits your workflow —
                and grows with your business.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink('Hello Web Studio Labs, I would like to discuss a custom ERP.')}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-8"
              >
                Build My ERP <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-ink-200 shadow-soft">
              <div className="overflow-hidden rounded-xl">
                <SmartImage src={DASH_IMG} alt="ERP dashboard mockup" fallbackLabel="ERP Dashboard" className="aspect-[3/2] w-full object-cover" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {METRICS.map((m) => (
                  <div key={m.label} className="rounded-xl bg-ink-50 p-3 text-center ring-1 ring-ink-100">
                    <m.icon className="mx-auto h-5 w-5 text-brand-600" />
                    <p className="mt-1 text-xs font-semibold text-ink-700">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
