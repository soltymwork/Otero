'use client';

const links = [
  { label: 'Domov',   href: '#domov' },
  { label: 'Služby',  href: '#sluzby' },
  { label: 'O nás',   href: '#o-nas' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function NavbarInzinierska() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-white/10 flex items-center justify-center px-6 h-14 gap-10">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
