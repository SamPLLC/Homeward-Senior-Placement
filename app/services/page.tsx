export default function Services() {
  const cards = [
    {
      title: 'Assisted Living',
      body:
        'Daily help with meals, medication, and activities—balanced with independence and social life.',
    },
    {
      title: 'Independent Living',
      body:
        'Maintenance-free living with amenities, community, and optional services as needs change.',
    },
    {
      title: 'Memory Care',
      body:
        "Secure, specialized support for Alzheimer's and other dementias with structured routines.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Services</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We compare options, coordinate tours, and guide your family through each decision—at no cost to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900">{c.title}</h3>
            <p className="mt-2 text-lg text-gray-600">{c.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        No cost to families—our services are paid by partner communities.
      </p>

      <div className="text-center mt-10">
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
