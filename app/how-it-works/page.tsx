export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our simple, stress-free process helps you find the perfect senior living arrangement in just a few steps.
        </p>
      </div>

      <div className="space-y-12">
        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
              1
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Initial Consultation</h3>
            <p className="text-lg text-gray-600 mb-4">
              We start with a free, no-obligation consultation to understand your loved one's needs, preferences, and budget. 
              This can be done over the phone or in person.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Assessment of care needs and preferences</li>
              <li>• Discussion of budget and financial considerations</li>
              <li>• Understanding of location preferences</li>
              <li>• Timeline for placement</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
              2
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Community Research & Matching</h3>
            <p className="text-lg text-gray-600 mb-4">
              Our team researches and identifies communities that match your specific criteria. We have relationships 
              with senior living communities in multiple cities. (check areas we serve tab)
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Comprehensive database of local communities</li>
              <li>• Personal visits and assessments</li>
              <li>• Detailed comparison of amenities and services</li>
              <li>• Pricing and availability verification</li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
              3
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tours & Visits</h3>
            <p className="text-lg text-gray-600 mb-4">
              We arrange and accompany you on tours of the communities that best fit your needs. 
              We'll help you ask the right questions and evaluate each option.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Scheduled tours at your convenience</li>
              <li>• Accompanied visits with our expert guidance</li>
              <li>• Meeting with staff and residents</li>
              <li>• Detailed facility and program evaluation</li>
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
              4
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Decision & Placement</h3>
            <p className="text-lg text-gray-600 mb-4">
              Once you've chosen a community, we help facilitate the move-in process and ensure 
              a smooth transition for your loved one.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Assistance with paperwork and contracts</li>
              <li>• Coordination with the chosen community</li>
              <li>• Support during the transition period</li>
              <li>• Follow-up to ensure satisfaction</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mt-16">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Our services are completely free to families. We're paid by the communities we work with, 
            so there's no cost to you.
          </p>
          <a
            href="/contact"
            className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </div>
  );
}





