interface CTAInfoBlockProps {
  titel: string;
  tekst: string;
}

export default function CTAInfoBlock({ titel, tekst }: CTAInfoBlockProps) {
  return (
    <div className="mt-6 bg-[#EEF0ED] border border-[#58694C]/20 rounded-xl p-5 flex items-start gap-4">
      <div className="w-5 h-5 rounded-full bg-[#58694C] flex-shrink-0 mt-0.5" aria-hidden="true" />
      <div>
        <p className="font-semibold text-[#111111] mb-1">{titel}</p>
        <p className="text-sm text-[#111111]/70 leading-relaxed">{tekst}</p>
      </div>
    </div>
  );
}
