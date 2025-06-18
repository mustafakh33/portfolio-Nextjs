import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiFolder } from "react-icons/fi";

interface Props {
  project: {
    id: number;
    image: string;
    url: string;
    urlGithub: string;
    Skills: string[];
    title: string;
    description: string;
  };
  index?: number;
}

const ProjectsCard = ({ project, index = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-emerald-400/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10"
    >
      {/* Project image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
      </div>

      {/* Project content */}
      <div className="p-6">

        {/* Project title and description */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.Skills.map((skill, i) => (
            <span
              key={i}
              className="text-xs font-medium px-3 py-1 bg-gray-700/50 text-emerald-300 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Project links */}
        <div className="flex items-center justify-between border-t border-gray-700/50 pt-4">
          {project.urlGithub && (
            <Link
              href={project.urlGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="GitHub repository"
            >
              <FaGithub className="text-xl" />
            </Link>
          )}
          
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              View Project <FaExternalLinkAlt className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;