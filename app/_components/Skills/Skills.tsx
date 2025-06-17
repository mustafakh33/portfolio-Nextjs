"use client";
import React from "react";
import { skillsData } from "@/app/Data/data";
import SectionHeading from "./../Helper/SectionHeading";
import SkillsCard from "./../Helper/SkillsCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="pt-20 pb-28 bg-gray-900" id="skills">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto">
        <SectionHeading>My Skills</SectionHeading>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {skillsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <SkillsCard item={item} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Skills);