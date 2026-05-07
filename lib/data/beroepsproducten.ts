import type { BeroepsproductItem } from '@/types';

export const beroepsproducten: BeroepsproductItem[] = [
  {
    slug: 'beroepsproduct-1',
    nummer: 1,
    titel: 'Organisatiestrategie Olaf Nijenkamp',
    niveau: 'Strategisch',
    intro:
      'Onderzoek, analyse en strategische vertaling voor de organisatie. Dit beroepsproduct laat zien hoe communicatiestrategie wordt ingezet om de organisatiedoelen van Olaf Nijenkamp te ondersteunen.',
    href: '/beroepsproduct-1',
    imageSrc: '/images/mijn-beroepsproducten-bp1.jpg',
    imageAlt: 'Organisatiestrategie Olaf Nijenkamp',
    leeruitkomsten: ['CS4.5', 'DG4.3', 'PO4.1', 'OD4.3'],
    skills: ['OV4', 'SW4', 'EV4', 'TV4'],
  },
  {
    slug: 'beroepsproduct-2',
    nummer: 2,
    titel: 'Beplantingsplan Webtool',
    niveau: 'Communicatieconcept',
    intro:
      'Een digitaal communicatieconcept dat hoveniers ondersteunt in het beplantingsplanproces. De webtool combineert gebruiksvriendelijkheid met inhoudelijke diepgang.',
    href: '/beroepsproduct-2',
    imageSrc: '/images/hero-bp2-mockup.png',
    imageAlt: 'Beplantingsplan Webtool mockup',
    leeruitkomsten: ['CC4.1', 'CC4.2', 'CC4.3', 'CC4.4', 'CC4.5', 'CS4.5', 'DG4.3', 'PO4.1', 'OD4.3', 'VB4.1'],
    skills: ['IK4', 'SW4', 'RV4', 'EV4', 'EB4', 'WB4', 'PL4', 'TV4'],
  },
  {
    slug: 'beroepsproduct-3',
    nummer: 3,
    titel: 'Beplantingsplantekening applicatie',
    niveau: 'Innovatieconcept',
    intro:
      'Een interactieve applicatie waarmee beplantingsplannen visueel en gebruiksvriendelijk worden uitgewerkt. Dit innovatieconcept verkent de kansen van AI en digitalisering voor Olaf Nijenkamp.',
    href: '/beroepsproduct-3',
    imageSrc: '/images/hero-bp3-mockup.jpg',
    imageAlt: 'Beplantingsplantekening applicatie mockup',
    leeruitkomsten: ['CC4.1', 'CC4.2', 'CC4.3', 'CC4.4', 'CC4.5', 'OD4.3', 'VB4.1'],
    skills: ['OV4', 'IK4', 'RV4', 'WB4', 'PL4', 'TV4'],
  },
];
