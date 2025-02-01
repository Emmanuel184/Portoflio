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
      "I'm a software engineer passionate about building efficient, scalable solutions. I have experience in automation, full-stack development, and cloud services, with projects ranging from streamlining on-call processes at AWS to developing web applications. I enjoy solving problems and optimizing workflows through technology.",
    src: "/image/first_image.png",
  },
  {
    project_name: "vscode",
    tech: "Product Manager at TechFlow",
    description:
      "I'm a software engineer passionate about building efficient, scalable solutions. I have experience in automation, full-stack development, and cloud services, with projects ranging from streamlining on-call processes at AWS to developing web applications. I enjoy solving problems and optimizing workflows through technology. ",
    src: "/image/second_image.png",
  },
  {
    project_name: "vscode shorter",
    tech: "Product Manager at TechFlow",
    description:
      "I'm a software engineer passionate about building efficient, scalable solutions. I have experience in automation, full-stack development, and cloud services, with projects ranging from streamlining on-call processes at AWS to developing web applications. I enjoy solving problems and optimizing workflows through technology. ",
    src: "/image/third_image.png",
  },
  {
    project_name: "email",
    tech: "Product Manager at TechFlow",
    description:
      "I'm a software engineer passionate about building efficient, scalable solutions. I have experience in automation, full-stack development, and cloud services, with projects ranging from streamlining on-call processes at AWS to developing web applications. I enjoy solving problems and optimizing workflows through technology. ",
    src: "/image/fourth_image.png",
  },
  {
    project_name: "notion",
    tech: "Product Manager at TechFlow",
    description:
      "I'm a software engineer passionate about building efficient, scalable solutions. I have experience in automation, full-stack development, and cloud services, with projects ranging from streamlining on-call processes at AWS to developing web applications. I enjoy solving problems and optimizing workflows through technology. ",
    src: "/image/fifth_image.png",
  },
  {
    project_name: "meteor",
    tech: "Product Manager at TechFlow",
    description:
      "I'm a software engineer passionate about building efficient, scalable solutions. I have experience in automation, full-stack development, and cloud services, with projects ranging from streamlining on-call processes at AWS to developing web applications. I enjoy solving problems and optimizing workflows through technology. ",
    src: "/image/sixth_image.png",
  },
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
      <div className="absolute inset-0 flex flex-col">
        {/* Title section with higher z-index */}
        <div className="absolute left-[290px] bottom-[700px] z-50">
          <HandWrittenTitle title="Click me to make me bigger!" />
        </div>
        {/* Content section with lower z-index */}
        <div className="flex-1 flex items-center justify-center gap-x-[-20] z-20">
          <div className="w-[50%]">
            <AnimatedBox projects={projects} />
          </div>
          <div className="w-[42%] -ml-16">
            <WelcomeAnimation />
          </div>
        </div>
      </div>
    </main>
  );
}