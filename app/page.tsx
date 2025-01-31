"use client";

import { WelcomeAnimation } from "@/components/ui/WelcomeAnimation";
import { AnimatedBox } from "@/components/ui/AnimatedBox";
import { useEffect, useState } from "react";

const testimonials = [
  {
    project_name: "Emmanuel Luis",
    tech: "Computer Science Graduate",
    description:
      "I'm a software engineer passionate about building efficient, scalable solutions. I have experience in automation, full-stack development, and cloud services, with projects ranging from streamlining on-call processes at AWS to developing web applications. I enjoy solving problems and optimizing workflows through technology.",
    src: "/image/first_image.png",
  },
  {
    project_name: "Sarah Chen",
    tech: "Product Manager at TechFlow",
    description:
      "I'm a software engineer passionate about building efficient, scalable solutions. I have experience in automation, full-stack development, and cloud services, with projects ranging from streamlining on-call processes at AWS to developing web applications. I enjoy solving problems and optimizing workflows through technology. ",
    src: "/image/second_image.png",
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
    <main>
      <div className="h-screen flex items-center justify-center px-20">
        <div className="w-1/2">
          <AnimatedBox testimonials={testimonials} />
        </div>
        <div className="w-1/2">
          <WelcomeAnimation />
        </div>
      </div>
    </main>
  );
}