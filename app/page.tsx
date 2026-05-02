import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HomeSection from './components/HomeSection';
import ProductCard from './components/ProductCard';
import Badge from './components/Badge';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Header />
      <main>
        <HeroSection />

        <HomeSection title="Beroepsproducten" className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="BP1 – Organisatiestrategie Olaf Nijenkamp"
              label="Strategisch niveau"
              description="Onderzoek, analyse en strategische vertaling voor de organisatie."
              href="/beroepsproduct-1"
            />
            <ProductCard
              title="BP2 – Beplantingsplan Webtool"
              label="Communicatieconcept"
              description="Een digitaal communicatieconcept dat hoveniers ondersteunt in het beplantingsplanproces."
              href="/beroepsproduct-2"
            />
            <ProductCard
              title="BP3 – Beplantingsplantekening applicatie"
              label="Innovatieconcept"
              description="Een interactieve applicatie waarmee beplantingsplannen visueel en gebruiksvriendelijk worden uitgewerkt."
              href="/beroepsproduct-3"
            />
          </div>
        </HomeSection>

        <HomeSection title="Leeruitkomsten & Skills" className="bg-[#EEF0ED]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1F2A1F] mb-4">Leeruitkomsten</h3>
              <div className="flex flex-wrap gap-2">
                <Badge text="CC4.1" />
                <Badge text="CC4.2" />
                <Badge text="CC4.3" />
                <Badge text="CC4.4" />
                <Badge text="CC4.5" />
                <Badge text="CS4.5" />
                <Badge text="DG4.3" />
                <Badge text="PO4.1" />
                <Badge text="OD4.3" />
                <Badge text="VB4.1" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1F2A1F] mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge text="OV4" />
                <Badge text="IK4" />
                <Badge text="SW4" />
                <Badge text="RV4" />
                <Badge text="EV4" />
                <Badge text="EB4" />
                <Badge text="WB4" />
                <Badge text="PL4" />
                <Badge text="TV4" />
              </div>
            </div>
          </div>
        </HomeSection>

        <HomeSection title="Portfolio-aanpak" className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-[#1F2A1F] mb-4">Onderzoeken</h3>
              <p className="text-[#1F2A1F]">Elk beroepsproduct begint met grondig onderzoek en analyse van de context en behoeften.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1F2A1F] mb-4">Ontwerpen</h3>
              <p className="text-[#1F2A1F]">Creatieve concepten worden ontwikkeld, getest en geitereerd op basis van feedback.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1F2A1F] mb-4">Verantwoorden</h3>
              <p className="text-[#1F2A1F]">Alle keuzes worden onderbouwd met reflectie, bewijsstukken en professionele documentatie.</p>
            </div>
          </div>
        </HomeSection>

        <HomeSection title="Ontwikkeling als communicatieprofessional" className="bg-[#EEF0ED]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-[#1F2A1F] mb-6 leading-relaxed">
              Gedurende mijn afstuderen heb ik mijn skills als communicatieprofessional verder ontwikkeld door te experimenteren met digitale mogelijkheden, feedback te verwerken en creatieve keuzes te onderbouwen met data en inzichten.
            </p>
            <Link
              href="/reflectie"
              className="bg-[#E94E1B] text-white px-6 py-3 rounded-md font-medium hover:bg-[#d13f17] transition-colors inline-block"
            >
              Bekijk reflectie
            </Link>
          </div>
        </HomeSection>
      </main>
    </div>
  );
}