"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface ColorVariant {
  colorName: string;
  hex: string;
  image: string;
}

interface ColorSelectorProps {
  variants: ColorVariant[];
  onSelect?: (variant: ColorVariant) => void;
}

export default function ColorSelector({ variants, onSelect }: ColorSelectorProps) {
  const [selected, setSelected] = useState<ColorVariant>(variants[0]);

  const handleSelect = (variant: ColorVariant) => {
    setSelected(variant);
    if (onSelect) {
      onSelect(variant);
    }
  };

  if (!variants || variants.length === 0) return null;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-bold text-foreground">Available Colors</h4>
      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => (
          <button
            key={variant.colorName}
            onClick={() => handleSelect(variant)}
            className={`group relative flex items-center gap-2 p-1.5 pr-3 rounded-full border transition-all ${
              selected.colorName === variant.colorName
                ? "border-emerald-500 bg-emerald-500/10"
                : "border-border hover:border-emerald-500/50 bg-secondary/50"
            }`}
          >
            <div 
              className="w-6 h-6 rounded-full border border-border shadow-inner flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: variant.hex }}
            >
              {selected.colorName === variant.colorName && (
                <Check className={`w-3 h-3 ${variant.hex === '#f5f5f5' || variant.hex === '#ffffff' ? 'text-black' : 'text-white'}`} />
              )}
            </div>
            <span className={`text-xs font-semibold ${
              selected.colorName === variant.colorName ? "text-emerald-500" : "text-muted-foreground"
            }`}>
              {variant.colorName}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
