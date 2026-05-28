import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2, User, LogIn, PhoneCall } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Property Map', href: '/map' },
  { name: 'Others', href: '/others' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <Building2 className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={cn("text-2xl font-black tracking-tight leading-none", scrolled ? "text-primary" : "text-white")}>SURYAX</span>
            <span className={cn("text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5", scrolled ? "text-secondary" : "text-white/80")}>Group</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => cn(
                "px-4 py-2 font-semibold transition-colors duration-200 rounded-lg",
                isActive 
                  ? "text-primary" 
                  : scrolled ? "text-navy/60 hover:text-primary" : "text-white/70 hover:text-white"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Auth & CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/register" className={cn("font-semibold transition-colors", scrolled ? "text-navy/60 hover:text-primary" : "text-white/70 hover:text-white")}>
            Register
          </Link>
          <Link 
            to="/login" 
            className="px-6 py-2.5 bg-secondary text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg active:scale-95"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={cn("xl:hidden p-2", scrolled ? "text-primary" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white shadow-2xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-xl font-bold text-primary hover:text-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-8 border-t border-gray-100 flex gap-4">
                <Link to="/login" className="flex-1 py-4 text-center font-bold text-primary border-2 border-primary rounded-xl">
                  Login
                </Link>
                <Link to="/register" className="flex-1 py-4 text-center font-bold bg-secondary text-white rounded-xl shadow-lg">
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
