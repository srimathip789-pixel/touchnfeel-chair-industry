"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, X, Send, Bot, User, ArrowRight, Sparkles, LayoutGrid, Check, RefreshCw } from "lucide-react";
import { products } from "@/data/products";

type Message = {
  sender: "bot" | "user";
  text: string;
  link?: { label: string; url: string };
  products?: typeof products;
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"chat" | "graphical">("chat");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Namaste! Welcome to Touch N Feel Office Systems. I am your premium AI Assistant. How can I help you elevate your workspace today?",
    },
  ]);

  // Graphical Finder state
  const [graphicalStep, setGraphicalStep] = useState(1);
  const [prefCategory, setPrefCategory] = useState<string>("");
  const [prefMaterial, setPrefMaterial] = useState<string>("");
  const [prefPrice, setPrefPrice] = useState<number>(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (mode === "chat") {
      scrollToBottom();
    }
  }, [messages, isOpen, mode]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    if (!textToSend) setInput("");

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: query }]);

    // Generate bot response
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let replyText = "";
      let matchedProducts: typeof products = [];
      let link: { label: string; url: string } | undefined = undefined;

      const found = products.filter(
        (p) =>
          lowerQuery.includes(p.name.toLowerCase()) ||
          p.name.toLowerCase().includes(lowerQuery) ||
          lowerQuery.includes(p.id.toLowerCase()) ||
          p.category.toLowerCase().includes(lowerQuery)
      );

      if (found.length > 0 && (lowerQuery.includes("chair") || lowerQuery.includes("show") || lowerQuery.includes("what") || lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("recommend") || found.some(p => lowerQuery.includes(p.name.split(" ")[0].toLowerCase())))) {
        matchedProducts = found.slice(0, 3);
        replyText = `Here are the matching products from our premium collection:`;
      } else if (lowerQuery.includes("warranty")) {
        replyText = "All Touch N Feel chairs come with a comprehensive 1-Year Warranty covering manufacturing defects, gas lifts, and base mechanisms.";
      } else if (lowerQuery.includes("location") || lowerQuery.includes("where") || lowerQuery.includes("address") || lowerQuery.includes("bangalore")) {
        replyText = "Our manufacturing facility and showroom are located in Bangalore:\nNo.17/4, 1st Cross, 'B' Street, Kuvempu Nagar, N.G Halli, Mysore Road, Bangalore - 560026.";
        link = { label: "View Contact Page", url: "/contact" };
      } else if (lowerQuery.includes("delivery") || lowerQuery.includes("shipping") || lowerQuery.includes("deliv")) {
        replyText = "We offer safe, secure pan-India delivery for all commercial, corporate, and individual orders. Shipping and installation charges are calculated based on your location and order volume.";
      } else if (lowerQuery.includes("quote") || lowerQuery.includes("buy") || lowerQuery.includes("order") || lowerQuery.includes("price list")) {
        replyText = "You can add any chairs to your quote cart and submit a request. Our sales team will get back to you with custom corporate discounts based on your quantity.";
        link = { label: "Request a Custom Quote", url: "/quote" };
      } else if (lowerQuery.includes("executive")) {
        matchedProducts = products.filter(p => p.category.includes("Executive")).slice(0, 3);
        replyText = "Here are our premium executive chairs, built with top-tier materials and advanced ergonomics for maximum leadership comfort:";
      } else if (lowerQuery.includes("workstation") || lowerQuery.includes("ergonomic")) {
        matchedProducts = products.filter(p => p.category.includes("Workstation")).slice(0, 3);
        replyText = "Our workstation chairs feature high-durability Korean mesh, synchro-tilt mechanisms, and adjustable lumbar support. Here are some top picks:";
      } else if (lowerQuery.includes("contact") || lowerQuery.includes("phone") || lowerQuery.includes("email") || lowerQuery.includes("number")) {
        replyText = "You can contact our sales team at +91 99454 05572 or email us at tnfjoseph@yahoo.com.";
        link = { label: "Contact Form", url: "/contact" };
      } else {
        replyText = "I'm here to assist with product recommendations, pricing details, shipping, and warranty queries. Try asking about 'Workstation Chairs', 'Warranty', or 'Location'!";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: replyText,
          products: matchedProducts.length > 0 ? matchedProducts : undefined,
          link,
        },
      ]);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const quickPrompts = [
    "Recommend Workstation Chairs",
    "What is the warranty policy?",
    "Where is your factory located?",
    "How can I request a quote?"
  ];

  // Graphical mode product matching
  const getGraphicalMatches = () => {
    return products.filter((p) => {
      const matchCat = p.category.toLowerCase().includes(prefCategory.toLowerCase());
      const matchMat = prefMaterial === "All" || p.materials.some(m => m.toLowerCase().includes(prefMaterial.toLowerCase()));
      const matchPrice = p.price <= prefPrice;
      return matchCat && matchMat && matchPrice;
    });
  };

  const resetGraphical = () => {
    setGraphicalStep(1);
    setPrefCategory("");
    setPrefMaterial("");
    setPrefPrice(0);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 flex h-[80vh] max-h-[550px] w-[calc(100vw-32px)] sm:w-[420px] flex-col rounded-2xl border bg-card text-card-foreground shadow-2xl overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="bg-primary p-4 text-primary-foreground">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Bot className="h-5 w-5" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border border-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight flex items-center gap-1.5">
                    TNF AI Assistant <Sparkles className="h-3 w-3 text-yellow-300 fill-yellow-300" />
                  </h4>
                  <p className="text-[10px] text-primary-foreground/70">Online • Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground p-1 rounded-md transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mode Switcher */}
            <div className="flex bg-primary-foreground/10 p-1 rounded-lg text-xs font-semibold">
              <button
                onClick={() => setMode("chat")}
                className={`flex-1 py-1.5 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                  mode === "chat" ? "bg-card text-foreground shadow-sm" : "hover:bg-primary-foreground/5 text-primary-foreground"
                }`}
              >
                <MessageSquare className="h-3.5 w-3.5" /> Chat Mode
              </button>
              <button
                onClick={() => setMode("graphical")}
                className={`flex-1 py-1.5 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                  mode === "graphical" ? "bg-card text-foreground shadow-sm" : "hover:bg-primary-foreground/5 text-primary-foreground"
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" /> Graphical Mode
              </button>
            </div>
          </div>

          {/* Mode 1: Chat Mode */}
          {mode === "chat" && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/10">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 max-w-[85%] ${
                      msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full border text-xs font-semibold ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-muted"
                      }`}
                    >
                      {msg.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className="space-y-3">
                      <div
                        className={`rounded-2xl px-4 py-2.5 text-sm shadow-sm leading-relaxed whitespace-pre-line ${
                          msg.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-card border"
                        }`}
                      >
                        {msg.text}
                      </div>

                      {/* Render Product recommendations if available */}
                      {msg.products && (
                        <div className="grid gap-3 pt-1">
                          {msg.products.map((p) => (
                            <Link
                              href={`/products/${p.id}`}
                              key={p.id}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 p-2 rounded-xl border bg-card hover:bg-secondary/40 transition-colors"
                            >
                              <div className="relative h-12 w-12 rounded-lg bg-secondary/30 border overflow-hidden">
                                <Image
                                  src={p.image}
                                  alt={p.name}
                                  fill
                                  className="object-contain p-1"
                                  sizes="48px"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h5 className="font-bold text-xs truncate">{p.name}</h5>
                                <p className="text-[10px] text-muted-foreground">{p.category}</p>
                                <span className="text-xs font-bold text-primary">₹{p.price.toLocaleString("en-IN")}</span>
                              </div>
                              <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Render CTA Link if available */}
                      {msg.link && (
                        <Link
                          href={msg.link.url}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-1"
                        >
                          {msg.link.label} <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick suggestions */}
              {messages.length === 1 && (
                <div className="p-3 border-t bg-card flex flex-wrap gap-2">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSend(prompt)}
                      className="text-[11px] font-medium border bg-secondary/20 hover:bg-secondary/60 hover:border-primary/30 transition-all rounded-full px-3 py-1.5 text-left"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t bg-card flex gap-2">
                <input
                  type="text"
                  placeholder="Ask about chairs, warranty, location..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="flex-1 px-4 py-2 text-sm border rounded-full bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <button
                  onClick={() => handleSend()}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-transform"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </>
          )}

          {/* Mode 2: Graphical Mode */}
          {mode === "graphical" && (
            <div className="flex-1 overflow-y-auto p-5 bg-secondary/10 flex flex-col justify-between">
              {/* Steps Progress bar */}
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4].map((stepNum) => (
                  <div
                    key={stepNum}
                    className={`h-1.5 flex-1 rounded-full transition-all ${
                      graphicalStep >= stepNum ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Step Contents */}
              <div className="flex-1 flex flex-col">
                {/* Step 1: Category choice */}
                {graphicalStep === 1 && (
                  <div className="space-y-4 flex-1 flex flex-col justify-center">
                    <h3 className="font-bold text-lg text-center mb-2">What type of seating do you need?</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { key: "Workstation", label: "Workstation", desc: "For desks & offices" },
                        { key: "Executive", label: "Executive", desc: "Premium & leather" },
                        { key: "Visitor", label: "Visitor", desc: "Lounge & guests" },
                        { key: "Educational", label: "Educational", desc: "Training & desks" },
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => {
                            setPrefCategory(item.key);
                            setGraphicalStep(2);
                          }}
                          className="p-4 border rounded-xl bg-card hover:border-primary hover:bg-primary/5 transition-all text-left flex flex-col justify-between"
                        >
                          <span className="font-bold text-sm text-foreground">{item.label}</span>
                          <span className="text-[10px] text-muted-foreground mt-1">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Material choice */}
                {graphicalStep === 2 && (
                  <div className="space-y-4 flex-1 flex flex-col justify-center">
                    <h3 className="font-bold text-lg text-center mb-2">Select your preferred backrest material</h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {[
                        { key: "Mesh", label: "Breathable Korean Mesh", desc: "Maximum airflow and ergonomic comfort" },
                        { key: "Leather", label: "Genuine Premium Leather", desc: "Executive look and luxuriously soft" },
                        { key: "Nylon", label: "High-Grade Nylon / Plastic", desc: "Sturdy, lightweight and easy to clean" },
                        { key: "All", label: "Show All Materials", desc: "Include all options" },
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => {
                            setPrefMaterial(item.key);
                            setGraphicalStep(3);
                          }}
                          className="p-3.5 border rounded-xl bg-card hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center justify-between"
                        >
                          <div>
                            <span className="font-bold text-sm block">{item.label}</span>
                            <span className="text-[10px] text-muted-foreground mt-0.5 block">{item.desc}</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Price range */}
                {graphicalStep === 3 && (
                  <div className="space-y-6 flex-1 flex flex-col justify-center px-2">
                    <h3 className="font-bold text-lg text-center">Set your maximum price budget</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center bg-card border rounded-xl p-4">
                        <span className="text-sm font-semibold text-muted-foreground">Max Budget:</span>
                        <span className="text-xl font-bold text-primary">
                          {prefPrice === 0 ? "Any Budget" : `₹${prefPrice.toLocaleString("en-IN")}`}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: 5000, label: "Under ₹5,000" },
                          { value: 10000, label: "Under ₹10,000" },
                          { value: 15000, label: "Under ₹15,000" },
                          { value: 30000, label: "Any Budget (Up to Premium)" },
                        ].map((btn) => (
                          <button
                            key={btn.value}
                            onClick={() => {
                              setPrefPrice(btn.value);
                              setGraphicalStep(4);
                            }}
                            className="py-3 border rounded-xl bg-card hover:border-primary hover:bg-primary/5 transition-all font-semibold text-sm"
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Show Recommendations */}
                {graphicalStep === 4 && (
                  <div className="space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-base text-center mb-1">Your Perfect Chair Matches</h3>
                      <p className="text-[11px] text-muted-foreground text-center mb-4">
                        Matching {prefCategory} &bull; {prefMaterial === "All" ? "Any Material" : prefMaterial} &bull; Under ₹{prefPrice.toLocaleString("en-IN")}
                      </p>

                      <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                        {getGraphicalMatches().length > 0 ? (
                          getGraphicalMatches().map((p) => (
                            <Link
                              href={`/products/${p.id}`}
                              key={p.id}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3.5 p-2.5 rounded-xl border bg-card hover:bg-secondary/40 transition-colors"
                            >
                              <div className="relative h-14 w-14 rounded-lg bg-secondary/30 border overflow-hidden">
                                <Image
                                  src={p.image}
                                  alt={p.name}
                                  fill
                                  className="object-contain p-1"
                                  sizes="56px"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h5 className="font-bold text-xs truncate">{p.name}</h5>
                                <p className="text-[10px] text-muted-foreground">{p.category}</p>
                                <span className="text-xs font-bold text-primary">₹{p.price.toLocaleString("en-IN")}</span>
                              </div>
                              <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                            </Link>
                          ))
                        ) : (
                          <div className="text-center py-8 text-sm text-muted-foreground border border-dashed rounded-xl bg-card">
                            No direct matches. Try expanding your filters!
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={resetGraphical}
                      className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:scale-102 active:scale-98 transition-transform"
                    >
                      <RefreshCw className="h-4 w-4" /> Start Over
                    </button>
                  </div>
                )}
              </div>

              {/* Navigation help */}
              {graphicalStep < 4 && (
                <div className="flex justify-between items-center pt-4 border-t mt-4">
                  <button
                    onClick={() => graphicalStep > 1 && setGraphicalStep(graphicalStep - 1)}
                    disabled={graphicalStep === 1}
                    className="text-xs font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30"
                  >
                    Back
                  </button>
                  <span className="text-xs text-muted-foreground font-medium">Step {graphicalStep} of 3</span>
                  <button
                    onClick={() => {
                      if (graphicalStep === 1) setPrefCategory("Workstation");
                      if (graphicalStep === 2) setPrefMaterial("All");
                      if (graphicalStep === 3) setPrefPrice(30000);
                      setGraphicalStep(graphicalStep + 1);
                    }}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    Skip
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
