import rawData from '@/data/templates.json';
import { PetTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetail } from '@/components/sections/ServiceDetail';

export const dynamic = 'force-dynamic';

export default function ServiceDetailsPage() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData?.categories?.Pet?.sections;
  const commonData = templateData?.common;
  const detailData = sectionData?.ServiceDetail?.variants?.PetServiceDetail2;
  const service = detailData?.services.find((item) => item.id === detailData.canonicalServiceId);

  if (!sectionData || !commonData || !detailData || !service) return null;

  return (
    <main className="flex flex-1 flex-col bg-[var(--color-white)]">
      <Breadcrumb data={service.breadcrumb} ui={commonData.globalUI} />
      <ServiceDetail data={detailData} />
    </main>
  );
}
