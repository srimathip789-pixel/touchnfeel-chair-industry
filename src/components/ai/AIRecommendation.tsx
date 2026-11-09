"use client";

import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

interface AIRecommendationProps {
  currentProductId?: string;
  category?: string;
}

export default function AIRecommendation({ currentProductId, category }: AIRecommendationProps) {
  // Simulate AI recommendation engine logic
  // In reality, this would fetch from an API based on user history, embeddings, etc.
  const recommendations = products
    .filter(p => p.id !== currentProductId && (category ? p.category === category : true))
    .slice(0, 3);

  if (recommendations.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-emerald-950/40 to-teal-950/40 border border-emerald-500/20 rounded-3xl p-6 md:p-8 relative overflow-hidden my-12">
      {/* Background styling */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-emerald-500 p-2 rounded-xl text-white shadow-lg shadow-emerald-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">AI Curated For You</h3>
            <p className="text-sm text-emerald-500 font-medium">Based on your viewing preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {recommendations.map(product => (
            <Link href={`/products/${product.id}`} key={product.id} className="group flex flex-col bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
              <div className="aspect-[4/3] relative bg-secondary/30 flex items-center justify-center p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h4 className="font-bold text-sm line-clamp-1 group-hover:text-emerald-500 transition-colors">{product.name}</h4>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-extrabold text-sm">₹{product.price.toLocaleString('en-IN')}</span>
                  <span className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
