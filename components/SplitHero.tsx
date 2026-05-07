'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  const imgTransition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } as const;
  const modalTransition = { duration: 0.6 } as const;

  return (
    {/* Mobile: pod sebou, Desktop: vedľa seba */}
    <div className="h-screen w-full bg-white p-4 md:p-6 flex flex-col md:flex-row">

      {/* Ľavý / Horný panel */}
      <div
        className="relative overflow-hidden flex-1 md:flex-none"
        style={{
          width: typeof window !== 'undefined' && window.innerWidth >= 768
            ? (hoveredSide === 'left' ? '60%' : hoveredSide === 'right' ? '40%' : '50%')
            : undefined,
          transition: 'width 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <motion.div
          className="absolute inset-0 md:inset-y-0 md:left-0"
          style={{ width: '100%' }}
          animate={{ x: hoveredSide === 'left' ? -10 : hoveredSide === 'right' ? 10 : 0 }}
          transition={imgTransition}
        >
          <Image
            src="https://jhrgate.com/wp-content/uploads/2024/08/94.jpg"
            alt="Hliníkové brány"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hidden md:block">
          <ArrowLeft size={32} strokeWidth={1} />
        </div>

        <Link href="/brany" className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="flex flex-col items-center justify-center text-center shadow-2xl px-8 py-6"
            animate={{ backgroundColor: hoveredSide === 'left' ? '#000000' : '#ffffff' }}
            transition={modalTransition}
          >
            <motion.h1
              className="text-lg md:text-2xl uppercase tracking-[0.25em] leading-snug mb-2 font-bold"
              animate={{ color: hoveredSide === 'left' ? '#ffffff' : '#000000' }}
              transition={modalTransition}
            >
              Hliníkové Brány
            </motion.h1>
            <motion.p
              className="text-[10px] tracking-[0.4em] font-medium"
              animate={{ color: hoveredSide === 'left' ? '#ffffff' : '#000000' }}
              transition={modalTransition}
            >
              ZISTIŤ VIAC
            </motion.p>
          </motion.div>
        </Link>
      </div>

      {/* Pravý / Dolný panel */}
      <div
        className="relative overflow-hidden flex-1"
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <motion.div
          className="absolute inset-0 md:inset-y-0 md:right-0"
          style={{ width: '100%' }}
          animate={{ x: hoveredSide === 'right' ? 10 : hoveredSide === 'left' ? -10 : 0 }}
          transition={imgTransition}
        >
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop"
            alt="Inžinierska činnosť"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hidden md:block">
          <ArrowRight size={32} strokeWidth={1} />
        </div>

        <Link href="/inzinierska-cinnost" className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="rounded-full w-[180px] h-[180px] md:w-[270px] md:h-[270px] flex flex-col items-center justify-center text-center shadow-2xl px-6"
            animate={{ backgroundColor: hoveredSide === 'right' ? '#ffffff' : '#000000' }}
            transition={modalTransition}
          >
            <motion.h1
              className="text-sm md:text-xl uppercase tracking-[0.2em] leading-snug mb-2 font-bold"
              animate={{ color: hoveredSide === 'right' ? '#000000' : '#ffffff' }}
              transition={modalTransition}
            >
              Inžinierska<br />Činnosť
            </motion.h1>
            <motion.p
              className="text-[10px] tracking-[0.4em] font-medium"
              animate={{ color: hoveredSide === 'right' ? '#000000' : '#ffffff' }}
              transition={modalTransition}
            >
              ZISTIŤ VIAC
            </motion.p>
          </motion.div>
        </Link>
      </div>

    </div>
  );
}
