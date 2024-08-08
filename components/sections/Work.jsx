"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "../contents/ProjectCard";

// data
const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est porro, ipsam sed voluptates doloribus consequuntur iure maiores voluptatibus cupiditate! Id beatae laboriosam, hic quidem obcaecati quibusdam amet nobis expedita non.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est porro, ipsam sed voluptates doloribus consequuntur iure maiores voluptatibus cupiditate! Id beatae laboriosam, hic quidem obcaecati quibusdam amet nobis expedita non.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est porro, ipsam sed voluptates doloribus consequuntur iure maiores voluptatibus cupiditate! Id beatae laboriosam, hic quidem obcaecati quibusdam amet nobis expedita non.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:max-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-8">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/** Sliders */}
        <div>slider</div>
      </div>
    </section>
  );
};

export default Work;
