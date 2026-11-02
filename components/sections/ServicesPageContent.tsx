import Image from 'next/image';
import Link from 'next/link';
import { ServicesPageContentProps } from '@/types/templates.types';

export const ServicesPageContent = ({ data }: ServicesPageContentProps) => {
  if (!data?.cards.length) return null;

  return (
    <section className="w-full bg-[var(--color-white)] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.7fr] lg:items-start lg:gap-12">
        <div className="lg:sticky lg:top-28">
          <span className="inline-flex rounded-lg bg-[var(--color-surface-soft)] px-4 py-2 text-xs font-semibold text-[var(--color-primary)] sm:text-sm">{data.eyebrow}</span>
          <h2 className="mt-6 font-heading text-5xl font-bold leading-[0.92] text-[var(--color-primary)] sm:text-6xl lg:text-7xl">
            <span className="block">{data.title}</span>
            <span className="block text-[var(--color-accent-light)]">{data.highlightedTitle}</span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-[var(--color-text-light)] sm:text-lg sm:leading-8">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {data.cards.map((card) => (
            <Link key={card.id} href={card.url} className="group relative min-h-[280px] overflow-hidden rounded-2xl bg-[var(--color-service-card)] sm:min-h-[300px]">
              <Image src={card.image} alt={card.imageAlt} fill sizes="(min-width: 768px) 35vw, 100vw" className="object-cover object-right transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-service-overlay)_0%,var(--color-service-overlay)_48%,transparent_78%)]" />
              <div className="relative z-10 flex min-h-[280px] w-[58%] flex-col p-6 sm:min-h-[300px] sm:p-7">
                <div className="flex items-center gap-4 text-xl font-semibold text-[var(--color-accent-light)]">
                  <span>{card.number}</span><span aria-hidden="true" className="h-px w-16 bg-[var(--color-accent-soft)]" />
                </div>
                <h3 className="mt-7 font-heading text-2xl font-bold leading-[1.02] text-[var(--color-primary)] sm:text-3xl">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[var(--color-text-light)] sm:text-base">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
