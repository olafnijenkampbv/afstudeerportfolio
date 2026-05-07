import type { DocumentationSectie } from '@/types';

interface DocumentationSectieRendererProps {
  secties: DocumentationSectie[];
}

export default function DocumentationSectieRenderer({ secties }: DocumentationSectieRendererProps) {
  return (
    <>
      {secties.map((sectie, index) => (
        <section key={sectie.id} id={sectie.id} className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-7">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EEF0ED] border border-[#58694C]/20 text-[#58694C] text-xs font-bold flex items-center justify-center">
              {index + 1}
            </span>
            <h2 className="text-2xl font-bold text-[#111111] leading-tight">{sectie.titel}</h2>
          </div>

          {sectie.subsecties?.map((sub) => (
            <div key={sub.id} id={sub.id} className="mb-10 scroll-mt-24 pl-10">
              <h3 className="text-base font-semibold text-[#111111] mb-3 pb-2.5 border-b border-[#E3E2E2]">
                {sub.titel}
              </h3>
              <p className="text-sm text-[#111111]/35 italic">
                Inhoud volgt in fase 4.
              </p>
            </div>
          ))}

          {!sectie.subsecties && (
            <div className="pl-10">
              <p className="text-sm text-[#111111]/35 italic">
                Inhoud volgt in fase 4.
              </p>
            </div>
          )}
        </section>
      ))}
    </>
  );
}
