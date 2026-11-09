import { PlayCircle } from "lucide-react";

export default function VideoGallery() {
  const videos = [
    { title: "Factory Tour", duration: "3:45", category: "Manufacturing" },
    { title: "Chair Testing & QA", duration: "1:20", category: "Quality" },
    { title: "Ergonomic Features Demo", duration: "2:15", category: "Product" },
    { title: "Customer Installation", duration: "0:55", category: "Service" },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">See Us In Action</h2>
          <p className="text-zinc-400 text-lg">Watch how we build, test, and deliver our premium seating solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Main Featured Video */}
          <div className="md:col-span-2 relative aspect-video bg-zinc-900 rounded-3xl overflow-hidden group cursor-pointer border border-zinc-800 shadow-2xl">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10 flex items-center justify-center">
              <div className="w-20 h-20 bg-emerald-500/90 rounded-full flex items-center justify-center text-white backdrop-blur group-hover:scale-110 transition-transform duration-300">
                <PlayCircle className="w-10 h-10" />
              </div>
            </div>
            {/* Placeholder Image */}
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 font-mono">
              [Manufacturing Process Video Thumbnail]
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
              <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block uppercase tracking-wider">Featured</span>
              <h3 className="text-2xl font-bold text-white">Behind The Scenes: Crafting the Perfect Executive Chair</h3>
            </div>
          </div>

          {/* Secondary Videos */}
          {videos.map((vid, idx) => (
            <div key={idx} className="flex gap-4 group cursor-pointer">
              <div className="relative w-40 aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shrink-0">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all z-10 flex items-center justify-center">
                  <PlayCircle className="w-8 h-8 text-white/80 group-hover:text-emerald-400 transition-colors" />
                </div>
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-700 text-[10px] font-mono text-center px-2">
                  [{vid.title}]
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded z-20">
                  {vid.duration}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-emerald-500 text-xs font-bold uppercase tracking-wider mb-1">{vid.category}</span>
                <h4 className="text-white font-bold group-hover:text-emerald-400 transition-colors line-clamp-2">{vid.title}</h4>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
