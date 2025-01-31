"use client";

import { WelcomeAnimation } from "@/components/ui/WelcomeAnimation";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeams";
import { AnimatedBox } from "@/components/ui/AnimatedBox";
const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/image/first_image.png",
  },
  {
    quote:
    "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/image/first_image.png",
  }]
export default function Home() {
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
