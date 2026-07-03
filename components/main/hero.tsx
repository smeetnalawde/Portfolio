import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div id="about-me" className="relative flex flex-col min-h-screen w-full overflow-anchor-none">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-400px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
