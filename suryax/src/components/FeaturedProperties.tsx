import { motion } from 'framer-motion';
import { properties } from '../data/mockData';
import { MapPin, Maximize2, BedDouble, ArrowRight, Heart } from 'lucide-react';

export default function FeaturedProperties() {
  return (
    <section className="section-padding bg-[#ffffff]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-3 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight">
              The Cityscape Collection
            </h2>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-navy font-bold text-sm hover:text-primary flex items-center gap-2 group border-b-2 border-navy/5 pb-1 transition-all"
          >
            View all properties
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((prop, index) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full"
            >
              {/* Image Container - Clean & High Quality */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 card-shadow transition-all duration-500 group-hover:card-shadow-hover">
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Clean Status Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-navy text-[10px] font-black rounded-lg shadow-sm tracking-widest uppercase">
                    {prop.status}
                  </span>
                </div>

                <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all">
                  <Heart size={16} />
                </button>
              </div>

              {/* Content - Professional Typography */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 text-primary text-[11px] font-bold uppercase tracking-widest mb-3">
                  <MapPin size={12} />
                  {prop.location}
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">
                  {prop.title}
                </h3>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2.5 text-navy/60 font-semibold text-sm">
                    <BedDouble size={16} className="text-navy/30" />
                    <span>{prop.bhk}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-navy/60 font-semibold text-sm">
                    <Maximize2 size={16} className="text-navy/30" />
                    <span>{prop.size}</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="text-2xl font-black text-navy tracking-tight">
                    {prop.price}
                  </div>
                  <button className="w-10 h-10 rounded-xl border border-gray-100 flex items-center justify-center text-navy hover:bg-primary hover:border-primary hover:text-white transition-all group/btn">
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
