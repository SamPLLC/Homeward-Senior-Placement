export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0b1b3a] text-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-semibold tracking-tight mb-3">
              Homeward Senior Placement
            </h3>
            <p className="text-gray-400 text-base">
              Free, local guidance for assisted living and memory care in Michigan.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="tel:2489964637" className="hover:text-white underline-offset-4 hover:underline">
                  Phone: (248) 996-4637
                </a>
              </li>
              <li>
                <a href="mailto:pitusammy@gmail.com" className="hover:text-white underline-offset-4 hover:underline">
                  Email: pitusammy@gmail.com
                </a>
              </li>
              <li>Hours: 8am–7pm</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-base">
              <li className="text-gray-400">© {year} Homeward Senior Placement</li>
              <li className="text-gray-400">No cost to families—services paid by partner communities</li>
              <li>
                <a href="/privacy" className="hover:text-white underline-offset-4 hover:underline">Privacy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/services" className="hover:text-gray-300">Services</a>
            <a href="/how-it-works" className="hover:text-gray-300">How it works</a>
            <a href="/areas" className="hover:text-gray-300">Areas</a>
            <a href="/about" className="hover:text-gray-300">About</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
