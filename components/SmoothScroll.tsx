"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Avoid stacking multiple RAF loops in React Strict Mode during development.
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
    let frameId = 0;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
