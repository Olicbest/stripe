"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerGroups = {
  Product: ["Features", "Pricing", "Security"],
  Company: ["About", "Careers", "Contact"],
  Resources: ["Docs", "API", "Support"],
};

export default function Footer() {
  return (
    <footer className="section-shell relative border-t border-white/10 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="section-kicker">Veriti</div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Premium banking infrastructure for teams that want their tools to look calm, feel fast, and scale well.
            </p>
          </div>

          {Object.entries(footerGroups).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-medium uppercase tracking-[0.16em] text-white/42">{title}</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/60">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm text-white/46">
            (c) {new Date().getFullYear()} Veriti. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {[FaTwitter, FaGithub, FaLinkedin].map((Icon, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -3, scale: 1.05 }}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition hover:border-cyan-300/30 hover:text-white"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
