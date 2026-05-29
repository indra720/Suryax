import HomeHero from '../components/HomeHero';
import FeaturedProperties from '../components/FeaturedProperties';
import PopularLocalities from '../components/PopularLocalities';
import TopBuilders from '../components/TopBuilders';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Zap, MapPin, Heart, Star } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      <HomeHero />

      {/* About Us section (Refined Luxury Style) */}
      <section id="about" className="py-24 bg-surface relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute inset-0 opacity-[0.05] -z-10" style={{ backgroundImage: 'radial-gradient(circle, #003D3D 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left side - Image with premium frame */}
            <div className="flex-1 relative group">
              <div className="absolute -top-12 -left-12 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative premium-card p-4 bg-white/50 backdrop-blur-sm border border-white rounded-[3.5rem] shadow-2xl shadow-primary/5 transform transition-all duration-700 group-hover:shadow-primary/10">
                <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
                    alt="Suryax Excellence"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>

              {/* Luxury Badge - Redesigned with Golden/Secondary gradient */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 md:w-56 md:h-56 bg-gradient-to-br from-secondary via-[#FFB300] to-secondary rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(232,93,4,0.3)] transform transition-all duration-700 hover:scale-110 hover:rotate-6 z-20 group/badge animate-float">
                <div className="text-white text-center p-4 border border-white/20 rounded-full w-[90%] h-[90%] flex flex-col justify-center items-center">
                  <div className="text-5xl md:text-6xl font-black mb-1 tracking-tighter drop-shadow-lg">12<span className="text-2xl align-top">+</span></div>
                  <div className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-black leading-tight">Years of<br />Excellence</div>
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping-slow"></div>
              </div>
            </div>

            {/* Right side - Content with premium typography */}
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-3 bg-white border border-primary/10 px-5 py-2 rounded-full shadow-sm">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-pulse shadow-[0_0_10px_rgba(232,93,4,0.5)]"></span>
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">The Suryax Legacy</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-primary leading-[1.1] tracking-tight">
                Architecting <br />
                <span className="text-secondary relative inline-block">
                  Jaipur's Future
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1 }}
                    className="absolute -bottom-2 left-0 h-2 bg-secondary/20 rounded-full"
                  />
                </span>
              </h2>

              <p className="text-xl text-charcoal/70 leading-relaxed border-l-4 border-secondary pl-8 py-2 font-medium">
                Suryax Group stands as a beacon of <span className="text-primary font-bold italic">sophistication</span> in Rajasthan's real estate. We don't just build; we craft masterpieces that define your status and heritage.
              </p>

              {/* Premium Stat Grid */}
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="group/stat p-6 rounded-[2rem] bg-white border border-gray-100 hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/5">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover/stat:bg-secondary group-hover/stat:text-white transition-all duration-500 mb-6">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-primary leading-none mb-2 tracking-tighter">2000 Cr+</div>
                    <div className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Asset Value</div>
                  </div>
                </div>

                <div className="group/stat p-6 rounded-[2rem] bg-white border border-gray-100 hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/5">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover/stat:bg-secondary group-hover/stat:text-white transition-all duration-500 mb-6">
                    <Target size={28} />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-primary leading-none mb-2 tracking-tighter">500+</div>
                    <div className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Master Craftsmen</div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-10 pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-11 h-11 rounded-full border-4 border-white shadow-lg overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="user" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-primary">5,000+</span>
                    <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">Royal Families</span>
                  </div>
                </div>
                
                <div className="h-10 w-px bg-gray-100 hidden md:block"></div>

                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <span className="text-xs font-black text-primary uppercase tracking-widest">Trust Index 5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation keyframes */}
        <style>{`
          @keyframes ping-slow {
            0% { transform: scale(0.8); opacity: 1; }
            75%, 100% { transform: scale(1.3); opacity: 0; }
          }
          .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
        `}</style>
      </section>

      {/* Why invest section (Updated Style) */}
      <section className="py-24 bg-surface relative">
        <div className="container mx-auto px-4 md:px-8 text-center mb-16">
          <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our DNA</span>
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">The Suryax Advantage</h2>
        </div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="premium-card p-12 group hover:bg-primary transition-all duration-700 bg-white border-gray-50">
              <div className="w-20 h-20 rounded-[1.5rem] bg-primary/5 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white mb-10 transition-all duration-500 transform group-hover:rotate-6">
                <MapPin size={36} />
              </div>
              <h4 className="text-2xl font-black text-primary group-hover:text-white mb-5 transition-colors">Prime Locations</h4>
              <p className="text-charcoal/50 group-hover:text-white/70 font-medium leading-relaxed transition-colors text-lg">Strategic selection of locations with high appreciation potential and seamless connectivity.</p>
            </div>
            
            <div className="premium-card p-12 group hover:bg-primary transition-all duration-700 bg-white border-gray-50">
              <div className="w-20 h-20 rounded-[1.5rem] bg-secondary/5 group-hover:bg-white/20 flex items-center justify-center text-secondary group-hover:text-white mb-10 transition-all duration-500 transform group-hover:rotate-6">
                <ShieldCheck size={36} />
              </div>
              <h4 className="text-2xl font-black text-primary group-hover:text-white mb-5 transition-colors">Trust & Clarity</h4>
              <p className="text-charcoal/50 group-hover:text-white/70 font-medium leading-relaxed transition-colors text-lg">Zero hidden costs. We provide absolute legal clarity and transparent communication for every deal.</p>
            </div>

            <div className="premium-card p-12 group hover:bg-primary transition-all duration-700 bg-white border-gray-50">
              <div className="w-20 h-20 rounded-[1.5rem] bg-accent/5 group-hover:bg-white/20 flex items-center justify-center text-accent group-hover:text-white mb-10 transition-all duration-500 transform group-hover:rotate-6">
                <Heart size={36} />
              </div>
              <h4 className="text-2xl font-black text-primary group-hover:text-white mb-5 transition-colors">Customer Legacy</h4>
              <p className="text-charcoal/50 group-hover:text-white/70 font-medium leading-relaxed transition-colors text-lg">From the first site visit to the final handover, we ensure a journey as delightful as your home.</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProperties />
      <PopularLocalities />
      <TopBuilders />

      {/* Market Insight Teaser */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="premium-card bg-linear-to-br from-navy to-[#1a3a4a] border-white/10 p-16 md:p-24 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Jaipur Real Estate <br /><span className="text-gold">Report 2026</span></h2>
              <p className="text-xl text-white/60 mb-10 max-w-xl">Deep dive into price trends, upcoming hotspots, and investment opportunities in the Pink City.</p>
              <button className="px-10 py-5 bg-gold text-white font-black rounded-2xl shadow-2xl shadow-gold/20 hover:scale-105 transition-all uppercase tracking-widest">Download Report</button>
            </div>
            <div className="w-full md:w-1/3 aspect-4/5 bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-white text-center">
                <div className="text-7xl font-black mb-4">5.8k</div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">Avg Price / SQFT</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
