"use client";

import { useState } from "react";
import { Building2, Mail, Phone, User, Package, Send, Loader2 } from "lucide-react";

export default function BulkEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Enquiry Sent Successfully</h3>
        <p className="text-muted-foreground mb-6">
          Our B2B sales team will contact you within 24 hours with a customized quotation.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-2 rounded-xl font-semibold transition-colors"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground">Contact Person *</label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <input 
              required
              type="text" 
              placeholder="John Doe" 
              className="w-full pl-10 pr-4 py-3 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground">Company Name *</label>
          <div className="relative">
            <Building2 className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <input 
              required
              type="text" 
              placeholder="Acme Corp" 
              className="w-full pl-10 pr-4 py-3 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground">Email Address *</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <input 
              required
              type="email" 
              placeholder="john@acme.com" 
              className="w-full pl-10 pr-4 py-3 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground">Phone Number *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <input 
              required
              type="tel" 
              placeholder="+91 98765 43210" 
              className="w-full pl-10 pr-4 py-3 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground">Enquiry Type *</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Corporate Order', 'Dealership', 'OEM Manufacturing', 'Other'].map((type) => (
            <label key={type} className="cursor-pointer">
              <input type="radio" name="enquiryType" value={type} className="peer hidden" required />
              <div className="border border-border peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10 rounded-xl p-3 text-center transition-all hover:bg-secondary/50">
                <span className="text-sm font-semibold peer-checked:text-emerald-500">{type}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground">Product Categories of Interest</label>
          <select className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none">
            <option value="">Select Category</option>
            <option value="workstation">Workstation Chairs</option>
            <option value="executive">Executive Chairs</option>
            <option value="visitor">Visitor Chairs</option>
            <option value="cafeteria">Cafeteria Chairs</option>
            <option value="multiple">Multiple Categories</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground">Estimated Quantity</label>
          <div className="relative">
            <Package className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <input 
              type="number" 
              placeholder="e.g., 50" 
              min="1"
              className="w-full pl-10 pr-4 py-3 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground">Additional Requirements</label>
        <textarea 
          rows={4}
          placeholder="Tell us about your specific requirements, timeline, and delivery location..."
          className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Processing...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" /> Submit Enquiry
          </>
        )}
      </button>
    </form>
  );
}
