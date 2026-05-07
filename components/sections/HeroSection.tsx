'use client';

import Image from 'next/image';
import Link from 'next/link';
export default function HeroSection() {

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F3F2F0 0%, #F6FDED 100%)' }}
    >
      {/* Linkerkolom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div
          className="flex flex-col justify-center py-14 lg:py-0 lg:w-[45%]"
          style={{ minHeight: 560 }}
        >
          <p
            className="font-bold text-[#58694C] uppercase mb-3"
            style={{ fontSize: 11, letterSpacing: '0.15em' }}
          >
            AFSTUDEERPORTFOLIO
          </p>

          <h1
            className="font-bold text-[#111111] mb-2"
            style={{ fontSize: 42, lineHeight: 1.15 }}
          >
            Creatieve concept- en<br />Contentontwerper
          </h1>

          <p className="text-[#58694C] font-semibold text-base mb-5">
            Cas Gerritsen | S1181594
          </p>

          <p
            className="text-sm text-[#111111] mb-7"
            style={{ lineHeight: 1.7, maxWidth: 460 }}
          >
            Dit portfolio toont mijn afstudeerwerk bij Olaf Nijenkamp BV als creatieve concept- en
            contentontwerper. Aan de hand van drie beroepsproducten laat ik zien hoe ik een
            organisatievraagstuk heb onderzocht en vertaald naar concrete oplossingen.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/beroepsproduct-1"
              className="group inline-flex items-center gap-2 bg-[#E94E1B] hover:bg-[#d4431a] hover:shadow-[0_4px_12px_rgba(233,78,27,0.3)] text-white font-semibold text-sm rounded-[6px] transition-all duration-150"
              style={{ padding: '12px 20px' }}
            >
              Bekijk mijn beroepsproducten
              <span className="inline-flex transition-transform duration-200 ease-out group-hover:translate-x-1">
                <Image src="/icons/arrow-right.svg" alt="" width={16} height={16} aria-hidden="true" />
              </span>
            </Link>

            <Link
              href="/reflectie"
              className="inline-flex items-center font-semibold text-sm text-[#58694C] bg-transparent hover:bg-[rgba(88,105,76,0.08)] transition-colors rounded-[6px]"
              style={{ border: '1.5px solid #58694C', padding: '12px 20px' }}
            >
              Mijn reflectie
            </Link>
          </div>

          <div className="flex gap-6">
            <div className="flex items-start gap-2.5">
              <Image src="/icons/leeruitkomsten.svg" alt="" width={20} height={20} aria-hidden="true" />
              <div>
                <p className="text-xs text-[#111111]">Afgestudeerd bij</p>
                <p className="text-xs font-bold text-[#111111]">Olaf Nijenkamp BV</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Image src="/icons/calendar.svg" alt="" width={20} height={20} aria-hidden="true" />
              <div>
                <p className="text-xs text-[#111111]">120 stagedagen</p>
                <p className="text-xs font-bold text-[#111111]">werken &amp; leren</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobiel */}
      <div className="lg:hidden px-4 pb-10">
        <Image
          src="/images/hero-olaf-nijenkamp.svg"
          alt="Olaf Nijenkamp"
          width={700}
          height={420}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>

      {/* Desktop: rechtervisual */}
      <div
        className="hidden lg:block absolute top-0 right-0 bottom-0"
        style={{ width: '58%', zIndex: 1 }}
      >
        {/* FIX 1 — Luchtfoto met drop-shadow */}
        <Image
          src="/images/hero-olaf-nijenkamp.svg"
          alt=""
          width={560}
          height={560}
          priority
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'auto',
            height: '100%',
            maxWidth: 'none',
            filter: 'drop-shadow(0 8px 40px rgba(0,0,0,0.18))',
          }}
        />

        {/* Gezamenlijke mockup-container */}
        <div
          style={{
            position: 'absolute',
            left: '10%',
            bottom: 200,
            width: 620,
            height: 285,
            zIndex: 2,
          }}
        >
          {/* Sub-wrapper: groene shape + laptop schalen samen bij hover */}
          <div
            className="hero-hover-scale"
            style={{
              position: 'absolute',
              left: 10,
              top: 40,
              width: 430,
              height: 310,
              zIndex: 20,
            }}
          >
            {/* Groene shape achter laptop */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 420,
                height: 310,
                background: '#58694C',
                opacity: 0.72,
                borderRadius: 10,
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />
            {/* Laptop bovenop */}
            <div
              style={{
                position: 'absolute',
                top: 8,
                left: 8,
                width: 420,
                zIndex: 2,
                pointerEvents: 'none',
              }}
            >
              <Image
                src="/images/hero-bp2-mockup.png"
                alt=""
                width={420}
                height={280}
                style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none' }}
              />
            </div>
          </div>

          {/* Beplantingstekening met schaduw en hover */}
          <div
            className="hero-hover-plant"
            style={{
              position: 'absolute',
              left: 220,
              top: 180,
              width: 390,
              zIndex: 30,
              borderRadius: 8,
            }}
          >
            <Image
              src="/images/hero-bp3-mockup.png"
              alt=""
              width={390}
              height={250}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: 8,
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
