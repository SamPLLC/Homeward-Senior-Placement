// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-20 md:h-28 max-w-7xl items-center px-4">
        <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Homeward Senior Placement"
            width={300}
            height={300}
            priority
            className="h-24 md:h-[307px] w-auto"
          />
        </Link>

        <nav className="ml-auto flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 self-center">
          <Link href="/services" className="text-gray-700 hover:text-blue-600 font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl transition-colors whitespace-nowrap">
            Services
          </Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl transition-colors whitespace-nowrap">
            How It Works
          </Link>
          <Link href="/areas" className="text-gray-700 hover:text-blue-600 font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl transition-colors whitespace-nowrap hidden sm:inline">
            Areas We Serve
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl transition-colors whitespace-nowrap">
            About
          </Link>
          <Link href="/contact" className="bg-blue-600 text-white px-3 sm:px-4 md:px-5 xl:px-7 py-1.5 sm:py-2 md:py-2 xl:py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl whitespace-nowrap">
            Contact Us
          </Link>
        </nav>
      </div>
      <div className="w-full">
        <div className="h-1 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
}

