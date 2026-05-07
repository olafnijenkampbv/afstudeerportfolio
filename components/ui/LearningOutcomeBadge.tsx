import Link from 'next/link';

interface LearningOutcomeBadgeProps {
  code: string;
  label?: string;
  href?: string;
}

export default function LearningOutcomeBadge({ code, label, href }: LearningOutcomeBadgeProps) {
  const className =
    'inline-flex items-center bg-white text-[#58694C] px-3 py-1 rounded-full text-sm font-medium border border-[#58694C]/30 hover:bg-[#EEF0ED] transition-colors';

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
