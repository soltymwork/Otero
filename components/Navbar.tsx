import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-6 md:p-12 flex items-center justify-between pointer-events-none">
      <Link 
        href="/" 
        className="pointer-events-auto flex items-center gap-4 text-white hover:text-white/70 transition-colors"
      >
        <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/20">
          <ArrowLeft size={16} />
        </div>
        <span className="text-xs font-bold tracking-[0.2em] uppercase">Späť na úvod</span>
      </Link>
    </nav>
  );
}
