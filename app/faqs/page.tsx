import rawData from '@/data/templates.json';
import { PetTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Faq } from '@/components/sections/Faq';

export const dynamic = 'force-dynamic';

export default function FaqsPage() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData?.categories?.Pet?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex flex-1 flex-col bg-[var(--color-white)]">
      <Breadcrumb data={commonData.faqsBreadcrumb} ui={commonData.globalUI} />
      <Faq data={sectionData.Faq?.variants?.PetFaq2} />
    </main>
  );
}
