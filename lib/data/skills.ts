import type { SkillItem } from '@/types';

export const skills: SkillItem[] = [
  { code: 'OV4', label: 'Onderzoekend vermogen',   bp1: true,  bp2: false, bp3: true  },
  { code: 'IK4', label: 'Innovatiekracht',          bp1: false, bp2: true,  bp3: true  },
  { code: 'SW4', label: 'Samenwerken',              bp1: true,  bp2: true,  bp3: false },
  { code: 'RV4', label: 'Reflectief vermogen',      bp1: false, bp2: true,  bp3: true  },
  { code: 'EV4', label: 'Empathisch vermogen',      bp1: true,  bp2: true,  bp3: false },
  { code: 'EB4', label: 'Ethisch besef',            bp1: false, bp2: true,  bp3: false },
  { code: 'WB4', label: 'Wendbaarheid',             bp1: false, bp2: true,  bp3: true  },
  { code: 'PL4', label: 'Persoonlijk leiderschap',  bp1: false, bp2: true,  bp3: true  },
  { code: 'TV4', label: 'Taalvaardigheid',          bp1: true,  bp2: true,  bp3: true  },
];
