"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { Search, Filter, X, Sparkles, Check } from "lucide-react";
import VoiceSearch from "@/components/ai/VoiceSearch";

interface ProductsClientProps {
  initialProducts: Product[];
  categories: string[];
}

export default function ProductsClient({ initialProducts, categories }: ProductsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [priceRange, setPriceRange] = useState<number>(30000);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [inStockOnly, setInStockOnly] = useState(false);

  // Derive unique materials and colors from products
  const allMaterials = useMemo(() => {
    const mats = new Set<string>();
    initialProducts.forEach(p => p.materials?.forEach(m => mats.add(m)));
    return Array.from(mats).sort();
  }, [initialProducts]);

  const allColors = useMemo(() => {
    const cols = new Set<string>();
    initialProducts.forEach(p => p.colors?.forEach(c => cols.add(c.split('/')[0]))); // Simplification for demo
    return Array.from(cols).sort();
  }, [initialProducts]);


  const filteredProducts = useMemo(() => {
    return initialProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price <= priceRange;
      
      const matchesMaterial = !selectedMaterial || (product.materials && product.materials.includes(selectedMaterial));
      const matchesColor = !selectedColor || (product.colors && product.colors.some(c => c.includes(selectedColor)));
      const matchesStock = !inStockOnly || true; // Placeholder: Assume all in stock for now

      return matchesSearch && matchesCategory && matchesPrice && matchesMaterial && matchesColor && matchesStock;
    });
  }, [initialProducts, searchQuery, selectedCategory, priceRange, selectedMaterial, selectedColor, inStockOnly]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar / Filters (Glassmorphic Premium Style) */}
      <div className="w-full lg:w-72 flex flex-col gap-6 flex-shrink-0">
        <div className="bg-card/75 border border-border/80 backdrop-blur-md p-6 rounded-2xl space-y-6 shadow-xl shadow-secondary/10 sticky top-24">
          <div className="flex items-center justify-between pb-3 border-b border-border/50">
            <div className="flex items-center gap-2 font-bold text-lg text-foreground">
              <Filter className="h-4.5 w-4.5 text-emerald-500" /> Filters
            </div>
            {(searchQuery || selectedCategory !== "All" || priceRange < 30000 || selectedMaterial || selectedColor || inStockOnly) && (
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setPriceRange(30000);
                  setSelectedMaterial(null);
                  setSelectedColor(null);
                  setInStockOnly(false);
                }}
                className="text-xs text-muted-foreground hover:text-emerald-500 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
          
          {/* Search */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-foreground">Search Collection</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search chairs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 text-sm border rounded-xl bg-secondary/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-3"
                  >
                    <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>
              <VoiceSearch />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-foreground">Categories</label>
            <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`text-left text-xs font-semibold px-3 py-2 rounded-xl transition-all ${
                  selectedCategory === "All" 
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold shadow-md shadow-emerald-500/10" 
                    : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                All Products ({initialProducts.length})
              </button>
              {categories.map((category) => {
                const count = initialProducts.filter(p => p.category === category).length;
                if (count === 0) return null;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left text-xs font-semibold px-3 py-2 rounded-xl transition-all flex items-center justify-between ${
                      selectedCategory === category 
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold shadow-md shadow-emerald-500/10" 
                        : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="truncate mr-2">{category}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      selectedCategory === category ? "bg-white/20 text-white" : "bg-secondary-foreground/5 text-muted-foreground"
                    }`}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-foreground flex justify-between">
              <span>Max Price</span>
              <span className="text-emerald-500 font-extrabold">₹{priceRange.toLocaleString('en-IN')}</span>
            </label>
            <input 
              type="range" 
              min="1000" 
              max="30000" 
              step="500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1.5 bg-secondary rounded-lg cursor-pointer"
            />
          </div>

          {/* Materials */}
          {allMaterials.length > 0 && (
            <div className="space-y-3">
              <label className="text-sm font-bold text-foreground">Material</label>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto custom-scrollbar pr-1">
                {allMaterials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(selectedMaterial === mat ? null : mat)}
                    className={`px-3 py-1.5 text-[11px] rounded-lg border transition-all ${
                      selectedMaterial === mat 
                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-500 font-bold' 
                        : 'bg-secondary/50 border-border hover:border-emerald-500/30 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          {allColors.length > 0 && (
            <div className="space-y-3">
              <label className="text-sm font-bold text-foreground">Color Family</label>
              <div className="flex flex-wrap gap-2">
                {allColors.map((col) => (
                  <button
                    key={col}
                    onClick={() => setSelectedColor(selectedColor === col ? null : col)}
                    className={`px-3 py-1.5 text-[11px] rounded-lg border transition-all ${
                      selectedColor === col 
                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-500 font-bold' 
                        : 'bg-secondary/50 border-border hover:border-emerald-500/30 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Availability */}
          <div className="pt-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                inStockOnly ? 'bg-emerald-500 border-emerald-500' : 'bg-secondary border-border group-hover:border-emerald-500/50'
              }`}>
                {inStockOnly && <Check className="w-3.5 h-3.5 text-white" />}
              </div>
              <input 
                type="checkbox" 
                className="hidden" 
                checked={inStockOnly} 
                onChange={(e) => setInStockOnly(e.target.checked)} 
              />
              <span className={`text-sm font-medium ${inStockOnly ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground transition-colors'}`}>
                In Stock / Ready to Ship
              </span>
            </label>
          </div>

        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
          <span>Found <strong className="text-foreground">{filteredProducts.length}</strong> products</span>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col rounded-2xl border bg-card text-card-foreground overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 glow-border"
              >
                <div className="aspect-[4/5] bg-secondary/20 relative overflow-hidden flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Glossy light highlight overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold tracking-wider px-2 py-1 rounded-full z-10">
                      NEW
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between border-t bg-card/50 backdrop-blur-sm">
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg line-clamp-1 group-hover:text-emerald-500 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-extrabold text-xl">₹{product.price.toLocaleString('en-IN')}</span>
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
          <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed rounded-2xl bg-secondary/10">
            <Sparkles className="h-10 w-10 text-muted-foreground/40 mb-4" />
            <h3 className="text-xl font-bold mb-2">No products match filters</h3>
            <p className="text-muted-foreground mb-6">Try resetting search query or modifying filters.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setPriceRange(30000);
                setSelectedMaterial(null);
                setSelectedColor(null);
                setInStockOnly(false);
              }}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-emerald-500/10 text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
