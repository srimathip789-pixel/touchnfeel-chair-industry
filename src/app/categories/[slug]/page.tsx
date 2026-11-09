import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products, categories } from "@/data/products";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.toLowerCase().replace(/\s+/g, "-") === slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category} | Touch N Feel`,
    description: `Browse our range of ${category.toLowerCase()} manufactured in Bangalore.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.toLowerCase().replace(/\s+/g, "-") === slug);

  if (!category) notFound();

  const categoryProducts = products.filter((p) => p.category === category);

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 relative">
      <div className="blob-glow bg-amber-500 top-0 right-0 opacity-10" />
      
      {/* Breadcrumb */}
      <nav className="relative z-10 flex items-center text-sm font-medium text-muted-foreground mb-8">
        <Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2 text-border" />
        <Link href="/categories" className="hover:text-emerald-500 transition-colors">Categories</Link>
        <ChevronRight className="h-4 w-4 mx-2 text-border" />
        <span className="text-foreground">{category}</span>
      </nav>

      <div className="relative z-10 flex flex-col space-y-4 mb-10">
        <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">{category}</h1>
        <p className="text-muted-foreground text-base">
          {categoryProducts.length > 0
            ? `Showing ${categoryProducts.length} premium product${categoryProducts.length !== 1 ? "s" : ""} in this category.`
            : "Products in this category are available on enquiry. Please contact us."}
        </p>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
            <div key={product.id} className="group flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 glow-border">
              <div className="aspect-[4/5] bg-secondary/30 relative overflow-hidden flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold tracking-wider px-2 py-1 rounded-full z-10">NEW</span>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col bg-card/50 backdrop-blur-sm">
                <h3 className="font-bold text-lg line-clamp-1 group-hover:text-emerald-500 transition-colors">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{product.category}</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t">
                  <span className="font-extrabold text-xl">₹{product.price.toLocaleString("en-IN")}</span>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex h-9 items-center justify-center rounded-xl bg-secondary hover:bg-emerald-500 hover:text-white transition-all duration-300 px-4 text-xs font-semibold"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center py-24 text-center border-2 border-dashed rounded-2xl bg-secondary/10">
          <h3 className="text-xl font-bold mb-2">Products Coming Soon</h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            We manufacture these chairs on enquiry. Contact us with your requirements and we will provide a custom quote.
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20 px-6 py-3 rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform">
            Contact for Enquiry
          </Link>
        </div>
      )}
    </div>
  );
}
