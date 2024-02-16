"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Aphrodiva LCC",
    description: "Freelanced",
    image: "/images/projects/1.jpeg",
    tag: ["All", "Graphics"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "FutureBrain",
    description: "Freelanced",
    image: "/images/projects/2.jpeg",
    tag: ["All", "Graphics"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Burning Home-Fun",
    description: "Freelanced",
    image: "/images/projects/3.png",
    tag: ["All", "Graphics"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Poster",
    description: "Freelanced",
    image: "/images/projects/4.png",
    tag: ["All", "Graphics"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Stunning Car Web",
    description: "Freelanced",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ranjika123/CarWeb-Animation",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "The Oork",
    description: "Freelanced",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://theoork.com",
  },
  {
    id: 7,
    title: "WhatsApp-Bulk",
    description: "Freelanced",
    image: "/images/projects/7.png",
    tag: ["All", "Product"],
    gitUrl: "https://github.com/Ranjika123/WhatsApp-Bulk-Massenger",
    previewUrl: "https://github.com/Ranjika123/WhatsApp-Bulk-Massenger",
  },
  {
    id: 8,
    title: "AI-Face and Age Ditector",
    description: "Freelanced",
    image: "/images/projects/8.png",
    tag: ["All", "Product"],
    gitUrl: "https://github.com/Ranjika123/AI-Face-and-Age-Detector",
    previewUrl: "https://github.com/Ranjika123/AI-Face-and-Age-Detector",
  },
  {
    id: 9,
    title: "Hotel-Mirrenda",
    description: "Freelanced",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ranjika123/Hotel-Miranda",
    previewUrl: "https://github.com/Ranjika123/Hotel-Miranda",
  },
  {
    id: 10,
    title: "React+FireBase Chat System",
    description: "Freelanced",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ranjika123/ReactChat_System",
    previewUrl: "https://github.com/Ranjika123/ReactChat_System",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Product"
          isSelected={tag === "Mobile"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="Graphics"
          isSelected={tag === "Graphics"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
