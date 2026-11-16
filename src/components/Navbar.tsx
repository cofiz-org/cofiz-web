"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { APK_URL } from "@/site";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "border-line bg-page/90" : "border-transparent bg-page/80"
      }`}
    >
      <div className="h-full px-6 lg:px-12">
        <div className="mx-auto flex h-full max-w-[88rem] items-center">
          <div className="flex flex-1 items-center">
            <Logo priority />
          </div>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 sm:flex"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-[14px] font-medium text-muted transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-3">
            <a
              href={APK_URL}
              className="inline-flex h-9 items-center rounded-md bg-white px-4 text-sm font-medium text-[#0b0907] transition-colors hover:bg-zinc-200"
            >
              Get the app
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
              className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white sm:hidden"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 6h14M3 10h14M3 14h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-page/95 px-6 py-5 backdrop-blur-xl sm:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
