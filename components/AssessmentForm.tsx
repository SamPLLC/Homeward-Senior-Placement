'use client';

import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import {
  BUDGETS,
  CARE_NEEDS,
  OTHER_CITY_CHOICES,
  TIMELINES,
  assessmentCityOptions,
  cityNameForSlug,
} from '@/lib/assessment';
import { BUSINESS_HOURS_DISPLAY, BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_TEL } from '@/lib/business';

type Choice = { value: string; hint: string };

const steps = [
  { key: 'care', title: 'What kind of help is needed?' },
  { key: 'timeline', title: 'When does the family need to decide?' },
  { key: 'city', title: 'Which Oakland County city should we start with?' },
  { key: 'budget', title: 'What monthly budget should we stay near?' },
  { key: 'contact', title: 'How should we reach you?' },
] as const;

export default function AssessmentForm({ initialCitySlug = '' }: { initialCitySlug?: string }) {
  const cities = assessmentCityOptions();
  const priority = cities.filter((city) => city.group === 'priority');
  const more = cities.filter((city) => city.group === 'more');
  const headingRef = useRef<HTMLHeadingElement>(null);
  const errorId = useId();

  const [step, setStep] = useState(0);
  const [careNeed, setCareNeed] = useState('');
  const [timeline, setTimeline] = useState('');
  const [city, setCity] = useState(cityNameForSlug(initialCitySlug));
  const [budget, setBudget] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [donePhone, setDonePhone] = useState('');

  useEffect(() => {
    headingRef.current?.focus();
  }, [step, donePhone]);

  function choiceList(options: readonly Choice[], selected: string, onSelect: (value: string) => void, nameAttr: string) {
    return (
      <fieldset className="mt-6 space-y-3">
        <legend className="sr-only">{steps[step].title}</legend>
        {options.map((option) => {
          const checked = selected === option.value;
          return (
            <label
              key={option.value}
              className={`block cursor-pointer rounded-2xl border px-4 py-4 ${
                checked ? 'border-blue-900 bg-white ring-2 ring-blue-900' : 'border-gray-200 bg-white'
              }`}
            >
              <input
                type="radio"
                name={nameAttr}
                value={option.value}
                checked={checked}
                onChange={() => {
                  onSelect(option.value);
                  setError('');
                }}
                className="sr-only"
              />
              <span className="block text-lg font-semibold text-gray-900">{option.value}</span>
              <span className="mt-1 block text-base text-gray-600">{option.hint}</span>
            </label>
          );
        })}
      </fieldset>
    );
  }

  function goNext() {
    if (step === 0 && !careNeed) {
      setError('Choose the kind of care you are looking for.');
      return;
    }
    if (step === 1 && !timeline) {
      setError('Choose a timeline.');
      return;
    }
    if (step === 2 && !city) {
      setError('Choose a city, or tell us you are not sure yet.');
      return;
    }
    if (step === 3 && !budget) {
      setError('Choose a budget band, or say you would rather discuss it.');
      return;
    }
    setError('');
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name.trim().length < 2) {
      setError('Enter your name.');
      return;
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setError('Enter a phone number we can call, including area code.');
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Enter a valid email, or leave it blank.');
      return;
    }

    setSubmitting(true);
    setError('');
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          city,
          careNeed,
          timeline,
          budget,
          notes,
          source: 'assessment',
          company,
        }),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error || 'We could not save your request.');
      }
      setDonePhone(phone.trim());
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'We could not save your request.');
    } finally {
      setSubmitting(false);
    }
  }

  if (donePhone) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 ref={headingRef} tabIndex={-1} className="text-3xl font-bold tracking-tight text-gray-900 outline-none">
          We will call you.
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Sam Pitu at Homeward Senior Placement will call <strong>{donePhone}</strong> to talk through realistic options
          {city ? ` around ${city}` : ''}. If you need us first, call{' '}
          <a className="font-semibold text-blue-900 underline underline-offset-4" href={`tel:${BUSINESS_PHONE_TEL}`}>
            {BUSINESS_PHONE_DISPLAY}
          </a>
          .
        </p>
        <p className="mt-3 text-base text-gray-600">Hours: {BUSINESS_HOURS_DISPLAY}.</p>
      </div>
    );
  }

  const progress = step + 1;

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-5 shadow-sm sm:p-6" noValidate>
      <p className="text-sm font-medium uppercase tracking-wide text-blue-900">
        Step {progress} of {steps.length}
      </p>
      <div className="mt-3 h-2 rounded-full bg-blue-50" aria-hidden="true">
        <div className="h-2 rounded-full bg-blue-900" style={{ width: `${(progress / steps.length) * 100}%` }} />
      </div>
      <h2 ref={headingRef} tabIndex={-1} className="mt-5 text-2xl font-bold tracking-tight text-gray-900 outline-none">
        {steps[step].title}
      </h2>

      {step === 0 && choiceList(CARE_NEEDS, careNeed, setCareNeed, 'careNeed')}
      {step === 1 && choiceList(TIMELINES, timeline, setTimeline, 'timeline')}

      {step === 2 && (
        <div className="mt-6">
          <label htmlFor="city" className="block text-base font-medium text-gray-800">
            City
          </label>
          <select
            id="city"
            name="city"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
              setError('');
            }}
            className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900"
          >
            <option value="">Choose a city</option>
            <optgroup label="Cities families search">
              {priority.map((option) => (
                <option key={option.slug} value={option.name}>
                  {option.name}
                </option>
              ))}
            </optgroup>
            {more.length > 0 && (
              <optgroup label="More Oakland County">
                {more.map((option) => (
                  <option key={option.slug} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </optgroup>
            )}
            <optgroup label="Somewhere else">
              {OTHER_CITY_CHOICES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </optgroup>
          </select>
          <p className="mt-3 text-base text-gray-600">
            We compare assisted living, memory care, independent living, and smaller residential homes in that city and
            the nearby communities a family can actually visit.
          </p>
        </div>
      )}

      {step === 3 && (
        <div>
          {choiceList(BUDGETS, budget, setBudget, 'budget')}
          <p className="mt-3 text-base text-gray-600">
            This only keeps the short list in range. It is not a quote, and communities set their own rates.
          </p>
        </div>
      )}

      {step === 4 && (
        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-800">
              Your name
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-base"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-base font-medium text-gray-800">
              Phone number we should call
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-base"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-800">
              Email <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-base"
            />
          </div>
          <div>
            <label htmlFor="notes" className="block text-base font-medium text-gray-800">
              Anything we should know <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Parent’s name, hospital, or what changed at home."
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-base"
            />
          </div>
          <p className="text-base text-gray-600">
            So far: {careNeed}. {timeline}. {city}. {budget}.
          </p>
        </div>
      )}

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>

      {error && (
        <p id={errorId} role="alert" className="mt-4 text-base font-medium text-red-800">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => {
              setError('');
              setStep((current) => current - 1);
            }}
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-base font-semibold text-gray-800"
          >
            Back
          </button>
        ) : (
          <span />
        )}
        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-900 px-5 py-3 text-base font-semibold text-white hover:bg-blue-800"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-900 px-5 py-3 text-base font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
          >
            {submitting ? 'Sending…' : 'Request a call'}
          </button>
        )}
      </div>
    </form>
  );
}
