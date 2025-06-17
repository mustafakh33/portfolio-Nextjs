"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BaseInfo } from "./../../Data/data";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown } from "react-icons/fi";

const Hero = React.memo(() => {
  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  

  return (
    <section
      className="w-full min-h-screen pt-[12vh] flex justify-center items-center relative z-10 bg-gray-900"
      id="about"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/dot-pattern.svg')] opacity-10" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-600 rounded-full filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-emerald-400 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gray-800 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="flex justify-center items-center flex-col w-[90%] sm:w-[85%] md:w-[80%] h-full mx-auto py-12 lg:py-0">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 h-full"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1 lg:text-left text-center"
            variants={container}
          >
            <motion.div variants={item}>
              <h2 className="text-lg md:text-xl lg:text-2xl mb-2 text-emerald-300 font-medium">
                Hi, I&apos;m
              </h2>
            </motion.div>

            <motion.div variants={item}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-white font-bold">
                {BaseInfo.name}
              </h1>
            </motion.div>

            <motion.div variants={item} className="mb-4">
              <TypeAnimation
                sequence={[
                  BaseInfo.position,
                  1000,
                  "React & Next.js Specialist",
                  1000,
                  "UI/UX Interface Designer",
                  1000,
                  "Building Modern Web Apps",
                  1000
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300"
              />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl"
            >
              {BaseInfo.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8 items-center lg:items-start"
              variants={item}
            >
              <Link
                href={BaseInfo.cvLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 text-white font-semibold text-sm md:text-lg bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Download CV</span>
                  <FaDownload className="text-sm" />
                </motion.button>
              </Link>

              <div className="flex gap-4">
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
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="order-1 lg:order-2 relative"
            variants={item}
          >
            <div className="flex justify-center relative">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  delay: 0.2
                }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
              >
                <Image
                  src={BaseInfo.profilePic}
                  alt={`Profile picture of ${BaseInfo.name}`}
                  fill
                  priority
                  className="rounded-full object-cover border-4 border-emerald-500/30 shadow-2xl"
                />

              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <FiArrowDown className="text-2xl text-emerald-400 animate-bounce hidden lg:block" />
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;