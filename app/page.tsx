import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import HomeSection from '@/components/sections/HomeSection';
import PortfolioSitemap from '@/components/sections/PortfolioSitemap';
import LearningOutcomeBadge from '@/components/ui/LearningOutcomeBadge';
import SkillBadge from '@/components/ui/SkillBadge';
import { leeruitkomsten } from '@/lib/data/leeruitkomsten';
import { skills } from '@/lib/data/skills';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Inleiding */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">

            {/* Links: gekleurde rechthoek */}
            <div className="lg:flex-1 bg-[#F0F3EE] rounded-xl min-h-[200px] lg:min-h-0" />

            {/* Rechts: tekstinhoud */}
            <div className="lg:flex-1 flex flex-col justify-center">
              <p
                className="font-semibold text-[#58694C] uppercase mb-4"
                style={{ fontSize: 12, letterSpacing: '0.08em' }}
              >
                OVER DIT PORTFOLIO
              </p>
              <h2 className="text-4xl font-bold text-[#111111] mb-6 leading-tight">
                Inleiding
              </h2>
              <p className="text-base text-[#111111]/70 mb-5 leading-relaxed">
                Dit portfolio is ontwikkeld als afsluiting van de opleiding Communicatie en richt zich op een concreet organisatievraagstuk binnen Olaf Nijenkamp BV. Binnen dit vraagstuk staat de rol van digitale ondersteuning voor hoveniers centraal.
              </p>
              <p className="text-base text-[#111111]/70 mb-8 leading-relaxed">
                In dit portfolio wordt inzicht gegeven in de manier waarop dit vraagstuk is onderzocht, geanalyseerd en vertaald naar strategische keuzes, communicatieconcepten en een innovatieve digitale toepassing. De opbouw volgt deze lijn en laat stap voor stap zien hoe het proces tot stand is gekomen. Dit hele stuk moet nog opnieuw worden ingevuld.
              </p>
            </div>

          </div>
          <div className="border-t border-[#E0DEDF] mt-20" />
        </div>
      </section>

      {/* Portfolio sitemap diagram */}
      <PortfolioSitemap />

      {/* CTA bronnenlijst */}
      <section className="bg-[#58694C] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#EEF0ED]/60 text-xs font-semibold uppercase tracking-wide mb-1">
              Verantwoording
            </p>
            <p className="text-2xl font-bold text-white leading-snug">
              Alle gebruikte bronnen op een rij
            </p>
          </div>
          <Link
            href="/bronnenlijst"
            className="inline-flex items-center gap-2 bg-white text-[#58694C] px-6 py-3 rounded-lg font-semibold hover:bg-[#EEF0ED] transition-colors text-sm flex-shrink-0"
          >
            Bekijk bronnenlijst →
          </Link>
        </div>
      </section>

      {/* Leeruitkomsten & skills preview */}
      <HomeSection titel="Leeruitkomsten &amp; Skills" className="bg-[#EEF0ED]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <p className="text-xs font-semibold text-[#111111]/50 uppercase tracking-widest mb-4">
              Leeruitkomsten
            </p>
            <div className="flex flex-wrap gap-2">
              {leeruitkomsten.map((lu) => (
                <LearningOutcomeBadge
                  key={lu.code}
                  code={lu.code}
                  label={lu.label}
                  href="/leeruitkomsten"
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#111111]/50 uppercase tracking-widest mb-4">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <SkillBadge key={s.code} code={s.code} label={s.label} href="/skills" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/leeruitkomsten"
            className="inline-flex justify-center items-center border border-[#58694C] text-[#58694C] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#58694C] hover:text-white transition-colors text-sm"
          >
            Bekijk alle leeruitkomsten
          </Link>
          <Link
            href="/skills"
            className="inline-flex justify-center items-center border border-[#58694C] text-[#58694C] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#58694C] hover:text-white transition-colors text-sm"
          >
            Bekijk alle skills
          </Link>
        </div>
      </HomeSection>

      {/* Reflectie CTA */}
      <HomeSection titel="Ontwikkeling als communicatieprofessional" className="bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-[#111111]/70 mb-8 leading-relaxed">
            Gedurende mijn afstuderen heb ik mijn skills als communicatieprofessional verder ontwikkeld
            door te experimenteren met digitale mogelijkheden, feedback te verwerken en creatieve keuzes
            te onderbouwen met data en inzichten.
          </p>
          <Link
            href="/reflectie"
            className="inline-flex items-center gap-2 bg-[#E94E1B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d13f17] transition-colors text-sm"
          >
            Bekijk reflectie →
          </Link>
        </div>
      </HomeSection>
    </>
  );
}
