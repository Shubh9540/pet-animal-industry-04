import rawData from '@/data/templates.json';
import { PetTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Gallery } from '@/components/sections/Gallery';

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData?.categories?.Pet?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex flex-1 flex-col bg-[var(--color-white)]">
      <Breadcrumb data={commonData.galleryBreadcrumb} ui={commonData.globalUI} />
      <Gallery data={sectionData.Gallery?.variants?.PetGallery2} />
    </main>
  );
}
