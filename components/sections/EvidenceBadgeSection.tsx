import LearningOutcomeBadge from '@/components/ui/LearningOutcomeBadge';
import SkillBadge from '@/components/ui/SkillBadge';

interface EvidenceBadgeSectionProps {
  leeruitkomsten: string[];
  skills: string[];
}

export default function EvidenceBadgeSection({ leeruitkomsten, skills }: EvidenceBadgeSectionProps) {
  return (
    <section className="bg-[#EEF0ED] py-12 px-4 sm:px-6 lg:px-8 border-y border-[#E3E2E2]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-[#111111] mb-8">
          Aangetoonde leeruitkomsten en skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs font-semibold text-[#111111]/50 uppercase tracking-widest mb-4">
              Leeruitkomsten
            </p>
            <div className="flex flex-wrap gap-2">
              {leeruitkomsten.map((code) => (
                <LearningOutcomeBadge key={code} code={code} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#111111]/50 uppercase tracking-widest mb-4">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((code) => (
                <SkillBadge key={code} code={code} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
