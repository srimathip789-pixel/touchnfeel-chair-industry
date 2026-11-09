"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ComparisonTable from "@/components/products/ComparisonTable";
import { Search } from "lucide-react";

export default function ComparePage() {
  // In a real app, this would be managed by a global store (Zustand/Redux) or Context
  // For demo, we initialize with first 2 products
  const [selectedIds, setSelectedIds] = useState<string[]>([products[0].id, products[1].id]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const selectedProducts = products.filter(p => selectedIds.includes(p.id));
  
  const searchResults = searchQuery 
    ? products.filter(p => 
        !selectedIds.includes(p.id) && 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleAdd = (id: string) => {
    if (selectedIds.length < 4) {
      setSelectedIds([...selectedIds, id]);
      setSearchQuery("");
    }
  };

  const handleRemove = (id: string) => {
    setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">Compare Products</h1>
            <p className="text-muted-foreground text-lg">Compare up to 4 chairs side-by-side to find the perfect fit.</p>
          </div>
          
          {selectedIds.length < 4 && (
            <div className="w-full md:w-96 relative z-20">
              <div className="relative">
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search to add products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
                />
              </div>
              
              {searchQuery && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-2xl overflow-hidden divide-y divide-border/50">
                  {searchResults.map(result => (
                    <button
                      key={result.id}
                      onClick={() => handleAdd(result.id)}
                      className="w-full text-left p-3 hover:bg-secondary/50 flex items-center justify-between transition-colors"
                    >
                      <span className="font-semibold text-sm">{result.name}</span>
                      <span className="text-xs text-emerald-500 font-bold">+ Add</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-teal-500/5 rounded-3xl pointer-events-none" />
          <ComparisonTable products={selectedProducts} onRemove={handleRemove} />
        </div>
        
      </div>
    </div>
  );
}
