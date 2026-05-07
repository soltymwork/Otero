import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Check, Clock, Palette, Weight } from 'lucide-react';

export default function BranyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://jhrgate.com/wp-content/uploads/2024/08/94.jpg"
            alt="Hliníkové brány"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-32">
          <h1 className="font-[family-name:var(--font-archivo-black)] text-4xl md:text-7xl text-white uppercase tracking-[0.1em] mb-6">
            Elegancia<br />Otero AluGates
          </h1>
          <p className="text-sm md:text-base text-neutral-700 tracking-widest font-light uppercase max-w-2xl mx-auto leading-relaxed">
            Prvotriedne hliníkové brány a oplotenia na mieru s doživotnou odolnosťou voči korózii a nadčasovým dizajnom.
          </p>
        </div>
      </section>

      {/* Prečo si vybrať hliník? */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-neutral-100">
        <h2 className="text-3xl font-bold uppercase tracking-widest mb-16 text-black text-center">
          Prečo si vybrať hliník?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center mb-6 border border-neutral-100">
              <Clock className="text-black" size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-black">Bezúdržbovosť</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Zabudnite na brúsenie a natieranie. Hliník nehrdzavie a zachováva si farbu desiatky rokov.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center mb-6 border border-neutral-100">
              <Palette className="text-black" size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-black">Luxusný dizajn</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Široká škála RAL farieb a moderné tvary, ktoré dokonale doplnia architektúru vašej novostavby.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center mb-6 border border-neutral-100">
              <Weight className="text-black" size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-black">Nízka váha</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Ľahkosť materiálu šetrí motorové pohony a zaisťuje tichú a plynulú manipuláciu s bránou.
            </p>
          </div>
        </div>
      </section>

      {/* Naše riešenia */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-black">
            Naše riešenia
          </h2>
          <p className="text-neutral-500 font-light mt-4">
            Vyberte si typ brány, ktorý najlepšie vyhovuje vášmu priestoru.
          </p>
        </div>

        {/* Typ 1: Samonosné */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold text-neutral-400 tracking-[0.2em] uppercase mb-4 block">Premium Line</span>
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-black">Samonosné brány</h3>
            <div className="space-y-4 text-neutral-600 font-light leading-relaxed">
              <p>
                Elegantné riešenie bez koľajnice. Brána "pláva" nad zemou, čo uľahčuje údržbu najmä v zimnom období.
              </p>
              <ul className="list-none space-y-3 mt-4 text-black font-medium">
                <li className="flex items-center gap-3"><Check size={18} className="text-black" /> Bez koľajnice v prejazde</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-black" /> Tichý posuvný systém</li>
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] w-full bg-neutral-100 p-4">
             <Image src="https://jhrgate.com/wp-content/uploads/2024/08/P1-1.jpg" alt="Samonosná brána" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Typ 2: Koľajnicové */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] w-full bg-neutral-100 p-4">
             <Image src="https://acefence1961.com/wp-content/uploads/2024/05/image-1-1.jpg" alt="Koľajnicová brána" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold text-neutral-400 tracking-[0.2em] uppercase mb-4 block">Klasické & Stabilné</span>
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-black">Koľajnicové brány</h3>
            <div className="space-y-4 text-neutral-600 font-light leading-relaxed">
              <p>
                Ideálna voľba pri nedostatku bočného priestoru. Brána sa posúva po koľajnici osadenej v úrovni terénu.
              </p>
              <ul className="list-none space-y-3 mt-4 text-black font-medium">
                <li className="flex items-center gap-3"><Check size={18} className="text-black" /> Úspora miesta pri zasúvaní</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-black" /> Vysoká stabilita a tuhosť</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Typ 3: Krídlové */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold text-neutral-400 tracking-[0.2em] uppercase mb-4 block">Tradičný Dizajn</span>
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-black">Krídlové brány</h3>
            <div className="space-y-4 text-neutral-600 font-light leading-relaxed">
              <p>
                Klasické otváranie v modernom hliníkovom prevedení. Vhodné pre pozemky s dostatočným priestorom vo dvore.
              </p>
              <ul className="list-none space-y-3 mt-4 text-black font-medium">
                <li className="flex items-center gap-3"><Check size={18} className="text-black" /> Možnosť otvárania dnu i von</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-black" /> Nenáročná stavebná príprava</li>
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] w-full bg-neutral-100 p-4">
             <Image src="https://jhrgate.com/wp-content/uploads/2024/08/32-4.jpg" alt="Krídlová brána" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Galéria */}
      <section className="py-24 bg-white px-6 md:px-12 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-3xl font-bold uppercase tracking-widest mb-16 text-black text-center">
            Galéria realizácií
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "https://jhrgate.com/wp-content/uploads/2024/08/W9.jpg",
              "https://jhrgate.com/wp-content/uploads/2024/08/W1.jpg",
              "https://acefence1961.com/wp-content/uploads/2024/05/image-1-1.jpg",
              "https://jhrgate.com/wp-content/uploads/2024/08/25-5.jpg"
            ].map((imgSrc, i) => (
               <div key={i} className="relative h-[400px] w-full bg-neutral-100">
                 <Image src={imgSrc} alt={`Realizácia ${i + 1}`} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-neutral-50 px-6 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between">
          <div className="lg:w-1/2">
             <h2 className="text-3xl font-bold uppercase tracking-widest mb-6 text-black">
              Kontakt
            </h2>
            <div className="mb-8 space-y-6">
              <p className="text-neutral-600 font-light leading-relaxed">
                 Zavolajte nám alebo napíšte, radi s vami preberieme vaše požiadavky a pripravíme nezáväznú cenovú ponuku. Každý projekt riešime individuálne s dôrazom na detail.
              </p>
              
              <div className="space-y-3 pt-4 border-t border-neutral-200">
                <div className="flex items-center gap-3">
                  <span className="text-black font-bold tracking-widest uppercase text-xs">Telefón:</span>
                  <a href="tel:+421900000000" className="text-neutral-600 hover:text-black transition-colors">+421 9XX XXX XXX</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-black font-bold tracking-widest uppercase text-xs">Email:</span>
                  <a href="mailto:info@vasafirma.sk" className="text-neutral-600 hover:text-black transition-colors">info@vasafirma.sk</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-black font-bold tracking-widest uppercase text-xs">Adresa:</span>
                  <span className="text-neutral-600">Sídlo Vašej Firmy 123, 000 00 Mesto</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-start lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer theme="light" />
    </main>
  );
}
