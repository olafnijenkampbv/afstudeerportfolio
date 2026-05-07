'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState, useCallback } from 'react';

interface CardData {
  svg: string;
  href: string;
  titel: string;
  tekst: string;
}

interface SpineData {
  spineX: number;
  spineTop: number;
  spineBottom: number;
  bpBranches: { y: number; fromX: number }[];
  supportBranches: { y: number; toX: number }[];
}

const beroepsproducten: CardData[] = [
  {
    svg: 'strategie',
    href: '/beroepsproduct-1',
    titel: 'Organisatiestrategie\nOlaf Nijenkamp',
    tekst: 'Hier komt een kleine uitleg over het beroepsproduct',
  },
  {
    svg: 'laptop',
    href: '/beroepsproduct-2',
    titel: 'Beplantingsplan\nWebtool',
    tekst: 'Hier komt een kleine uitleg over het beroepsproduct',
  },
  {
    svg: 'applicatie',
    href: '/beroepsproduct-3',
    titel: 'Beplantingsplantekening applicatie',
    tekst: 'Hier komt een kleine uitleg over het beroepsproduct',
  },
];

const ondersteuning: CardData[] = [
  {
    svg: 'leeruitkomsten',
    href: '/leeruitkomsten',
    titel: 'Leeruitkomsten',
    tekst: 'Overzicht van alle leeruitkomsten en de koppeling met mijn beroepsproducten.',
  },
  {
    svg: 'skills',
    href: '/skills',
    titel: 'Skills',
    tekst: 'Overzicht van mijn professionele skills en hoe ik deze heb ontwikkeld en toegepast.',
  },
  {
    svg: 'bronnenlijst',
    href: '/bronnenlijst',
    titel: 'Bronnenlijst',
    tekst: 'Alle gebruikte bronnen, literatuur en onderzoeken.',
  },
  {
    svg: 'link',
    href: '/bijlage',
    titel: 'Bijlage',
    tekst: 'Aanvullende documenten en bewijsmateriaal ter ondersteuning.',
  },
  {
    svg: 'user',
    href: '/reflectie',
    titel: 'Reflectie',
    tekst: 'Mijn reflectie op het proces, keuzes en ontwikkeling tijdens mijn afstudeertraject.',
  },
];

