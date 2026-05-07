'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { target: 100, suffix: '+', label: 'PROJEKTOV' },
  { target: 10,  suffix: '+', label: 'ROKOV PRAXE' },
  { target: 100, suffix: '%', label: 'LEGALIZÁCIÍ' },
  { target: 24,  suffix: 'h', label: 'ODOZVA' },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return value;
}

function StatItem({ stat, started }: { stat: Stat; started: boolean }) {
  const value = useCountUp(stat.target, 1800, started);
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-wider">
        {value}{stat.suffix}
      </span>
      <span className="text-xs text-white/50 tracking-[0.2em] uppercase font-bold">{stat.label}</span>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 px-6 border-b border-white/10 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10 overflow-hidden">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} started={started} />
        ))}
      </div>
    </section>
  );
}
