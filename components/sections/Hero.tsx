"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";

const heroStats = [
  { label: "Fast payouts", value: "1.2s" },
  { label: "Fraud detection", value: "99.9%" },
  { label: "Global coverage", value: "180+" },
];

const activityBars = [42, 66, 58, 88, 74, 96, 64];
const transactionFeed = [
  ["Payroll", "+$24,200"],
  ["Vendor payout", "-$3,480"],
  ["Reserve moved", "+$8,900"],
] as const;

export default function Hero() {
  return (
    <section className="section-shell relative flex min-h-screen items-center overflow-hidden pt-8">
      <div className="absolute inset-0 -z-10">
        <div className="ambient-orb left-[8%] top-24 h-64 w-64 bg-cyan-400/20" />
        <div className="ambient-orb right-[12%] top-12 h-72 w-72 bg-indigo-400/20 [animation-delay:-4s]" />
        <div className="ambient-orb bottom-8 left-1/2 h-80 w-80 -translate-x-1/2 bg-emerald-300/10 [animation-delay:-8s]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-kicker mb-6"
          >
            Modern Banking Experience
          </motion.div>

          <div className="mt-2">
            <TextReveal
              text="Banking built for the speed of ambitious teams"
              as="h1"
              gradient
              className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-7xl"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/72"
          >
            Move money, monitor cash flow, and automate everyday finance from a
            dashboard that feels premium on every screen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
          >
            <button className="button-primary px-6 py-3 text-sm font-semibold">
              Get Started
            </button>

            <button className="button-secondary px-6 py-3 text-sm text-white/84">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-4"
          >
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="interactive-card rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl"
              >
                <div className="text-2xl font-semibold text-white">{item.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="spotlight-card interactive-card relative rounded-[2rem] p-4"
        >
          <div className="rounded-[1.7rem] border border-white/10 bg-[#07101f]/80 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/50">Live treasury</p>
                <h3 className="mt-2 text-3xl font-semibold">$128,420</h3>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                +18.2% this month
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="interactive-card rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <p className="text-sm text-white/55">Settlement activity</p>
                <div className="mt-5 flex h-28 items-end gap-2">
                  {activityBars.map((height) => (
                    <motion.div
                      key={height}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: height / 200 }}
                      className="flex-1 rounded-full bg-gradient-to-t from-cyan-300/40 to-indigo-200/90"
                    />
                  ))}
                </div>
              </div>

              <div className="interactive-card space-y-4 rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <div className="rounded-2xl bg-gradient-to-r from-cyan-300 to-indigo-300 p-4 text-[#05111f]">
                  <p className="text-xs uppercase tracking-[0.22em]">Virtual card</p>
                  <p className="mt-6 text-lg font-semibold">**** 4821</p>
                  <p className="mt-2 text-sm">Team Ops Wallet</p>
                </div>

                {transactionFeed.map(([label, amount]) => (
                  <div
                    key={label}
                    className="interactive-card flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm"
                  >
                    <span className="text-white/65">{label}</span>
                    <span className="font-medium text-white">{amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
