"use client";

import { useState } from "react";

interface StepRow {
  title: string;
  detail: string;
  amount: string;
  alert?: boolean;
}

interface Step {
  n: string;
  tab: string;
  title: string;
  desc: string;
  footer: string;
  footerValue: string;
  rows: StepRow[];
}

const steps: Step[] = [
  {
    n: "01",
    tab: "Prices",
    title: "Set the day's rates",
    desc: "Admin sets Jenfel, Wet and Special prices from the dashboard. Everyone sees them instantly.",
    footer: "Active price",
    footerValue: "Wet · 50",
    rows: [
      { title: "Jenfel", detail: "per kg", amount: "45" },
      { title: "Wet", detail: "default · per kg", amount: "50" },
      { title: "Special", detail: "per kg", amount: "60" },
    ],
  },
  {
    n: "02",
    tab: "Fund",
    title: "Fund collectors",
    desc: "Distribute morning cash to collectors. Balances update the second it lands.",
    footer: "Distributed today",
    footerValue: "3,500",
    rows: [
      { title: "Abebe", detail: "cash advance", amount: "+2,000" },
      { title: "Tigist", detail: "cash advance", amount: "+1,500" },
    ],
  },
  {
    n: "03",
    tab: "Buy",
    title: "Log every purchase",
    desc: "Collectors log type, weight, price and a receipt photo. Above-price sales warn on the spot.",
    footer: "Bought today",
    footerValue: "35 kg",
    rows: [
      { title: "Wet · 20 kg", detail: "@ 50 · receipt attached", amount: "1,000" },
      { title: "Jenfel · 15 kg", detail: "@ 45 · receipt attached", amount: "675" },
      { title: "Special · 2 kg", detail: "@ 68 · above daily price", amount: "136", alert: true },
    ],
  },
  {
    n: "04",
    tab: "Debts",
    title: "Debts track themselves",
    desc: "Shortfalls become open debts automatically. Repayments close them out one by one.",
    footer: "Open debts",
    footerValue: "1,240",
    rows: [
      { title: "Abebe", detail: "2 open · oldest 3 days", amount: "840" },
      { title: "Tigist", detail: "1 open", amount: "400" },
      { title: "Dawit", detail: "paid in full", amount: "0" },
    ],
  },
  {
    n: "05",
    tab: "Reports",
    title: "Close the day clean",
    desc: "Filter today, the week or the month and export a clean PDF for the books.",
    footer: "Net balance",
    footerValue: "+3,500",
    rows: [
      { title: "Cash in", detail: "sales + investments", amount: "12,400" },
      { title: "Cash out", detail: "purchases + expenses", amount: "8,900" },
    ],
  },
];

function FeatureIcon({ d }: { d: string }) {
  return (
    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-primary-soft">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D47311"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={d} />
      </svg>
    </span>
  );
}

const platform: { title: string; desc: string; icon: string }[] = [
  {
    title: "Notifications",
    desc: "Bell center with instant pushes for prices, payments and debts.",
    icon: "M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6M10 20a2 2 0 0 0 4 0",
  },
  {
    title: "Offline-first",
    desc: "No signal in the field? Keep working — everything syncs on reconnect.",
    icon: "M5 12a7 7 0 0 1 14 0M8.5 15.5a3.5 3.5 0 0 1 7 0M12 19h.01",
  },
  {
    title: "PDF reports",
    desc: "One tap exports the day, week or month to a clean shareable PDF.",
    icon: "M6 2h9l5 5v15H6zM14 2v6h6M9 15h6M9 18h6",
  },
  {
    title: "PIN lock",
    desc: "App opens only with your PIN. Idle too long and it locks itself.",
    icon: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4",
  },
  {
    title: "Telegram login",
    desc: "Sign in with phone OTP over Telegram or WhatsApp — no passwords.",
    icon: "M22 2 11 13M22 2l-7 20-4-9-9-4z",
  },
  {
    title: "Roles & access",
    desc: "Admins run everything, collectors see their own book, investors watch.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  },
  {
    title: "Receipt photos",
    desc: "Every purchase carries a photo receipt. Proof lives with the entry.",
    icon: "M4 7h3l2-2h6l2 2h3v13H4zM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
  },
  {
    title: "Audit log",
    desc: "Admins see who changed what and when. Nothing moves silently.",
    icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  },
  {
    title: "Amharic & English",
    desc: "Full Amharic and English UI with ETB and Ethiopian calendar support.",
    icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(2);
  const step = steps[active];

  return (
    <section id="features" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mx-auto max-w-2xl text-center text-[32px] leading-[1.2] font-medium tracking-[-0.5px] text-ink md:text-[42px]">
          Morning price in. <span className="text-primary">Clean books out.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-6 font-medium text-muted">
          One ledger follows the coffee from the field to the final report.
        </p>
        <div className="mt-12 grid grid-cols-[7fr_5fr] gap-6 max-md:grid-cols-1">
          <div className="overflow-hidden rounded-2xl border border-line bg-canvas">
            <div className="flex items-center gap-3 border-b border-line bg-white px-5 py-3.5">
              <span className="font-mono text-xs font-bold text-primary">
                {step.n}
              </span>
              <p className="text-sm font-bold text-ink">{step.title}</p>
            </div>
            <div className="space-y-2 p-4">
              {step.rows.map((r) => (
                <div
                  key={r.title}
                  className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3"
                >
                  <div>
                    <p className="text-[13px] font-medium text-ink">
                      {r.title}{" "}
                      {r.alert && (
                        <span className="ml-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600">
                          above price
                        </span>
                      )}
                    </p>
                    <p className="text-[11px] text-muted">{r.detail}</p>
                  </div>
                  <p className="text-[13px] font-bold text-ink">{r.amount}</p>
                </div>
              ))}
            </div>
            <div className="mx-4 mb-4 flex items-center justify-between rounded-xl bg-primary px-4 py-3">
              <p className="text-[13px] font-medium text-white">{step.footer}</p>
              <p className="text-sm font-bold text-white">{step.footerValue}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 max-md:flex-row max-md:overflow-x-auto max-md:pb-2">
            {steps.map((s, i) => (
              <button
                key={s.n}
                onClick={() => setActive(i)}
                className={`flex flex-none items-start gap-3 rounded-xl px-4 py-3 text-left transition-colors max-md:min-w-[200px] ${
                  i === active
                    ? "border-l-2 border-primary bg-primary-soft/60"
                    : "border-l-2 border-transparent hover:bg-neutral-50"
                }`}
              >
                <span
                  className={`font-mono text-xs font-bold ${
                    i === active ? "text-primary" : "text-muted"
                  }`}
                >
                  {s.n}
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">
                    {s.tab}
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-5 text-muted">
                    {s.desc}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <h3 className="mx-auto max-w-2xl text-center text-[26px] leading-[1.25] font-medium tracking-[-0.4px] text-ink md:text-[32px]">
            Everything else, <span className="text-primary">built in.</span>
          </h3>
          <div className="mt-10 grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {platform.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-[0_16px_40px_-24px_rgba(212,115,17,0.5)]"
              >
                <FeatureIcon d={f.icon} />
                <div>
                  <p className="text-sm font-bold text-ink">{f.title}</p>
                  <p className="mt-1 text-[13px] leading-5 text-muted">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
