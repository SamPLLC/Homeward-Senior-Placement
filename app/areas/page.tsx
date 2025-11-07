export default function Areas() {
  const cities = [
    'Farmington Hills', 'Northville', 'Plymouth', 'Livonia', 'West Bloomfield', 'Novi', 'Ann Arbor', 'Troy', 'Sterling Heights', 'Rochester Hills', 'Canton', 'Southfield', 'Royal Oak'
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Service Areas</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We help families across Southeast Michigan find the right assisted living, memory care, and home care—fast and locally.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {cities.map((city) => (
          <span key={city} className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-700 bg-white">
            <strong className="mr-1">{city}</strong>
          </span>
        ))}
        <span className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-gray-700 bg-white">and more across SE Michigan</span>
      </div>

      <div className="mt-12 rounded-xl bg-blue-50 p-6 text-center">
        <p className="text-lg text-gray-700">Not sure where to start? Talk to a local advisor.</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:2489964637" className="inline-flex items-center justify-center rounded-lg border border-blue-900 text-blue-900 px-6 py-3 font-medium hover:bg-blue-50">Call (248) 996-4637</a>
          <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-white font-medium hover:bg-blue-800">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
