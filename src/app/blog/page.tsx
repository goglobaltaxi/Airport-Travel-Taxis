import { Metadata } from 'next';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { blogPosts as staticPosts } from '@/lib/data';
import NewsletterForm from '@/components/NewsletterForm';

export const revalidate = 60;

export const metadata: Metadata = {
    title: 'Travel Blog | Tips for Airport Transfers & GCC Travel',
    description: 'Read our travel blog for the latest tips on airport transfers, intercity travel, and navigating cross-border journeys across Saudi Arabia and the GCC.',
    openGraph: {
        title: 'Travel Blog | Tips for Airport Transfers & GCC Travel',
        description: 'Read our travel blog for the latest tips on airport transfers, intercity travel, and navigating cross-border journeys across Saudi Arabia and the GCC.',
        url: 'https://airporttraveltaxis.com/blog',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/blog',
    },
};

interface PostCard {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    isDynamic?: boolean;
}

export default async function BlogPage() {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data: dbPosts } = await supabase
        .from('blog_posts')
        .select('title, slug, excerpt, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false });

    const dynamicPosts: PostCard[] = (dbPosts || []).map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt || '',
        date: p.created_at,
        category: 'Article',
        readTime: '5 min read',
        isDynamic: true,
    }));

    const allPosts: PostCard[] = [
        ...dynamicPosts,
        ...staticPosts.map((p) => ({
            slug: p.slug,
            title: p.title,
            excerpt: p.excerpt,
            date: p.date,
            category: p.category,
            readTime: p.readTime,
        })),
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto text-center">
                    <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-4">
                        Travel <span className="text-primary-600">Blog</span>
                    </h1>
                    <p className="text-surface-600 max-w-2xl mx-auto text-lg">
                        Expert guides, travel tips, and insights for navigating the Gulf region.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allPosts.map((post) => (
                            <article key={post.slug} className="glass-card-hover group overflow-hidden flex flex-col">
                                <div className="h-48 bg-gradient-to-br from-primary-50 to-surface-200 flex items-center justify-center flex-shrink-0">
                                    <span className="text-4xl opacity-40">📝</span>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs bg-primary-50 text-primary-600 px-2.5 py-1 rounded-full font-medium border border-primary-200">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-surface-500">{post.readTime}</span>
                                    </div>
                                    <h2 className="font-display text-lg text-surface-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                                        {post.title}
                                    </h2>
                                    <p className="text-surface-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-xs text-surface-500">
                                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        {post.isDynamic && (
                                            <Link
                                                href={`/blog/${post.slug}/`}
                                                className="text-primary-600 text-sm font-semibold hover:underline"
                                            >
                                                Read More →
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="glass-card p-8 lg:p-10 text-center max-w-2xl mx-auto">
                        <h2 className="font-display text-2xl text-surface-900 mb-3">Stay Updated</h2>
                        <p className="text-surface-600 mb-6">Get the latest travel tips and route updates from across the region.</p>
                        <NewsletterForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
