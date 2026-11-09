import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import ProductActions from "@/components/products/ProductActions";
import ThreeSixtyViewer from "@/components/products/ThreeSixtyViewer";
import ColorSelector from "@/components/products/ColorSelector";
import ProductDetailsComponent from "@/components/products/ProductDetails";
import WarrantyInfo from "@/components/products/WarrantyInfo";
import AIRecommendation from "@/components/ai/AIRecommendation";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { ChevronRight, FileText, Check, ShieldCheck, Truck, Download } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} | Touch N Feel`,
    description: product.description,
  };
}

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);
  
  if (!product) {
    notFound();
  }

  const safeProduct = product!;

  const relatedProducts = products
    .filter((p) => p.category === safeProduct.category && p.id !== safeProduct.id)
    .slice(0, 4);
    
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: safeProduct.name,
    image: `https://chair-industry.vercel.app${safeProduct.image}`,
    description: safeProduct.description,
    sku: safeProduct.id,
    brand: {
      "@type": "Brand",
      name: "Touch N Feel"
    },
    offers: {
      "@type": "Offer",
      url: `https://chair-industry.vercel.app/products/${safeProduct.id}`,
      priceCurrency: "INR",
      price: safeProduct.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition"
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 relative">
      <SchemaOrg schema={productSchema} />
      <div className="blob-glow bg-emerald-500 top-0 left-0 opacity-10" />
      
      {/* Breadcrumb */}
      <nav className="relative z-10 flex items-center text-sm font-medium text-muted-foreground mb-8 flex-wrap">
        <Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2 text-border" />
        <Link href="/products" className="hover:text-emerald-500 transition-colors">Products</Link>
        <ChevronRight className="h-4 w-4 mx-2 text-border" />
        <Link href={`/categories/${safeProduct.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-emerald-500 transition-colors">
          {safeProduct.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-border" />
        <span className="text-foreground">{safeProduct.name}</span>
      </nav>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Product Image Gallery / 360 Viewer */}
        <div className="space-y-4">
          <ThreeSixtyViewer 
            images={safeProduct.threeSixtyImages} 
            fallbackImage={safeProduct.image} 
            productName={safeProduct.name} 
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 w-fit">{safeProduct.name}</h1>
            <p className="text-muted-foreground font-medium text-lg">{safeProduct.category}</p>
          </div>

          <div className="mb-8">
            <span className="text-4xl font-extrabold">₹{safeProduct.price.toLocaleString('en-IN')}</span>
            <span className="text-muted-foreground text-sm ml-2 font-medium">(Excl. GST & Delivery)</span>
          </div>

          <p className="text-foreground mb-8 text-base leading-relaxed max-w-xl">
            {safeProduct.description}
          </p>

          {/* Options */}
          <div className="space-y-6 mb-8">
            {safeProduct.colorVariants && safeProduct.colorVariants.length > 0 ? (
              <ColorSelector 
                variants={safeProduct.colorVariants} 
              />
            ) : safeProduct.colors && safeProduct.colors.length > 0 && (
              <div>
                <h3 className="font-bold text-sm text-foreground uppercase tracking-wider mb-3">Available Colors</h3>
                <div className="flex gap-2 flex-wrap">
                  {safeProduct.colors.map(color => (
                    <span key={color} className="px-4 py-1.5 border border-border/60 rounded-full text-sm font-semibold bg-secondary/30 backdrop-blur-sm">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {safeProduct.materials && safeProduct.materials.length > 0 && (
              <div>
                <h3 className="font-bold text-sm text-foreground uppercase tracking-wider mb-3">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {safeProduct.materials.map(material => (
                    <span key={material} className="px-4 py-1.5 border border-border/60 rounded-full text-sm font-semibold bg-secondary/30 backdrop-blur-sm">
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="bg-card/40 backdrop-blur-md border rounded-2xl p-6 shadow-sm mb-6">
            <ProductActions product={safeProduct} />
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-t">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/10 p-2 rounded-lg">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
              </div>
              <span className="text-sm font-bold">1 Year Warranty</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/10 p-2 rounded-lg">
                <Truck className="h-5 w-5 text-emerald-500" />
              </div>
              <span className="text-sm font-bold">Pan-India Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/10 p-2 rounded-lg">
                <Check className="h-5 w-5 text-emerald-500" />
              </div>
              <span className="text-sm font-bold">Premium Quality</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/10 p-2 rounded-lg">
                <FileText className="h-5 w-5 text-emerald-500" />
              </div>
              <span className="text-sm font-bold">Download Brochure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="relative z-10 mb-12">
        <div className="glass-card rounded-3xl p-6 md:p-10 border border-border/50 shadow-xl shadow-secondary/10">
          <ProductDetailsComponent product={safeProduct} />
        </div>
      </div>

      {/* Warranty & Info */}
      <div className="relative z-10 mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {safeProduct.warranty ? (
          <WarrantyInfo warranty={safeProduct.warranty} />
        ) : (
          <WarrantyInfo warranty="1 Year Standard" />
        )}
        
        {/* Bulk Enquiry CTA */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
          <h4 className="text-xl font-bold text-white mb-2">Corporate & Bulk Orders</h4>
          <p className="text-sm text-zinc-400 mb-6">
            Looking to furnish an entire office? Get special B2B pricing, OEM manufacturing options, and dedicated support.
          </p>
          <div className="flex gap-4">
             <Link 
                href="/b2b/bulk-enquiry"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors"
              >
                Get Bulk Price
              </Link>
              <button className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" /> Catalogue
              </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="relative z-10">
          <h2 className="text-2xl font-extrabold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <Link href={`/products/${p.id}`} key={p.id} className="group flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 glow-border">
                <div className="aspect-[4/5] bg-secondary/30 relative overflow-hidden flex justify-center items-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col bg-card/50 backdrop-blur-sm">
                  <h3 className="font-bold text-base line-clamp-1 group-hover:text-emerald-500 transition-colors">{p.name}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-extrabold text-lg">₹{p.price.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* AI Recommendations */}
      <AIRecommendation currentProductId={safeProduct.id} category={safeProduct.category} />
    </div>
  );
}
