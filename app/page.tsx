import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative z-20">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Find the right senior care<br />in Michigan.
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                We compare assisted living, memory care, and home care options<br />and guide your family step by step—at no cost to you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Get Help
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-900 text-blue-900 px-6 py-3 font-medium hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  How it works
                </Link>
              </div>
            </div>
            
            <div className="relative h-[520px] -ml-8 overflow-hidden">
              <Image
                src="/plz1.png"
                alt="Senior care"
                fill
                className="object-cover"
                style={{ objectPosition: '50% 50%', transform: 'scale(1.1)' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>


      {/* Value cards */}
      <section className="-mt-32">
        <div className="max-w-screen-xl mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900">Personal guidance</h3>
              <p className="mt-2 text-lg text-gray-600">A dedicated local advisor who listens and supports your family through each step.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900">Vetted communities</h3>
              <p className="mt-2 text-lg text-gray-600">We research options and share the pros, cons, pricing, and availability.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900">Fast results</h3>
              <p className="mt-2 text-lg text-gray-600">Get tailored matches quickly—so you can make confident decisions sooner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              { q: 'They made a stressful situation simple and respectful.', a: 'Karen, Farmington Hills' },
              { q: 'We toured only the right places and decided within days.', a: 'Mike, Northville' },
              { q: 'Clear options, fair pricing guidance, and zero pressure.', a: 'Asha, Livonia' },
            ].map((t, i) => (
              <figure key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-1 text-yellow-500" aria-hidden="true">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <blockquote className="mt-3 text-lg text-gray-700">"{t.q}"</blockquote>
                <figcaption className="mt-3 text-sm text-gray-500">—{t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
          <div className="rounded-2xl bg-blue-50 px-6 py-10 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              Get 3–5 tailored options within 24 hours
            </h3>
            <p className="mt-2 text-lg text-gray-600">Speak with a local advisor who understands Michigan communities.</p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Start now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Slim contact bar at bottom */}
      <section className="bg-blue-50">
        <div className="max-w-screen-xl mx-auto px-4 py-3 text-center text-sm md:text-base text-blue-900">
          Talk to a local advisor today: <a className="underline underline-offset-4" href="tel:2489964637">(248) 996-4637</a> • <a className="underline underline-offset-4" href="mailto:pitusammy@gmail.com">pitusammy@gmail.com</a> • 8am–7pm
        </div>
      </section>
    </div>
  );
}