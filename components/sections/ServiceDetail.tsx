import Image from 'next/image';
import { ServiceDetailProps } from '@/types/templates.types';

export const ServiceDetail = ({ data }: ServiceDetailProps) => {
  if (!data) return null;

  const service = data.services.find((item) => item.id === data.canonicalServiceId);
  if (!service) return null;

  return (
    <section className="w-full bg-[var(--color-white)] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="inline-flex rounded-lg bg-[var(--color-surface-soft)] px-4 py-2 text-xs font-semibold text-[var(--color-accent-light)] sm:text-sm">{service.subtitle}</span>
            <h1 className="mt-7 font-heading text-5xl font-bold leading-[0.94] text-[var(--color-primary)] sm:text-6xl lg:text-7xl">
              <span className="block">{service.heading}</span>
              {service.highlightedHeading && <span className="block text-[var(--color-accent-light)]">{service.highlightedHeading}</span>}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--color-text-light)] sm:text-lg sm:leading-8">{service.description}</p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl sm:min-h-[480px]">
            <Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>

        {service.detailSections?.map((section) => (
          <article key={section.id} className="mt-12 grid grid-cols-1 items-center gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-14">
            <div className={`relative min-h-[340px] overflow-hidden rounded-2xl sm:min-h-[460px] ${section.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
              <Image src={section.image} alt={section.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className={section.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}>
              <span className="inline-flex rounded-lg bg-[var(--color-surface-soft)] px-4 py-2 text-xs font-semibold text-[var(--color-accent-light)] sm:text-sm">{section.eyebrow}</span>
              <h2 className="mt-6 font-heading text-4xl font-bold leading-[0.98] text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
                <span className="block">{section.title}</span>
                {section.highlightedTitle && <span className="block text-[var(--color-accent-light)]">{section.highlightedTitle}</span>}
              </h2>
              <div className="mt-6 space-y-5">
                {section.paragraphs.map((paragraph) => <p key={paragraph.id} className="text-base leading-7 text-[var(--color-text-light)] sm:text-lg sm:leading-8">{paragraph.text}</p>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
