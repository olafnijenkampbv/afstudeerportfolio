'use client';

import { useState, useEffect } from 'react';
import type { DocumentationSectie } from '@/types';

interface DocumentationSidebarProps {
  secties: DocumentationSectie[];
}

export default function DocumentationSidebar({ secties }: DocumentationSidebarProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const ids = secties.flatMap((s) => [s.id, ...(s.subsecties?.map((sub) => sub.id) ?? [])]);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const zichtbaar = entries.find((e) => e.isIntersecting);
        if (zichtbaar) setActiveId(zichtbaar.target.id);
      },
      { rootMargin: '-10% 0% -70% 0%', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [secties]);

  return (
    <aside className="hidden lg:block w-60 flex-shrink-0">
      <div className="sticky top-24">
        <p className="text-xs font-semibold text-[#111111]/40 uppercase tracking-widest mb-4 px-3">
          Inhoud
        </p>
        <nav className="space-y-0.5">
          {secties.map((sectie) => (
            <div key={sectie.id}>
              <a
                href={`#${sectie.id}`}
                className={`block text-sm py-1.5 px-3 rounded-md transition-colors ${
                  activeId === sectie.id
                    ? 'bg-[#EEF0ED] text-[#58694C] font-semibold'
                    : 'text-[#111111]/60 hover:text-[#58694C] hover:bg-[#EEF0ED]/50'
                }`}
              >
                {sectie.titel}
              </a>
              {sectie.subsecties && (
                <div className="ml-3 mt-0.5 mb-1 space-y-0.5">
                  {sectie.subsecties.map((sub) => (
                    <a
                      key={sub.id}
                      href={`#${sub.id}`}
                      className={`block text-xs py-1 px-3 rounded-md transition-colors ${
                        activeId === sub.id
                          ? 'text-[#58694C] font-medium'
                          : 'text-[#111111]/40 hover:text-[#58694C]'
                      }`}
                    >
                      {sub.titel}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
