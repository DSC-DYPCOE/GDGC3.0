'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './_components/Card';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern and responsive portfolio showcasing web development skills.',
      image: '/omsalunke.jpeg',
    },
    {
      id: 2,
      title: 'E-Commerce App',
      description: 'A sleek and scalable e-commerce platform for small businesses.',
      image: '/project2.jpg',
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      description: 'An app to track workouts, set goals, and monitor progress.',
      image: '/project3.jpg',
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A feature-rich blogging platform with Markdown support.',
      image: '/project4.jpg',
    },
  ];

  return (
    <div className="min-h-screen pt-10">
      <h1 className="text-4xl h-20 flex justify-center items-center mt-[10vh] font-bold text-center text-white mb-12">
        My Projects
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
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
