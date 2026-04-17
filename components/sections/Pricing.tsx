"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    description: "Best for personal use",
    features: ["Basic analytics", "1 account", "Standard support"],
  },
  {
    name: "Pro",
    monthly: 19,
    yearly: 190,
    description: "Best for growing businesses",
    features: ["Advanced analytics", "Unlimited accounts", "Priority support", "Card controls"],
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: 49,
    yearly: 490,
    description: "For large scale operations",
    features: ["Custom integrations", "Dedicated manager", "Full API access", "Highest security"],
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="section-shell py-28 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-kicker mx-auto">Pricing that scales</div>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Clear plans for solo operators, teams, and enterprise finance
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/68">
            Choose the workflow depth you need now and expand when operations grow.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsYearly(false)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  !isYearly ? "bg-white text-black" : "text-white/60"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isYearly ? "bg-white text-black" : "text-white/60"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => {
            const price = isYearly ? plan.yearly : plan.monthly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`interactive-card spotlight-card relative rounded-[1.9rem] p-6 ${
                  plan.popular ? "border-cyan-300/30 bg-white/[0.08]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-200 to-white px-4 py-1 text-xs font-medium text-[#06111f]">
                    Most Popular
                  </div>
                )}

                <div className="text-sm uppercase tracking-[0.18em] text-white/40">{plan.name}</div>
                <p className="mt-4 text-sm leading-7 text-white/65">{plan.description}</p>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight">${price}</span>
                  <span className="mb-2 text-sm text-white/50">/ {isYearly ? "year" : "month"}</span>
                </div>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-white/72">
                      <Check className="h-4 w-4 text-cyan-200" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="button-primary mt-8 w-full py-3 text-sm font-semibold">
                  Get Started
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
