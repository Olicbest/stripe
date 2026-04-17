"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import { ArrowUpRight, BarChart3, CreditCard, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    description:
      "Advanced encryption, anomaly alerts, and adaptive security keep every payment protected.",
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description:
      "Send and receive funds globally with fast settlement and zero-friction approvals.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Watch revenue, churn, and recurring spend through dashboards built for decision-making.",
  },
  {
    icon: CreditCard,
    title: "Card Management",
    description:
      "Issue cards, set controls, and monitor spend in real time from one polished workspace.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".feature-card");

      gsap.set(cards, { autoAlpha: 1 });

      gsap.from(cards, {
        y: 80,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.16,
        clearProps: "transform",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="section-shell relative py-28 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-kicker mx-auto">Everything in one stack</div>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Every flow refined for speed, clarity, and control
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/68">
            The core banking layer blends operational control with a calmer, more premium interface.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="feature-card spotlight-card interactive-card group relative flex min-h-[280px] flex-col rounded-[1.75rem] p-6"
              >
                <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2 text-white/40 transition group-hover:border-cyan-300/30 group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white shadow-lg shadow-cyan-950/20 transition duration-300 group-hover:scale-105 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="relative z-10 mt-8 text-xs uppercase tracking-[0.22em] text-white/38">
                  0{index + 1}
                </div>

                <h3 className="relative z-10 mt-3 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="relative z-10 mt-3 text-sm leading-7 text-white/68">
                  {feature.description}
                </p>

                <div className="relative z-10 mt-auto pt-8 text-sm font-medium text-cyan-200/88">
                  Explore capability
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
