import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { Benefits } from "@/components/home/Benefits";
import { FeaturedResources } from "@/components/home/FeaturedResources";
import { BrandSection } from "@/components/home/BrandSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Benefits />
      <FeaturedResources />
      <BrandSection />
    </>
  );
}
