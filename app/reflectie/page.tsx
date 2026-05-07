import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Reflectie | Olaf Nijenkamp',
};

export default function Reflectie() {
  return (
    <>
      <PageHero
        subtitel="Persoonlijke ontwikkeling"
        titel="Reflectie"
        tekst="Persoonlijke reflectie op mijn ontwikkeling als creatieve concept- en contentontwerper gedurende mijn afstudeertraject bij Olaf Nijenkamp."
      />

      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#EEF0ED] border border-[#E3E2E2] rounded-xl p-10 text-center">
            <p className="text-[#111111]/40 italic text-sm">
              Reflectie wordt uitgewerkt in een latere fase.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
