'use client';

import { VerticalCutReveal } from "@/components/ui/VerticalCutReveal"

export function WelcomeAnimation() {
  return (
    <div className="h-full xs:text-xl text-xl sm:text-3xl md:text-4xl gap-5 lg:text-4xl xl:text-4xl flex flex-col items-start justify-center font-overusedGrotesk p-10 md:p-16 lg:p-24 text-[#0A3409] tracking-wide uppercase">
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.025}
        staggerFrom="first"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
        }}
      >
        {`Hello 👋`}
      </VerticalCutReveal>
      
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.005}
        staggerFrom="last"
        reverse={true}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
          delay: 0.5,
        }}
      >
        {`it's a pleasure ✨ to connect with you :)`}
      </VerticalCutReveal>
      
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.015}
        staggerFrom="center"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
          delay: 1.1,
        }}
      >
        {`Thanks 😊 for visiting my website!`}
      </VerticalCutReveal>
    </div>
  )
}