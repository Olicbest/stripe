"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    content:
      "This platform completely transformed how we manage our finances. The speed and clarity changed the way our team works.",
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    content:
      "The interface feels polished, but the real win is how quickly we can move from insight to action.",
  },
  {
    name: "Aisha Bello",
    role: "Entrepreneur",
    content:
      "Secure, fast, and beautifully designed. It finally feels like banking software built for modern operators.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-shell py-28 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-kicker mx-auto">Customer stories</div>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Teams trust it because it feels sharp and performs even sharper
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/68">
            Feedback from founders, operators, and finance leads using the platform every day.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="interactive-card spotlight-card rounded-[1.8rem] p-6"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-8 w-8 text-cyan-200/70" />
                <div className="text-xs uppercase tracking-[0.2em] text-white/35">0{index + 1}</div>
              </div>

              <p className="mt-6 text-base leading-8 text-white/78">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="mt-10 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-200 to-indigo-200 text-sm font-semibold text-[#05111f]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/42">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
