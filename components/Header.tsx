// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-20 md:h-28 max-w-7xl items-center px-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Homeward Senior Placement"
            width={300}
            height={300}
            priority
            className="h-16 md:h-[307px] w-auto"
          />
        </Link>

        <nav className="ml-auto hidden lg:flex items-center gap-8 self-center">
          <Link href="/services" className="text-gray-700 hover:text-blue-600 font-bold text-lg xl:text-2xl transition-colors">
            Services
          </Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-bold text-lg xl:text-2xl transition-colors">
            How It Works
          </Link>
          <Link href="/areas" className="text-gray-700 hover:text-blue-600 font-bold text-lg xl:text-2xl transition-colors">
            Areas We Serve
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-bold text-lg xl:text-2xl transition-colors">
            About
          </Link>
          <Link href="/contact" className="bg-blue-600 text-white px-5 xl:px-7 py-2 xl:py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg xl:text-2xl">
            Contact Us
          </Link>
        </nav>
        
        {/* Mobile Contact Button */}
        <Link href="/contact" className="ml-auto lg:hidden bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm">
          Contact
        </Link>
      </div>
      <div className="w-full">
        <div className="h-1 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
}

