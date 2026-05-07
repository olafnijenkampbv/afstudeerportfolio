import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Bijlage | Olaf Nijenkamp',
};

export default function Bijlage() {
  return (
    <>
      <PageHero
        subtitel="Aanvullende documentatie"
        titel="Bijlage"
        tekst="Aanvullende documenten, onderzoeksmateriaal en bewijsstukken behorend bij de beroepsproducten."
      />

      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#EEF0ED] border border-[#E3E2E2] rounded-xl p-10 text-center">
            <p className="text-[#111111]/40 italic text-sm">
              Bijlagen worden uitgewerkt in een latere fase.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
