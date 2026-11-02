import { PetTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { OurService } from '@/components/sections/OurService';
import { Testimonial } from '@/components/sections/Testimonial';
import { Blogs } from '@/components/sections/Blogs';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData?.categories?.Pet?.sections;

  if (!sectionData) return null;

  return (
    <main className="flex flex-1 flex-col bg-[var(--color-bg-main)]">
      <HeroSection data={sectionData.Hero?.variants?.PetHero2} />
      <OurService data={sectionData.OurService?.variants?.PetOurService2} />
      <AboutUs data={sectionData.AboutUs?.variants?.PetAboutUs2} />
      <Testimonial data={sectionData.Testimonials?.variants?.PetTestimonials2} />
      <Blogs data={sectionData.Blogs?.variants?.PetBlogs2} />
    </main>
  );
}
