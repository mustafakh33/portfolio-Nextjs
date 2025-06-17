"use client"
import React from 'react';
import { serviceData } from './../../Data/data';
import SectionHeading from './../Helper/SectionHeading';
import ServiceCard from './../Helper/ServiceCard';
import { motion } from 'framer-motion';

const Services = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  return (
    <section
      className='pt-20 pb-20 bg-gray-900'
      id='services'
    >
      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto">
        <SectionHeading>Services</SectionHeading>
        
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 100
                  }
                }
              }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Services);