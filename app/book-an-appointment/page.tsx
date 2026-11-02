import rawData from '@/data/templates.json';
import { PetTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BookAppointment } from '@/components/sections/BookAppointment';

export const dynamic = 'force-dynamic';

export default function BookAnAppointmentPage() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData.categories.Pet.sections;
  const commonData = templateData.common;

  return (
    <main className="flex flex-1 flex-col bg-[var(--color-white)]">
      <Breadcrumb data={commonData.bookAppointmentBreadcrumb} ui={commonData.globalUI} />
      <BookAppointment data={sectionData.BookAppointment?.variants?.PetBookAppointment2} />
    </main>
  );
}
