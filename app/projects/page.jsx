"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/contents/ProjectCard";

// data
const projectData = [
  {
    image: "/work/work-1.png",
    category: "fullstack",
    name: "KitaCare Saas",
    description:
      "Website for service assisting families in Indonesia, website build with wordpress, backend API using Laravel (For mobile apps), Server using Amazon Web Service.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/work-2.png",
    category: "fullstack",
    name: "Aksiberbagi Website",
    description:
      "Website for charity donation and sharing for caring, website build using Laravel + bootstrap, server using VPS Contabo.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/work-3.png",
    category: "fullstack",
    name: "Beramal Bersama Website",
    description:
      "Website for charity donation and sharing for caring, website build using Laravel + bootstrap, server using VPS Contabo.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/work-4.png",
    category: "fullstack",
    name: "RSRD Korlantas Website",
    description:
      "Website for news, research, and development police government in indonesia, website build using Laravel + bootstrap, server using Private VPS.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/work-5.png",
    category: "fullstack",
    name: "Seedfund fintech Crowdfunding Website",
    description:
      "Website for crowdfunding investment on local business in indonesia. website build using Nuxt.js (Frontend), Laravel (API) + bootstrap, server using Private VPS.",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    //  if category is 'all projects' return all Projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[168px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
