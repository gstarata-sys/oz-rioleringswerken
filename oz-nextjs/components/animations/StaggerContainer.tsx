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

// Context-free item: uses its own parent's inView state via CSS var trick
// Simplest approach: each item reads its index from the parent via CSS custom property
export function StaggerItem({ children, className, index = 0, staggerDelay = 0.08 }: StaggerItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: index * staggerDelay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Container passes index to children via React.Children.map
export default function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className={className}>
      {isInView
        ? // Render children with stagger when in view
          (Array.isArray(children) ? children : [children]).map((child, i) => (
            <StaggerItem key={i} index={i} staggerDelay={staggerDelay}>
              {/* Strip StaggerItem wrapper if child already is one */}
              {(child as React.ReactElement<StaggerItemProps>)?.type === StaggerItem
                ? (child as React.ReactElement<StaggerItemProps>).props.children
                : child}
            </StaggerItem>
          ))
        : // Hidden placeholder while not in view
          (Array.isArray(children) ? children : [children]).map((child, i) => (
            <div key={i} style={{ opacity: 0 }}>
              {(child as React.ReactElement<StaggerItemProps>)?.type === StaggerItem
                ? (child as React.ReactElement<StaggerItemProps>).props.children
                : child}
            </div>
          ))}
    </div>
  );
}
