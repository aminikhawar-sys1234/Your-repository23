import { ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';

const APPS = [
  { name: 'Business App', img: 'https://images.pexels.com/photos/4526469/pexels-photo-4526469.jpeg?auto=compress&cs=tinysrgb&h=600&w=400' },
  { name: 'E-Commerce App', img: 'https://images.pexels.com/photos/3850239/pexels-photo-3850239.jpeg?auto=compress&cs=tinysrgb&h=600&w=400' },
  { name: 'Booking App', img: 'https://images.pexels.com/photos/4526419/pexels-photo-4526419.jpeg?auto=compress&cs=tinysrgb&h=600&w=400' },
  { name: 'Delivery App', img: 'https://images.pexels.com/photos/6373084/pexels-photo-6373084.jpeg?auto=compress&cs=tinysrgb&h=600&w=400' },
];

const TYPES = ['Business apps', 'E-commerce apps', 'Booking apps', 'Management apps', 'Customer apps', 'Delivery apps'];

function PhoneMock({ name, img }: { name: string; img: string }) {
  return (
    <div className="mx-auto w-40 overflow-hidden rounded-[2rem] bg-ink-900 p-2 shadow-soft ring-1 ring-ink-300">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-white">
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-ink-200" />
        <SmartImage src={img} alt={`${name} mockup`} fallbackLabel={name} className="aspect-[9/19] w-full object-cover" />
      </div>
    </div>
  );
}

export function MobileShowcase() {
  return (
    <section id="mobile" className="container-px py-16 sm:py-24">
      <SectionHeading
        eyebrow="Mobile Apps"
        title="Mobile Apps That Work Everywhere"
        subtitle="Native-feeling Android and iOS apps your customers keep using."
      />
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {APPS.map((app) => (
              <div key={app.name}>
                <PhoneMock name={app.name} img={app.img} />
                <p className="mt-3 text-center text-xs font-semibold text-ink-700">{app.name}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <h3 className="font-display text-2xl font-bold text-ink-900">Android & iOS, done right</h3>
            <p className="mt-3 text-ink-600">
              We design and build mobile apps for business, commerce, booking and delivery — with the
              backend and admin tools to run them.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary mt-8">
              Explore Mobile Solutions <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
