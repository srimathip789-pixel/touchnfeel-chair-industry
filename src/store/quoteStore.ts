import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

export interface QuoteItem {
  product: Product;
  quantity: number;
}

interface QuoteStore {
  items: QuoteItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
  getTotalItems: () => number;
}

export const useQuoteStore = create<QuoteStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        set((state) => {
          const existingItem = state.items.find(item => item.product.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map(item => 
                item.product.id === product.id 
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            };
          }
          return { items: [...state.items, { product, quantity: 1 }] };
        });
      },
      
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item.product.id !== productId)
        }));
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) return;
        set((state) => ({
          items: state.items.map(item => 
            item.product.id === productId 
              ? { ...item, quantity }
              : item
          )
        }));
      },
      
      clearQuote: () => set({ items: [] }),
      
      getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: 'quote-storage',
    }
  )
);
