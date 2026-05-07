import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import OverviewMatrix from '@/components/sections/OverviewMatrix';
import CTAInfoBlock from '@/components/sections/CTAInfoBlock';
import { leeruitkomsten } from '@/lib/data/leeruitkomsten';

export const metadata: Metadata = {
  title: 'Leeruitkomsten | Olaf Nijenkamp',
};

export default function Leeruitkomsten() {
  return (
    <>
      <PageHero
        subtitel="Mijn ontwikkeling &amp; bewijsroute"
        titel="Leeruitkomsten"
        tekst="In deze pagina laat ik zien welke leeruitkomsten ik per beroepsproduct heb aangetoond. Het overzicht maakt duidelijk hoe de leeruitkomsten zijn verdeeld over mijn afstudeerwerk en waar ik deze concreet heb toegepast. Zo wordt inzichtelijk hoe mijn werk is opgebouwd en hoe dit bijdraagt aan mijn ontwikkeling als creatieve concept- en contentontwerper."
      />

      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <OverviewMatrix rijen={leeruitkomsten} />
          <CTAInfoBlock
            titel="Klik op een leeruitkomst om de onderbouwing per leeruitkomst te bekijken"
            tekst="Per leeruitkomst is de onderbouwing uitgewerkt binnen mijn portfolio. Interactiviteit wordt uitgewerkt in FASE 4."
          />
        </div>
      </section>
    </>
  );
}
