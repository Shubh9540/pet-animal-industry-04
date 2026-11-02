import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { BlogsProps } from '@/types/templates.types';

export const Blogs = ({ data }: BlogsProps) => {
  if (!data?.items.length) return null;

  return (
    <section className="w-full bg-[var(--color-blog-bg)] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-light)]"><span aria-hidden="true" className="h-px w-12 bg-[var(--color-accent-soft)]" /><span>{data.eyebrow}</span><span aria-hidden="true" className="h-px w-12 bg-[var(--color-accent-soft)]" /></div>
          <h2 className="mt-4 font-heading text-4xl font-bold text-[var(--color-primary)] sm:text-6xl">{data.title} <span className="text-[var(--color-accent-light)]">{data.highlightedTitle}</span></h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[var(--color-navigation)] sm:text-base">{data.description}</p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3">
          {data.items.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-white)] p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl"><Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 hover:scale-105" /></div>
              <div className="px-3 pb-3 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">{item.date}</p>
                <h3 className="mt-2 text-xl font-bold leading-tight text-[var(--color-primary)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-light)]">{item.description}</p>
                <Link href={item.url} className="mt-4 inline-flex items-center gap-4 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent-light)]"><span>{item.linkText}</span><FaArrowRight aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
