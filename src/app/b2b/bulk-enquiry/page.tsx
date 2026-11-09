import BulkEnquiryForm from "@/components/b2b/BulkEnquiryForm";
import { Factory, ShieldCheck, Truck, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk Enquiry & B2B Orders | Touch N Feel Office Systems",
  description: "Get special B2B pricing, OEM manufacturing options, and dealership opportunities for premium office furniture.",
};

export default function BulkEnquiryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-background pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Corporate & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">B2B Orders</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Partner with a leading manufacturer. We offer unbeatable wholesale prices, OEM manufacturing, and dedicated corporate support for large projects.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-card border border-border p-8 rounded-3xl shadow-xl shadow-secondary/10">
                <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-emerald-500/10 p-3 rounded-2xl h-fit text-emerald-500">
                      <Factory className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Direct from Factory</h4>
                      <p className="text-sm text-muted-foreground mt-1">No middlemen. Get genuine factory pricing directly from our 10,000 sqft facility.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-emerald-500/10 p-3 rounded-2xl h-fit text-emerald-500">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">OEM Manufacturing</h4>
                      <p className="text-sm text-muted-foreground mt-1">Custom branding and tailored designs for major corporate orders and dealers.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-emerald-500/10 p-3 rounded-2xl h-fit text-emerald-500">
                      <Truck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Pan-India Logistics</h4>
                      <p className="text-sm text-muted-foreground mt-1">Reliable and swift delivery network across India for bulk shipments.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-emerald-500/10 p-3 rounded-2xl h-fit text-emerald-500">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Dedicated Support</h4>
                      <p className="text-sm text-muted-foreground mt-1">A dedicated account manager for your project from inquiry to installation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-xl shadow-emerald-500/20">
                <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                <p className="text-emerald-50 mb-6 text-sm">Call our B2B sales hotline directly.</p>
                <div className="text-3xl font-extrabold tracking-tight mb-2">
                  +91 98846 95856
                </div>
                <div className="text-sm text-emerald-100">
                  b2b@touch-n-feel.in
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-2">
              <div className="bg-card/50 backdrop-blur-md border border-border p-6 md:p-10 rounded-3xl shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Request a Quote</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
                
                <BulkEnquiryForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
