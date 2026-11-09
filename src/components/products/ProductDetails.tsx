"use client";

import { Product } from "@/data/products";
import { Check, Settings, Scale, Ruler, Package, Info, Zap } from "lucide-react";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  // Array to map spec items to icons/labels dynamically based on available data
  const specItems = [
    { label: "Base Material", value: product.baseMaterial, icon: <Settings className="w-4 h-4 text-emerald-500" /> },
    { label: "Weight Capacity", value: product.weightCapacity, icon: <Scale className="w-4 h-4 text-emerald-500" /> },
    { label: "Seat Height", value: product.seatHeight, icon: <Ruler className="w-4 h-4 text-emerald-500" /> },
    { label: "Foam Density", value: product.foamDensity, icon: <Package className="w-4 h-4 text-emerald-500" /> },
    { label: "Wheel Type", value: product.wheelType, icon: <Zap className="w-4 h-4 text-emerald-500" /> },
    { label: "Lead Time", value: product.leadTime, icon: <Info className="w-4 h-4 text-emerald-500" /> },
  ].filter(item => item.value); // Only show defined specs

  return (
    <div className="space-y-8">
      {/* Specifications List */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          Key Features
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {product.specifications.map((spec, index) => (
            <li key={index} className="flex items-start gap-3 bg-secondary/30 p-3 rounded-xl border border-border/50">
              <div className="bg-emerald-500/20 p-1 rounded-full mt-0.5 shrink-0">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              </div>
              <span className="text-sm text-muted-foreground leading-tight">{spec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technical Details Grid */}
      {specItems.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Technical Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specItems.map((item, index) => (
              <div key={index} className="bg-card border border-border p-4 rounded-xl flex flex-col gap-2 hover:border-emerald-500/50 transition-colors group">
                <div className="flex items-center gap-2">
                  <div className="bg-secondary p-1.5 rounded-lg group-hover:bg-emerald-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</span>
                </div>
                <span className="text-sm font-bold text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
