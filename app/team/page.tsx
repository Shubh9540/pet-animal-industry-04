import rawData from '@/data/templates.json';
import { PetTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { OurTeam } from '@/components/sections/OurTeam';

export const dynamic = 'force-dynamic';

export default function TeamPage() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData?.categories?.Pet?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex flex-1 flex-col bg-[var(--color-bg-main)]">
      <Breadcrumb data={commonData.teamBreadcrumb} ui={commonData.globalUI} />
      <OurTeam data={sectionData.OurTeam?.variants?.PetOurTeam2} />
    </main>
  );
}
