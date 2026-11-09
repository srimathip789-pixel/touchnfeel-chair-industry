import { Metadata } from "next";
import Link from "next/link";
import { products, categories } from "@/data/products";

export const metadata: Metadata = {
  title: "All Categories | Touch N Feel Office Systems",
  description: "Browse all chair categories — Executive, Workstation, Visitor, Cafeteria, Educational and more.",
};

export default function CategoriesPage() {
  // Build category stats
  const categoryData = categories.map((cat) => ({
    name: cat,
    count: products.filter((p) => p.category === cat).length,
    slug: cat.toLowerCase().replace(/\s+/g, "-"),
  }));

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 relative">
      <div className="blob-glow bg-emerald-500 top-0 right-1/4 opacity-10" />
      
      <div className="flex flex-col space-y-4 mb-12 relative z-10">
        <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 w-fit">All Categories</h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
          We manufacture a wide range of seating solutions for every environment — from premium executive offices to cafeterias, schools, and hospitals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
        {categoryData.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="group flex flex-col rounded-2xl border bg-card/60 backdrop-blur-md shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden glow-border"
          >
            {/* Placeholder visual */}
            <div className="aspect-[4/3] bg-secondary/30 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-muted-foreground opacity-20 group-hover:opacity-40 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M6 19v-4M18 19v-4M4 15h16M7 11V5a1 1 0 011-1h8a1 1 0 011 1v6M5 15a2 2 0 002 2h10a2 2 0 002-2v-1H5v1z" />
              </svg>
            </div>
            <div className="p-6 bg-card/50">
              <h2 className="font-bold text-lg group-hover:text-emerald-500 transition-colors">{cat.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {cat.count > 0 ? `${cat.count} product${cat.count !== 1 ? "s" : ""}` : "Enquire for availability"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
