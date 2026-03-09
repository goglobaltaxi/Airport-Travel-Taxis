import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';

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

export default function BlogPage() {
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
                        {blogPosts.map((post) => (
                            <article key={post.slug} className="glass-card-hover group overflow-hidden">
                                <div className="h-48 bg-gradient-to-br from-primary-50 to-surface-200 flex items-center justify-center">
                                    <span className="text-4xl opacity-50">📝</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs bg-primary-50 text-primary-600 px-2.5 py-1 rounded-full font-medium border border-primary-200">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-surface-500">{post.readTime}</span>
                                    </div>
                                    <h2 className="font-display text-lg text-surface-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-surface-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-surface-500">
                                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <span className="text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                            Read More →
                                        </span>
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
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input type="email" placeholder="Enter your email" className="input-field flex-1" />
                            <button className="btn-primary whitespace-nowrap">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
