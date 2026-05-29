import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function ScrollToSection() {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Logic: Track scroll position to show/hide buttons
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if page is scrolled more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 2. Action: Smooth scroll functions
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-32 right-10 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Scroll to Top Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-white text-primary rounded-full shadow-2xl border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
              title="Scroll to Top"
            >
              <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>

            {/* Scroll to Bottom Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToBottom}
              className="w-12 h-12 bg-white text-primary rounded-full shadow-2xl border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
              title="Scroll to Bottom"
            >
              <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
