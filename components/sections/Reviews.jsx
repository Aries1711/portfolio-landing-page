"use client";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Frendhi Saido Danaro",
    job: "Head Director of Engineering on GGL",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est porro, ipsam sed voluptates doloribus.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Rezki Pratama",
    job: "Mobile Developer Engineer",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est porro, ipsam sed voluptates doloribus.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Mutia Aisa Rahmi",
    job: "Product Manager",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est porro, ipsam sed voluptates doloribus.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Rezki Pratama",
    job: "Mobile Developer Engineer",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est porro, ipsam sed voluptates doloribus.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Mutia Aisa Rahmi",
    job: "Product Manager",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est porro, ipsam sed voluptates doloribus.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">
          Reviews or Recommendation
        </h2>
        {/**Sliders */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-blue-50 dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    {/**Image */}
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/**Image */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
