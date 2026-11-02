import { PetTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonial } from '@/components/sections/Testimonial';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData?.categories?.Pet?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex flex-1 flex-col bg-[var(--color-bg-main)]">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.PetAboutUs2} showButton={false} />
      <WhyChooseUs data={sectionData.whyChooseUs?.variants?.PetAboutWhyChooseUs2} />
      <Testimonial data={sectionData.Testimonials?.variants?.PetTestimonials2} />
    </main>
  );
}
