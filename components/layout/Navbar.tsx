"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 20;

      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto max-w-7xl px-6 pt-4 lg:px-10">
        <div
          className={`flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "border-white/12 bg-[#07101f]/78 shadow-2xl shadow-black/30 backdrop-blur-2xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-cyan-200/20 via-[#8ea6ff]/16 to-emerald-200/14 shadow-lg shadow-cyan-950/30">
              <div className="absolute inset-[6px] rounded-xl border border-white/10 bg-[#07101f]/80" />
              <div className="relative h-4 w-4 overflow-hidden rounded-[0.45rem]">
                <div className="absolute inset-y-0 left-0 w-[55%] rounded-[0.45rem] bg-gradient-to-b from-cyan-200 to-cyan-400" />
                <div className="absolute inset-y-0 right-0 w-[45%] rounded-[0.45rem] bg-gradient-to-b from-[#b8c7ff] to-[#6e86ff]" />
              </div>
            </div>

            <div className="leading-none">
              <div className="text-[1.05rem] font-semibold tracking-[0.24em] text-white">
                VERITI
              </div>
              <div className="mt-1 text-[0.6rem] uppercase tracking-[0.32em] text-cyan-100/55">
                Treasury OS
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/76 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="text-sm text-white/76 transition hover:text-white">Sign in</button>
            <button className="button-primary px-4 py-2 text-sm font-semibold">Get Started</button>
          </div>

          <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="mx-6 mt-3 rounded-[1.75rem] border border-white/10 bg-[#07101f]/95 p-6 backdrop-blur-2xl md:hidden lg:mx-10"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base text-white/80 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <hr className="border-white/10" />

              <button className="text-left text-white/80 hover:text-white">Sign in</button>
              <button className="button-primary py-2 text-sm font-semibold">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
