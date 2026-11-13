import Image from 'next/image';
import { HeroSectionProps } from '@/types/templates.types';

export const HeroSection = ({ data }: HeroSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative min-h-[520px] w-full overflow-hidden bg-[var(--color-hero-bg)] sm:min-h-[600px] lg:min-h-[650px]">
      <Image src={data.image} alt={data.imageAlt} fill priority sizes="100vw" className="object-cover object-[66%_center] sm:object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-hero-overlay)_0%,var(--color-hero-overlay-soft)_48%,transparent_72%)]" />
      <div className="relative mx-auto flex min-h-[520px] w-full max-w-[1320px] items-center px-5 py-10 sm:min-h-[600px] sm:px-8 lg:min-h-[650px] lg:px-10">
        <div className="max-w-[720px] pt-10 sm:pt-0">
          <div className="mb-7 flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent-light)] sm:text-sm">
            <span>{data.eyebrow}</span><span aria-hidden="true" className="h-px w-16 bg-[var(--color-accent-light)]" />
          </div>
          <h1 className="flex flex-col gap-2 break-words font-heading text-3xl font-bold leading-tight tracking-[-0.02em] text-[var(--color-primary)] sm:gap-3 sm:text-5xl md:text-6xl lg:gap-4 lg:text-8xl">
            <span>{data.titleLine1}</span>
            <span className="text-[var(--color-accent-light)]">{data.highlightedTitle}</span>
            <span>{data.titleLine2}</span>
          </h1>
        </div>
      </div>
    </section>
  );
};
