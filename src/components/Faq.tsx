"use client";

import { useState } from "react";
import { APK_URL } from "@/site";

const faqs = [
  {
    q: "Do I need internet to use Cofiz?",
    a: "No. Cofiz is offline-first: collectors keep logging purchases with no signal, and the entries sync in order the moment the phone is back online. The admin's phone keeps the same ledger.",
  },
  {
    q: "Who can see what?",
    a: "Admins own prices, cash, the team and the reports. Collectors see their own balance, purchases and debts. Investors get a read-only view of the money and the running totals.",
  },
  {
    q: "Does it work in Amharic?",
    a: "Yes. The whole interface runs in Amharic or English, per user, with ETB amounts and the Ethiopian calendar.",
  },
  {
    q: "What happens if a collector pays above the daily price?",
    a: "The app warns on the spot, flags the entry, and the admin sees it in the purchases list and the audit log. Nothing is silently overwritten.",
  },
  {
    q: "How do I install it?",
    a: "Download the APK, install it on any Android phone, and sign in with your phone number over Telegram or WhatsApp. There is no app store step and no password to remember.",
  },
  {
    q: "Can I get the books out?",
    a: "Every report filters by day, week or month and exports to a clean PDF. Admins can also keep a backup of the ledger.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 px-6 pb-28 lg:px-12 lg:pb-40">
      <div className="frame reveal mx-auto max-w-7xl lg:grid lg:grid-cols-[5fr_7fr] lg:gap-[2px]">
        <div className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-[16px] bg-block p-8 lg:min-h-[420px] lg:p-12">
          <svg
            viewBox="0 0 320 320"
            className="pointer-events-none absolute -bottom-24 -right-20 h-[300px] w-[300px] text-accent opacity-[0.16]"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="160" cy="160" r="120" stroke="currentColor" strokeWidth="18" />
            <circle cx="160" cy="160" r="86" stroke="currentColor" strokeWidth="1.5" />
            <circle
              cx="160"
              cy="160"
              r="62"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 7"
            />
          </svg>
          <p className="relative font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
            FAQ
          </p>
          <div className="relative mt-10">
            <h2 className="text-3xl font-normal leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl">
              Questions,
              <br />
              answered.
            </h2>
            <p className="mt-4 max-w-[34ch] text-[15px] leading-[1.65] text-muted">
              Still stuck? Install it and try it with your own numbers — the
              APK is free.
            </p>
            <a
              href={APK_URL}
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-line-strong bg-chrome px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-block-hover"
            >
              Download the APK
            </a>
          </div>
        </div>

        <div className="rounded-[16px] bg-block">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="border-b border-line px-6 last:border-b-0 sm:px-8"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={`text-[15px] font-medium transition-colors ${
                      isOpen ? "text-white" : "text-muted group-hover:text-white"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`relative h-3 w-3 shrink-0 text-subtle transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current" />
                    <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-5 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden pr-8 text-[14px] leading-[1.7] text-muted">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
