import { useEffect, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';
import { supabase } from '@/lib/supabase';
import type { BlogPost } from '@/lib/types';

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    supabase
      .from('blog_posts')
      .select('id,title,category,excerpt,slug,image_url,published_at')
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .limit(6)
      .then(({ data, error }) => {
        if (!error && data) setPosts(data as BlogPost[]);
      });
  }, []);

  return (
    <section id="blog" className="container-px py-16 sm:py-24">
      <SectionHeading
        eyebrow="Insights"
        title="Digital Insights"
        subtitle="Practical thinking on web development, e-commerce, ERP, SEO and technology."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={i * 70}>
            <article className="card card-hover group flex h-full flex-col overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden bg-ink-100">
                <SmartImage
                  src={post.image_url}
                  alt={post.title}
                  fallbackLabel={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs text-ink-500">
                  <span className="chip text-[11px]">{post.category}</span>
                  {post.published_at && (
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.published_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink-900">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{post.excerpt}</p>
                <a
                  href={`#blog-${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {posts.length === 0 && (
        <p className="mt-12 text-center text-sm text-ink-500">
          Articles will appear here once published from the admin panel.
        </p>
      )}
    </section>
  );
}
