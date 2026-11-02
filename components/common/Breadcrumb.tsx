import Image from 'next/image';
import Link from 'next/link';
import { FaBone } from 'react-icons/fa';
import { BreadcrumbProps } from '@/types/templates.types';

export const Breadcrumb = ({ data, ui }: BreadcrumbProps) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-visible bg-[var(--color-breadcrumb-bg)] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="relative z-10 mx-auto w-full max-w-[1240px]">
        <FaBone aria-hidden="true" className="absolute -top-8 left-40 z-0 hidden -rotate-45 text-7xl text-[var(--color-breadcrumb-accent)] drop-shadow-[0_0_7px_var(--color-breadcrumb-accent)] sm:block" />
        <h1 className="relative z-10 font-heading text-4xl font-bold text-[var(--color-breadcrumb-text)] sm:text-5xl lg:text-6xl">{data.title}</h1>
        <nav aria-label={data.title} className="relative z-10 mt-5 flex flex-wrap items-center gap-3 text-sm sm:text-base">
          {data.paths.map((path, index) => (
            <span key={path.id} className="flex items-center gap-3">
              {index > 0 && <span aria-hidden="true" className="text-[var(--color-breadcrumb-muted)]">{ui?.breadcrumbSeparator}</span>}
              {path.url ? <Link href={path.url} className="text-[var(--color-breadcrumb-muted)] transition-colors hover:text-[var(--color-white)]">{path.label}</Link> : <span className="font-semibold text-[var(--color-breadcrumb-text)]">{path.label}</span>}
            </span>
          ))}
        </nav>
      </div>

      {data.image && data.imageAlt && (
        <div className="pointer-events-none absolute -bottom-16 right-0 z-20 hidden h-40 w-[430px] md:block lg:h-44 lg:w-[470px]">
          <Image src={data.image} alt={data.imageAlt} fill sizes="470px" className="object-contain object-right-bottom" />
        </div>
      )}
    </section>
  );
};
