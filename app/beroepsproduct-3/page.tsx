import type { Metadata } from 'next';
import ProductHero from '@/components/sections/ProductHero';
import EvidenceBadgeSection from '@/components/sections/EvidenceBadgeSection';
import DocumentationLayout from '@/components/documentation/DocumentationLayout';
import DocumentationSectieRenderer from '@/components/documentation/DocumentationSectieRenderer';
import { beroepsproducten } from '@/lib/data/beroepsproducten';
import { sectiesBP3 } from '@/lib/data/documentatie-secties';

export const metadata: Metadata = {
  title: 'BP3 — Beplantingsplantekening applicatie | Olaf Nijenkamp',
};

const bp = beroepsproducten[2];

export default function Beroepsproduct3() {
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
      <DocumentationLayout secties={sectiesBP3}>
        <DocumentationSectieRenderer secties={sectiesBP3} />
      </DocumentationLayout>
    </>
  );
}
