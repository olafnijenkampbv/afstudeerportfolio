import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1F2A1F] text-[#FAFAF7] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-bold text-base mb-1">Olaf Nijenkamp</p>
            <p className="text-sm text-[#EEF0ED]/60 leading-relaxed">
              Afstudeerportfolio<br />
              Creatieve concept- en contentontwerper<br />
              HBO Communicatie
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#EEF0ED]/40 mb-4">
              Beroepsproducten
            </p>
            <ul className="space-y-2">
              {[
                { href: '/beroepsproduct-1', label: 'Beroepsproduct 1 — Strategisch' },
                { href: '/beroepsproduct-2', label: 'Beroepsproduct 2 — Communicatieconcept' },
                { href: '/beroepsproduct-3', label: 'Beroepsproduct 3 — Innovatieconcept' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#EEF0ED]/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#EEF0ED]/40 mb-4">
              Portfolio
            </p>
            <ul className="space-y-2">
              {[
                { href: '/leeruitkomsten', label: 'Leeruitkomsten' },
                { href: '/skills', label: 'Skills' },
                { href: '/reflectie', label: 'Reflectie' },
                { href: '/bronnenlijst', label: 'Bronnenlijst' },
                { href: '/bijlage', label: 'Bijlage' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#EEF0ED]/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-[#EEF0ED]/40 text-center">
          © {new Date().getFullYear()} Olaf Nijenkamp — Afstudeerportfolio HBO Communicatie
        </div>
      </div>
    </footer>
  );
}
