import HomeHero from '../components/HomeHero';
import FeaturedProperties from '../components/FeaturedProperties';
import PopularLocalities from '../components/PopularLocalities';
import TopBuilders from '../components/TopBuilders';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, ChevronRight, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      <HomeHero />

      {/* RESTORED: About Us section - The one you worked hard on */}
      <section id="about" className="p-8 bg-surface relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute inset-0 opacity-[0.03] -z-10" style={{ backgroundImage: 'radial-gradient(circle, #003D3D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Left side - Original Image Layout with Luxury Colors */}
            <div className="flex-1 relative group">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition duration-700"></div>
              <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-secondary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition duration-700"></div>

              <div className="premium-card overflow-hidden rounded-[3rem] shadow-2xl shadow-primary/10 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/20 bg-white p-2">
                <div className="relative overflow-hidden rounded-[2.5rem] ">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
                    alt="Suryax Excellence"
                    className="w-auto sm:w-full h-50 sm:h-150  object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Original Floating Badge with Luxury Colors */}
              <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-40 h-40 md:w-48 md:h-48 bg-linear-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-2xl shadow-secondary/20 transform transition-all duration-500 hover:scale-105 hover:rotate-3 z-20 group/badge">
                <div className="text-white text-center p-2">
                  <div className="text-[18px] sm:text-4xl md:text-5xl font-black mb-1 tracking-tighter">12<span className="text-xl align-top">+</span></div>
                  <div className="text-[6px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold leading-tight">Years of<br />Trust & Excellence</div>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping-slow"></div>
              </div>
            </div>

            {/* Right side - Original Content Layout with Luxury Colors */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-primary/10">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">About Suryax Group</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Building Dreams With <br />
                <span className="text-secondary relative inline-block">
                  Trust & Transparency
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-secondary/30 -z-10" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 8 150 0 200 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              <p className="text-lg text-charcoal/60 leading-relaxed border-l-4 border-secondary/20 pl-6 py-1">
                At Suryax, we bring you a wide range of premium real estate opportunities tailored for your residential, commercial, and investment needs. Whether you're looking for your dream home, a modern flat, a luxurious villa, an office space, or even a manufacturing zone, we provide trusted and verified listings to match every requirement. With a strong focus on quality, location, and long-term value, Suryax ensures that each property meets high standards of comfort and return. Begin your journey with us today and experience a smarter way to search, select, and secure the perfect real estate solution. <span className="text-primary font-semibold">and secure the perfect real estate solution.</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="group/stat relative overflow-hidden rounded-2xl bg-white p-5 border border-gray-100 hover:border-secondary transition-all duration-300 hover:shadow-lg">
                  <div className="absolute -right-6 -top-6 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover/stat:bg-secondary/10 transition-all"></div>
                  <div className="flex  items-start gap-3 relative z-10">
                    <div className="p-2.5 bg-primary/5 rounded-xl text-primary group-hover/stat:bg-secondary group-hover/stat:text-white transition-all">
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-black text-primary leading-none mb-1 tracking-tight">2000 Cr+</div>
                      <div className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">Asset Value</div>
                    </div>
                  </div>
                </div>

                <div className="group/stat relative overflow-hidden rounded-2xl bg-white p-5 border border-gray-100 hover:border-secondary transition-all duration-300 hover:shadow-lg">
                  <div className="absolute -right-6 -top-6 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover/stat:bg-secondary/10 transition-all"></div>
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="p-2.5 bg-primary/5 rounded-xl text-primary group-hover/stat:bg-secondary group-hover/stat:text-white transition-all">
                      <Target size={22} />
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-black text-primary leading-none mb-1 tracking-tight">500+</div>
                      <div className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">Experts</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-linear-to-br from-primary/80 to-primary border-2 border-white shadow-sm"></div>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-charcoal/60">Trusted by 5,000+ Families</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-secondary fill-secondary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-charcoal/60">5 Star Rated</span>
                </div>
              </div>

              <div className="pt-4">
                <button className="group/btn relative px-8 py-4 bg-primary text-white font-black rounded-xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 uppercase tracking-wider text-xs flex items-center gap-3 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Link to="about">Learn More</Link>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                  <span className="absolute inset-0 bg-linear-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes ping-slow {
            0% { transform: scale(0.8); opacity: 1; }
            75%, 100% { transform: scale(1.3); opacity: 0; }
          }
          .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        `}</style>
      </section>

      {/* House Highlight Section (The World of Suryax) - Premium Hybrid Edition */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <span className="text-secondary font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block underline decoration-secondary/30 underline-offset-8">House Highlight</span>
            <h2 className="text-4xl md:text-6xl font-medium text-primary leading-tight mb-6 tracking-tight">The World of Suryax </h2>
            <p className="text-charcoal/40 text-sm font-medium tracking-wide uppercase">Curated Excellence in Every Space</p>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-7xl mx-auto">

            {/* 1. Residential - Large Asymmetric Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7 group relative h-125 lg:h-150 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Residential Luxury"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

              <div className="absolute top-10 left-10">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 font-black text-xs">01</div>
              </div>

              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Residential</h3>
                <p className="text-white/70 text-sm font-medium max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Palatial villas and bespoke apartments that blend traditional Jaipur heritage with modern luxury.
                </p>
                <div className="mt-6 flex items-center gap-3 text-secondary font-bold uppercase tracking-widest text-[10px] transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  View Collection <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>

            {/* Right Column for 02 and 03 */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-10">

              {/* 2. Commercial */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative h-70 lg:h-70 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt="Commercial Business"
                />
                <div className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-medium text-white tracking-tight">Commercial</h3>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Farmhouse & Resorts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative h-70 lg:h-70 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt="Farmhouse Resort"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-medium text-white tracking-tight leading-tight">Farmhouse <br />& Resorts</h3>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section (The Amazing Unique Edition) */}
      <section className=" bg-white relative overflow-hidden shadow-2xl">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/2 -z-10" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            
            {/* Left: The "Narrative" Side */}
            <div className="lg:w-7/12 space-y-12 py-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-4 mb-6">
                  <span className="w-10 h-px bg-secondary" />
                  <span className="text-secondary font-black uppercase tracking-[0.4em] text-[11px]">Who We Are</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-primary leading-[1.05] tracking-tighter mb-8">
                  Building Dreams With <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-accent">Trust & Transparency</span>
                </h2>
                <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium border-l-2 border-primary/10 pl-8">
                  At Suryax, we specialize in delivering premium real estate solutions
                  that empower individuals and businesses to find the perfect space for
                  living, investing, and growing. With a passion for excellence and a
                  commitment to transparency, we’re redefining the real estate
                  experience in India.
                </p>
              </motion.div>

              {/* Unique Service Experience */}
              <div className="space-y-4">
                {[
                  { title: "Residential & Commercial Property Solutions", id: "01" },
                  { title: "Trusted Real Estate Investment Opportunities", id: "02" },
                  { title: "Expert Consultation & Location Guidance", id: "03" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-gray-100 hover:bg-primary hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-black text-secondary group-hover:text-white/50 transition-colors">{item.id}</span>
                      <h4 className="text-xl font-bold text-primary group-hover:text-white transition-colors">{item.title}</h4>
                    </div>
                    <ArrowRight className="text-secondary group-hover:text-white transition-all transform group-hover:translate-x-2" size={20} />
                  </motion.div>
                ))}
              </div>

              {/* Unique Content Action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center gap-12 pt-6"
              >
                <button className="relative px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-[11px] rounded-2xl overflow-hidden group">
                  <span className="relative z-10">About Suryax</span>
                  <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary relative">
                    <Zap size={24} fill="currentColor" />
                    <div className="absolute inset-0 rounded-full border border-secondary/30 animate-ping" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us Anytime</p>
                    <a href="tel:+917240200300" className="text-2xl font-black text-primary hover:text-secondary transition-colors">+91 7240200300</a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: The "Visual Masterpiece" */}
            <div className="lg:w-5/12 relative flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative w-full h-150 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group/img"
              >
                <img 
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-1000 scale-110 group-hover/img:scale-100"
                  alt="Architecture"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              </motion.div>

              {/* Decorative Geometric Outline */}
              <div className="absolute -top-10 -right-10 w-full h-full border-2 border-primary/5 rounded-[4rem] -z-10 transform translate-x-5 translate-y-5" />
            </div>

          </div>
        </div>
      </section>

      <FeaturedProperties />
      <PopularLocalities />
      <TopBuilders />

      {/* Market Insight Teaser */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="premium-card bg-linear-to-br from-primary to-[#002d2d] border-white/10 p-16 md:p-24 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Jaipur Real Estate <br /><span className="text-secondary">Report 2026</span></h2>
              <p className="text-xl text-white/60 mb-10 max-w-xl">Deep dive into price trends, upcoming hotspots, and investment opportunities in the Pink City.</p>
              <button className="px-10 py-5 bg-secondary text-white font-black rounded-2xl shadow-2xl shadow-secondary/20 hover:scale-105 transition-all uppercase tracking-widest">Download Report</button>
            </div>
            <div className="w-full md:w-1/3 aspect-4/5 bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
