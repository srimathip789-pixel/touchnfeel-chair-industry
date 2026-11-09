"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { useQuoteStore } from "@/store/quoteStore";

interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const [added, setAdded] = useState(false);
  const addItem = useQuoteStore((state) => state.addItem);

  const handleAddToQuote = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi, I would like to enquire about ${product.name} (₹${product.price}).`);
    window.open(`https://wa.me/919945405572?text=${text}`, "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 pt-6 border-t">
      <button 
        onClick={handleAddToQuote}
        className={`flex-1 h-12 rounded-lg font-medium flex items-center justify-center transition-colors ${
          added ? "bg-green-600 text-white" : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        {added ? "Added to Quote!" : "Add to Quote"}
      </button>
      
      <button 
        onClick={handleWhatsApp}
        className="flex-1 bg-[#25D366] text-white h-12 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#20b958] transition-colors"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp Enquiry
      </button>
    </div>
  );
}
