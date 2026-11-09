"use client";

import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Check, X, ShoppingCart, Trash2 } from "lucide-react";

interface ComparisonTableProps {
  products: Product[];
  onRemove: (id: string) => void;
}

export default function ComparisonTable({ products, onRemove }: ComparisonTableProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center bg-card/50 backdrop-blur-md rounded-3xl border border-border">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
          <ShoppingCart className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-foreground">No products selected</h3>
        <p className="text-muted-foreground mb-6">Add products to comparison to see their differences side by side.</p>
        <Link href="/products" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
          Browse Products
        </Link>
      </div>
    );
  }

  // Find all unique specs across selected products
  const allSpecs = Array.from(new Set(products.flatMap(p => p.specifications)));

  return (
    <div className="w-full overflow-x-auto custom-scrollbar pb-6">
      <div className="min-w-[800px]">
        {/* Header Row */}
        <div className="flex gap-4 mb-8">
          <div className="w-48 shrink-0">
            {/* Empty corner */}
          </div>
          {products.map((product) => (
            <div key={product.id} className="w-64 shrink-0 flex flex-col bg-card/50 border border-border rounded-2xl p-4 relative group">
              <button 
                onClick={() => onRemove(product.id)}
                className="absolute top-2 right-2 p-1.5 bg-background/80 hover:bg-red-500 hover:text-white rounded-full text-muted-foreground transition-colors z-10"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              
              <div className="aspect-square bg-secondary/30 rounded-xl relative mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform"
                />
              </div>
              
              <h4 className="font-bold text-foreground text-lg mb-1 line-clamp-1">{product.name}</h4>
              <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
              
              <div className="flex items-end justify-between mt-auto pt-4 border-t border-border/50">
                <span className="font-extrabold text-xl text-emerald-500">₹{product.price.toLocaleString('en-IN')}</span>
                <Link 
                  href={`/products/${product.id}`}
                  className="bg-secondary hover:bg-emerald-500 hover:text-white text-xs font-semibold py-1.5 px-3 rounded-lg transition-colors"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
          {/* Add more placeholder */}
          {products.length < 4 && (
            <Link href="/products" className="w-64 shrink-0 flex flex-col items-center justify-center bg-secondary/10 border-2 border-dashed border-border rounded-2xl p-4 text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group">
              <div className="w-12 h-12 rounded-full bg-secondary group-hover:bg-emerald-500/20 flex items-center justify-center mb-3 transition-colors">
                <span className="text-2xl font-bold">+</span>
              </div>
              <span className="font-semibold text-sm">Add another product</span>
            </Link>
          )}
        </div>

        {/* Comparison Specs */}
        <div className="space-y-2">
          {/* Warranty & Lead Time */}
          <div className="flex gap-4 items-center bg-card p-4 rounded-xl border border-border/50">
            <div className="w-48 shrink-0 font-bold text-sm text-muted-foreground uppercase tracking-wider">
              Warranty
            </div>
            {products.map(p => (
              <div key={p.id} className="w-64 shrink-0 font-semibold text-foreground">
                {p.warranty || "1 Year Standard"}
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center bg-card p-4 rounded-xl border border-border/50">
            <div className="w-48 shrink-0 font-bold text-sm text-muted-foreground uppercase tracking-wider">
              Lead Time
            </div>
            {products.map(p => (
              <div key={p.id} className="w-64 shrink-0 font-semibold text-foreground">
                {p.leadTime || "N/A"}
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center bg-card p-4 rounded-xl border border-border/50">
            <div className="w-48 shrink-0 font-bold text-sm text-muted-foreground uppercase tracking-wider">
              Weight Capacity
            </div>
            {products.map(p => (
              <div key={p.id} className="w-64 shrink-0 font-semibold text-foreground">
                {p.weightCapacity || "Standard"}
              </div>
            ))}
          </div>

          {/* Dynamic Specs */}
          {allSpecs.map(spec => (
            <div key={spec} className="flex gap-4 items-center bg-card p-4 rounded-xl border border-border/50 hover:border-emerald-500/30 transition-colors">
              <div className="w-48 shrink-0 font-bold text-sm text-muted-foreground">
                {spec}
              </div>
              {products.map(p => (
                <div key={p.id} className="w-64 shrink-0 flex items-center justify-center">
                  {p.specifications.includes(spec) ? (
                    <Check className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/30" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
