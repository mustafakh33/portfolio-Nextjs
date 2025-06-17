"use client";
import React from "react";
import SectionHeading from "./../Helper/SectionHeading";
import ProjectsCard from "./../Helper/ProjectsCard";
import { projectData } from '@/app/Data/data';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pt-20 pb-28 bg-gray-900/90 relative" id="projects">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto relative z-10">
        <SectionHeading>My Projects</SectionHeading>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          {/* Grid container for projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
              <ProjectsCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;