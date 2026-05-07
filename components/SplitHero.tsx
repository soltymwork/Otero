'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Left Side - Hliníkové brány */}
      <motion.div
        className="relative flex h-full cursor-pointer flex-col items-center justify-center border-r-[0.5px] border-white/20"
        onHoverStart={() => setHoveredSide('left')}
        onHoverEnd={() => setHoveredSide(null)}
        animate={{
          width: hoveredSide === 'left' ? '70%' : hoveredSide === 'right' ? '30%' : '50%',
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://jhrgate.com/wp-content/uploads/2024/08/94.jpg"
            alt="Hliníkové brány"
            fill
            priority
            className="object-cover transition-opacity duration-700"
            style={{ 
              filter: hoveredSide === 'right' ? 'grayscale(100%)' : 'grayscale(0%)',
              opacity: hoveredSide === 'right' ? 0.4 : 0.8
            }}
          />
        </div>
        
        <Link href="/brany" className="relative z-10 flex flex-col items-center justify-center group w-full h-full">
           <div className="bg-white px-16 py-12 flex flex-col items-center justify-center font-bold tracking-[0.2em] text-center shadow-2xl transition-transform duration-500 hover:scale-105">
              <h1 className="text-4xl md:text-6xl text-black uppercase mb-4 tracking-[0.3em]">Hliníkové Brány</h1>
              <p className="text-xs md:text-sm tracking-[0.4em] font-medium text-black">ZISTIŤ VIAC</p>
           </div>
           
           <motion.div 
             className="absolute left-8 top-1/2 -translate-y-1/2 text-white"
             animate={{ 
               opacity: hoveredSide === 'left' ? 1 : 0,
               x: hoveredSide === 'left' ? 20 : 0 
             }}
             transition={{ duration: 0.4 }}
           >
             <ArrowLeft size={40} strokeWidth={1} />
           </motion.div>
        </Link>
      </motion.div>

      {/* Right Side - Inžinierska činnosť */}
      <motion.div
        className="relative flex h-full cursor-pointer flex-col items-center justify-center"
        onHoverStart={() => setHoveredSide('right')}
        onHoverEnd={() => setHoveredSide(null)}
        animate={{
          width: hoveredSide === 'right' ? '70%' : hoveredSide === 'left' ? '30%' : '50%',
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
         <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop"
            alt="Inžinierska činnosť"
            fill
            priority
            className="object-cover transition-opacity duration-700"
            style={{ 
              filter: hoveredSide === 'left' ? 'grayscale(100%)' : 'grayscale(0%)',
              opacity: hoveredSide === 'left' ? 0.4 : 0.8
            }}
          />
        </div>

        <Link href="/inzinierska-cinnost" className="relative z-10 flex flex-col items-center justify-center group w-full h-full">
           <div className="bg-black rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px] flex flex-col items-center justify-center font-bold tracking-[0.2em] text-center shadow-2xl transition-transform duration-500 hover:scale-105">
              <h1 className="text-3xl md:text-5xl uppercase mb-4 text-white tracking-[0.3em] leading-tight">Inžinierska<br/>Činnosť</h1>
              <p className="text-xs md:text-sm tracking-[0.4em] font-medium text-white">ZISTIŤ VIAC</p>
           </div>

           <motion.div 
             className="absolute right-8 top-1/2 -translate-y-1/2 text-white"
             animate={{ 
               opacity: hoveredSide === 'right' ? 1 : 0,
               x: hoveredSide === 'right' ? -20 : 0 
             }}
             transition={{ duration: 0.4 }}
           >
             <ArrowRight size={40} strokeWidth={1} />
           </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
