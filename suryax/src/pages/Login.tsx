import { motion } from 'framer-motion';
import { Mail, Lock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
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
            <h1 className="text-6xl font-black mb-10 leading-[1.1]">Welcome <br /> <span className="text-secondary">Back.</span></h1>
            <p className="text-xl text-white/60 font-semibold leading-relaxed mb-12">Login to manage your portfolio, track property growth, and explore new royal launches in Jaipur.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-secondary" size={24} />
                <span className="font-bold text-lg">Personalized Dashboard</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-secondary" size={24} />
                <span className="font-bold text-lg">Saved Properties</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-secondary" size={24} />
                <span className="font-bold text-lg">Instant Inquiries</span>
              </div>
            </div>
          </div>
          <div className="relative z-10 text-sm font-bold opacity-40 uppercase tracking-widest">
            © 2026 Suryax Group • Jaipur
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-12 md:p-24 flex flex-col justify-center">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-primary mb-4">Login</h2>
            <p className="text-lg text-primary/50 font-semibold">New here? <Link to="/register" className="text-secondary hover:underline">Create an account</Link></p>
          </div>

          <form className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Username / Email</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20" size={20} />
                <input type="text" placeholder="john@example.com" className="w-full pl-16 pr-8 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary/10 transition-all font-semibold" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Password</label>
                <Link to="/forgot-password" className="text-[10px] font-bold text-secondary uppercase tracking-widest hover:underline">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20" size={20} />
                <input type="password" placeholder="••••••••" className="w-full pl-16 pr-8 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary/10 transition-all font-semibold" />
              </div>
            </div>

            <button className="w-full py-6 bg-primary text-white font-black rounded-3xl shadow-xl shadow-primary/20 hover:bg-secondary transition-all uppercase tracking-widest text-xs">
              Login to Account
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
