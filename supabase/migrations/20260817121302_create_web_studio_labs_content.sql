/*
# Create Web Studio Labs content foundation

1. New Tables
- `projects`, `project_images`, `case_studies`, `services`, `testimonials`, `pricing_packages`, `blog_posts`, `faqs`, `technologies`, `team_members`, and `site_settings` store editable public agency content.
- `contact_messages` stores project enquiries submitted through the website.
- `newsletter_subscribers` stores newsletter opt-ins.
- All tables include UUID identifiers and creation timestamps; content tables include an `is_published` flag where appropriate.

2. Relationships
- `project_images.project_id` references `projects.id`.
- `case_studies.project_id` references `projects.id` when a case study is linked to a portfolio project.

3. Security
- Row level security is enabled on every table.
- Published content is readable by the public website.
- Contact enquiries and newsletter signups can be created publicly but are not publicly readable.
- Admin tooling can use a protected server-side role in a future authenticated dashboard; no private credentials are exposed here.

4. Important notes
- This is a non-destructive, idempotent foundation for the editable agency content model.
- No existing tables or user data are modified.
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  industry text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  technologies text[] NOT NULL DEFAULT '{}',
  features text[] NOT NULL DEFAULT '{}',
  image_url text NOT NULL DEFAULT '',
  live_url text NOT NULL DEFAULT '',
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS project_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  alt_text text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE SET NULL,
  title text NOT NULL,
  client_industry text NOT NULL DEFAULT '',
  challenge text NOT NULL DEFAULT '',
  strategy text NOT NULL DEFAULT '',
  design text NOT NULL DEFAULT '',
  development text NOT NULL DEFAULT '',
  features text[] NOT NULL DEFAULT '{}',
  technologies text[] NOT NULL DEFAULT '{}',
  result text NOT NULL DEFAULT '',
  image_url text NOT NULL DEFAULT '',
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  icon text NOT NULL DEFAULT 'sparkles',
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  location text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  project_type text NOT NULL DEFAULT '',
  rating integer NOT NULL DEFAULT 5,
  quote text NOT NULL,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS pricing_packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  features text[] NOT NULL DEFAULT '{}',
  delivery text NOT NULL DEFAULT '',
  is_popular boolean NOT NULL DEFAULT false,
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL DEFAULT '',
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  image_url text NOT NULL DEFAULT '',
  slug text NOT NULL UNIQUE,
  is_published boolean NOT NULL DEFAULT false,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS technologies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL DEFAULT '',
  icon text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  role text NOT NULL,
  description text NOT NULL DEFAULT '',
  icon text NOT NULL DEFAULT 'users',
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key text NOT NULL UNIQUE,
  setting_value jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  whatsapp text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  country text NOT NULL DEFAULT '',
  service text NOT NULL DEFAULT '',
  budget text NOT NULL DEFAULT '',
  details text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view published projects" ON projects;
CREATE POLICY "Public can view published projects" ON projects FOR SELECT TO anon, authenticated USING (is_published = true);
DROP POLICY IF EXISTS "Public can view project images" ON project_images;
CREATE POLICY "Public can view project images" ON project_images FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM projects WHERE projects.id = project_images.project_id AND projects.is_published = true));
DROP POLICY IF EXISTS "Public can view published case studies" ON case_studies;
CREATE POLICY "Public can view published case studies" ON case_studies FOR SELECT TO anon, authenticated USING (is_published = true);
DROP POLICY IF EXISTS "Public can view published services" ON services;
CREATE POLICY "Public can view published services" ON services FOR SELECT TO anon, authenticated USING (is_published = true);
DROP POLICY IF EXISTS "Public can view published testimonials" ON testimonials;
CREATE POLICY "Public can view published testimonials" ON testimonials FOR SELECT TO anon, authenticated USING (is_published = true);
DROP POLICY IF EXISTS "Public can view published pricing" ON pricing_packages;
CREATE POLICY "Public can view published pricing" ON pricing_packages FOR SELECT TO anon, authenticated USING (is_published = true);
DROP POLICY IF EXISTS "Public can view published blog posts" ON blog_posts;
CREATE POLICY "Public can view published blog posts" ON blog_posts FOR SELECT TO anon, authenticated USING (is_published = true);
DROP POLICY IF EXISTS "Public can view published faqs" ON faqs;
CREATE POLICY "Public can view published faqs" ON faqs FOR SELECT TO anon, authenticated USING (is_published = true);
DROP POLICY IF EXISTS "Public can view published technologies" ON technologies;
CREATE POLICY "Public can view published technologies" ON technologies FOR SELECT TO anon, authenticated USING (is_published = true);
DROP POLICY IF EXISTS "Public can view published team" ON team_members;
CREATE POLICY "Public can view published team" ON team_members FOR SELECT TO anon, authenticated USING (is_published = true);
DROP POLICY IF EXISTS "Public can view site settings" ON site_settings;
CREATE POLICY "Public can view site settings" ON site_settings FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "Public can submit contact messages" ON contact_messages;
CREATE POLICY "Public can submit contact messages" ON contact_messages FOR INSERT TO anon, authenticated WITH CHECK (length(name) BETWEEN 2 AND 120 AND length(email) BETWEEN 5 AND 254 AND length(details) BETWEEN 10 AND 5000);
DROP POLICY IF EXISTS "Public can subscribe to newsletter" ON newsletter_subscribers;
CREATE POLICY "Public can subscribe to newsletter" ON newsletter_subscribers FOR INSERT TO anon, authenticated WITH CHECK (length(email) BETWEEN 5 AND 254);

CREATE INDEX IF NOT EXISTS projects_category_idx ON projects(category);
CREATE INDEX IF NOT EXISTS blog_posts_published_idx ON blog_posts(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS contact_messages_created_idx ON contact_messages(created_at DESC);
