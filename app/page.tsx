import { WelcomeAnimation } from "@/components/ui/WelcomeAnimation";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeams";

export default function Home() {
  return (
    <main>
      
      {/* Wrap your content inside the BackgroundBeamsWithCollision */}
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0 bg-[#E6F4E6]">
        <div className="relative z-10 w-full flex justify-end pr-16">
          <WelcomeAnimation />
        </div>
      </BackgroundBeamsWithCollision>
    </main>
  );
}
