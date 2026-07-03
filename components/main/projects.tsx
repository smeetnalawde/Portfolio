"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-anchor-none overflow-visible"
    >
      <div className="container mx-auto px-4 w-full overflow-visible">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 px-2 overflow-visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 pb-3 md:pb-4 leading-[1.45] inline-block overflow-visible">
            My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-2">
            Here are some of my recent projects. Click on any project to learn more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {PROJECTS.map((project, index) => {
            const isOrphan =
              PROJECTS.length % 2 !== 0 && index === PROJECTS.length - 1;
            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`h-full flex flex-col ${isOrphan ? "md:col-span-2 md:max-w-md md:mx-auto md:w-full" : ""}`}
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
              />
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
