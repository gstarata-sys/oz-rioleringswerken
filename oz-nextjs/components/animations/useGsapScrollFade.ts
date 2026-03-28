"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fades + moves an element out upward as the user scrolls away.
 * Wrap the GSAP code in gsap.context() for proper cleanup.
 */
export function useGsapScrollExit(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -60,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [ref]);
}

/**
 * Staggers child elements in from below when the container enters the viewport.
 */
export function useGsapStaggerIn(
  ref: RefObject<HTMLElement | null>,
  selector = ".gsap-card",
  stagger = 0.1
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [ref, selector, stagger]);
}
