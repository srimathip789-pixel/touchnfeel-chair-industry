import IconCard from "@/components/ui/IconCard";
import { Award, Zap, Truck, CheckCircle, Factory, ShieldCheck, DollarSign } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Materials",
      description: "We use only the highest grade materials for durability and comfort."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Ergonomic Design",
      description: "Scientifically designed seating for perfect posture and long-term health."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "ISO Certified",
      description: "Our processes meet rigorous international quality standards."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Optimized logistics for quick and safe delivery across India."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Affordable Pricing",
      description: "Direct-from-factory pricing cuts out the middleman markup."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Manufacturing Unit",
      description: "State-of-the-art facility ensuring precision and scale."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quality Testing",
      description: "Rigorous testing protocols for load, friction, and stability."
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>, // Pan India Map icon approx
      title: "Pan India Delivery",
      description: "We serve clients across the length and breadth of the country."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Why Choose Touch N Feel?</h2>
          <p className="text-zinc-400 text-lg">We combine decades of manufacturing expertise with modern ergonomic science to deliver seating solutions that truly stand out.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <IconCard key={idx} icon={reason.icon} title={reason.title} description={reason.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
