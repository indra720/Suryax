import HomeHero from '../components/HomeHero';
import FeaturedProperties from '../components/FeaturedProperties';
import PopularLocalities from '../components/PopularLocalities';
import TopBuilders from '../components/TopBuilders';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Zap, MapPin, Heart } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      <HomeHero />

      {/* About Us section (Updated) */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute inset-0 opacity-[0.03] -z-10" style={{ backgroundImage: 'radial-gradient(circle, #1B2A4A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Left side - Image with enhanced hover effects */}
            <div className="flex-1 relative group">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition duration-700"></div>
              <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-navy/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition duration-700"></div>

              <div className="premium-card overflow-hidden rounded-[3rem] shadow-2xl shadow-navy/10 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/20">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
                    alt="Suryax Excellence"
                    className="w-full aspect-4/5 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/40 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating badge - redesigned modern look */}
              <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-40 h-40 md:w-48 md:h-48 bg-linear-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-2xl shadow-navy/20 transform transition-all duration-500 hover:scale-105 hover:rotate-3 z-20 group/badge">
                <div className="text-white text-center p-2">
                  <div className="text-4xl md:text-5xl font-black mb-1 tracking-tighter">12<span className="text-xl align-top">+</span></div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold leading-tight">Years of<br />Trust & Excellence</div>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping-slow"></div>
              </div>
            </div>

            {/* Right side - Content with enhanced typography and interactive elements */}
            <div className="flex-1 space-y-6">
              {/* Section tag with dot */}
              <div className="inline-flex items-center gap-2 bg-primary/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-primary/10">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">About Suryax Group</span>
              </div>

              {/* Heading with decorative underline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
                Building Dreams With <br />
                <span className="text-primary relative inline-block">
                  Trust & Transparency
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30 -z-10" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 8 150 0 200 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              {/* Description with left border accent */}
              <p className="text-lg text-navy/60 leading-relaxed border-l-4 border-primary/20 pl-6 py-1">
                At Suryax Group, we don't just build structures; we create environments where dreams flourish.
                Based in Jaipur, we have established ourselves as a benchmark for <span className="text-primary font-semibold">quality, innovation, and unwavering integrity.</span>
              </p>

              {/* Enhanced Stats Cards */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="group/stat relative overflow-hidden rounded-2xl bg-linear-to-br from-navy/5 to-transparent p-5 backdrop-blur-sm border border-navy/5 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute -right-6 -top-6 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover/stat:bg-primary/20 transition-all"></div>
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover/stat:scale-110 transition-transform">
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-black text-navy leading-none mb-1 tracking-tight">2000 Cr+</div>
                      <div className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Asset Value</div>
                    </div>
                  </div>
                </div>

                <div className="group/stat relative overflow-hidden rounded-2xl bg-linear-to-br from-navy/5 to-transparent p-5 backdrop-blur-sm border border-navy/5 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute -right-6 -top-6 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover/stat:bg-primary/20 transition-all"></div>
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover/stat:scale-110 transition-transform">
                      <Target size={22} />
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-black text-navy leading-none mb-1 tracking-tight">500+</div>
                      <div className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Experts</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra trust indicators (optional but adds premium feel) */}
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-linear-to-br from-primary/80 to-primary border-2 border-white shadow-sm"></div>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-navy/60">Trusted by 5,000+ Families</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-navy/60">5 Star Rated</span>
                </div>
              </div>

              {/* CTA Button with arrow animation */}
              <div className="pt-4">
                <button className="group/btn relative px-8 py-4 bg-primary text-white font-black rounded-xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 uppercase tracking-wider text-xs flex items-center gap-3 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                  <span className="absolute inset-0 bg-linear-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Animation keyframes - add this to your global CSS or keep inside style tag if using CSS-in-JS */}
        <style>{`
    @keyframes ping-slow {
      0% { transform: scale(0.8); opacity: 1; }
      75%, 100% { transform: scale(1.3); opacity: 0; }
    }
    .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
  `}</style>
      </section>

      {/* Why invest section (Updated) */}
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-4 md:px-8 text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-6xl font-bold text-navy">The Suryax Advantage</h2>
        </div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="premium-card p-10 group hover:bg-primary transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white mb-8 transition-colors">
                <MapPin size={32} />
              </div>
              <h4 className="text-2xl font-bold text-navy group-hover:text-white mb-4 transition-colors">Prime Locations</h4>
              <p className="text-navy/50 group-hover:text-white/70 font-semibold leading-relaxed transition-colors">Strategic selection of locations with high appreciation potential and connectivity.</p>
            </div>
            <div className="premium-card p-10 group hover:bg-primary transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-blue/5 group-hover:bg-white/20 flex items-center justify-center text-blue group-hover:text-white mb-8 transition-colors">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-2xl font-bold text-navy group-hover:text-white mb-4 transition-colors">Trusted & Transparent</h4>
              <p className="text-navy/50 group-hover:text-white/70 font-semibold leading-relaxed transition-colors">No hidden costs, only clear communication and legal clarity across all projects.</p>
            </div>
            <div className="premium-card p-10 group hover:bg-primary transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-gold/5 group-hover:bg-white/20 flex items-center justify-center text-gold group-hover:text-white mb-8 transition-colors">
                <Heart size={32} />
              </div>
              <h4 className="text-2xl font-bold text-navy group-hover:text-white mb-4 transition-colors">Customer-First</h4>
              <p className="text-navy/50 group-hover:text-white/70 font-semibold leading-relaxed transition-colors">From site visits to possession, we ensure a seamless and delightful journey.</p>
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
