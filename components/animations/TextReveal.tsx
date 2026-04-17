"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  gradient?: boolean;
};

export default function TextReveal({
  text,
  className = "",
  as: Tag = "h1",
  gradient = false,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const words = el.querySelectorAll(".word");

      gsap.from(words, {
        y: 60,
        opacity: 0,
        stagger: 0.06,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <Tag
      ref={(node) => {
        ref.current = node;
      }}
      className={className}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="mr-2 inline-block overflow-hidden align-top">
          <span
            className={`word inline-block ${
              gradient
                ? "bg-gradient-to-r from-white via-[#b5c8ff] to-[#78e1ff] bg-clip-text text-transparent"
                : ""
            }`}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
