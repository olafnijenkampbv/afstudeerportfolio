import Link from 'next/link';

interface SkillBadgeProps {
  code: string;
  label?: string;
  href?: string;
}

export default function SkillBadge({ code, label, href }: SkillBadgeProps) {
  const className =
    'inline-flex items-center bg-[#FFE5DD] text-[#E94E1B] px-3 py-1 rounded-full text-sm font-medium border border-[#E94E1B]/20 hover:bg-[#ffd5c8] transition-colors';

  if (href) {
    return (
      <Link href={href} title={label} className={className}>
        {code}
      </Link>
    );
  }

  return (
    <span title={label} className={className}>
      {code}
    </span>
  );
}
