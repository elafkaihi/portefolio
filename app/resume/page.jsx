"use client";

import { FaAws, FaJenkins, FaDocker, FaPython, FaNetworkWired, FaLinux, FaGit } from "react-icons/fa";
import { SiTerraform, SiKubernetes, SiAnsible, SiMysql, SiMongodb } from "react-icons/si";
import { BiInfinite } from "react-icons/bi";

// about data
const about = {
  title: "About me",
  description:
    "I'm Mehdi, a dedicated junior Cloud DevOps Engineer with a strong drive to optimize and automate cloud infrastructure and deployment processes. With practical experience gained through internships at Nokia and Société Générale, I've honed my skills in software development, optimization, and automation. My enthusiasm for cloud technologies, combined with my background in software engineering, propels me to contribute effectively to the design, development, and maintenance of scalable, reliable cloud solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "El Mehdi LAFKAIHI",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+212) 665 029 452",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Moroccan",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French, Arabic",
    },
    {
      fieldName: "Email",
      fieldValue: "lafkaihi.mehdi@gmail.com",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      company: "NOKIA",
      position: "Software Development Engineer Intern",
      duration: "2023 - 2024",
    },
    {
      company: "The French National Swimmers Federation",
      position: "Cloud DevOps Engineer Intern",
      duration: "winter 2023",
    },
    {
      company: "ONCF - Railways National Office ",
      position: "Optimization and Automation Engineer Intern",
      duration: "2022 - 2023",
    },
    {
      company: "Societe Generale",
      position: "Software Development Engineer Intern",
      duration: "2022 - 2023",
    },
    {
      company: "Junior Entreprise Centrale Casablanca",
      position: "Technical Team Member",
      duration: "Winter 2022",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      institution: "Ecole Centrale Casablanca",
      degree: "Master Degree in Data Engineering & Machine Learning",
      duration: "2021-2025",
      modules: ["Cloud Computing", "Database Management Systems", "DataOps Methodologies and Practices", "Mathematics", "Project Management", "Research skills"]
    },
    {
      institution: "Ecole Centrale de Lyon",
      degree: "International Exchange in Software engineering",
      duration: "2023",
      modules: ["Software Engineering", "Algorithm and Reasoning", "Networking", "Entrepreneurship and Innovation"]
    },
    {
      institution: "Preparatory Classes",
      degree: "Mathematics and computer science",
      duration: "2019 - 2021",
      modules: ["Advanced Mathematics", "Algorithms", "Computer Science"]
    },
  ],
};

// certifications data
const certifications = {
  title: "Certifications & Awards",
  description: "Here are some of the certifications and awards I have earned.",
  items: [
    {
      name: "AWS Certified SysOps Administrator Associate",
      issuer: "Amazon Web Services",
      badge: "/assets/badges/aws-sysops-admin.png"
    },
    {
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      badge: "/assets/badges/aws-developer-associate.png"
    },
    {
      name: "AWS Certified Architect Associate",
      issuer: "Amazon Web Services",
      badge: "/assets/badges/aws-architect-associate.png"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      badge: "/assets/badges/aws-cloud-practitioner.png"
    },
    {
      name: "Virtualisation with KVM and Qemu",
      issuer: "Nokia",
      badge: "/assets/badges/nokia-kvm-qemu.png"
    },
    {
      name: "Containerization with Docker",
      issuer: "Nokia",
      badge: "/assets/badges/nokia-docker.png"
    },
    {
      name: "DevOps: Advanced level with Projects",
      issuer: "Udemy",
      badge: "/assets/badges/udemy-devops.png"
    },
    {
      name: "SonarQube SonarCloud - Continuous Inspection and Code Review",
      issuer: "Udemy",
      badge: "/assets/badges/udemy-sonarqube.png"
    },
    {
      name: "Google Project Management",
      issuer: "Google",
      badge: "/assets/badges/google-project-management.png"
    }
  ]
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  skillList: [
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <FaJenkins />,
      name: "Jenkins",
    },
    {
      icon: <BiInfinite />,
      name: "CI/CD",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <SiTerraform />,
      name: "Terraform",
    },
    {
      icon: <SiAnsible />,
      name: "Ansible",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaNetworkWired />,
      name: "Networking",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <FaLinux />,
      name: "Linux/Unix Administration",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications & Awards</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl w-full mb-2">{item.position}</h3>
                        <div className="flex items-center gap-3 mb-4 w-full">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* certifications */}
            <TabsContent value="certifications" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{certifications.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {certifications.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 xl:gap-[30px]">
                  {certifications.items.map((item, index) => (
                    <li key={index} className="flex flex-col items-center bg-[#232329] p-4 rounded-xl">
                      <img src={item.badge} alt={`${item.name} badge`} className="w-24 h-24 mb-4" />
                      <div className="text-lg font-semibold">{item.name}</div>
                      <div className="text-white/60">{item.issuer}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl w-full mb-2">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 mb-4 w-full">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                          <div className="text-white/80 w-full">
                            <strong>Modules:</strong> {item.modules.join(", ")}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
