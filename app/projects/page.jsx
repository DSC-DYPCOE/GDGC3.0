"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./_components/Card";
import axios from "axios";
import Title from "../components/Title";
const ProjectsPage = () => {
  const [projectData, setprojectData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("/api/admin/project");
      setprojectData(data.data);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen pt-10">
      <h1 className="text-4xl h-20 flex justify-center items-center mt-[10vh] font-bold text-center text-white mb-12">
        <Title title="Our Project" />
      </h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projectData?.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            link={project.link}
            description={project.description}
            image={project.file}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
