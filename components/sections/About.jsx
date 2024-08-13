import DevImg from "../contents/DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";

import { getConfigPath } from "@/constant/ConfigPath";

const config = getConfigPath();
const imagePath = config.imagePath;

import {
  User2,
  MailIcon,
  PhoneCall,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Arisqi Setyawan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62 8383 5551 491",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ariesfreey17@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor Degree Information System (Computer Science)",
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "University of Jember",
        qualification: "Bachelor of Science",
        years: "2016 - 2020",
      },
    ],
  },
  {
    title: "Experiences",
    data: [
      {
        company: "GGL (Smart Fitness & Nutrition)",
        position: "Frontend Lead",
        years: "2023 - 2024",
      },
      {
        company: "GGL (Smart Fitness & Nutrition)",
        position: "Senior Flutter Developer",
        years: "2022 - 2023",
      },
      {
        company: "Kitacare (Assisting Families)",
        position: "Fullstack Developer",
        years: "2022 - 2022",
      },
      {
        company: "KodeKoding (Software house)",
        position: "Fullstack Developer",
        years: "2021 - 2022",
      },
      {
        company: "SeedFund Securities Crowdfunding",
        position: "IT Supervisor",
        years: "2020 - 2022",
      },
      {
        company: "Aksiberbagi Foundation",
        position: "Fullstack Developer",
        years: "2019 - 2023",
      },
    ],
  },
];

const SkillData = [
  {
    title: "Skills",
    data: [
      {
        name: "Javascrip & PHP",
      },
      {
        name: "Front-end Development (Mobile And Website)",
      },
      {
        name: "Back-end Development (All Services)",
      },
      {
        name: "DevOps & CI/CD",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imgPath: `${imagePath}/about/vscode.svg`,
      },
      {
        imgPath: `${imagePath}/about/android-studio.svg`,
      },
      {
        imgPath: `${imagePath}/about/xcode.svg`,
      },
      {
        imgPath: `${imagePath}/about/github.svg`,
      },
      {
        imgPath: `${imagePath}/about/figma.svg`,
      },
      {
        imgPath: `${imagePath}/about/inkscape.svg`,
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/*Image*/}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-hero_shape dark:bg-hero_shape_dark w-[510px] h-[462px] bg-no-repeat relative"
              imgSrc={`${imagePath}/hero/developer2.png`}
            />
          </div>

          {/*Tabs*/}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              {/*Tabs Header*/}
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              {/*Tabs Content*/}
              <div className="text-lg mt-12 xl:mt-8">
                {/*Tabs Content Personal*/}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 8 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive mobile and website
                      application with cutting-edge technology, delivering
                      dynamic and engaging user experience.
                    </p>

                    {/*Icons*/}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/*Language Skill*/}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Indonesian</div>
                    </div>
                  </div>
                </TabsContent>
                {/*Tabs Content Qualification*/}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/*Experience & education wrapper*/}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <div className="capitalize font-medium">
                            {getData(qualificationData, "Experiences").title}
                          </div>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experiences").data.map(
                            (item, index) => {
                              const { company, position, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground">
                                      {position}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <div className="capitalize font-medium">
                            {getData(qualificationData, "Education").title}
                          </div>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/*Tabs Content Skill*/}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Touch Everyday</h3>
                    {/* Skills*/}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/*Skill List*/}
                      <div>
                        {getData(SkillData, "Skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools*/}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Tools list*/}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(SkillData, "Tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
