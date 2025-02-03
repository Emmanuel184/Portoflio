"use client";

import { WelcomeAnimation } from "@/components/ui/WelcomeAnimation";
import { AnimatedBox } from "@/components/ui/AnimatedBox";
import { useEffect, useState } from "react";
import { HandWrittenTitle } from "@/components/ui/TitleWithArrow";

const projects = [
  {
    project_name: "Emmanuel Luis",
    tech: "Computer Science Graduate",
    description:
      "I'm a software engineer passionate about building efficient, scalable solutions. I have experience in automation, full-stack development, and cloud services, with projects ranging from streamlining on-call processes at AWS to developing web applications. I also enjoy trying out new things especially food :))",
    src: "https://image-hosting-personal.s3.us-east-2.amazonaws.com/MECANVA.png",
  },
  {
    project_name: "Budget App Website",
    tech: "React, Typescript",
    description:
      "I created a landing page for a budget app website using React and typescript. I managed to fine tune some settings to make it extremly smooth!",
    src: "https://image-hosting-personal.s3.us-east-2.amazonaws.com/TypescriptBudgetPage.png",
  },
  {
    project_name: "AWS Oncall Bot",
    tech: "Python, AWS SDK",
    description:
      "During my internship at AWS I created an oncall bot meant to help the engineering team during their on-call rotations to have an easier time handling incoming tickets",
    src: "https://image-hosting-personal.s3.us-east-2.amazonaws.com/AWSInternship.png",
  },
  {
    project_name: "Myngly Web App",
    tech: "React, Agile, Node",
    description:
      "For my senior project we were tasked with creating a web app for a company to be able to host ads on their mobile app. I was the team lead and one of the primary developers. ",
    src: "https://image-hosting-personal.s3.us-east-2.amazonaws.com/MynglyHostingWebpage.png",
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 flex flex-col overflow-visible">
        <div className="flex-1 flex items-center justify-center gap-x-[-20]">
          <div className="w-[50%] relative">
          <div className="z-50 translate-x-[-26%] translate-y-[30%]">
    <HandWrittenTitle title="Click me to make me bigger!" />
  </div>
            
            <AnimatedBox projects={projects} />
          </div>
          
          <div className="w-[42%] -ml-16 z-20">
            <WelcomeAnimation />
          </div>
        </div>
      </div>
    </main>
  );
}