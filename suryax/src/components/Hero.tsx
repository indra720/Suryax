import { motion } from 'framer-motion';
import { Search, MapPin, Home, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm border border-secondary/30">
              Welcome to Suryax Group
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Find Your <span className="text-secondary italic">Ideal</span> Property Today
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
              Discover Jaipur's most exclusive luxury residences, premium commercial spaces, and serene farmhouses. Building dreams with trust and transparency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <button className="px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-xl shadow-secondary/20 flex items-center gap-3 group">
                Explore Properties
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-xl hover:bg-white hover:text-primary transition-all flex items-center gap-3">
                <MessageCircle className="text-[#25D366]" />
                WhatsApp Us
              </button>
            </div>
          </motion.div>

          {/* Modern Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-2 md:p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-4xl"
          >
            <div className="flex-1 w-full flex items-center px-4 py-3 gap-3 border-b md:border-b-0 md:border-r border-gray-100">
              <Search className="text-gray-400 shrink-0" size={20} />
              <input 
                type="text" 
                placeholder="Search by Keyword..." 
                className="w-full outline-none text-charcoal font-medium placeholder:text-gray-400"
              />
            </div>
            
            <div className="flex-1 w-full flex items-center px-4 py-3 gap-3 border-b md:border-b-0 md:border-r border-gray-100">
              <Home className="text-gray-400 shrink-0" size={20} />
              <select className="w-full outline-none text-charcoal font-medium appearance-none bg-transparent">
                <option>Property Type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Farmhouse</option>
              </select>
            </div>

            <div className="flex-1 w-full flex items-center px-4 py-3 gap-3">
              <MapPin className="text-gray-400 shrink-0" size={20} />
              <select className="w-full outline-none text-charcoal font-medium appearance-none bg-transparent">
                <option>Location</option>
                <option>Vaishali Nagar</option>
                <option>Jagatpura</option>
                <option>Mansarovar</option>
              </select>
            </div>

            <button className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-teal-900 transition-colors shadow-lg">
              Search
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="absolute bottom-0 right-0 p-8 hidden xl:block">
        <div className="flex gap-12 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-tl-3xl">
          <div>
            <div className="text-3xl font-bold text-secondary">2000 Cr+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Asset Value</div>
          </div>
          <div className="w-px h-12 bg-white/10"></div>
          <div>
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Experts</div>
          </div>
        </div>
      </div>
    </section>
  );
}
