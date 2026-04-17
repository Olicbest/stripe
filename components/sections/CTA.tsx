"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";

export default function CTA() {
  return (
    <section className="section-shell relative overflow-hidden py-28 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="ambient-orb left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 bg-indigo-300/12" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="spotlight-card rounded-[2rem] px-6 py-12 text-center md:px-12 md:py-16">
          <div className="section-kicker mx-auto">Get started today</div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl"
          >
            Ready to bring more style, speed, and clarity to your money flow?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/68"
          >
            Join teams managing cards, transfers, reporting, and cash movement from one elegant workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Magnetic strength={28}>
              <button className="button-primary px-6 py-3 text-sm font-semibold">
                Start Free
              </button>
            </Magnetic>

            <Magnetic strength={22}>
              <button className="button-secondary px-6 py-3 text-sm text-white/84">
                Book a Demo
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
