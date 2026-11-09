"use client";

import { useState } from "react";
import { Mic, Search, X } from "lucide-react";

export default function VoiceSearch() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const toggleListen = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTranscript("Listening... (Speak now)");
      // Simulate voice processing
      setTimeout(() => {
        setTranscript("Ergonomic workstation chairs under ₹15000");
        setTimeout(() => {
          setIsListening(false);
        }, 1000);
      }, 2000);
    } else {
      setTranscript("");
    }
  };

  return (
    <div className="relative group flex items-center">
      <button 
        onClick={toggleListen}
        className={`p-2 rounded-full transition-all ${
          isListening 
            ? 'bg-red-500 text-white animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]' 
            : 'bg-secondary hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-500 border border-transparent hover:border-emerald-500/30'
        }`}
        title="Search by Voice"
      >
        <Mic className="w-4 h-4" />
      </button>

      {/* Voice feedback tooltip */}
      <div className={`absolute top-full right-0 mt-2 bg-card border border-border shadow-xl rounded-xl p-3 text-sm min-w-[200px] whitespace-nowrap transition-all duration-300 origin-top-right z-50 ${
        isListening || transcript ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
      }`}>
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-border/50">
          <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-wider">
            {isListening ? (
              <><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Recording</>
            ) : (
              <><Search className="w-3 h-3" /> Processed</>
            )}
          </div>
          <button onClick={() => {setIsListening(false); setTranscript("");}} className="text-muted-foreground hover:text-foreground">
            <X className="w-3 h-3" />
          </button>
        </div>
        <p className="text-foreground font-medium italic">"{transcript}"</p>
      </div>
    </div>
  );
}
