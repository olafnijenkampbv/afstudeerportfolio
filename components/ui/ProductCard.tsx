import Link from 'next/link';

interface ProductCardProps {
  nummer: number;
  titel: string;
  niveau: string;
  intro: string;
  href: string;
}

export default function ProductCard({ nummer, titel, niveau, intro, href }: ProductCardProps) {
  return (
    <div className="bg-white border border-[#E3E2E2] rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-xs font-bold text-[#58694C] uppercase tracking-widest">BP{nummer}</span>
        <span className="inline-block bg-[#FFE5DD] text-[#E94E1B] px-3 py-1 rounded-full text-xs font-medium">
          {niveau}
        </span>
      </div>
      <h3 className="text-lg font-bold text-[#111111] mb-3 leading-snug">{titel}</h3>
      <p className="text-sm text-[#111111]/70 mb-6 leading-relaxed flex-1">{intro}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-[#58694C] font-semibold text-sm hover:text-[#4a5a3f] transition-colors group"
      >
        Bekijk beroepsproduct
        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </Link>
    </div>
  );
}
