import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-[#FAFAF7] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F2A1F] mb-4">
            Afstudeerportfolio
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#58694C] mb-6">
            Creatieve concept- en contentontwerper
          </h2>
          <p className="text-lg text-[#1F2A1F] mb-8 leading-relaxed">
            Dit portfolio laat zien hoe ik tijdens mijn afstuderen bij Olaf Nijenkamp beroepsproducten heb ontwikkeld op strategisch, communicatief en innovatief niveau.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/beroepsproduct-1"
              className="bg-[#58694C] text-white px-6 py-3 rounded-md font-medium hover:bg-[#4a5a3f] transition-colors text-center"
            >
              Bekijk beroepsproducten
            </Link>
            <Link
              href="/leeruitkomsten"
              className="bg-[#E94E1B] text-white px-6 py-3 rounded-md font-medium hover:bg-[#d13f17] transition-colors text-center"
            >
              Bekijk leeruitkomsten
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#EEF0ED] to-[#58694C] rounded-lg h-96 flex items-center justify-center">
          <span className="text-[#FAFAF7] text-lg font-medium">Visueel element - Placeholder</span>
        </div>
      </div>
    </section>
  );
}