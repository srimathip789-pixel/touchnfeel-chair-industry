import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Office Seating Trends & Ergonomic Guides",
  description: "Read our latest articles on how to choose ergonomic chairs, office seating trends for 2026, and benefits of mesh chairs.",
};

const blogs = [
  {
    title: "Best Office Chairs in India",
    slug: "best-office-chairs-india",
    excerpt: "Discover the top office chairs available in India that offer maximum comfort, durability, and ergonomic support for long working hours.",
    date: "2026-07-10"
  },
  {
    title: "How to Choose Ergonomic Chairs",
    slug: "how-to-choose-ergonomic-chairs",
    excerpt: "A comprehensive guide on what features to look for when selecting an ergonomic chair to prevent back pain and improve posture.",
    date: "2026-07-05"
  },
  {
    title: "Office Furniture Buying Guide",
    slug: "office-furniture-buying-guide",
    excerpt: "Everything you need to know before buying office furniture in bulk. Learn about materials, warranties, and space planning.",
    date: "2026-06-28"
  }
];

export default function BlogList() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Chair Industry Insights & Guides</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Stay updated with the latest trends in office seating, ergonomic health tips, and comprehensive buying guides for all types of furniture.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.slug} className="border bg-card rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-sm text-emerald-500 mb-2">{blog.date}</div>
            <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>
            <p className="text-muted-foreground mb-6 line-clamp-3">{blog.excerpt}</p>
            <Link 
              href={`/blog/${blog.slug}`}
              className="text-emerald-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              Read Article &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
