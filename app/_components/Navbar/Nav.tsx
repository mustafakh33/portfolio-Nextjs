"use client"
import React from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { navLinks } from "./../../constant/constant";
import { motion } from "framer-motion";

interface Props {
  showNavHandle: () => void;
  scrolled: boolean;
}

const Nav = ({ showNavHandle, scrolled }: Props) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed transition-all duration-300 h-[12vh] z-50 w-full inset-0 ${
        scrolled 
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg" 
          : "bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/50"
      }`}
    >
      <div className="flex items-center justify-between h-full w-[90%] sm:w-[85%] md:w-[80%] mx-auto">
        {/* LOGO with animation */}
        <Link href="/" className="group">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="flex font-medium text-[20px] items-center"
          >
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-emerald-400 pr-1"
            >
              {"<"}
            </motion.div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-100"
            >
              Mustafa
            </motion.span>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-emerald-400 px-1"
            >
              /
            </motion.div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-100"
            >
              Khaled
            </motion.span>
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-emerald-400 pl-1"
            >
              {">"}
            </motion.div>
          </motion.span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-4">
          <ul className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navLinks.map((navLink, index) => (
              <motion.li 
                key={navLink.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link 
                  href={navLink.url} 
                  className="group relative px-2 py-1 text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  {navLink.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={showNavHandle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            aria-label="Open menu"
          >
            <HiBars3BottomRight className="w-6 h-6 text-gray-200" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;