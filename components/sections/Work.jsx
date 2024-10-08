"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "../contents/ProjectCard";

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
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-8">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/** Sliders */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[540px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 5).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
