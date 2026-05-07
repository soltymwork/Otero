'use client';

const links = [
  { label: 'Domov',    href: '#domov' },
  { label: 'Výhody',   href: '#vyhody' },
  { label: 'Produkty', href: '#produkty' },
  { label: 'Galéria',  href: '#galeria' },
  { label: 'Kontakt',  href: '#kontakt' },
];

export default function NavbarBrany() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1a2035] flex items-center justify-center px-6 h-14 gap-10">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors"
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
