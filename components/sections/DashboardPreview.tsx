"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CircleDollarSign, Sparkles, WalletCards } from "lucide-react";

const balances = [48, 68, 52, 84, 60, 76, 94];
const insights = [
  { label: "Active wallets", value: "24.3k", icon: WalletCards },
  { label: "Settlement volume", value: "$3.8M", icon: CircleDollarSign },
  { label: "Automation health", value: "98%", icon: Sparkles },
];

const transactions = [
  { name: "AWS Infrastructure", amount: "-$480", state: "Processing" },
  { name: "Customer payouts", amount: "-$4,240", state: "Completed" },
  { name: "Subscription revenue", amount: "+$12,600", state: "Cleared" },
];

export default function DashboardPreview() {
  return (
    <section className="section-shell relative overflow-hidden py-28 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="ambient-orb left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 bg-cyan-400/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-kicker mx-auto">Live operations</div>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            A dashboard that makes the complex feel effortless
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/68">
            Review balances, card programs, and team activity from a single command center.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="spotlight-card rounded-[2rem] p-5 md:p-6">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[1.7rem] border border-white/10 bg-[#06111f]/80 p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm text-white/48">Treasury Overview</div>
                    <h3 className="mt-2 text-3xl font-semibold">$12,450</h3>
                  </div>
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                    Updated 2 min ago
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {insights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="interactive-card rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <Icon className="h-5 w-5 text-cyan-200" />
                        <div className="mt-5 text-2xl font-semibold">{item.value}</div>
                        <div className="mt-1 text-sm text-white/55">{item.label}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5">
                  <div className="flex items-center justify-between text-sm text-white/52">
                    <span>Cash movement</span>
                    <span>Last 7 days</span>
                  </div>
                  <div className="mt-6 flex h-48 items-end gap-3">
                    {balances.map((height, index) => (
                      <motion.div
                        key={`${height}-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: `${height}%`, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.06 }}
                        className="flex-1 rounded-t-[1.5rem] bg-gradient-to-t from-cyan-300/40 via-[#7b8eff] to-[#dce5ff]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="interactive-card rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/48">Virtual card</p>
                      <h3 className="mt-2 text-xl font-semibold">Operations Reserve</h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/40" />
                  </div>

                  <div className="mt-6 rounded-[1.5rem] bg-gradient-to-br from-cyan-300 via-[#9ec2ff] to-emerald-200 p-5 text-[#05111f] shadow-2xl">
                    <p className="text-xs uppercase tracking-[0.22em]">Business card</p>
                    <p className="mt-10 text-lg font-semibold">**** **** **** 1234</p>
                    <div className="mt-6 flex items-end justify-between text-sm">
                      <span>Valid thru 12/28</span>
                      <span>VISA</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                  <p className="text-sm text-white/48">Recent transactions</p>
                  <div className="mt-5 space-y-3">
                    {transactions.map((item) => (
                      <div
                        key={item.name}
                        className="interactive-card flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
                      >
                        <div>
                          <div className="text-sm font-medium text-white">{item.name}</div>
                          <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">
                            {item.state}
                          </div>
                        </div>
                        <span className="text-sm font-medium text-white/84">{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
