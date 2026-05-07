'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <div className="flex h-screen w-full bg-white text-white selection:bg-white selection:text-black p-4 md:p-6">
      {/* Left Side - Hliníkové brány */}
      <motion.div
        className="relative flex h-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-sm"
        onHoverStart={() => setHoveredSide('left')}
        onHoverEnd={() => setHoveredSide(null)}
        animate={{
          width: hoveredSide === 'left' ? '70%' : hoveredSide === 'right' ? '30%' : '50%',
        }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
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
           <motion.div
             className="w-[220px] md:w-[280px] py-7 px-6 flex flex-col items-center justify-center font-bold tracking-[0.2em] text-center shadow-2xl"
             animate={{
               backgroundColor: hoveredSide === 'left' ? '#000000' : '#ffffff',
             }}
             transition={{ duration: 0.4 }}
           >
              <motion.h1
                className="text-lg md:text-2xl uppercase mb-2 tracking-[0.25em] leading-snug"
                animate={{ color: hoveredSide === 'left' ? '#ffffff' : '#000000' }}
                transition={{ duration: 0.4 }}
              >
                Hliníkové Brány
              </motion.h1>
              <motion.p
                className="text-[10px] tracking-[0.4em] font-medium"
                animate={{ color: hoveredSide === 'left' ? '#ffffff' : '#000000' }}
                transition={{ duration: 0.4 }}
              >
                ZISTIŤ VIAC
              </motion.p>
           </motion.div>

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
        className="relative flex h-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-sm"
        onHoverStart={() => setHoveredSide('right')}
        onHoverEnd={() => setHoveredSide(null)}
        animate={{
          width: hoveredSide === 'right' ? '70%' : hoveredSide === 'left' ? '30%' : '50%',
        }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
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
           <motion.div
             className="rounded-full w-[220px] h-[220px] md:w-[280px] md:h-[280px] flex flex-col items-center justify-center font-bold tracking-[0.2em] text-center shadow-2xl px-6"
             animate={{
               backgroundColor: hoveredSide === 'right' ? '#ffffff' : '#000000',
             }}
             transition={{ duration: 0.4 }}
           >
              <motion.h1
                className="text-base md:text-xl uppercase mb-2 tracking-[0.2em] leading-snug text-center"
                animate={{ color: hoveredSide === 'right' ? '#000000' : '#ffffff' }}
                transition={{ duration: 0.4 }}
              >
                Inžinierska<br/>Činnosť
              </motion.h1>
              <motion.p
                className="text-[10px] tracking-[0.4em] font-medium"
                animate={{ color: hoveredSide === 'right' ? '#000000' : '#ffffff' }}
                transition={{ duration: 0.4 }}
              >
                ZISTIŤ VIAC
              </motion.p>
           </motion.div>

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
