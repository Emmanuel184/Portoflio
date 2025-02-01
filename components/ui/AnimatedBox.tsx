"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { ImageZoom } from "./ZoomableImage";
import { Undo, Redo } from "lucide-react";

type Project = {
  description: string;
  project_name: string;
  tech: string;
  src: string;
};

export const AnimatedBox = ({
  projects,
  autoplay = false,
  className,
}: {
  projects: Project[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  // Precompute a stable random rotation for each project once.
  const projectRotations = useMemo(
    () => projects.map(() => Math.floor(Math.random() * 21) - 10),
    [projects]
  );

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className={cn("max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-[100px]">
        {/* Image Column */}
        <div className="md:sticky md:top-20">
          <div className="relative h-[500px] w-full">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.src + index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: isActive(index) ? 0 : projectRotations[index],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : projectRotations[index],
                    zIndex: isActive(index) ? 999 : projects.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: isActive(index) ? 0 : projectRotations[index],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom flex items-center justify-center"
                >
                  <ImageZoom
                    src={project.src}
                    alt={project.project_name}
                    width={700}
                    height={700}
                    className="flex items-center h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Content Column */}
        <div className="flex flex-col">
          <motion.div
            key={active}
            className="flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Project Name and Tech Stack */}
            <div>
              <h3 className="text-3xl font-computer_handwritten text-foreground mb-2">
                {projects[active].project_name}
              </h3>
              <p className="text-lg font-computer_handwritten text-muted-foreground mb-6">
                {projects[active].tech}
              </p>
            </div>

            {/* Description */}
            <motion.p className="text-xl mt-[-10] text-muted-foreground max-w-none font-computer_handwritten whitespace-normal leading-relaxed">
              {projects[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-opacity-80 transition-colors"
              >
                <Undo className="h-6 w-6 text-foreground group-hover/button:rotate-12 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-opacity-50 transition-colors"
              >
                <Redo className="h-6 w-6 text-foreground group-hover/button:-rotate-12 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
