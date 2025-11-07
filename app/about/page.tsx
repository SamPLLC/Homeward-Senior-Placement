import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about helping seniors and their families find the perfect living arrangement 
          with dignity, compassion, and care.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-4">
            Homeward Senior Placement was founded with one mission — to make finding the right senior living community a simple, caring, and stress-free experience for families.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            After spending years in the senior living industry, I've seen how challenging it can be for families to find the right fit for their loved ones. That's what inspired me to start Homeward — a service built on compassion, trust, and true understanding.
          </p>
          <p className="text-lg text-gray-600">
            My goal is to guide each family toward the best possible home for their parents — a place where they'll feel comfortable, cared for, and happy. Every family deserves peace of mind during this important decision, and I'm committed to making the process as smooth and meaningful as possible.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Compassion</h4>
              <p className="text-gray-600">
                We understand this is an emotional time and treat every family with empathy and respect.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
              <p className="text-gray-600">
                We're transparent about our process and always put your family's needs first.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
              <p className="text-gray-600">
                We have extensive knowledge of local senior living options and care requirements.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
              <p className="text-gray-600">
                We're here for you throughout the entire process and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">Meet the Founder</h2>
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <div className="relative w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden">
              <Image
                src="/face photo.jpg"
                alt="Sam Pitu"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Sam Pitu</h3>
            <p className="text-blue-900 font-medium mb-4 text-lg">Founder & Senior Placement Advisor</p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sam personally works with every family to understand their needs and guide them toward the best senior living options. With hands-on experience in the senior care industry and strong relationships with trusted communities, Sam ensures every placement is made with care, transparency, and compassion.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white rounded-lg p-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Commitment to You</h2>
          <p className="text-xl mb-6">
            We're committed to finding the perfect senior living arrangement for your loved one, 
            and we won't stop until you're completely satisfied.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-xl font-bold mb-2">Every family matters</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold mb-2">We make sure all needs are met</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold mb-2">6 years of experience</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Ready to Work With Us?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Let us help you find the perfect senior living arrangement for your loved one.
        </p>
        <a
          href="/contact"
          className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}





