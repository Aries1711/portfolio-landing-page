import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";
import { getConfigPath } from "@/constant/ConfigPath";

const config = getConfigPath();
const imagePath = config.imagePath;

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DevImg from "../contents/DevImg";
import Badge from "../contents/Badge";
import Socials from "../contents/Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex xl:hidden justify-center mb-16">
          {/*image mobile*/}
          <div className="xl:hidden relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[250px] h-[250px] bg-cover bg-no-repeat absolute -top-1 -right-2"></div>
            <Badge
              containerStyle="absolute top-[-10%] max-w-[150px] max-h-[40px]"
              typeView="mobile"
              icon={<RiBriefcase4Fill />}
              endCountNum={8}
              badgeText="Years of experience"
            />
            <Badge
              containerStyle="absolute top-[50%] right-[0%] max-w-[120px] max-h-[40px]"
              typeView="mobile"
              icon={<RiTeamFill />}
              endCountNum={63}
              badgeText="Happy Client"
            />
            <Badge
              containerStyle="absolute top-[80%] max-w-[150px] max-h-[40px]"
              typeView="mobile"
              icon={<RiTodoFill />}
              endCountNum={117}
              badgeText="Finished Projects"
            />
            <DevImg
              containerStyles="bg-hero_shape dark:bg-hero_shape_dark w-[255px] h-[231px] bg-cover bg-no-repeat relative bg-bottom"
              imgSrc={`${imagePath}/hero/developer.png`}
            />
          </div>
        </div>
        <div className="flex justify-between gap-x-8">
          {/*text*/}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="flex gap-x-4 text-sm uppercase font-semibold mb-4 mx-auto md:mx-auto xl:mx-0 text-primary dark:text-white tracking-[4px]">
              Fullstack Developer
              <img
                src="https://raw.githubusercontent.com/aries1711/aries1711/main/redesign.gif"
                width="40px"
                className="rounded-full"
              />
            </div>
            <h1 className="hidden md:flex h1 mb-4">Hi , I'm Arisqi Setyawan</h1>
            <h2 className="flex md:hidden h2 mb-4 mx-auto">
              Hi, I'm Arisqi Setyawan
            </h2>
            <p className="subtitle max-w[490px] mx-auto xl:mx-0">
              {/* With 8 years of experience, I’m not just focused on delivering
              solutions but on pioneering innovative approaches that drive
              long-term success. I'm eager to contribute to exciting and
              impactful projects. */}
              Comprehensive Solutions for Modern Development: Expertly crafting
              user interfaces, building robust back-end systems, and delivering
              integrated fullstack solutions to drive your project’s success.
            </p>
            {/*button*/}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <a
                href={`${imagePath}/cv-ArisqiSetyawan.pdf`}
                download={`${imagePath}/cv-ArisqiSetyawan.pdf`}
              >
                <Button variant="secondary" className="gap-x-2 ">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
            {/*socials*/}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              IconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/*image web*/}
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <Badge
              containerStyle="absolute top-[0%]"
              icon={<RiBriefcase4Fill />}
              endCountNum={8}
              badgeText="Years of experience"
            />
            <Badge
              containerStyle="absolute top-[50%] right-[-10%]"
              icon={<RiTeamFill />}
              endCountNum={63}
              badgeText="Happy Client"
            />
            <Badge
              containerStyle="absolute top-[80%]"
              icon={<RiTodoFill />}
              endCountNum={117}
              badgeText="Finished Projects"
            />
            <DevImg
              containerStyles="bg-hero_shape dark:bg-hero_shape_dark w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc={`${imagePath}/hero/developer.png`}
            />
          </div>
        </div>
        {/*image*/}
        <div className="hidden xl:flex  absolute left-2/4 bottom-44 xl:bottom-4 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
