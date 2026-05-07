import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import OverviewMatrix from '@/components/sections/OverviewMatrix';
import CTAInfoBlock from '@/components/sections/CTAInfoBlock';
import { skills } from '@/lib/data/skills';

export const metadata: Metadata = {
  title: 'Skills | Olaf Nijenkamp',
};

export default function Skills() {
  return (
    <>
      <PageHero
        subtitel="Mijn professionele ontwikkeling"
        titel="Skills"
        tekst="In deze pagina laat ik zien hoe ik mijn professionele skills heb ontwikkeld tijdens mijn afstudeertraject. Deze vaardigheden zijn zichtbaar in mijn werkproces, de samenwerking met anderen en de keuzes die ik maak binnen mijn beroepsproducten. Zo wordt duidelijk hoe ik groei als communicatieprofessional in de praktijk."
      />

      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <OverviewMatrix rijen={skills} />
          <CTAInfoBlock
            titel="Klik op een skill om de onderbouwing per skill te bekijken"
            tekst="Per skill is de onderbouwing uitgewerkt binnen mijn portfolio. Interactiviteit wordt uitgewerkt in FASE 4."
          />
        </div>
      </section>
    </>
  );
}
