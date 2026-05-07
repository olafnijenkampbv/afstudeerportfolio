interface PageHeroProps {
  subtitel?: string;
  titel: string;
  tekst?: string;
}

export default function PageHero({ subtitel, titel, tekst }: PageHeroProps) {
  return (
    <section className="bg-[#EEF0ED] pt-14 pb-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {subtitel && (
          <p className="text-xs font-semibold text-[#58694C] uppercase tracking-widest mb-3">
            {subtitel}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-5 leading-tight">
          {titel}
        </h1>
        {tekst && (
          <p className="text-lg text-[#111111]/70 max-w-2xl leading-relaxed">
            {tekst}
          </p>
        )}
      </div>
    </section>
  );
}
