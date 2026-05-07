import Image from 'next/image';

interface ProductHeroProps {
  nummer: number;
  titel: string;
  niveau: string;
  intro: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ProductHero({ nummer, titel, niveau, intro, imageSrc, imageAlt }: ProductHeroProps) {
  return (
    <section className="bg-[#FAFAF7] pt-14 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold text-[#58694C] uppercase tracking-widest mb-3">
            Beroepsproduct {nummer}
          </p>
          <span className="inline-block bg-[#FFE5DD] text-[#E94E1B] px-3 py-1 rounded-full text-sm font-medium mb-5">
            {niveau}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-5 leading-tight">
            {titel}
          </h1>
          <p className="text-lg text-[#111111]/70 leading-relaxed max-w-xl">
            {intro}
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#EEF0ED] to-[#58694C]/30">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? titel}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#58694C]/40 text-sm">Mockup — volgt</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
