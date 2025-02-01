"use client";

import { motion } from "framer-motion";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

export const HandWrittenTitle =({
  title = "Nothing",
  subtitle = false,
}: HandWrittenTitleProps) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Title/Subtitle */}
        <div className="z-10">
          <motion.h1
            className="m-0 text-4xl md:text-6xl text-black font-handwritten dark:text-white tracking-tighter flex items-center whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="text-xl text-black/80 dark:text-white/80 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Animated Stroke (unchanged) */}
        <div className="w-48 h-48">
  <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 40 40"
    initial="hidden"
    animate="visible"
  >
    <motion.path
      d="M 1.2 -0.5 C -0.3 7.6 4.9 9.3 4.9 9.3 C 4.9 9.3 14.6 14.2 9.1 23.7 C 8.2 26.3 5.8 28.9 6.9 22.1 C 7.4 20.3 5.2 20.9 4.6 24.9 C 4.5 30.5 6.5 30.2 9.9 27.2 C 9.895 27.174 12.192 25.319 12.3 23.3"
      fill="none"
      stroke="currentColor"
      strokeWidth=".75"
      strokeLinecap="round"
      variants={draw}
      transform="translate(14, 0)"
      className="text-black dark:text-white"
    />
  </motion.svg>

        </div>
      </div>
    </div>
  );
}
