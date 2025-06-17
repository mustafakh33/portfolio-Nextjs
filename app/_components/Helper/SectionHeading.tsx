"use client"

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const SectionHeading = ({ children }: Props) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      className="w-fit text-center px-6 py-3 mx-auto text-white text-2xl
      sm:text-3xl md:text-4xl font-bold uppercase bg-gradient-to-r from-emerald-500 to-teal-400 
      bg-clip-text text-transparent relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-400 
      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </motion.h1>
  );
};

export default SectionHeading;