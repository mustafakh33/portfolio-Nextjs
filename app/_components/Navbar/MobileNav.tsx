"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { navLinks } from "./../../constant/constant";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  showNav: boolean;
  closeNavHandle: () => void;
}

const MobileNav = ({ showNav, closeNavHandle }: Props) => {
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [showNav]);

  return (
    <div className="lg:hidden">
      {/* Overlay with animation */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[998]"
            onClick={closeNavHandle}
          />
        )}
      </AnimatePresence>
      
      {/* Nav Links with animation */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-gray-900 border-r border-gray-800 z-[999] flex flex-col shadow-xl"
          >
            {/* Close button */}
            <div className="p-4 border-b border-gray-800 flex justify-end">
              <motion.button
                onClick={closeNavHandle}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                aria-label="Close menu"
              >
                <CgClose className="w-6 h-6 text-gray-200" />
              </motion.button>
            </div>
            
            {/* Navigation links */}
            <nav className="flex-1 overflow-y-auto py-6 px-4">
              <ul className="space-y-4">
                {navLinks.map((navLink, index) => (
                  <motion.li
                    key={navLink.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={navLink.url}
                      onClick={closeNavHandle}
                      className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                    >
                      {navLink.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;