export default function PortfolioSitemap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const bpRefs = useRef<(HTMLDivElement | null)[]>(Array(beroepsproducten.length).fill(null));
  const supportRefs = useRef<(HTMLDivElement | null)[]>(Array(ondersteuning.length).fill(null));
  const [spine, setSpine] = useState<SpineData | null>(null);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const spineEl = spineRef.current;
    if (!container || !spineEl) return;

    const cRect = container.getBoundingClientRect();
    const sRect = spineEl.getBoundingClientRect();
    const spineX = sRect.left - cRect.left + sRect.width / 2;

    const bpBranches = bpRefs.current
      .map((el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { y: r.top - cRect.top + r.height / 2, fromX: r.right - cRect.left };
      })
      .filter((d): d is { y: number; fromX: number } => d !== null);

    const supportBranches = supportRefs.current
      .map((el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { y: r.top - cRect.top + r.height / 2, toX: r.left - cRect.left };
      })
      .filter((d): d is { y: number; toX: number } => d !== null);

    const allYs = [...bpBranches.map((d) => d.y), ...supportBranches.map((d) => d.y)];
    if (allYs.length === 0) return;

    setSpine({
      spineX,
      spineTop: Math.min(...allYs),
      spineBottom: Math.max(...allYs),
      bpBranches,
      supportBranches,
    });
  }, []);

  useEffect(() => {
    measure();
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-start gap-5 mb-12">
          <div className="flex flex-col items-center self-stretch flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#58694C] flex items-center justify-center">
              <Image
                src="/icons/diagram.svg"
                alt=""
                width={22}
                height={22}
                className="[filter:brightness(0)_invert(1)]"
              />
            </div>
            <div className="w-0 border-l-2 border-dashed border-[#58694C] flex-1 mt-2 min-h-[16px]" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-[#58694C] uppercase tracking-[0.12em] mb-1.5">
              Mijn portfolio in één overzicht
            </p>
            <h2 className="text-[28px] font-bold text-[#111111] mb-2 leading-tight">
              Zo is mijn portfolio opgebouwd
            </h2>
            <p className="text-sm text-[#111111]/60 max-w-2xl leading-relaxed">
              Een overzicht van alle onderdelen binnen mijn afstudeerportfolio. Aan de linkerkant zie je de
              beroepsproducten staan, deze onderdelen zijn de kern van mijn afstudeerwerk. De onderdelen aan de
              rechterkant zijn de ondersteunende onderdelen. Klik op een onderdeel om direct naar die pagina te gaan.
            </p>
          </div>
        </div>

        {/* Diagram — desktop */}
        <div ref={containerRef} className="hidden lg:flex relative items-start">

          {/* Left: BP cards */}
          <div className="flex-1 flex flex-col gap-3">
            {beroepsproducten.map((bp, i) => (
              <div key={bp.href} ref={(el) => { bpRefs.current[i] = el; }}>
                <Link href={bp.href} className="sitemap-card group block">
                  <div
                    className="bg-white border border-[#E0DEDF] rounded-[10px] p-5 flex items-center gap-4 transition-colors duration-200 group-hover:border-[#E94E1B]"
                    style={{ boxShadow: '2px 4px 14.4px -5px rgba(0,0,0,0.25)' }}
                  >
                    <div className="w-[68px] h-[68px] rounded-full bg-[#F0F3EE] flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[#FFE5DD]">
                      <Image
                        src={`/icons/${bp.svg}.svg`}
                        alt=""
                        width={32}
                        height={32}
                        className="sitemap-icon"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[#111111] text-[15px] leading-snug whitespace-pre-line">
                        {bp.titel}
                      </p>
                      <p className="text-[13px] text-[#111111]/60 mt-1.5 leading-relaxed">{bp.tekst}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Center spacer — SVG spine is drawn through here */}
          <div ref={spineRef} className="w-20 flex-shrink-0" />

          {/* Right: support cards */}
          <div className="flex-1 flex flex-col gap-3">
            {ondersteuning.map((item, i) => (
              <div key={item.href} ref={(el) => { supportRefs.current[i] = el; }}>
                <Link href={item.href} className="sitemap-card group block">
                  <div
                    className="bg-white border border-[#E0DEDF] rounded-[10px] p-4 flex items-center gap-3 transition-colors duration-200 group-hover:border-[#E94E1B]"
                    style={{ boxShadow: '2px 4px 14.4px -5px rgba(0,0,0,0.25)' }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#F0F3EE] flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[#FFE5DD]">
                      <Image
                        src={`/icons/${item.svg}.svg`}
                        alt=""
                        width={22}
                        height={22}
                        className="sitemap-icon"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[#111111] text-[14px] capitalize leading-snug">
                        {item.titel}
                      </p>
                      <p className="text-[12px] text-[#111111]/60 mt-0.5 leading-relaxed">{item.tekst}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* SVG spine + branch overlay */}
          {spine && (
            <svg
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'visible',
              }}
            >
              {/* Vertical center spine */}
              <line
                x1={spine.spineX}
                y1={spine.spineTop}
                x2={spine.spineX}
                y2={spine.spineBottom}
                stroke="#58694C"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              {/* BP card right edge → spine */}
              {spine.bpBranches.map((b, i) => (
                <line
                  key={`bpb-${i}`}
                  x1={b.fromX}
                  y1={b.y}
                  x2={spine.spineX}
                  y2={b.y}
                  stroke="#58694C"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
              ))}
              {/* spine → support card left edge */}
              {spine.supportBranches.map((b, i) => (
                <line
                  key={`sb-${i}`}
                  x1={spine.spineX}
                  y1={b.y}
                  x2={b.toX}
                  y2={b.y}
                  stroke="#58694C"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
              ))}
              {/* Filled dots on spine at each branch intersection */}
              {spine.bpBranches.map((b, i) => (
                <circle key={`bpd-${i}`} cx={spine.spineX} cy={b.y} r="5" fill="#58694C" />
              ))}
              {spine.supportBranches.map((b, i) => (
                <circle key={`sd-${i}`} cx={spine.spineX} cy={b.y} r="5" fill="#58694C" />
              ))}
            </svg>
          )}
        </div>

        {/* Mobile fallback */}
        <div className="lg:hidden space-y-4">
          <p className="text-xs font-bold text-[#58694C] uppercase tracking-wider mb-2">Beroepsproducten</p>
          {beroepsproducten.map((bp) => (
            <Link key={bp.href} href={bp.href} className="sitemap-card group block">
              <div
                className="flex items-center gap-4 bg-white border border-[#E0DEDF] rounded-[10px] p-4 group-hover:border-[#E94E1B] transition-colors"
                style={{ boxShadow: '2px 4px 14.4px -5px rgba(0,0,0,0.25)' }}
              >
                <div className="w-12 h-12 rounded-full bg-[#F0F3EE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFE5DD] transition-colors">
                  <Image
                    src={`/icons/${bp.svg}.svg`}
                    alt=""
                    width={24}
                    height={24}
                    className="sitemap-icon"
                  />
                </div>
                <div>
                  <p className="font-bold text-[14px] whitespace-pre-line">{bp.titel}</p>
                  <p className="text-[12px] text-[#111111]/60 mt-0.5">{bp.tekst}</p>
                </div>
              </div>
            </Link>
          ))}
          <p className="text-xs font-bold text-[#58694C] uppercase tracking-wider mt-6 mb-2">Ondersteunend</p>
          {ondersteuning.map((item) => (
            <Link key={item.href} href={item.href} className="sitemap-card group block">
              <div
                className="flex items-center gap-3 bg-white border border-[#E0DEDF] rounded-[10px] p-4 group-hover:border-[#E94E1B] transition-colors"
                style={{ boxShadow: '2px 4px 14.4px -5px rgba(0,0,0,0.25)' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#F0F3EE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFE5DD] transition-colors">
                  <Image
                    src={`/icons/${item.svg}.svg`}
                    alt=""
                    width={20}
                    height={20}
                    className="sitemap-icon"
                  />
                </div>
                <div>
                  <p className="font-bold text-[14px] capitalize">{item.titel}</p>
                  <p className="text-[12px] text-[#111111]/60 mt-0.5">{item.tekst}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
