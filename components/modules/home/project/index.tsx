"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { PROJECTS } from "@/content/projects";
import ProjectCard from "@/components/common/project-card";

const variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Projects = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });

  return (
    <MaxWidthWrapper className="container mx-auto p-8 pt-10">
      <motion.div
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={variants}
        ref={cardsRef}
        transition={{
          duration: 0.5,
        }}
        className="relative my-24"
      >
        <motion.h2
          className="text-center text-3xl font-semibold"
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10"
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {PROJECTS.slice(0, 4).map((project, index) => {
            const { href, image, title, description, tags } = project;

            return (
              <ProjectCard
                key={index + 1}
                href={href}
                image={image}
                title={title}
                description={description}
                tags={tags}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default Projects;
