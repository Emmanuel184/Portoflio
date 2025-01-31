import { WelcomeAnimation } from "@/components/ui/WelcomeAnimation";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeams";
import { AnimatedBox } from "@/components/ui/AnimatedBox";
const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/Screenshot 2025-01-30 at 11.06.43 PM.png",
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "",
  }]
export default function Home() {
  return (
    <main>
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0 bg-[#FAF9F6]">
        <div className="relative z-10 w-full flex justify-between items-center px-20">
          <div className="w-1/2">
            <AnimatedBox testimonials={testimonials} />
          </div>
          <div className="w-1/2">
            <WelcomeAnimation />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </main>
  );
}
