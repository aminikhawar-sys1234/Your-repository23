import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
});

export const WHATSAPP_NUMBER = '03023000565';
export const WHATSAPP_DISPLAY = '+92 302 3000565';
export const PHONE_DISPLAY = '0302 3000565';
export const EMAIL = 'info@webstudiolabs.site';
export const LOCATIONS = ['Multan, Pakistan', 'Dubai, UAE'] as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER.replace(/^0/, '92')}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:+${WHATSAPP_NUMBER.replace(/^0/, '92')}`;
export const mailLink = `mailto:${EMAIL}`;
