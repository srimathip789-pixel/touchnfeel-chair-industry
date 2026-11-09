import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock content for demonstration
const blogPosts: Record<string, { title: string; content: React.ReactNode; date: string; author: string }> = {
  "best-office-chairs-india": {
    title: "Best Office Chairs in India",
    date: "2026-07-10",
    author: "Touch N Feel Exports",
    content: (
      <>
        <p>Finding the perfect office chair in India can be overwhelming given the number of options. A high-quality chair should support your back, promote proper posture, and be durable enough for daily use.</p>
        <h2>Why Ergonomics is Crucial</h2>
        <p>Ergonomics is not just a buzzword. An ergonomic chair adapts to your body, reducing the strain on your spine and neck. Look for chairs with adjustable lumbar support, 3D or 4D armrests, and a multi-tilt mechanism.</p>
        <h2>Top Materials to Consider</h2>
        <ul>
          <li><strong>Breathable Mesh:</strong> Perfect for Indian summers, mesh allows air to circulate, keeping you cool.</li>
          <li><strong>High-Density Foam:</strong> Retains its shape over years of use, providing consistent support.</li>
          <li><strong>Nylon vs Aluminum Base:</strong> While nylon is lightweight and durable, aluminum bases offer premium aesthetics and high load capacity.</li>
        </ul>
        <p>At Touch N Feel, we manufacture chairs that combine all these elements to provide you with the best seating experience possible.</p>
      </>
    )
  },
  "how-to-choose-ergonomic-chairs": {
    title: "How to Choose Ergonomic Chairs",
    date: "2026-07-05",
    author: "Touch N Feel Exports",
    content: (
      <>
        <p>Choosing an ergonomic chair requires understanding your own body and workspace requirements. Not all chairs are built the same.</p>
        <h2>Key Features to Look For</h2>
        <p>1. <strong>Seat Height Adjustment:</strong> Your feet should rest flat on the floor.</p>
        <p>2. <strong>Lumbar Support:</strong> Crucial for maintaining the natural curve of your lower back.</p>
        <p>3. <strong>Seat Depth:</strong> There should be a small gap between the edge of the seat and the back of your knees.</p>
      </>
    )
  },
  "office-furniture-buying-guide": {
    title: "Office Furniture Buying Guide",
    date: "2026-06-28",
    author: "Touch N Feel Exports",
    content: (
      <>
        <p>When buying office furniture in bulk, there are several factors to consider beyond just the initial cost.</p>
        <h2>Warranty and After-Sales Support</h2>
        <p>Always check the warranty period. We offer extended warranties on our chair mechanisms and gas lifts because we believe in our manufacturing quality.</p>
        <h2>Space Planning</h2>
        <p>Ensure that the chairs fit perfectly under your workstations. Measure your desks before ordering.</p>
      </>
    )
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug];
  if (!post) return { title: "Blog Not Found" };
  
  return {
    title: `${post.title} | Chair Industry Blog`,
    description: `Read our article on ${post.title}.`,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug];
  
  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: "Touch N Feel",
      logo: {
        "@type": "ImageObject",
        url: "https://chair-industry.vercel.app/logo.png"
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <SchemaOrg schema={articleSchema} />
      
      <Link href="/blog" className="text-emerald-500 font-medium hover:underline mb-8 inline-block">
        &larr; Back to Blog
      </Link>
      
      <article className="prose dark:prose-invert prose-emerald lg:prose-lg w-full max-w-none">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="text-muted-foreground mb-12 pb-6 border-b">
          Published on {post.date} • By {post.author}
        </div>
        
        {post.content}
        
        <div className="mt-16 p-8 bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/50">
          <h3 className="text-2xl font-bold mb-4 text-emerald-900 dark:text-emerald-400">Looking for Premium Seating?</h3>
          <p className="mb-6">Explore our wide range of ISO certified ergonomic chairs manufactured right here in Bangalore.</p>
          <Link href="/products" className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-600 text-white font-semibold px-8 hover:bg-emerald-700 transition-colors">
            View Catalog
          </Link>
        </div>
      </article>
    </div>
  );
}
