import { PetTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { NotFoundSection } from '@/components/sections/NotFoundSection';

export default function NotFoundPage() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData?.categories?.Pet?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex flex-1 flex-col bg-[var(--color-white)]">
      <NotFoundSection data={commonData.notFound} />
    </main>
  );
}
