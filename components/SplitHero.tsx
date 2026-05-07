'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export default function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  const transition = { duration: 0.8, ease: [0.4, 0, 0.2, 1] } as const;

  return (
    <div className="h-screen w-full bg-white p-4 md:p-6 flex">

      {/* Ľavý panel — animovaná šírka */}
      <motion.div
        className="relative overflow-hidden h-full flex-none"
        animate={{ width: hoveredSide === 'left' ? '65%' : hoveredSide === 'right' ? '35%' : '50%' }}
        transition={transition}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Obrázok je širší ako panel — pri posune x nevznikne medzera */}
        <motion.div
          className="absolute inset-y-0 -left-10 -right-10"
          animate={{ x: hoveredSide === 'left' ? -14 : hoveredSide === 'right' ? 14 : 0 }}
          transition={transition}
        >
          <Image
            src="https://jhrgate.com/wp-content/uploads/2024/08/94.jpg"
            alt="Hliníkové brány"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <Link href="/brany" className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="flex flex-col items-center justify-center text-center shadow-2xl px-10 py-7"
            animate={{ backgroundColor: hoveredSide === 'left' ? '#000000' : '#ffffff' }}
            transition={{ duration: 0.4 }}
          >
            <motion.h1
              className="text-xl md:text-2xl uppercase tracking-[0.25em] leading-snug mb-2 font-bold"
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
        </Link>
      </motion.div>

      {/* Pravý panel — flex-1 automaticky vypĺňa zvyšok, žiadna medzera */}
      <div
        className="relative overflow-hidden h-full flex-1"
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <motion.div
          className="absolute inset-y-0 -left-10 -right-10"
          animate={{ x: hoveredSide === 'right' ? 14 : hoveredSide === 'left' ? -14 : 0 }}
          transition={transition}
        >
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop"
            alt="Inžinierska činnosť"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <Link href="/inzinierska-cinnost" className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="rounded-full w-[220px] h-[220px] md:w-[270px] md:h-[270px] flex flex-col items-center justify-center text-center shadow-2xl px-6"
            animate={{ backgroundColor: hoveredSide === 'right' ? '#ffffff' : '#000000' }}
            transition={{ duration: 0.4 }}
          >
            <motion.h1
              className="text-base md:text-xl uppercase tracking-[0.2em] leading-snug mb-2 font-bold"
              animate={{ color: hoveredSide === 'right' ? '#000000' : '#ffffff' }}
              transition={{ duration: 0.4 }}
            >
              Inžinierska<br />Činnosť
            </motion.h1>
            <motion.p
              className="text-[10px] tracking-[0.4em] font-medium"
              animate={{ color: hoveredSide === 'right' ? '#000000' : '#ffffff' }}
              transition={{ duration: 0.4 }}
            >
              ZISTIŤ VIAC
            </motion.p>
          </motion.div>
        </Link>
      </div>

    </div>
  );
}
