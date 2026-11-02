import { PetTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServicesPageContent } from '@/components/sections/ServicesPageContent';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData?.categories?.Pet?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex flex-1 flex-col bg-[var(--color-white)]">
      <Breadcrumb data={commonData.servicesBreadcrumb} ui={commonData.globalUI} />
      <ServicesPageContent data={sectionData.ServicesPage?.variants?.PetServicesPage2} />
    </main>
  );
}
