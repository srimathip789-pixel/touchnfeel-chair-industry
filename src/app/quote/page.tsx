"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useQuoteStore } from "@/store/quoteStore";
import { Trash2, ArrowLeft, Send } from "lucide-react";

export default function QuotePage() {
  const { items, removeItem, updateQuantity, clearQuote, getTotalItems } = useQuoteStore();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for sending the quote
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      clearQuote();
    }, 1500);
  };

  if (!mounted) return null;

  if (success) {
    return (
      <div className="container mx-auto px-4 py-20 md:px-6 flex flex-col items-center justify-center text-center">
        <div className="bg-green-100 text-green-700 p-4 rounded-full mb-6">
          <Send className="h-10 w-10" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Quote Requested Successfully!</h1>
        <p className="text-muted-foreground max-w-[600px] mb-8">
          Thank you for your interest in our products. Our sales team will get back to you shortly with a customized quotation based on your requirements.
        </p>
        <Link href="/products" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          Continue Browsing
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Request a Quote</h1>
        <p className="text-muted-foreground">
          Review your selected items and submit an enquiry for bulk pricing or custom requirements.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border rounded-lg bg-secondary/10">
          <h3 className="text-xl font-bold mb-2">Your quote list is empty</h3>
          <p className="text-muted-foreground mb-6">Add some products to request a custom quote.</p>
          <Link href="/products" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium">
            <ArrowLeft className="h-4 w-4" /> Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Items List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-secondary/50 text-muted-foreground uppercase">
                  <tr>
                    <th className="px-6 py-4 font-medium">Product</th>
                    <th className="px-6 py-4 font-medium text-center">Quantity</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {items.map((item) => (
                    <tr key={item.product.id} className="bg-background">
                      <td className="px-6 py-4 flex items-center gap-4">
                        <div className="h-16 w-16 bg-secondary rounded flex items-center justify-center text-[10px] text-muted-foreground text-center overflow-hidden shrink-0">
                          {item.product.name}
                        </div>
                        <div>
                          <div className="font-medium text-base">{item.product.name}</div>
                          <div className="text-xs text-muted-foreground">{item.product.category}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="h-8 w-8 rounded border bg-background hover:bg-secondary flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="h-8 w-8 rounded border bg-background hover:bg-secondary flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => removeItem(item.product.id)}
                          className="text-destructive hover:bg-destructive/10 p-2 rounded-md transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-1">
            <div className="bg-secondary/30 p-6 rounded-lg border sticky top-24">
              <h2 className="text-xl font-bold mb-6">Your Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Full Name *</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email Address *</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Phone Number *</label>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Company / Organization</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Additional Requirements</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-background resize-none"
                    placeholder="Tell us about any specific customization, timeline, or budget requirements."
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full h-12 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 mt-4"
                >
                  {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
