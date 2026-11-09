"use client";

import { ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

interface WarrantyInfoProps {
  warranty: string;
}

export default function WarrantyInfo({ warranty }: WarrantyInfoProps) {
  return (
    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="bg-emerald-500/20 p-3 rounded-xl text-emerald-500">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-foreground mb-1">Manufacturer Warranty</h4>
          <p className="text-sm text-muted-foreground mb-4">
            This product is covered by a <strong>{warranty}</strong> warranty. Our guarantee covers manufacturing defects and structural integrity.
          </p>
          <Link 
            href="/b2b/enquiry"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            Read full warranty policy <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
