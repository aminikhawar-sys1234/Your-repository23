import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { supabase } from '@/lib/supabase';

const SERVICES = [
  'Website Development',
  'E-Commerce Development',
  'Custom ERP Software',
  'Mobile App Development',
  'UI/UX Design',
  'SEO',
  'Website Maintenance',
  'Custom Web Applications',
  'API Development',
  'Database Development',
  'Performance Optimization',
  'Security',
  'Business Automation',
  'Cloud Solutions',
  'Website Redesign',
  'Landing Pages',
];

const BUDGETS = ['Basic', 'Medium', 'Premium', 'Business', 'Custom'];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      whatsapp: String(data.get('whatsapp') || '').trim(),
      company: String(data.get('company') || '').trim(),
      country: String(data.get('country') || '').trim(),
      service: String(data.get('service') || '').trim(),
      budget: String(data.get('budget') || '').trim(),
      details: String(data.get('details') || '').trim(),
    };
    if (payload.name.length < 2 || payload.email.length < 5 || payload.details.length < 10) {
      setStatus('error');
      setError('Please complete all required fields with valid values.');
      return;
    }
    const { error: insertError } = await supabase.from('contact_messages').insert(payload);
    if (insertError) {
      setStatus('error');
      setError('Something went wrong sending your request. Please try again or message us on WhatsApp.');
      return;
    }
    setStatus('success');
    form.reset();
  }

  return (
    <section id="contact" className="container-px py-16 sm:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Great"
        subtitle="Send us your project details and our team will get back to you shortly."
      />
      <div className="mx-auto mt-12 max-w-3xl">
        {status === 'success' ? (
          <div className="card flex flex-col items-center p-10 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
              <CheckCircle2 className="h-8 w-8" />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-ink-900">Thank you!</h3>
            <p className="mt-2 max-w-md text-sm text-ink-600">
              Our team will review your project and contact you shortly.
            </p>
            <button type="button" onClick={() => setStatus('idle')} className="btn-secondary mt-6">
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card p-6 sm:p-8" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="WhatsApp Number" name="whatsapp" type="tel" />
              <Field label="Company" name="company" />
              <Field label="Country" name="country" />
              <SelectField label="Budget Range" name="budget" options={BUDGETS} />
              <div className="sm:col-span-2">
                <SelectField label="Service" name="service" options={SERVICES} />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-semibold text-ink-800">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="details"
                  rows={4}
                  required
                  minLength={10}
                  maxLength={5000}
                  placeholder="Tell us about your project, goals and timeline..."
                  className="w-full rounded-xl border-0 bg-ink-50 px-4 py-3 text-sm text-ink-900 ring-1 ring-ink-200 transition focus:ring-2 focus:ring-brand-500"
                />
              </div>
            </div>

            {status === 'error' && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700 ring-1 ring-red-200">
                <AlertCircle className="h-4 w-4 shrink-0" /> {error}
              </div>
            )}

            <button type="submit" disabled={status === 'loading'} className="btn-primary mt-6 w-full">
              {status === 'loading' ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
              ) : (
                <>Send Project Request <Send className="h-4 w-4" /></>
              )}
            </button>
          </form>
        )}
        <p className="mt-6 text-center text-sm text-ink-600">
          Have an idea, project or business requirement? Send us your details and our professional
          team will get back to you as soon as possible.
        </p>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', required = false }: {
  label: string; name: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border-0 bg-ink-50 px-4 py-3 text-sm text-ink-900 ring-1 ring-ink-200 transition focus:ring-2 focus:ring-brand-500"
      />
    </div>
  );
}

function SelectField({ label, name, options }: {
  label: string; name: string; options: string[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink-800">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl border-0 bg-ink-50 px-4 py-3 text-sm text-ink-900 ring-1 ring-ink-200 transition focus:ring-2 focus:ring-brand-500"
      >
        <option value="" disabled>Select {label.toLowerCase()}...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
