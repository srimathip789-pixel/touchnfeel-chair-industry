import { Star, ShieldCheck } from "lucide-react";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Rahul M.",
      role: "Procurement Manager, Tech Solutions",
      text: "Ordered 150 workstation chairs for our new Bangalore office. The quality is exceptional and the delivery was on time. The ergonomic support has significantly improved team comfort.",
      rating: 5
    },
    {
      name: "Priya S.",
      role: "Admin Head, Global Academy",
      text: "We sourced our cafeteria and library chairs from Touch N Feel. Very sturdy build, easy to clean, and looks premium. Highly recommend their B2B services.",
      rating: 5
    },
    {
      name: "Karthik R.",
      role: "CEO, StartUp Hub",
      text: "The executive chairs we purchased are top-notch. The materials feel expensive and the lower back support is perfect for long working hours. Great value for money.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">What Our Clients Say</h2>
            <div className="flex items-center gap-4">
              <div className="flex bg-white rounded-full p-1 w-fit">
                 {/* Google 'G' Logo Placeholder */}
                 <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-2">G</div>
                 <div className="flex items-center gap-1 pr-4">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                   ))}
                 </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white mr-2">4.9/5</span>
                <span className="text-zinc-400 text-sm">Based on 240+ reviews</span>
              </div>
            </div>
          </div>
          
          <a href="#" className="border border-zinc-700 hover:border-emerald-500 text-zinc-300 hover:text-emerald-400 px-6 py-3 rounded-full transition-all flex items-center gap-2">
            View All Reviews
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-300 mb-8 italic">"{review.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-emerald-900 text-emerald-400 rounded-full flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold flex items-center gap-2">
                    {review.name}
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  </h4>
                  <span className="text-zinc-500 text-xs">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
