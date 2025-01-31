"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ImageZoom } from "./ZoomableImage";

type Project = {
  description: string;
  project_name: string;
  tech: string;
  src: string;
};

export const AnimatedBox = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Project[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  
  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className={cn("max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-16">
        {/* Image Column */}
        <div className="md:sticky md:top-20">
          <div className="relative h-[500px] w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom flex items-center justify-center"
                >
                  <ImageZoom
                    src={testimonial.src}
                    alt={testimonial.project_name}
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
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            {/* Project Name and Tech Stack */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                {testimonials[active].project_name}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {testimonials[active].tech}
              </p>
            </div>

            {/* Description */}
            <motion.p className="text-xl mt-[-10] text-muted-foreground max-w-none whitespace-normal leading-relaxed">
              {testimonials[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
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

            {/* Buttons positioned directly below description */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-primary transition-colors"
              >
                <IconArrowLeft className="h-6 w-6 text-foreground group-hover/button:rotate-12 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-primary transition-colors"
              >
                <IconArrowRight className="h-6 w-6 text-foreground group-hover/button:-rotate-12 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};