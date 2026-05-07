import type { ReactNode } from 'react';

interface HomeSectionProps {
  titel: string;
  children: ReactNode;
  className?: string;
}

export default function HomeSection({ titel, children, className = '' }: HomeSectionProps) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#111111] mb-10 text-center">{titel}</h2>
        {children}
      </div>
    </section>
  );
}
