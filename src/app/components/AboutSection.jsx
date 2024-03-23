"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Python</li>
        <li>Jupitor notebook</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Godot-Game Engine</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Alberta</li>
        <li>University of Moratuwa,Sri Lanka</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Python Development</li>
        <li>Trainie Full-Stack Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white flex: 1 1 auto" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/About-Image.jpeg" width={600} height={600}  className="rounded-md shadow-md shadow-yellow-500/50 "/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
          Hello ✌, I'm Ranjika Nethpriya, a dedicated full-stack developer hailing from the vibrant landscape of Sri Lanka. My current focus revolves around a captivating AI image generator project named Amie,an endeavor that reflects my passion for pushing the boundaries of technology.

          In addition to my ongoing ventures, I am on an exciting journey of exploration into Flutter and Java, expanding my skill set to embrace new challenges. My expertise extends across various technologies, including React, ThreeJS, NextJs, Android, and Angular.
          </p>
          <p className="text-base lg:text-lg">

          My commitment to knowledge sharing is evident through my active presence on multiple platforms. I showcase my projects and skills on my YouTube channel, GitHub profile, and Twitter account. From crafting websites and games to developing cutting-edge AI applications, I leverage a diverse array of languages and tools.

         As a true technophile, I find joy in exploring emerging technologies and acquiring new skills. I'm not just a developer; I'm a collaborator. My friendly and collaborative nature comes to life through my interactions on social media, where I engage with fellow developers and enthusiasts. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
