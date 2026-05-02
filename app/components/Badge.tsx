interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="inline-block bg-[#EEF0ED] text-[#58694C] px-3 py-1 rounded-full text-sm font-medium border border-[#E3E2E2]">
      {text}
    </span>
  );
}