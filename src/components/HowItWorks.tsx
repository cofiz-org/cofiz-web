"use client";

import Image from "next/image";
import { useState } from "react";
import { TelegramIcon, WhatsAppIcon } from "@/components/icons";

const steps = [
  {
    title: "Set the day's prices",
    desc: "Jenfel, Wet and Special rates go in from the admin dashboard. Every collector's phone sees the new price immediately — no calls, no guesswork.",
  },
  {
    title: "Fund the collectors",
    desc: "Send the morning cash advance to each collector. Their balance updates the moment it lands, and the amount is on the record.",
  },
  {
    title: "Log purchases as they happen",
    desc: "Type, weight, price and a receipt photo. If a purchase goes above the daily price, the app warns on the spot and flags the entry for the admin.",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [tab, setTab] = useState<"app" | "signin">("app");

  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 px-6 py-28 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
            How it works
          </p>
          <h2 className="mt-5 text-3xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            From morning price to clean books.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-muted">
            Three habits, one ledger. The same entries that run the day are the
            ones the reports are built from.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          <div className="reveal border-t border-line">
            {steps.map((step, i) => {
              const active = i === activeStep;
              return (
                <div key={step.title} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setActiveStep(active ? -1 : i)}
                    aria-expanded={active}
                    aria-controls={`step-panel-${i}`}
                    className="group flex w-full items-start gap-4 py-6 text-left"
                  >
                    <span
                      className={`mt-1 font-mono text-[11px] transition-colors ${
                        active ? "text-accent-light" : "text-subtle"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center justify-between gap-6">
                        <span
                          className={`text-lg font-medium tracking-[-0.01em] transition-colors ${
                            active
                              ? "text-foreground"
                              : "text-muted group-hover:text-foreground"
                          }`}
                        >
                          {step.title}
                        </span>
                        <span
                          className={`relative h-3 w-3 shrink-0 text-subtle transition-all group-hover:text-muted ${
                            active ? "rotate-45" : ""
                          }`}
                          aria-hidden="true"
                        >
                          <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current" />
                          <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                        </span>
                      </span>
                      <span
                        id={`step-panel-${i}`}
                        className={`grid transition-all duration-300 ease-out ${
                          active
                            ? "mt-2 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden text-[15px] leading-[1.65] text-muted">
                          {step.desc}
                        </span>
                      </span>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="frame reveal h-fit lg:sticky lg:top-24">
            <div className="rounded-[16px] bg-block">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
                  See it running
                </p>
                <div
                  role="tablist"
                  aria-label="Demo mode"
                  className="flex items-center gap-1 rounded-full border border-line bg-chrome p-1"
                >
                  {(["app", "signin"] as const).map((value) => (
                    <button
                      key={value}
                      type="button"
                      role="tab"
                      aria-selected={tab === value}
                      onClick={() => setTab(value)}
                      className={`rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
                        tab === value
                          ? "bg-btn text-btn-fg"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {value === "app" ? "App" : "Sign in"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-6 py-10 lg:min-h-[560px]">
                <div
                  className="pointer-events-none absolute -right-16 top-1/4 h-72 w-72 rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, var(--glow-warm-soft), transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                <div
                  role="tabpanel"
                  aria-label={tab === "app" ? "Cofiz app demo" : "Sign-in screen"}
                  className="relative w-[232px] sm:w-[256px]"
                >
                  <div className="rounded-[30px] border border-line-strong bg-black p-2 shadow-[var(--shadow-device)]">
                    <div className="overflow-hidden rounded-[24px] bg-chrome">
                      {tab === "app" ? (
                        <video
                          className="aspect-[9/19] w-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster="/videos/cofiz-demo-poster.webp"
                          aria-label="Cofiz app screen recording"
                        >
                          <source
                            src="/videos/cofiz-demo.webm"
                            type="video/webm"
                          />
                          <source src="/videos/cofiz-demo.mp4" type="video/mp4" />
                        </video>
                      ) : (
                        <div className="flex aspect-[9/19] w-full flex-col items-center justify-center bg-[#f7f7f7] px-5 text-center">
                          <Image
                            src="/icon-bgless.png"
                            alt=""
                            width={484}
                            height={515}
                            className="h-14 w-auto object-contain"
                            unoptimized
                          />
                          <p className="mt-7 text-[13px] font-medium text-[#1c1b1a]">
                            Welcome to Cofiz
                          </p>
                          <p className="mt-8 text-[10px] text-[#8b8783]">
                            Sign in with
                          </p>
                          <div className="mt-4 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-foreground">
                              <WhatsAppIcon className="h-5 w-5" />
                            </span>
                            <span className="flex flex-col items-center gap-1">
                              <span className="h-4 w-px bg-[#d8d5d1]" />
                              <span className="text-[8px] uppercase text-[#a8a49f]">
                                or
                              </span>
                              <span className="h-4 w-px bg-[#d8d5d1]" />
                            </span>
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#229ED9] text-foreground">
                              <TelegramIcon className="h-5 w-5" />
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-line px-5 py-4">
                <p className="text-[12px] leading-relaxed text-subtle">
                  {tab === "app"
                    ? "The same ledger, on the phone that goes to the field."
                    : "Sign in with Telegram or WhatsApp — no new password to remember."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
