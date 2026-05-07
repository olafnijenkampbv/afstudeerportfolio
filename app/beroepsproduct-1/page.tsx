import type { Metadata } from 'next';
import ProductHero from '@/components/sections/ProductHero';
import EvidenceBadgeSection from '@/components/sections/EvidenceBadgeSection';
import DocumentationLayout from '@/components/documentation/DocumentationLayout';
import DocumentationSectieRenderer from '@/components/documentation/DocumentationSectieRenderer';
import { beroepsproducten } from '@/lib/data/beroepsproducten';
import { sectiesBP1 } from '@/lib/data/documentatie-secties';

export const metadata: Metadata = {
  title: 'BP1 — Organisatiestrategie | Olaf Nijenkamp',
};

const bp = beroepsproducten[0];

export default function Beroepsproduct1() {
  return (
    <>
      <ProductHero
        nummer={bp.nummer}
        titel={bp.titel}
        niveau={bp.niveau}
        intro={bp.intro}
        imageSrc={bp.imageSrc}
        imageAlt={bp.imageAlt}
      />
      <EvidenceBadgeSection
        leeruitkomsten={bp.leeruitkomsten}
        skills={bp.skills}
      />
      <DocumentationLayout secties={sectiesBP1}>
        <DocumentationSectieRenderer secties={sectiesBP1} />
      </DocumentationLayout>
    </>
  );
}
