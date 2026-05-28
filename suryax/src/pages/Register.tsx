import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 bg-surface min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-gray-100">
        {/* Left Side: Brand Context */}
        <div className="hidden lg:flex flex-col justify-between p-24 bg-primary text-white relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3 mb-16">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-primary font-black">S</span>
              </div>
              <span className="text-2xl font-black tracking-tight">SURYAX</span>
            </Link>
            <h1 className="text-6xl font-black mb-10 leading-[1.1]">Join the <br /> <span className="text-secondary">Elite Circle.</span></h1>
            <p className="text-xl text-white/60 font-semibold leading-relaxed mb-12">Create an account to access exclusive property insights, price trends, and royal investment opportunities.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-secondary" size={24} />
                <span className="font-bold text-lg">Verified Listings Only</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-secondary" size={24} />
                <span className="font-bold text-lg">Priority Site Visits</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-secondary" size={24} />
                <span className="font-bold text-lg">Exclusive Rewards & Plans</span>
              </div>
            </div>
          </div>
          <div className="relative z-10 text-sm font-bold opacity-40 uppercase tracking-widest">
            © 2026 Suryax Group • Jaipur
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-12 md:p-24">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-primary mb-4">Register</h2>
            <p className="text-lg text-primary/50 font-semibold">Already have an account? <Link to="/login" className="text-secondary hover:underline">Login here</Link></p>
          </div>

          <form className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Referral Name (Optional)</label>
              <div className="relative">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20" size={20} />
                <input type="text" placeholder="Suryax Partner" className="w-full pl-16 pr-8 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary/10 transition-all font-semibold" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Your Full Name</label>
                <div className="relative">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20" size={20} />
                  <input type="text" placeholder="John Doe" className="w-full pl-16 pr-8 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary/10 transition-all font-semibold" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20" size={20} />
                  <input type="tel" placeholder="+91 00000 00000" className="w-full pl-16 pr-8 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary/10 transition-all font-semibold" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20" size={20} />
                <input type="email" placeholder="john@example.com" className="w-full pl-16 pr-8 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary/10 transition-all font-semibold" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Secure Password</label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20" size={20} />
                <input type="password" placeholder="••••••••" className="w-full pl-16 pr-8 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary/10 transition-all font-semibold" />
              </div>
            </div>

            <div className="flex items-center gap-3 ml-1">
              <input type="checkbox" className="w-5 h-5 rounded accent-primary" />
              <span className="text-sm font-bold text-primary/60">I agree to the Terms & Conditions and Privacy Policy.</span>
            </div>

            <button className="w-full py-6 bg-primary text-white font-black rounded-3xl shadow-xl shadow-primary/20 hover:bg-secondary transition-all uppercase tracking-widest text-xs">
              Create My Account
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
