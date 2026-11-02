'use client';

import { useState } from 'react';
import {
  FaArrowRight,
  FaChevronDown,
  FaPaw,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaRegClock,
  FaRegEnvelope,
  FaRegFileAlt,
  FaRegUser,
  FaStethoscope,
} from 'react-icons/fa';
import { AppointmentFieldProps, BookAppointmentProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw aria-hidden="true" />;
    case 'FaPhoneAlt': return <FaPhoneAlt aria-hidden="true" />;
    case 'FaRegCalendarAlt': return <FaRegCalendarAlt aria-hidden="true" />;
    case 'FaRegClock': return <FaRegClock aria-hidden="true" />;
    case 'FaRegEnvelope': return <FaRegEnvelope aria-hidden="true" />;
    case 'FaRegFileAlt': return <FaRegFileAlt aria-hidden="true" />;
    case 'FaRegUser': return <FaRegUser aria-hidden="true" />;
    case 'FaStethoscope': return <FaStethoscope aria-hidden="true" />;
    default: return null;
  }
};

const AppointmentField = ({ field }: AppointmentFieldProps) => (
  <label className={`block ${field.width === 'full' ? 'sm:col-span-2' : ''}`}>
    <span className="sr-only">{field.label}</span>
    <span className="relative block">
      <span className={`pointer-events-none absolute left-4 z-10 text-lg text-[var(--color-form-icon)] ${field.type === 'textarea' ? 'top-4' : 'top-1/2 -translate-y-1/2'}`}>
        {renderIcon(field.icon)}
      </span>

      {field.type === 'select' ? (
        <>
          <select name={field.name} required={field.required} defaultValue="" className="w-full appearance-none rounded-lg border border-[var(--color-border-form)] bg-[var(--color-appointment-field-bg)] py-3.5 pl-12 pr-10 text-sm text-[var(--color-text-light)] outline-none transition-colors focus:border-[var(--color-accent-light)] sm:text-base">
            <option value="" disabled>{field.placeholder}</option>
            {field.options?.map((option) => <option key={option.id} value={option.value}>{option.title}</option>)}
          </select>
          <FaChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--color-form-icon)]" />
        </>
      ) : field.type === 'textarea' ? (
        <textarea name={field.name} required={field.required} rows={4} placeholder={field.placeholder} className="min-h-28 w-full resize-y rounded-lg border border-[var(--color-border-form)] bg-[var(--color-appointment-field-bg)] py-3.5 pl-12 pr-4 text-sm text-[var(--color-heading)] outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent-light)] sm:text-base" />
      ) : (
        <input name={field.name} type={field.type} required={field.required} placeholder={field.placeholder} className="w-full rounded-lg border border-[var(--color-border-form)] bg-[var(--color-appointment-field-bg)] py-3.5 pl-12 pr-4 text-sm text-[var(--color-heading)] outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent-light)] sm:text-base" />
      )}
    </span>
  </label>
);

export const BookAppointment = ({ data }: BookAppointmentProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="w-full bg-[var(--color-white)] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[760px] rounded-2xl border border-[var(--color-appointment-border)] bg-[var(--color-appointment-card-bg)] p-5 shadow-[var(--shadow-appointment-form)] sm:p-8">
        <header className="text-center">
          <h2 className="font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--color-heading)] sm:text-5xl">
            <span>{data.intro.title}</span>{' '}
            <span className="text-[var(--color-accent-light)]">{data.intro.highlightedTitle}</span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-[var(--color-text-light)] sm:text-base">
            {data.intro.description}
          </p>
        </header>

        <form className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4" onChange={() => setSubmitted(false)} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }}>
          {data.form.fields.map((field) => <AppointmentField key={field.id} field={field} />)}

          <div className="flex flex-col items-center gap-3 sm:col-span-2">
            <button type="submit" className="inline-flex w-full items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-light)] px-5 py-3.5 text-sm font-semibold text-[var(--color-white)] transition-opacity hover:opacity-90 sm:text-base">
              <span>{data.form.buttonText}</span>
              <FaArrowRight aria-hidden="true" />
            </button>
            {submitted && <p role="status" className="text-center text-sm leading-6 text-[var(--color-primary)]">{data.form.successMessage}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};
