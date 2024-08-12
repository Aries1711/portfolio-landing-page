"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Credits = () => {
  const creditsData = [
    {
      name: "Icon Gif",
      icon: (
        <img
          src="https://raw.githubusercontent.com/aries1711/aries1711/main/3d.gif"
          width="40px"
          className="rounded-full"
        />
      ),
      description: "Using from Flaticon X Freepik cloud stored at github",
      link: "https://www.flaticon.com/free-animated-icons",
    },
    {
      name: "Fonts",
      icon: (
        <img
          src="https://raw.githubusercontent.com/aries1711/aries1711/main/checklist.gif"
          width="40px"
          className="rounded-full"
        />
      ),
      description: "Using Google Fonts",
      link: "https://fonts.google.com/",
    },
    {
      name: "Frontend",
      icon: (
        <img
          src="https://raw.githubusercontent.com/aries1711/aries1711/main/redesign.gif"
          width="40px"
          className="rounded-full"
        />
      ),
      description: "Using React.js with Next.js Framework",
      link: "https://nextjs.org/",
    },
    {
      name: "UI & Theme Framework",
      icon: (
        <img
          src="https://raw.githubusercontent.com/aries1711/aries1711/main/responsive.gif"
          width="40px"
          className="rounded-full"
        />
      ),
      description: "Using Shadcn.ui",
      link: "https://ui.shadcn.com/",
    },
    {
      name: "CSS Framework",
      icon: (
        <img
          src="https://raw.githubusercontent.com/aries1711/aries1711/main/software.gif"
          width="40px"
          className="rounded-full"
        />
      ),
      description: "Using Tailwind.css",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Animation",
      icon: (
        <img
          src="https://raw.githubusercontent.com/aries1711/aries1711/main/digital-native.gif"
          width="40px"
          className="rounded-full"
        />
      ),
      description: "Using Framer Motion",
      link: "https://www.framer.com/motion/",
    },
  ];
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Credits
        </h2>
      </div>
      {/* Grid Items */}
      <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8 mx-4">
        {creditsData.map((item, index) => {
          return (
            <Link href={item.link} target="blank" key={index}>
              <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative">
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.name}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Credits;
