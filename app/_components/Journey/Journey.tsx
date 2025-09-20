"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const SectionHeading = dynamic(() => import("../Helper/SectionHeading"));

const educationData: {
  id: number;
  imgSrc: string;
  title: string;
  company: string;
  description: string;
  position: "left" | "right";
}[] = [
  {
    id: 1,
    imgSrc: "/images/Experience/جامعة بنها.webp",
    title: "Benha University",
    company: "Benha, Egypt • Graduated: 2025",
    description:
      "Bachelor of Science in Computer Science, focusing on computer science fundamentals including algorithms, data structures, and programming languages. GPA: 3.1 / 4.",
    position: "left",
  },
  {
    id: 2,
    imgSrc: "/images/Experience/mec (2).jpg",
    title: "MEC Academy",
    company: "Dokki, Egypt • July 2023 - Jan 2024",
    description:
      "I completed a Front-End Developer course where I gained hands-on experience with HTML, CSS, Bootstrap, JavaScript, SASS, and React to build responsive and dynamic web applications.",
    position: "right",
  },
];

const experienceData: {
  id: number;
  imgSrc: string;
  title: string;
  company: string;
  description: string;
  position: "left" | "right";
}[] = [
  {
    id: 1,
    imgSrc: "/images/Experience/d.pear.jpeg",
    title: "Front-End Development Instructor",
    company: "D.Pear Company • Jun 2025 - Present",
    description:
      "Delivered training on web technologies (HTML, CSS, JS, React, Tailwind) and API integration; guided projects, code reviews, and mentored juniors on responsive design.",
    position: "left",
  },
  {
    id: 2,
    imgSrc: "/images/Experience/IDSC.jpg",
    title: "Frontend Developer Intern",
    company: "Information and Decision Support Center • July 2024 - Aug 2024",
    description:
      "Undertook a rigorous one-month training in frontend development, gaining hands-on experience in HTML, CSS, JavaScript, React, and Material UI for building responsive and dynamic interfaces.",
    position: "right",
  },
  {
    id: 3,
    imgSrc: "/images/Experience/itijpg.jpg",
    title: "MEAN Stack Developer Intern",
    company: "Information Technology Institute • Sep 2024 - Oct 2024",
    description:
      "Completed a one-month training in full-stack development with the MEAN stack, focusing on building RESTful APIs, developing Angular applications, and managing MongoDB databases.",
    position: "left",
  },
];

const TimelineItem = ({
  imgSrc,
  title,
  company,
  description,
  position,
  index,
}: {
  imgSrc: string;
  title: string;
  company: string;
  description: string;
  position: "left" | "right";
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
    viewport={{ once: true }}
    className={`relative w-full ${
      position === "left" ? "pr-0 md:pr-[50%]" : "pl-0 md:pl-[50%]"
    } py-4`}
  >
    <div
      className={`relative p-6 rounded-xl bg-gray-800 border border-gray-700 shadow-lg ${
        position === "left" ? "md:mr-6" : "md:ml-6"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-16 min-w-[64px] rounded-lg overflow-hidden border-2 border-emerald-400/30">
          <Image
            src={imgSrc}
            fill
            alt={`${title} Image`}
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-emerald-400">{title}</h3>
          <p className="text-sm font-medium text-gray-300 mt-1">{company}</p>
          <p className="text-sm text-gray-400 mt-2">{description}</p>
        </div>
      </div>
      <div
        className={`absolute top-6 hidden md:block ${
          position === "left" ? "right-[-8px]" : "left-[-8px]"
        } w-4 h-4 rotate-45 bg-gray-800 border-r border-b border-gray-700`}
      ></div>
    </div>
  </motion.div>
);

const Journey = () => {
  return (
    <section className="pt-20 pb-28 bg-gray-900" id="journey">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto">
        <SectionHeading>My Journey</SectionHeading>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-8 pl-4 border-l-4 border-emerald-400">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-400 hidden md:block"></div>

            {/* Timeline dots */}
            {experienceData.map((_, index) => (
              <div
                key={`dot-exp-${index}`}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 hidden md:block"
                style={{ top: `${50 + index * 50}%` }}
              ></div>
            ))}

            {/* Timeline items */}
            <div className="space-y-8 md:space-y-16">
              {experienceData.map((item, index) => (
                <TimelineItem key={item.id} {...item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-28 relative"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-8 pl-4 border-l-4 border-emerald-400">
            Education
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-400 hidden md:block"></div>

            {/* Timeline dots */}
            {educationData.map((_, index) => (
              <div
                key={`dot-edu-${index}`}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 hidden md:block"
                style={{ top: `${50 + index * 50}%` }}
              ></div>
            ))}

            {/* Timeline items */}
            <div className="space-y-8 md:space-y-16">
              {educationData.map((item, index) => (
                <TimelineItem key={item.id} {...item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
