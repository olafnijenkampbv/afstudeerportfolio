import Link from 'next/link';

interface ProductCardProps {
  title: string;
  label: string;
  description: string;
  href: string;
}

export default function ProductCard({ title, label, description, href }: ProductCardProps) {
  return (
    <div className="bg-white border border-[#E3E2E2] rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="mb-4">
        <span className="inline-block bg-[#FFE5DD] text-[#E94E1B] px-3 py-1 rounded-full text-sm font-medium">
          {label}
        </span>
      </div>
      <h3 className="text-xl font-bold text-[#1F2A1F] mb-3">{title}</h3>
      <p className="text-[#1F2A1F] mb-6 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="bg-[#58694C] text-white px-4 py-2 rounded-md font-medium hover:bg-[#4a5a3f] transition-colors inline-block"
      >
        Bekijk beroepsproduct
      </Link>
    </div>
  );
}