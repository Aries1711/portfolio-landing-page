"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/contents/ProjectCard";
import { getConfigPath } from "@/constant/ConfigPath";

const config = getConfigPath();
const imagePath = config.imagePath;

// data
const projectData = [
  {
    image: `${imagePath}/work/work-6.png`,
    category: "mobile apps",
    name: "GGL : Smart Fitness & Nutrition",
    description:
      "Mobile apps rich feature, app hybrid using technology Flutter, available on Playstore and Appstore. Third party or technology use : Firebase, In-app Purchase, HealthKit, Sentry, and Etc.",
    link: "https://ggl.life/",
    github: "/",
  },
  {
    image: `${imagePath}/work/work-1.png`,
    category: "fullstack",
    name: "KitaCare Saas",
    description:
      "Website for service assisting families in Indonesia, website build with wordpress, backend API using Laravel (For mobile apps), Server using Amazon Web Service.",
    link: "https://kitacareindonesia.com/",
    github: "/",
  },
  {
    image: `${imagePath}/work/work-7.png`,
    category: "mobile apps",
    name: "KitaCare : Families Assisting (Pregnancy and Parenting)",
    description:
      "Mobile apps rich feature, app hybrid using technology Flutter, available on Playstore and Appstore. Third party or technology use : Firebase, OpenAI, and Etc.",
    link: "https://kitacareindonesia.com/",
    github: "/",
  },
  {
    image: `${imagePath}/work/work-2.png`,
    category: "fullstack",
    name: "Aksiberbagi Website",
    description:
      "Website for charity donation and sharing for caring, website build using Laravel + bootstrap + vue.js, backend API using Lumen (For mobile apps), server using VPS Contabo.",
    link: "https://aksiberbagi.com/",
    github: "/",
  },
  {
    image: `${imagePath}/work/work-8.png`,
    category: "mobile apps",
    name: "Aksiberbagi : Charity & Donation",
    description:
      "Mobile apps rich feature for donation, app hybrid using technology Flutter, available on Playstore and Appstore. Third party or technology use : Firebase, Various Payment Gateway, and Etc.",
    link: "https://aksiberbagi.com/",
    github: "/",
  },
  {
    image: `${imagePath}/work/work-3.png`,
    category: "fullstack",
    name: "Beramal Bersama Website",
    description:
      "Website for charity donation and sharing for caring, website build using Laravel + bootstrap + vue.js, backend API using Lumen (For mobile apps), server using VPS Contabo.",
    link: "https://beramalbersama.com/",
    github: "/",
  },
  {
    image: `${imagePath}/work/work-4.png`,
    category: "fullstack",
    name: "RSRD Korlantas Website",
    description:
      "Website for news, research, and development police government in indonesia, website build using Laravel + bootstrap, server using Private VPS.",
    link: "https://rsrd.korlantas-polri.id/",
    github: "/",
  },
  {
    image: `${imagePath}/work/work-5.png`,
    category: "fullstack",
    name: "Seedfund fintech Crowdfunding Website",
    description:
      "Website for crowdfunding investment on local business in indonesia. website build using Nuxt.js (Frontend), Laravel (API).",
    link: "https://seedfund.id/id/about",
    github: "/",
  },
  {
    image: `${imagePath}/work/work-9.png`,
    category: "open source",
    name: "Customization Tinode SDK",
    description:
      "Customize Tinode SDK for Flutter to met product needs on GGL Company. Modification task is to fix bugs, add feature, and etc.",
    link: "https://tinode.co/",
    github: "https://github.com/Aries1711/tinode-chat-sdk",
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
