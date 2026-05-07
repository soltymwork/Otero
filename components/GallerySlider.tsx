'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollColorImage from './ScrollColorImage';

interface Props {
  images: string[];
}

export default function GallerySlider({ images }: Props) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
  };

  return (
    <>
      {/* Mobile slider */}
      <div
        className="md:hidden relative h-[320px] w-full bg-neutral-100 overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <ScrollColorImage
          src={images[current]}
          alt={`Realizácia ${current + 1}`}
          referrerPolicy="no-referrer"
        />
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full z-10">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full z-10">
          <ChevronRight size={20} />
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-8">
        {images.map((imgSrc, i) => (
          <div key={i} className="relative h-[400px] w-full bg-neutral-100">
            <ScrollColorImage src={imgSrc} alt={`Realizácia ${i + 1}`} referrerPolicy="no-referrer" />
          </div>
        ))}
      </div>
    </>
  );
}
