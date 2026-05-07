import Link from 'next/link';

export default function Footer({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const isDark = theme === 'dark';
  
  return (
    <footer className={`py-12 px-6 border-t ${isDark ? 'bg-black text-white border-white/10' : 'bg-neutral-50 text-black border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto">
      
      <div className={`text-center font-light text-xs tracking-widest uppercase ${isDark ? 'text-white/40' : 'text-neutral-400'}`}>
        &copy; {new Date().getFullYear()} VYTVORENÉ PRE VÁS. VŠETKY PRÁVA VYHRADENÉ.
      </div>
      </div>
    </footer>
  );
}
