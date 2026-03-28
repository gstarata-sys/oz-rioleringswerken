"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  staggerDelay?: number;
}

export function StaggerItem({ children, className, index = 0, staggerDelay = 0.06 }: StaggerItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: index * staggerDelay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function StaggerContainer({
  children,
  className,
  staggerDelay = 0.06,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className={className}>
      {isInView
        ? (Array.isArray(children) ? children : [children]).map((child, i) => (
            <StaggerItem key={i} index={i} staggerDelay={staggerDelay}>
              {(child as React.ReactElement<StaggerItemProps>)?.type === StaggerItem
                ? (child as React.ReactElement<StaggerItemProps>).props.children
                : child}
            </StaggerItem>
          ))
        : (Array.isArray(children) ? children : [children]).map((child, i) => (
            <div key={i} style={{ opacity: 0 }}>
              {(child as React.ReactElement<StaggerItemProps>)?.type === StaggerItem
                ? (child as React.ReactElement<StaggerItemProps>).props.children
                : child}
            </div>
          ))}
    </div>
  );
}
