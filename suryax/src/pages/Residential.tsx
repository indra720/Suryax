import { motion } from 'framer-motion';
import { BedDouble, Maximize2, MapPin, ArrowRight } from 'lucide-react';
import { properties } from '../data/mockData';

const residentialData = properties.filter(p => p.type === 'Apartment' || p.type === 'Luxury Flat');

export default function Residential() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-40 bg-surface min-h-screen"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Portfolio</span>
          <h1 className="text-6xl md:text-8xl font-black text-primary leading-tight tracking-tighter mb-8">
            Residential <br /> Collection
          </h1>
          <p className="text-xl text-primary/60 font-semibold leading-relaxed">
            Discover Jaipur's most prestigious homes. From ultra-luxury bungalows to modern flats, find your perfect sanctuary with Suryax Group.
          </p>
        </div>

        {/* Categories Tabs (Simple) */}
        <div className="flex flex-wrap gap-4 mb-16">
          {['All Residences', 'Luxury Flats', 'Bungalows', 'Block Flats'].map((tab, idx) => (
            <button key={tab} className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${idx === 0 ? 'bg-primary text-white shadow-xl' : 'bg-white text-primary border border-gray-100 hover:bg-gray-50'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {residentialData.map((prop) => (
            <div key={prop.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-xl transition-all duration-700 group-hover:shadow-primary/20">
                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-10 left-10 right-10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-full py-5 bg-white text-primary font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl">
                    View Project Details
                  </button>
                </div>
                <div className="absolute top-8 left-8">
                  <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-primary uppercase tracking-widest shadow-lg">
                    {prop.status}
                  </span>
                </div>
              </div>

              <div className="px-4">
                <div className="flex items-center gap-2 text-secondary text-[10px] font-black uppercase tracking-widest mb-3">
                  <MapPin size={12} />
                  {prop.location}
                </div>
                <h3 className="text-3xl font-black text-primary mb-4">{prop.title}</h3>
                <div className="flex items-center gap-8 mb-6 text-primary/60 font-semibold text-sm">
                  <div className="flex items-center gap-2"><BedDouble size={18} className="opacity-40" /> {prop.bhk}</div>
                  <div className="flex items-center gap-2"><Maximize2 size={18} className="opacity-40" /> {prop.size}</div>
                </div>
                <div className="text-3xl font-black text-primary tracking-tighter">{prop.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
