import type { NavItem } from '@/types';

export const navigationItems: NavItem[] = [
  {
    label: 'Beroepsproducten',
    children: [
      { label: 'Organisatiestrategie Olaf Nijenkamp', href: '/beroepsproduct-1', nummer: 1, badge: 'Strategie' },
      { label: 'Beplantingsplan\nWebtool', href: '/beroepsproduct-2', nummer: 2, badge: 'Communicatieconcept' },
      { label: 'Beplantingsplantekening applicatie', href: '/beroepsproduct-3', nummer: 3, badge: 'Innovatief' },
    ],
  },
  { label: 'Leeruitkomsten', href: '/leeruitkomsten' },
  { label: 'Skills', href: '/skills' },
  { label: 'Bijlage', href: '/bijlage' },
  { label: 'Bronnenlijst', href: '/bronnenlijst' },
  { label: 'Reflectie', href: '/reflectie' },
];
