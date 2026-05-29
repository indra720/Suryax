import { motion } from 'framer-motion';
import { Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-40 bg-surface min-h-screen"
    >
      <div className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Contact Info */}
          <div>
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Get In Touch</span>
            <h1 className="text-6xl md:text-8xl font-black text-primary leading-tight tracking-tighter mb-10">
              Let's Build <br /> Your Dream.
            </h1>
            
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-primary mb-2">Our Headquarters</h4>
                  <p className="text-lg text-primary/50 font-semibold leading-relaxed">
                    B 18 B 2 Floor Shiv Marg, <br />
                    Banipark, Jaipur, Rajasthan
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-primary mb-2">Call Us Directly</h4>
                  <a href="tel:+917240200300" className="text-2xl font-black text-secondary hover:underline transition-all tracking-tight">+91 7240200300</a>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-16 h-16 rounded-3xl bg-[#25D366]/5 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-primary mb-2">WhatsApp Support</h4>
                  <p className="text-lg text-primary/50 font-semibold leading-relaxed">Instant assistance available 24/7.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-gray-100">
            <h2 className="text-4xl font-black text-primary mb-12">Send an Inquiry</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-8 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-8 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Message</label>
                <textarea rows={6} placeholder="Tell us about your property requirements..." className="w-full px-8 py-5 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold resize-none"></textarea>
              </div>
              <button className="w-full py-6 bg-primary text-white font-black rounded-3xl shadow-xl shadow-primary/20 hover:bg-secondary transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                Submit Inquiry <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
