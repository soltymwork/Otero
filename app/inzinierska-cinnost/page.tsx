import Image from 'next/image';
import NavbarInzinierska from '@/components/NavbarInzinierska';
import ContactFormInzinierska from '@/components/ContactFormInzinierska';
import Footer from '@/components/Footer';
import { PencilRuler, FileText, Gavel, Home, Search, Key, Shield, Clock, Users, Check } from 'lucide-react';
import StatsSection from '@/components/StatsSection';

export default function InzinierskaCinnostPage() {
  return (
    <main className="min-h-screen bg-black text-white/85 selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section id="domov" className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <NavbarInzinierska />
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop"
            alt="Inžinierska činnosť"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <h1 className="font-[family-name:var(--font-archivo-black)] text-2xl md:text-3xl lg:text-4xl text-white uppercase tracking-[0.1em] mb-6">
            Komplexná inžinierska činnosť<br />pre váš stavebný zámer
          </h1>
          <p className="text-sm md:text-base text-white/80 tracking-widest font-light uppercase max-w-3xl mx-auto leading-relaxed">
            Zabezpečíme všetko od prvej skice cez projektovú dokumentáciu až po finálnu kolaudáciu. Stavajte bez stresu s profesionálmi z OTERO Project.
          </p>
        </div>
      </section>

      <StatsSection />

      {/* Services Section */}
      <section id="sluzby" className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-white">
            Naše odborné služby
          </h2>
          <p className="text-white/60 font-light mt-6 max-w-2xl mx-auto leading-relaxed">
            Poskytujeme kompletný servis v oblasti prípravy a povoľovania stavieb pod značkou OTERO Project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
              <PencilRuler className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white">Projektová dokumentácia</h3>
            <p className="text-white/60 font-light leading-relaxed mb-6 h-auto md:h-24">
              Vypracovanie dokumentácie pre územné rozhodnutie, stavebné povolenie aj realizačné projekty "na kľúč".
            </p>
            <ul className="space-y-3 text-sm text-white/90 font-medium">
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Architektonické štúdie</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Dokumentácia pre SP</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Realizačné projekty</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
              <FileText className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white">Inžinierska činnosť</h3>
            <p className="text-white/60 font-light leading-relaxed mb-6 h-auto md:h-24">
              Zastupovanie pred orgánmi štátnej správy a dotknutými orgánmi v celom procese schvaľovania.
            </p>
            <ul className="space-y-3 text-sm text-white/90 font-medium">
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Územné konanie</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Stavebné povolenia</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Kolaudačné rozhodnutia</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
              <Gavel className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white">Legalizácia stavieb</h3>
            <p className="text-white/60 font-light leading-relaxed mb-6 h-auto md:h-24">
              Pomôžeme vám s dodatočným povolením stavieb a riešením nezrovnalostí v katastri nehnuteľností.
            </p>
            <ul className="space-y-3 text-sm text-white/90 font-medium">
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Pasportizácia objektov</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Dodatočné povolenie</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Príprava podkladov</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
              <Home className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white">Jednoduché stavby</h3>
            <p className="text-white/60 font-light leading-relaxed mb-6 h-auto md:h-24">
              Vybavenie ohlásenia drobných a jednoduchých stavieb, garáží, oplotenia alebo altánkov.
            </p>
            <ul className="space-y-3 text-sm text-white/90 font-medium">
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Ohlásenie drobnej stavby</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Prípojky inžinierskych sietí</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Zrýchlený proces</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
              <Search className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white">Stavebný zámer</h3>
            <p className="text-white/60 font-light leading-relaxed mb-6 h-auto md:h-24">
              Odborné posúdenie vášho investičného zámeru z hľadiska územného plánu a technických noriem.
            </p>
            <ul className="space-y-3 text-sm text-white/90 font-medium">
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Analýza pozemku</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Predbežné konzultácie</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Optimalizácia nákladov</li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
              <Key className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white">Projekty na kľúč</h3>
            <p className="text-white/60 font-light leading-relaxed mb-6 h-auto md:h-24">
              Kompletné prevzatie zodpovednosti za celý projekt od A po Z, aby ste ušetrili čas.
            </p>
            <ul className="space-y-3 text-sm text-white/90 font-medium">
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Manažment projektu</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Dozor a kontrola</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-white" /> Odovzdanie hotového diela</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prečo si vybrať nás */}
      <section id="o-nas" className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-t border-white/10">
        <div className="order-2 lg:order-1 relative h-[500px] w-full border border-white/10 p-4">
           <Image 
            src="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&w=800&auto=format&fit=crop"
            alt="Inžinierske nákresy a detaily"
            fill
            className="object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-12 text-white">
            Prečo si vybrať<br/>OTERO Project?
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white flex items-center gap-4">
                <Shield className="w-8 h-8 text-white" />
                Právna istota
              </h3>
              <p className="text-white/60 font-light leading-relaxed pl-12">
                Všetky projekty a povolenia riešime v súlade s aktuálnym stavebným zákonom. Dodávame 100% zosúladenú dokumentáciu a úzko spolupracujeme s úradmi.
              </p>
            </div>
            <div>
               <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white flex items-center gap-4">
                <Clock className="w-8 h-8 text-white" />
                Dodržiavanie termínov
              </h3>
              <p className="text-white/60 font-light leading-relaxed pl-12">
                Vieme, že v stavebníctve je čas kľúčový. Pracujeme efektívne a bez zbytočných odkladov, aby váš projekt mohol uspredovať podľa harmonogramu.
              </p>
            </div>
            <div>
               <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white flex items-center gap-4">
                <Users className="w-8 h-8 text-white" />
                Individuálny prístup
              </h3>
              <p className="text-white/60 font-light leading-relaxed pl-12">
                Každý stavebný zámer je jedinečný a pristupujeme k nemu na mieru vašim potrebám.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="kontakt" className="py-24 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between">
          <div className="lg:w-1/2">
             <h2 className="text-3xl font-bold uppercase tracking-widest mb-6 text-white">
              Kontaktujte nás
            </h2>
            <div className="mb-8 space-y-6">
              <p className="text-white/60 font-light leading-relaxed">
                 Máte otázky k vášmu stavebnému zámeru? Napíšte tímu OTERO Project alebo zavolajte a dohodneme si bezplatnú úvodnú konzultáciu.
              </p>
              
               <div className="space-y-3 pt-4 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold tracking-widest uppercase text-xs w-20">Telefón:</span>
                  <a href="tel:+421900000000" className="text-white/60 hover:text-white transition-colors">+421 9XX XXX XXX</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold tracking-widest uppercase text-xs w-20">Email:</span>
                  <a href="mailto:info@oteroproject.sk" className="text-white/60 hover:text-white transition-colors">info@oteroproject.sk</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold tracking-widest uppercase text-xs w-20">Adresa:</span>
                  <span className="text-white/60">Slovensko (pôsobnosť celá SR)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-start lg:justify-end">
            <ContactFormInzinierska />
          </div>
        </div>
      </section>
      
      <Footer theme="dark" />
    </main>
  );
}
