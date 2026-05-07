import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const links = [
  { label: 'Domov',    href: '#domov' },
  { label: 'Výhody',   href: '#vyhody' },
  { label: 'Produkty', href: '#produkty' },
  { label: 'Galéria',  href: '#galeria' },
  { label: 'Kontakt',  href: '#kontakt' },
];

export default function NavbarBrany() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 h-16 flex items-center justify-between pointer-events-none">
      <Link href="/" className="pointer-events-auto flex items-center gap-3 text-white hover:text-white/70 transition-colors">
        <ArrowLeft size={18} strokeWidth={1.5} />
        <span className="text-xs font-bold tracking-[0.2em] uppercase">Späť na úvod</span>
      </Link>
      <div className="pointer-events-auto hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
