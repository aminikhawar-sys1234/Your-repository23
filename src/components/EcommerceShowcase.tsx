import { ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';
import { whatsappLink } from '@/lib/supabase';

const FEATURES = [
  'Product pages',
  'Shopping cart',
  'Checkout',
  'Product filtering',
  'Search',
  'Wishlist',
  'Customer accounts',
  'Order tracking',
  'Payment options',
  'Admin dashboard',
];

const IMAGES = [
  'https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  'https://images.pexels.com/photos/6214383/pexels-photo-6214383.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  'https://images.pexels.com/photos/12935042/pexels-photo-12935042.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
];

export function EcommerceShowcase() {
  return (
    <section id="ecommerce" className="container-px py-16 sm:py-24">
      <SectionHeading
        eyebrow="E-Commerce"
        title="Powerful E-Commerce Experiences"
        subtitle="Stores that load fast, convert well and are easy to run — with the features shoppers expect."
      />
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            {IMAGES.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ring-1 ring-ink-200 shadow-card ${i === 1 ? 'translate-y-6' : ''}`}>
                <SmartImage src={img} alt="E-commerce website mockup" fallbackLabel="E-commerce" className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <h3 className="font-display text-2xl font-bold text-ink-900">Everything a modern store needs</h3>
            <p className="mt-3 text-ink-600">
              From product discovery to repeat orders, we build e-commerce experiences that are fast,
              trustworthy and simple to manage.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink('Hello Web Studio Labs, I would like to build my online store.')}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8"
            >
              Build My Online Store <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
