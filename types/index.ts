export interface BeroepsproductItem {
  slug: string;
  nummer: number;
  titel: string;
  niveau: string;
  intro: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  leeruitkomsten: string[];
  skills: string[];
}

export interface LeeruitkomstItem {
  code: string;
  label: string;
  bp1: boolean;
  bp2: boolean;
  bp3: boolean;
}

export interface SkillItem {
  code: string;
  label: string;
  bp1: boolean;
  bp2: boolean;
  bp3: boolean;
}

export interface NavChild {
  label: string;
  href: string;
  nummer?: number;
  badge?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

export interface DocumentationSubsectie {
  id: string;
  titel: string;
}

export interface DocumentationSectie {
  id: string;
  titel: string;
  subsecties?: DocumentationSubsectie[];
}
