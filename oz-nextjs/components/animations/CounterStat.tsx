"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterStatProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function CounterStat({ value, suffix = "", label }: CounterStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    }

    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-[--color-cyan]">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm font-medium text-slate-400 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
