import type { ReactNode } from 'react';
import DocumentationSidebar from './DocumentationSidebar';
import DocumentationContent from './DocumentationContent';
import type { DocumentationSectie } from '@/types';

interface DocumentationLayoutProps {
  secties: DocumentationSectie[];
  children: ReactNode;
}

export default function DocumentationLayout({ secties, children }: DocumentationLayoutProps) {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex gap-12">
        <DocumentationSidebar secties={secties} />
        <DocumentationContent>{children}</DocumentationContent>
      </div>
    </section>
  );
}
