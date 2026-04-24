import { createClient } from '@supabase/supabase-js';
import TestimonialSlider from './TestimonialSlider';

export default async function TestimonialsWrapper() {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data: reviews } = await supabase
        .from('reviews')
        .select('name, location, rating, review')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(10);

    const items = (reviews || [])
        .filter(r => r.review && r.review.length > 20)
        .map(r => ({
            content: r.review as string,
            rating: r.rating as number,
            name: r.name as string,
            role: 'Verified Customer',
            location: (r.location as string) || 'GCC',
        }));

    return <TestimonialSlider reviews={items.length > 0 ? items : undefined} />;
}
