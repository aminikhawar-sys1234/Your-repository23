import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';

const SITES = [
  { name: 'Corporate', img: 'https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'Restaurant', img: 'https://images.pexels.com/photos/2349993/pexels-photo-2349993.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'Real Estate', img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'Agency', img: 'https://images.pexels.com/photos/7988674/pexels-photo-7988674.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'Medical', img: 'https://images.pexels.com/photos/7195195/pexels-photo-7195195.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'Education', img: 'https://images.pexels.com/photos/9159042/pexels-photo-9159042.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'Construction', img: 'https://images.pexels.com/photos/1078879/pexels-photo-1078879.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'Portfolio', img: 'https://images.pexels.com/photos/16307279/pexels-photo-16307279.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { name: 'Service Business', img: 'https://images.pexels.com/photos/6476265/pexels-photo-6476265.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
];

const PROCESS = ['Design', 'Development', 'Testing', 'Launch'];

function BrowserMock({ name, img }: { name: string; img: string }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white ring-1 ring-ink-200 shadow-card transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-1.5 border-b border-ink-100 bg-ink-50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 truncate rounded-md bg-white px-2 py-0.5 text-[10px] text-ink-400 ring-1 ring-ink-200">
          {name.toLowerCase().replace(' ', '')}.com
        </span>
      </div>
      <div className="aspect-[3/2] overflow-hidden bg-ink-100">
        <SmartImage src={img} alt={`${name} website mockup`} fallbackLabel={`${name} website`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
    </div>
  );
}

export function WebsiteShowcase() {
  return (
    <section id="websites" className="bg-white py-16 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Website Development"
          title="Websites That Make Businesses Look Bigger"
          subtitle="Clean, fast, responsive websites for every industry — built to convert and easy to maintain."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SITES.map((site, i) => (
            <Reveal key={site.name} delay={i * 60}>
              <div>
                <BrowserMock name={site.name} img={site.img} />
                <p className="mt-2 text-center text-sm font-semibold text-ink-700">{site.name} Website</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          {PROCESS.map((step, i) => (
            <div key={step} className="flex items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm font-semibold text-ink-800">{step}</span>
              </div>
              {i < PROCESS.length - 1 && <span className="hidden h-px w-12 bg-ink-200 sm:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
