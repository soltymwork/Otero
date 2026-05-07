'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  referrerPolicy?: 'no-referrer';
  className?: string;
}

export default function ScrollColorImage({ src, alt, referrerPolicy, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [colored, setColored] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setColored(true); else setColored(false); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        referrerPolicy={referrerPolicy}
        className={`object-cover transition-all duration-700 ${colored ? 'grayscale-0' : 'grayscale'} md:grayscale md:hover:grayscale-0`}
      />
    </div>
  );
}
