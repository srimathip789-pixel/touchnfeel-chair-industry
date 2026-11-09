import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { MapPin, ArrowRight, ShieldCheck, Truck, Factory } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ city: string; category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const city = resolvedParams.city.replace(/-/g, " ");
  const category = resolvedParams.category.replace(/-/g, " ");
  const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
  const capitalizedCategory = category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${capitalizedCategory} Manufacturer & Supplier in ${capitalizedCity} | Touch N Feel`,
    description: `Buy premium ${capitalizedCategory.toLowerCase()} directly from the leading manufacturer in ${capitalizedCity}. Wholesale prices, bulk orders, and OEM manufacturing available.`,
  };
}

export default async function LocationCategoryPage({ params }: { params: Promise<{ city: string; category: string }> }) {
  const resolvedParams = await params;
  const city = resolvedParams.city.replace(/-/g, " ");
  const category = resolvedParams.category.replace(/-/g, " ");
  
  const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
  const capitalizedCategory = category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Filter products by matched category (simplified matching for demo)
  const matchedProducts = products.filter(p => 
    p.category.toLowerCase().includes(category.toLowerCase()) || 
    p.name.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-background to-teal-900/10 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-bold mb-6">
            <MapPin className="w-4 h-4" /> Available in {capitalizedCity}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">{capitalizedCategory}</span> in {capitalizedCity}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Touch N Feel Office Systems is the premier manufacturer and wholesale supplier of {capitalizedCategory.toLowerCase()} in {capitalizedCity}. We offer unbeatable B2B pricing, custom OEM manufacturing, and pan-India delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/b2b/bulk-enquiry"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-emerald-500/20 transition-all"
            >
              Get Bulk Pricing
            </Link>
            <Link 
              href="/products"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/80 px-8 py-3.5 rounded-xl font-bold transition-all"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 border-y border-border/50 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-emerald-500/10 p-4 rounded-full text-emerald-500">
                <Factory className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">Direct Manufacturer</h3>
              <p className="text-sm text-muted-foreground">Skip the middlemen. We manufacture directly in our 10,000 sqft facility.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-emerald-500/10 p-4 rounded-full text-emerald-500">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">Fast Delivery to {capitalizedCity}</h3>
              <p className="text-sm text-muted-foreground">We handle all logistics to ensure your order arrives safely and on time.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-emerald-500/10 p-4 rounded-full text-emerald-500">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">1 Year Warranty</h3>
              <p className="text-sm text-muted-foreground">All our commercial chairs are backed by a comprehensive structural warranty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      {matchedProducts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Top Selling {capitalizedCategory}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {matchedProducts.slice(0, 8).map((product) => (
                <Link 
                  href={`/products/${product.id}`}
                  key={product.id} 
                  className="group flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-xl hover:border-emerald-500/50 transition-all glow-border"
                >
                  <div className="aspect-square bg-secondary/30 relative flex items-center justify-center p-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-base line-clamp-1 group-hover:text-emerald-500 transition-colors">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{product.category}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-extrabold text-emerald-500">₹{product.price.toLocaleString('en-IN')}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Corporate Clients Section CTA */}
      <section className="py-20 bg-emerald-950 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Equip Your {capitalizedCity} Office</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Join hundreds of satisfied corporate clients, educational institutions, and government bodies who trust Touch N Feel for their seating solutions.
          </p>
          <Link 
            href="/contact"
            className="inline-flex bg-white text-emerald-950 hover:bg-emerald-50 px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg"
          >
            Contact Our Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
}
