export type Project = {
  id: string;
  name: string;
  category: string;
  industry: string;
  description: string;
  technologies: string[];
  features: string[];
  image_url: string;
  live_url: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  client_industry: string;
  challenge: string;
  strategy: string;
  design: string;
  development: string;
  features: string[];
  technologies: string[];
  result: string;
  image_url: string;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  location: string;
  company: string;
  project_type: string;
  rating: number;
  quote: string;
};

export type PricingPackage = {
  id: string;
  name: string;
  description: string;
  features: string[];
  delivery: string;
  is_popular: boolean;
};

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  image_url: string;
  published_at: string | null;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export type Technology = {
  id: string;
  name: string;
  category: string;
  icon: string;
};

export type TeamMember = {
  id: string;
  role: string;
  description: string;
  icon: string;
};

export type SiteSettings = {
  name: string;
  tagline: string;
  since: string;
  email: string;
  whatsapp: string;
  locations: string[];
};
