
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-emerald-400 
      transition-all duration-300 min-h-[280px] overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-400/10 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1] "></div>
      
      {/* Icon with animation */}
      <motion.div 
        className="w-14 h-14 rounded-lg bg-gray-700 group-hover:bg-emerald-500 flex items-center justify-center
        transition-colors duration-300 mb-6"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 10 }}
      >
        <Image 
          src={service.icon} 
          alt={service.title} 
          width={30} 
          height={30} 
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </motion.div>
      
      <h1 className="text-xl font-bold text-white mb-3">{service.title}</h1>
      <p className="text-gray-300 text-opacity-90 leading-relaxed">{service.description}</p>
      
      {/* Animated border bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 
      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  );
};

export default ServiceCard;