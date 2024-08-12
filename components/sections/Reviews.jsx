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
      "I had the pleasure of working with Arisqi, who reported to me as a Flutter Engineer. He joined our team at a crucial time when we needed to rebuild our mobile app using Flutter. Arisqi successfully delivered the new Flutter-based mobile app, which turned out to be a significant upgrade from our previous version. The app is now much faster and more stable, addressing many of the issues we faced before. Furthermore, Arisqi's expertise has enabled us to deliver new features at a much faster pace. His dedication and technical skills have been invaluable to our team.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Rezki Pratama",
    job: "Mobile Developer Engineer",
    review:
      "Arisqi is the wonderful person to work with. He has a good knowledge about mobile development and amazing professional",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Mutia Aisa Rahmi",
    job: "Product Manager",
    review:
      "Arisqi is a flutter developer who successfully created a well-structured and easily extensible application foundation. He has excellent communication skills, making it easy and pleasant to collaborate with him.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
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
          className="h-[350px] sm:h-[400px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-blue-50 dark:bg-secondary/40 p-8 min-h-[300px] max-h-[300px] sm:max-h-[350px] md:max-h-[350px] xl:max-h-[350px] ">
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
                  <div className="scrollbar-custom h-28 sm:h-24 md:h-40 xl:h-48 overflow-y-scroll pr-1">
                    <CardDescription className="text-base text-muted-foreground scroll">
                      {person.review}
                    </CardDescription>
                  </div>
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
