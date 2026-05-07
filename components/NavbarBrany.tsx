'use client';

import Link from 'next/link';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { label: 'Domov',    href: '#domov' },
  { label: 'Výhody',   href: '#vyhody' },
  { label: 'Produkty', href: '#produkty' },
  { label: 'Galéria',  href: '#galeria' },
  { label: 'Kontakt',  href: '#kontakt' },
];

export default function NavbarBrany() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 h-16 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3 text-white hover:text-white/70 transition-colors">
        <ArrowLeft size={18} strokeWidth={1.5} />
        <span className="text-xs font-bold tracking-[0.2em] uppercase">Späť na úvod</span>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
            {l.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden z-40">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold tracking-[0.3em] uppercase text-white/80 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
