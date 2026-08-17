import { useEffect } from 'react';

const FAQ_ITEMS = [
  {
    q: 'How long does website development take?',
    a: 'A focused business website typically takes 2 to 4 weeks. E-commerce and custom web apps usually take 4 to 8 weeks depending on scope, integrations and review cycles.',
  },
  {
    q: 'Do you develop e-commerce websites?',
    a: 'Yes. We build online stores with product catalogs, cart and checkout, payment gateways, order management and an admin dashboard you can run yourself.',
  },
  {
    q: 'Can you build custom ERP software?',
    a: 'Yes. We design ERP systems covering inventory, sales, purchases, suppliers, invoices, reports and user roles — tailored to how your business actually works.',
  },
  {
    q: 'Do you provide mobile apps?',
    a: 'Yes. We develop Android and iOS applications for business, e-commerce, booking, delivery and customer use cases, with backend and admin support.',
  },
  {
    q: 'Do you provide SEO?',
    a: 'Yes. We handle technical SEO, on-page optimisation, content structure and performance tuning so your site is findable and fast.',
  },
  {
    q: 'Do you provide maintenance?',
    a: 'Yes. We offer ongoing maintenance plans covering updates, monitoring, backups, security patches and small improvements over time.',
  },
  {
    q: 'Can you work with international clients?',
    a: 'Absolutely. We work with clients across Pakistan, the UAE, Saudi Arabia, the UK, the US, Canada and Australia — communication is async-friendly and in English.',
  },
  {
    q: 'Can you integrate WhatsApp?',
    a: 'Yes. We add WhatsApp click-to-chat, floating buttons and, where needed, WhatsApp Business API integration for notifications and support.',
  },
  {
    q: 'Can you integrate payment gateways?',
    a: 'Yes. We integrate Stripe, PayPal, local card processors, bank transfer and cash-on-delivery options depending on your market.',
  },
  {
    q: 'Can you build custom software?',
    a: 'Yes. Custom software is our core work — dashboards, portals, SaaS platforms, internal tools and APIs built around your exact requirements.',
  },
];

export function Seo() {
  useEffect(() => {
    const faqJson = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqJson);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return null;
}
