import Link from 'next/link';

export default function Footer({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const isDark = theme === 'dark';
  
  return (
    <footer className={`py-12 px-6 border-t ${isDark ? 'bg-black text-white border-white/10' : 'bg-neutral-50 text-black border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Kontakt</h3>
          <p className={`font-light mb-2 ${isDark ? 'text-white/70' : 'text-neutral-600'}`}>Telefón: +421 9XX XXX XXX</p>
          <p className={`font-light mb-2 ${isDark ? 'text-white/70' : 'text-neutral-600'}`}>Email: info@vasafirma.sk</p>
          <p className={`font-light ${isDark ? 'text-white/70' : 'text-neutral-600'}`}>Adresa: Vaša Ulica 123, 000 00 Mesto</p>
        </div>
        
        <div className="text-left md:text-right">
          <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Sledujte Nás</h3>
          <div className="flex flex-col gap-2">
            <Link href="#" className={`font-light hover:underline ${isDark ? 'text-white/70' : 'text-neutral-600'}`}>Facebook</Link>
            <Link href="#" className={`font-light hover:underline ${isDark ? 'text-white/70' : 'text-neutral-600'}`}>Instagram</Link>
          </div>
        </div>
      </div>
      
      <div className={`text-center mt-12 font-light text-xs tracking-widest uppercase ${isDark ? 'text-white/40' : 'text-neutral-400'}`}>
        &copy; {new Date().getFullYear()} VYTVORENÉ PRE VÁS. VŠETKY PRÁVA VYHRADENÉ.
      </div>
    </footer>
  );
}
