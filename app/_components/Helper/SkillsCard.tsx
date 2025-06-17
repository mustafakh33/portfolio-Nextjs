import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from "react-parallax-tilt";

interface Props {
  item: {
    id: number;
    name: string;
    skills: { img: string, skill: string }[];
  };
  index: number;
}

const SkillsCard = ({ item, index }: Props) => {
  return (
    <Tilt 
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.02}
      transitionSpeed={500}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#34D399"
      glarePosition="all"
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="h-full p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-emerald-400 transition-all duration-300 shadow-lg"
      >
        <h3 className="text-xl font-bold text-emerald-400 mb-6">
          {item.name}
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {item.skills.map((element, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              viewport={{ once: true }}
              className="skill flex flex-col items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="relative w-10 h-10 mb-2">
                <Image
                  src={element.img || ""}
                  fill
                  alt={element.skill}
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-gray-300 text-center">
                {element.skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SkillsCard;