import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#FAFAF7] border-b border-[#E3E2E2] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-[#1F2A1F] font-bold text-xl hover:text-[#58694C] transition-colors">
              Olaf Nijenkamp
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="text-[#1F2A1F] hover:text-[#58694C] transition-colors font-medium">
                Beroepsproducten
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-[#E3E2E2] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/beroepsproduct-1" className="block px-4 py-2 text-sm text-[#1F2A1F] hover:bg-[#EEF0ED]">
                  Beroepsproduct 1
                </Link>
                <Link href="/beroepsproduct-2" className="block px-4 py-2 text-sm text-[#1F2A1F] hover:bg-[#EEF0ED]">
                  Beroepsproduct 2
                </Link>
                <Link href="/beroepsproduct-3" className="block px-4 py-2 text-sm text-[#1F2A1F] hover:bg-[#EEF0ED]">
                  Beroepsproduct 3
                </Link>
              </div>
            </div>
            <Link href="/leeruitkomsten" className="text-[#1F2A1F] hover:text-[#58694C] transition-colors font-medium">
              Leeruitkomsten
            </Link>
            <Link href="/skills" className="text-[#1F2A1F] hover:text-[#58694C] transition-colors font-medium">
              Skills
            </Link>
            <Link href="/bronnenlijst" className="text-[#1F2A1F] hover:text-[#58694C] transition-colors font-medium">
              Bronnenlijst
            </Link>
            <Link href="/bijlage" className="text-[#1F2A1F] hover:text-[#58694C] transition-colors font-medium">
              Bijlage
            </Link>
            <Link href="/reflectie" className="text-[#1F2A1F] hover:text-[#58694C] transition-colors font-medium">
              Reflectie
            </Link>
          </nav>
          {/* Mobile menu button - placeholder for hamburger */}
          <div className="md:hidden">
            <button className="text-[#1F2A1F] hover:text-[#58694C]">
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}