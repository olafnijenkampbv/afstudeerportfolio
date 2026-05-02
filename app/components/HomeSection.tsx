interface HomeSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function HomeSection({ title, children, className = '' }: HomeSectionProps) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1F2A1F] mb-8 text-center">{title}</h2>
        {children}
      </div>
    </section>
  );
}