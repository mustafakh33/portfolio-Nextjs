"use client"
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { navLinks } from "./../../constant/constant";
import Link from "next/link";
import { motion } from "framer-motion";
import { BaseInfo } from "./../../Data/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900/95 border-t border-gray-800 backdrop-blur-md pt-16 pb-8">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Link href="/" className="group mb-6">
            <span className="flex font-medium text-2xl items-center">
              <span className="text-emerald-400 pr-1">{"<"}</span>
              <span className="text-gray-100">Mustafa</span>
              <span className="text-emerald-400 px-1">/</span>
              <span className="text-gray-100">Khaled</span>
              <span className="text-emerald-400 pl-1">{">"}</span>
            </span>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <ul className="hidden sm:flex items-center flex-wrap justify-center gap-6 xl:gap-10 text-gray-300 font-medium">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <Link 
                  href={navLink.url} 
                  className="group relative px-2 py-1 text-sm hover:text-emerald-400 transition-colors duration-200"
                >
                  {navLink.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="flex gap-6">
            {BaseInfo.github && (
              <Link href={BaseInfo.github} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors duration-300"
                >
                  <FaGithub className="text-xl text-white" />
                </motion.div>
              </Link>
            )}
            
            {BaseInfo.linkedin && (
              <Link href={BaseInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
                >
                  <FaLinkedin className="text-xl text-white" />
                </motion.div>
              </Link>
            )}
            
            {BaseInfo.twitter && (
              <Link href={BaseInfo.twitter} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-3 bg-gray-800 rounded-full hover:bg-sky-500 transition-colors duration-300"
                >
                  <FaTwitter className="text-xl text-white" />
                </motion.div>
              </Link>
            )}
            
          </div>
        </motion.div>


        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} {BaseInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;