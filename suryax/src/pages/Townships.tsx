import { motion } from 'framer-motion';
import { TreePine, MapPin, ShieldCheck, Gem, Coins } from 'lucide-react';
import { properties } from '../data/mockData';

const townshipsData = properties.filter(p => p.type === 'Farmhouse');

export default function Townships() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-40 bg-surface min-h-screen"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Royal Living</span>
          <h1 className="text-6xl md:text-8xl font-black text-primary leading-tight tracking-tighter mb-8">
            Townships & <br /> Farmhouses.
          </h1>
          <p className="text-xl text-primary/60 font-semibold leading-relaxed">
            Experience the serenity of nature with our exclusive luxury farmhouses and premium agricultural land. Invest in a legacy of peace and prosperity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          {townshipsData.map((prop) => (
            <div key={prop.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-[4rem] overflow-hidden mb-10 shadow-2xl transition-all duration-700">
                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-10 right-10">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    <TreePine size={28} />
                  </div>
                </div>
              </div>
              <div className="px-8">
                <div className="flex items-center gap-2 text-secondary text-[10px] font-black uppercase tracking-widest mb-4">
                  <MapPin size={12} />
                  {prop.location}
                </div>
                <h3 className="text-4xl font-black text-primary mb-6">{prop.title}</h3>
                <p className="text-primary/50 font-semibold text-lg mb-8">{prop.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-black text-primary tracking-tighter">{prop.price}</div>
                  <button className="px-10 py-4 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl hover:bg-secondary transition-all">Explore Farmhouse</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Suryax Property Plans */}
        <section className="bg-white rounded-[5rem] p-16 md:p-32 border border-gray-100 shadow-2xl relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Investment Plans</span>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-12 leading-tight">SURYAX Property Plans</h2>
            <p className="text-2xl text-primary/40 font-semibold mb-20 max-w-4xl">Unlock financial freedom with our specialized property plans designed for consistent growth and rewards.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-12 bg-surface rounded-[3rem] border border-gray-50">
                <Coins className="text-secondary mb-8" size={48} />
                <h4 className="text-2xl font-black text-primary mb-4">Guaranteed Income</h4>
                <p className="text-primary/60 font-semibold">Earn stable monthly returns on your property investment.</p>
              </div>
              <div className="p-12 bg-surface rounded-[3rem] border border-gray-50">
                <ShieldCheck className="text-secondary mb-8" size={48} />
                <h4 className="text-2xl font-black text-primary mb-4">Team Income</h4>
                <p className="text-primary/60 font-semibold">Build a network and grow your earnings collaboratively.</p>
              </div>
              <div className="p-12 bg-surface rounded-[3rem] border border-gray-50">
                <Gem className="text-secondary mb-8" size={48} />
                <h4 className="text-2xl font-black text-primary mb-4">Exclusive Rewards</h4>
                <p className="text-primary/60 font-semibold">Luxury trips, automobiles, and premium lifestyle bonuses.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
