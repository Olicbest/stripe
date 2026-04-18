"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap, { ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isCoarsePointer) {
      document.documentElement.dataset.scrollMode = "native";
      return;
    }

    document.documentElement.dataset.scrollMode = "lenis";

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
    const updateScrollTrigger = () => ScrollTrigger.update();
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      delete document.documentElement.dataset.scrollMode;
      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
