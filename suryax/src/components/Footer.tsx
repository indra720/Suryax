  import { Building2, Phone, MapPin,  ArrowUp } from 'lucide-react';
  import { Link } from 'react-router-dom';
  import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

  export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
      <footer className="bg-white border-t border-gray-100 pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            {/* Brand */}
            <div className="space-y-8">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <Building2 className="text-white w-7 h-7" />
                </div>
                <span className="text-3xl font-black tracking-tight text-navy">Suryax Group</span>
              </Link>
              <p className="text-navy/50 leading-relaxed text-lg">
                Find Your Ideal Property Today. Redefining luxury living and commercial excellence in Jaipur. Building dreams with trust and transparency.
              </p>

              <div className="flex gap-4">
                {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-navy/40 hover:bg-primary hover:text-white transition-all shadow-sm">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-10 text-navy">Marketplace</h4>
              <ul className="space-y-5 text-navy/60 font-semibold">
                {['Buy Properties', 'Rent Properties', 'New Launches', 'Plots & Land', 'Commercial Spaces', 'Post Your Property'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary transition-colors flex items-center gap-3 group">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xl font-bold mb-10 text-navy">Resources</h4>
              <ul className="space-y-5 text-navy/60 font-semibold">
                {['Market Insights', 'EMI Calculator', 'RERA Guide', 'Jaipur Localities', 'Builder Reviews', 'Legal Assistance'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary transition-colors flex items-center gap-3 group">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-10 text-navy">Visit Our Office</h4>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="p-4 bg-gray-50 rounded-2xl text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <p className="text-navy/60 font-semibold leading-relaxed">
                    B-18, 2nd Floor, Shiv Marg, <br />
                    Bani Park, Jaipur, <br />
                    Rajasthan 302016
                  </p>
                </div>
                <div className="flex gap-5">
                  <div className="p-4 bg-gray-50 rounded-2xl text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <a href="tel:+917240200300" className="text-navy/60 font-black hover:text-primary text-lg tracking-tight">
                    +91 7240200300
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-navy/30 text-sm font-bold uppercase tracking-widest">
              © 2026 JaipurNest Luxury Homes. All Rights Reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center hover:bg-primary hover:shadow-2xl hover:shadow-primary/40 transition-all group"
            >
              <ArrowUp size={28} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </footer>
    );
  }
