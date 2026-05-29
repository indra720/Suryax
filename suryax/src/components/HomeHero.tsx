import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Building,
  ChevronDown,
  MapPin,
  
  Star,
  ChevronRight,

  Home,
  Briefcase,
  Map,
  Warehouse
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const propertyTypes = [
  { name: 'All Types', icon: Building },
  { name: 'Residential', icon: Home },
  { name: 'Commercial', icon: Briefcase },
  { name: 'Townships', icon: Map },
  { name: 'Industrial', icon: Warehouse },
];

export default function HomeHero() {
  const [activeCard, setActiveCard] = useState(0);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('Type');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTypeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const premiumProperties = [
    {
      title: "The Sky Villa",
      location: "Jagatpura, Jaipur",
      price: "₹ 4.5 Cr",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      type: "Luxury Penthouse",
    },
    {
      title: "Royal Palms",
      location: "Vaishali Nagar, Jaipur",
      price: "₹ 2.8 Cr",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      type: "Modern Villa",
    },
    {
      title: "The Heritage",
      location: "C-Scheme, Jaipur",
      price: "₹ 6.2 Cr",
      image: "https://images.unsplash.com/photo-1600607687940-4e5a994e5771?auto=format&fit=crop&q=80&w=800",
      type: "Classic Estate",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % premiumProperties.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen lg:min-h-[110vh] flex items-center pt-32 sm:pt-28 pb-20 overflow-hidden bg-white">
      
      {/* Background with Sophisticated Light Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 opacity-30"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-luxury-house-exterior-and-pool-4806-large.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Decorative Orbs - Adjusted for light background */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-[120px] z-0 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-secondary/5 rounded-full blur-[100px] z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* Left Side: 3D Property Carousel */}
          <div className="flex-1 w-full order-2 lg:order-1 relative">
            <div className="relative h-112.5 md:h-137.5 perspective-2000">
              <AnimatePresence mode="wait">
                {premiumProperties.map((prop, index) => {
                  const isActive = index === activeCard;
                  const position = (index - activeCard + premiumProperties.length) % premiumProperties.length;
                  
                  return (isActive || position === 1 || position === premiumProperties.length - 1) && (
                    <motion.div
                      key={prop.title}
                      initial={{ opacity: 0, x: 100, rotateY: -45, scale: 0.8 }}
                      animate={{ 
                        opacity: position === 0 ? 1 : 0.4, 
                        x: position === 0 ? 0 : position === 1 ? 120 : -120,
                        z: position === 0 ? 0 : -200,
                        rotateY: position === 0 ? 0 : position === 1 ? -35 : 35,
                        scale: position === 0 ? 1 : 0.85,
                        zIndex: position === 0 ? 30 : 10
                      }}
                      exit={{ opacity: 0, x: -100, rotateY: 45, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => setActiveCard(index)}
                    >
                      <div className="w-70 md:w-95 h-100 md:h-120 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100 group bg-white/80 backdrop-blur-md">
                        <img 
                          src={prop.image} 
                          alt={prop.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-80" />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-white/90 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                              {prop.type}
                            </span>
                            <div className="flex items-center gap-1 text-secondary">
                              <Star size={12} fill="currentColor" />
                              <span className="text-[10px] font-bold">PREMIUM</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-1">{prop.title}</h3>
                          <div className="flex items-center gap-1 text-white/80 text-sm mb-4">
                            <MapPin size={14} className="text-white" />
                            {prop.location}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-black text-white">{prop.price}</span>
                            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:bg-secondary hover:border-secondary transition-all">
                              <ChevronRight size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {premiumProperties.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCard(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    i === activeCard ? "w-10 bg-primary" : "w-4 bg-primary/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Content & Search */}
          <div className="flex-1 order-1 lg:order-2 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 px-5 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_10px_rgba(232,93,4,0.8)]"></span>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Exquisite Real Estate</span>
              </div>

              {/* Refined Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tight mb-6">
                Redefining The Art Of <br />
                <span className="text-secondary relative inline-block">
                  Luxury Living
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="absolute -bottom-2 left-0 h-1 bg-linear-to-r from-secondary to-transparent rounded-full"
                  />
                </span>
              </h1>

              <p className="text-base md:text-lg text-primary/60 leading-relaxed max-w-xl font-medium border-l-2 border-secondary/30 pl-6">
                Experience Jaipur's most prestigious collection of homes. 
                Suryax Group brings you unparalleled quality, visionary architecture, 
                and a commitment to excellence that transforms lifestyles.
              </p>
            </motion.div>

            {/* Compact Elegant Search Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative max-w-2xl"
            >
              <div className="bg-white border border-gray-100 p-2 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,61,61,0.15)]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                  <div className="md:col-span-5 bg-gray-50 rounded-2xl px-5 py-3.5 flex items-center border border-gray-100 focus-within:border-primary/40 transition-all">
                    <Search size={18} className="text-primary mr-3" />
                    <input 
                      type="text" 
                      placeholder="Search Locality..." 
                      className="bg-transparent outline-none text-primary text-sm font-medium w-full placeholder:text-primary/30"
                    />
                  </div>
                  
                  {/* Functional Type Dropdown */}
                  <div className="md:col-span-4 relative" ref={dropdownRef}>
                    <div 
                      onClick={() => setIsTypeOpen(!isTypeOpen)}
                      className="h-full bg-gray-50 rounded-2xl px-5 py-3.5 flex items-center justify-between border border-gray-100 cursor-pointer hover:bg-gray-100 transition-all"
                    >
                      <div className="flex items-center gap-2 text-primary/70">
                        <Building size={16} className="text-primary" />
                        <span className="text-sm font-medium">{selectedType}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: isTypeOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={14} className="text-primary/30" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isTypeOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 5, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute top-full left-0 right-0 z-50 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden mt-2 p-1.5"
                        >
                          {propertyTypes.map((type) => (
                            <div
                              key={type.name}
                              onClick={() => {
                                setSelectedType(type.name);
                                setIsTypeOpen(false);
                              }}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group"
                            >
                              <type.icon size={16} className="text-primary group-hover:scale-110 transition-transform" />
                              <span className="text-sm font-medium text-primary/80 group-hover:text-primary">{type.name}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button className="md:col-span-3 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-2xl py-3.5 px-6 shadow-xl shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all">
                    Explore
                  </button>
                </div>
              </div>

              {/* Trust Pill */}
              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-secondary mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-[10px] text-primary/40 font-bold uppercase tracking-widest">5,000+ Verified Clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group"
      >
        <span className="text-[10px] font-black text-primary/30 tracking-[0.4em] uppercase group-hover:text-primary transition-colors">Discover</span>
        <div className="w-1px h-12 bg-linear-to-b from-primary to-transparent" />
      </motion.div>

    </section>
  );
}
