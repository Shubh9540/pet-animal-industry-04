import React from 'react';
import { PetTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { OurService } from '@/components/sections/OurService';
import { Testimonial } from '@/components/sections/Testimonial';
import { Blogs } from '@/components/sections/Blogs';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData?.categories?.Pet?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-bg-main)]">
      <Header data={sectionData.Header?.variants?.PetHeader2} />
      <HeroSection data={sectionData.Hero?.variants?.PetHero2} />
      <OurService data={sectionData.OurService?.variants?.PetOurService2} />
      <AboutUs data={sectionData.AboutUs?.variants?.PetAboutUs2} />
      <Testimonial data={sectionData.Testimonials?.variants?.PetTestimonials2} />
      <Blogs data={sectionData.Blogs?.variants?.PetBlogs2} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
