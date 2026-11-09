import { Metadata } from "next";
import { CheckCircle2, Factory, ShieldCheck, Trophy, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Touch N Feel Office Systems",
  description: "Learn about Touch N Feel, Bangalore's premier manufacturer of executive office furniture.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
            Crafting the Future of Workspaces
          </h1>
          <p className="text-xl text-zinc-300">
            Based in Bangalore, Touch N Feel is a leading manufacturer of premium executive office furniture, dedicated to ergonomics, durability, and modern aesthetics.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-secondary/50 rounded-2xl overflow-hidden relative border flex items-center justify-center">
              <span className="text-muted-foreground">Office/Team Image</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our inception, Touch N Feel has been driven by a single mission: to revolutionize the way people experience their workspace. We understand that a chair is not just a piece of furniture; it's a tool for productivity and well-being.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Operating from our state-of-the-art facility in Bangalore, we oversee every step of the manufacturing process. From sourcing the finest materials to rigorous quality control, we ensure that every chair that leaves our factory meets our uncompromising standards.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm font-medium text-muted-foreground">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50k+</div>
                  <div className="text-sm font-medium text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30 border-t border-b">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "We use only premium materials and rigorous testing." },
              { icon: Users, title: "Customer Centric", desc: "Your comfort and satisfaction are our top priorities." },
              { icon: Factory, title: "In-House Manufacturing", desc: "End-to-end control over the production process." },
              { icon: Trophy, title: "Ergonomic Excellence", desc: "Designs that support your health and well-being." },
            ].map((value, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border shadow-sm flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 md:px-6 space-y-6 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Upgrade Your Office?</h2>
          <p className="text-xl text-muted-foreground">
            Explore our extensive catalog or get in touch with our team for bulk orders and custom requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="/products" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary text-primary-foreground px-8 text-sm font-medium hover:bg-primary/90"
            >
              Browse Catalog
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex h-12 items-center justify-center rounded-md border bg-background px-8 text-sm font-medium hover:bg-secondary"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
