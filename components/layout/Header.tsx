'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/lib/data/navigation';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownClosing, setDropdownClosing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    if (animTimeout.current) clearTimeout(animTimeout.current);
    setDropdownClosing(false);
    setDropdownOpen(true);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => {
      setDropdownClosing(true);
      animTimeout.current = setTimeout(() => {
        setDropdownOpen(false);
        setDropdownClosing(false);
      }, 180);
    }, 80);
  };

  return (
    <header
      className="bg-white sticky top-0 z-50"
      style={{ boxShadow: '0 1px 0 #E3E2E2, 0 2px 8px rgba(0,0,0,0.04)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Naar homepagina">
            <div className="w-[42px] h-[42px] rounded-full bg-[#EEF0ED] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/logo.svg"
                alt="Olaf Nijenkamp"
                width={42}
                height={42}
              />
            </div>
          </Link>

          {/* Desktop navigatie */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Hoofdnavigatie">
            {navigationItems.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={openDropdown}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      className="flex items-center gap-[6px] text-[15px] font-semibold text-[#E94E1B] bg-white hover:bg-[#FFE5DD] transition-colors rounded-[6px] px-4 py-2"
                      style={{ border: '1.5px solid #E94E1B' }}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <Image
                        src="/icons/chevron-down.svg"
                        alt=""
                        width={9}
                        height={6}
                        className={`transition-transform duration-150 ${dropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {(dropdownOpen || dropdownClosing) && (
                      <>
                        {/* Overlay met lichte blur */}
                        <div
                          className="fixed left-0 right-0 bottom-0 bg-black/15 backdrop-blur-[2px] z-[44]"
                          style={{ top: 72 }}
                        />

                        {/* Full-width dropdown — z-[45] zodat header (z-50) er boven valt */}
                        <div
                          className={`${dropdownClosing ? 'dropdown-slide-out' : 'dropdown-slide-in'} fixed left-0 right-0 bg-white z-[45] border-t border-[#E3E2E2]`}
                          style={{
                            top: 72,
                            boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                            clipPath: 'inset(0px -50px -50px -50px)',
                          }}
                          onMouseEnter={openDropdown}
                          onMouseLeave={scheduleClose}
                        >
                          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-7">
                            <div className="flex">
                              {item.children.map((child, index) => (
                                <div key={child.href} className="flex flex-1 min-w-0">
                                  {index > 0 && (
                                    <div className="w-px self-stretch bg-[#E2E3E2] mx-6 flex-shrink-0" />
                                  )}
                                  <Link
                                    href={child.href}
                                    className="group flex items-center gap-5 flex-1 min-w-0 py-4 px-3 rounded-lg hover:bg-[#F7F8F6] transition-colors"
                                    onClick={() => { setDropdownClosing(true); animTimeout.current = setTimeout(() => { setDropdownOpen(false); setDropdownClosing(false); }, 180); }}
                                  >
                                    {/* Nummer blok */}
                                    <div className="flex-shrink-0 w-[68px] h-[68px] rounded-[10px] bg-[#F0F3EE] flex items-center justify-center">
                                      <span className="text-[#58694C] font-bold text-[22px]">
                                        {String(child.nummer ?? index + 1).padStart(2, '0')}
                                      </span>
                                    </div>

                                    {/* Tekst */}
                                    <div className="flex-1 min-w-0">
                                      {child.badge && (
                                        <span className="inline-block px-2 py-[3px] rounded text-[10px] font-bold uppercase tracking-wider bg-[#FFE5DD] text-[#E94E1B] mb-2">
                                          {child.badge}
                                        </span>
                                      )}
                                      <p className="font-bold text-[#111111] text-[16px] leading-snug whitespace-pre-line">
                                        {child.label}
                                      </p>
                                    </div>

                                    {/* Inline arrow SVG (arrow-right.svg heeft witte stroke, dus inline met juiste kleur) */}
                                    <svg
                                      className="flex-shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
                                      width="18"
                                      height="18"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M3.33366 8.0013H12.667M12.667 8.0013L8.00033 3.33464M12.667 8.0013L8.00033 12.668"
                                        stroke="#111111"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="text-[15px] font-semibold text-[#111111] hover:text-[#E94E1B] transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobiele menuknop */}
          <button
            className="md:hidden p-2 text-[#111111] hover:text-[#E94E1B] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobiel menu */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-white border-t border-[#E3E2E2] px-4 py-4 space-y-1"
          aria-label="Mobiele navigatie"
        >
          {navigationItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="pb-2">
                  <p className="text-xs font-semibold text-[#E94E1B] uppercase tracking-widest px-3 py-2">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm font-semibold text-[#111111] hover:bg-[#EEF0ED] hover:text-[#E94E1B] rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                className="block px-3 py-2 text-sm font-semibold text-[#111111] hover:text-[#E94E1B] hover:bg-[#EEF0ED] rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
