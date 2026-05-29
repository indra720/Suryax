import { motion } from 'framer-motion';
import { properties } from '../data/mockData';
import { MapPin, Maximize2, BedDouble, Bath, Heart, ArrowUpRight, Star, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

export default function FeaturedProperties() {
  const [wishlisted, setWishlisted] = useState<(number | string)[]>([]);

  const toggleWishlist = (id: number | string) => {
    setWishlisted(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Centered Header Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-black uppercase tracking-[0.5em] text-xl mb-4 block">Premium Selection</span>
            <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight tracking-tighter mb-6">
              Featured Properties
            </h2>
            <p className="text-charcoal/40 text-xs font-bold uppercase tracking-widest leading-loose">
              Explore our most prestigious real estate landmarks across Jaipur.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {properties.map((prop, index) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[550px] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,61,61,0.15)] cursor-pointer"
            >
              {/* Main Image */}
              <img 
                src={prop.image} 
                alt={prop.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              
              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80 transition-opacity duration-500" />
              
              {/* Status & Wishlist (Top Actions) */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[9px] font-black rounded-full tracking-widest uppercase">
                  {prop.status}
                </span>
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleWishlist(prop.id); }}
                  className={cn(
                    "w-12 h-12 rounded-full backdrop-blur-xl border flex items-center justify-center transition-all duration-500",
                    wishlisted.includes(prop.id) 
                      ? "bg-secondary border-secondary text-white scale-110" 
                      : "bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
                  )}
                >
                  <Heart size={18} fill={wishlisted.includes(prop.id) ? "currentColor" : "none"} className={cn(wishlisted.includes(prop.id) && "animate-pulse")} />
                </button>
              </div>

              {/* Internal Content Overlay (Details Inside Card) */}
              <div className="absolute inset-x-6 bottom-8 z-20">
                <div className="p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 text-secondary font-black text-[9px] uppercase tracking-[0.2em] mb-3">
                    <MapPin size={12} className="text-white" />
                    {prop.location}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                    {prop.title}
                  </h3>

                  <div className="grid grid-cols-3 gap-4 mb-8 border-y border-white/10 py-4">
                    <div className="flex flex-col items-center gap-1">
                      <BedDouble size={14} className="text-white/60" />
                      <span className="text-[10px] font-black text-white">{prop.bhk}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Bath size={14} className="text-white/60" />
                      <span className="text-[10px] font-black text-white">2 Bath</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Maximize2 size={14} className="text-white/60" />
                      <span className="text-[10px] font-black text-white">{prop.size}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">Starting Price</span>
                      <span className="text-2xl font-black text-white tracking-tighter">
                        {prop.price}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-secondary text-white flex items-center justify-center shadow-xl group-hover:rotate-12 transition-all duration-500">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <button className="inline-flex items-center gap-4 text-primary font-black uppercase tracking-[0.3em] text-xs hover:gap-6 transition-all group">
            View Entire Collection <ArrowRight size={16} className="text-secondary" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
