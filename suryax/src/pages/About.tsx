import { motion } from 'framer-motion';
import { Building2, ShieldCheck, HeartHandshake, Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 bg-surface min-h-screen"
    >
      <div className="container mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Suryax Corporate" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-secondary p-12 rounded-[3rem] shadow-2xl hidden md:block">
              <div className="text-white">
                <div className="text-5xl font-black mb-2">12+</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-6 block">Building Jaipur's Future</span>
            <h1 className="text-5xl md:text-7xl font-black text-primary leading-[1.1] mb-10">
              Trust, Quality & <br /> Transparency.
            </h1>
            <p className="text-xl text-primary/60 font-semibold mb-12 leading-relaxed">
              At Suryax Group, we don't just build structures; we create environments where dreams flourish. Based in Jaipur, we have established ourselves as a benchmark for innovation in the real estate sector.
            </p>

            <div className="grid grid-cols-2 gap-12 mb-16">
              <div>
                <div className="text-4xl font-black text-primary mb-2">2000 Cr+</div>
                <div className="text-sm font-bold text-secondary uppercase tracking-widest">Asset Value</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary mb-2">500+</div>
                <div className="text-sm font-bold text-secondary uppercase tracking-widest">Team Members</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <ShieldCheck className="text-secondary" />
                <span className="font-bold text-primary">RERA Certified</span>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <Award className="text-secondary" />
                <span className="font-bold text-primary">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-16 rounded-[4rem]">
              <h2 className="text-4xl font-black mb-8">Our Vision</h2>
              <p className="text-xl text-white/70 leading-relaxed font-semibold">
                To be the most trusted name in real estate by delivering exceptional value and creating sustainable communities that redefine the standard of living.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-16 rounded-[4rem]">
              <h2 className="text-4xl font-black mb-8">Our Mission</h2>
              <p className="text-xl text-white/70 leading-relaxed font-semibold">
                To build high-quality residential and commercial spaces through innovative design, transparent practices, and a customer-first approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
