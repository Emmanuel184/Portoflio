'use client';

import { useEffect, useState } from "react";
import { VerticalCutReveal } from "@/components/ui/VerticalCutReveal";

export const WelcomeAnimation = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2);
    }, 4600);
    return () => clearTimeout(timer);
  }, []);

  const lineOneText = step === 1 ? "Hello👋" : "To left are my projects!";
  const lineTwoText = step === 1 
    ? "it's a pleasure ✨ to connect with you :)" 
    : "Feel free to go through them :)";
  const lineThreeText = step === 1 
    ? "Thanks 😊 for visiting my website!" 
    : "Have a great day!";

  const staggerDurationLine1 = step === 1 ? 0.025 : 0.04;
  const staggerDurationLine2 = step === 1 ? 0.005 : 0.02;
  const staggerDurationLine3 = step === 1 ? 0.015 : 0.03;
  
  const delayLine1 = step === 1 ? 1.5 : 0.4;
  const delayLine2 = step === 1 ? 2.4 : 1.2;
  const delayLine3 = step === 1 ? 3.2: 2.6;

  // const staggerFrom = 
  
  return (
    <div className="w-screen max-w-[1400px] h-full min-h-[300px] xs:text-base text-xs sm:text-xl md:text-xl lg:text-2xl xl:text-3xl gap-4 flex flex-col items-start justify-center font-overusedGrotesk p-10 md:p-16 lg:p-24 text-[#0A3409] tracking-wide">
      <VerticalCutReveal
        key={`line1-${step}`}
        splitBy="characters"
        staggerDuration={staggerDurationLine1}
        staggerFrom="first"
        containerClassName="w-full"
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 21,
          delay: delayLine1
        }}
      >
        {lineOneText}
      </VerticalCutReveal>

      <VerticalCutReveal
        key={`line2-${step}`}
        splitBy="characters"
        staggerDuration={staggerDurationLine2}
        staggerFrom="last"
        reverse={true}
        containerClassName="w-full max-w-[500px]"
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 21,
          delay: delayLine2
        }}
      >
        {lineTwoText}
      </VerticalCutReveal>

      <VerticalCutReveal
        key={`line3-${step}`}
        splitBy="characters"
        staggerDuration={staggerDurationLine3}
        staggerFrom="center"
        containerClassName="w-full max-w-[500px]"
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 21,
          delay: delayLine3
        }}
      >
        {lineThreeText}
      </VerticalCutReveal>
    </div>
  );
};