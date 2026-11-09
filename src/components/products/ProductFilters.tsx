"use client";
import { useState } from "react";
import { Check, ChevronDown, Filter } from "lucide-react";

interface FilterProps {
  categories: string[];
  materials: string[];
  colors: string[];
}

export default function ProductFilters({ categories, materials, colors }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number>(50000);

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 sticky top-24 z-30">
      <div className="flex items-center justify-between mb-4 md:hidden">
        <h3 className="text-white font-bold flex items-center gap-2">
          <Filter className="w-4 h-4" /> Filters
        </h3>
        <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400">
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:block space-y-6`}>
        {/* Categories */}
        <div>
          <h4 className="text-white font-bold mb-3 text-sm">Category</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {categories.map((cat, i) => (
              <label key={i} className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCategory === cat ? 'bg-emerald-500 border-emerald-500' : 'border-zinc-700 group-hover:border-emerald-500'}`}>
                  {selectedCategory === cat && <Check className="w-3 h-3 text-white" />}
                </div>
                <input 
                  type="radio" 
                  name="category"
                  className="hidden" 
                  checked={selectedCategory === cat} 
                  onChange={() => setSelectedCategory(cat)} 
                />
                <span className={`text-sm ${selectedCategory === cat ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="text-white font-bold mb-3 text-sm flex justify-between">
            Price 
            <span className="text-emerald-400 font-normal">Up to ₹{priceRange.toLocaleString()}</span>
          </h4>
          <input 
            type="range" 
            min="1000" 
            max="100000" 
            step="1000" 
            value={priceRange} 
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Materials */}
        <div>
          <h4 className="text-white font-bold mb-3 text-sm">Material</h4>
          <div className="flex flex-wrap gap-2">
            {materials.map((mat, i) => (
              <button
                key={i}
                onClick={() => setSelectedMaterial(selectedMaterial === mat ? null : mat)}
                className={`px-3 py-1 text-xs rounded-full border transition-all ${
                  selectedMaterial === mat 
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                    : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
                }`}
              >
                {mat}
              </button>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
           <label className="flex items-center gap-2 cursor-pointer group">
              <div className="w-4 h-4 rounded border border-zinc-700 group-hover:border-emerald-500 transition-colors flex items-center justify-center">
                {/* Checked state logic would go here */}
              </div>
              <span className="text-sm text-zinc-400 group-hover:text-zinc-200">In Stock Ready to Ship</span>
           </label>
        </div>
        
        <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-2 rounded-lg text-sm transition-colors mt-4">
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
