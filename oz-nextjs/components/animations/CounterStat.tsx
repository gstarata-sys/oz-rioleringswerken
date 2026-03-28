"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterStatProps {
  value: number;
  suffix?: string;
  label: string;
  /** If set, displays this string instead of the animated number */
  staticDisplay?: string;
}

export default function CounterStat({ value, suffix = "", label, staticDisplay }: CounterStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [count, setCount] = useState(value);
  const animated = useRef(false);

  useEffect(() => {
    if (staticDisplay || !isInView || animated.current) return;
    animated.current = true;

    setCount(0);
    const duration = 1500;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    }

    requestAnimationFrame(step);
  }, [isInView, value, staticDisplay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-[--color-cyan]">
        {staticDisplay ?? `${count}${suffix}`}
      </div>
      <div className="mt-1 text-sm font-medium text-slate-400 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
