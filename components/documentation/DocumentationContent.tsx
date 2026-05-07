import type { ReactNode } from 'react';

interface DocumentationContentProps {
  children: ReactNode;
}

export default function DocumentationContent({ children }: DocumentationContentProps) {
  return (
    <article className="flex-1 min-w-0 text-[#111111]">
      {children}
    </article>
  );
}
