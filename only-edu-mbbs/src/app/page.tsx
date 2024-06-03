import Hero from "@/modules/hero";
import Image from "next/image";
import ExperienceRail from "@/modules/experience-rail/index";
import TopUniRail from "@/modules/top-uni-rail";
import OurServices from "@/modules/services";
import WhyUs from "@/modules/why-us";
import Footer from "@/modules/footer/index";
import NewsLetter from "@/modules/newsletter";





export default function Home() {
  return (
    <div className="pt-28 w-full overflow-hidden">
      <div className="relative">
        <div className="rounded-t-3xl ">
          <Hero />
          <ExperienceRail />
          <TopUniRail />
        </div>
        <OurServices />
        <WhyUs />
        <NewsLetter />
      </div>
    </div>
  );
}
