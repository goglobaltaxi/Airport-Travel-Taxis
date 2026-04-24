import { createClient } from '@supabase/supabase-js';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

const supabaseServer = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { data: post } = await supabaseServer
        .from('blog_posts')
        .select('title, excerpt, slug')
        .eq('slug', params.slug)
        .eq('published', true)
        .single();

    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | Airport Travel Taxis Blog`,
        description: post.excerpt || '',
        alternates: { canonical: `https://airporttraveltaxis.com/blog/${post.slug}/` },
        openGraph: {
            title: post.title,
            description: post.excerpt || '',
            url: `https://airporttraveltaxis.com/blog/${post.slug}/`,
        },
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const { data: post } = await supabaseServer
        .from('blog_posts')
        .select('*')
        .eq('slug', params.slug)
        .eq('published', true)
        .single();

    if (!post) notFound();

    const isHtml = /<[a-z][\s\S]*>/i.test(post.content || '');

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto max-w-3xl text-center">
                    <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-4">Airport Travel Taxis Blog</p>
                    <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-5 leading-tight">{post.title}</h1>
                    {post.excerpt && (
                        <p className="text-surface-600 text-lg max-w-2xl mx-auto leading-relaxed">{post.excerpt}</p>
                    )}
                    <p className="text-xs text-surface-400 mt-5 font-medium">
                        {new Date(post.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto max-w-3xl">
                    {isHtml ? (
                        <div
                            className="text-surface-700 leading-relaxed text-base space-y-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-surface-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-bold [&_h3]:text-surface-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_a]:text-primary-600 [&_a]:underline [&_strong]:text-surface-900 [&_p]:mb-4"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    ) : (
                        <div className="text-surface-700 leading-relaxed text-base whitespace-pre-line">
                            {post.content}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto max-w-2xl text-center">
                    <h2 className="font-display text-2xl text-surface-900 mb-3">Ready to book your transfer?</h2>
                    <p className="text-surface-600 mb-6">Professional airport transfers and intercity travel across the GCC.</p>
                    <div className="flex gap-3 justify-center flex-wrap">
                        <Link href="/booking" className="btn-primary">Book Now</Link>
                        <Link href="/blog" className="btn-secondary">← All Articles</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
