import DownloadButton from "@/components/DownloadButton";
import {
  ArrowUpRightIcon,
  TelegramIcon,
  UsersIcon,
  WhatsAppIcon,
} from "@/components/icons";

const ledgerSteps = [
  "prices",
  "collector cash",
  "purchases",
  "debts",
  "reports",
  "offline",
];

const bars = Array.from({ length: 44 }, (_, i) => ({
  opacity: 0.2 + (i / 44) * 0.36,
  active: i === 43,
}));

export default function HeroSection() {
  return (
    <section className="relative bg-page px-6 pb-14 pt-28 lg:px-12 lg:pb-16">
      <div className="frame rise-in mx-auto flex max-w-[88rem] flex-col">
        <div className="relative flex flex-col justify-center overflow-hidden rounded-[16px] bg-block p-8 lg:min-h-[420px] lg:p-14 lg:pt-[7.5rem]">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(212,115,17,0.28), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start">
            <h1 className="max-w-3xl text-balance text-4xl font-normal leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
              One shared ledger for your whole coffee business.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Cofiz runs the books your team already keeps. Daily prices,
              collector cash, purchases, debts and reports — set in the app,
              visible to everyone.
            </p>
            <div className="mt-9 flex w-full flex-wrap items-center gap-3">
              <DownloadButton />
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-muted transition-colors hover:text-white sm:px-7 sm:py-3.5"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-[2px] md:grid-cols-3">
          <div className="group relative flex min-h-[200px] flex-col justify-start overflow-hidden rounded-[16px] bg-block p-7 transition-colors duration-300 hover:bg-block-hover md:min-h-[300px] md:p-8 lg:p-12">
            <div
              className="pointer-events-none absolute -right-10 bottom-14 h-64 w-64 rounded-full opacity-60 blur-3xl transition-opacity duration-500 ease-out group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,115,17,0.30), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-[4%] -right-[7%] w-[54%] max-w-[440px] text-[#6b5745] opacity-75 transition-opacity duration-500 ease-out group-hover:opacity-100 md:-right-[9%] md:w-[76%]"
              aria-hidden="true"
            >
              <svg viewBox="0 0 700 440" className="h-auto w-full">
                <defs>
                  <linearGradient id="bentoTopFace" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4a3423" />
                    <stop offset="100%" stopColor="#38271b" />
                  </linearGradient>
                  <linearGradient
                    id="bentoLeftFace"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#302218" />
                    <stop offset="100%" stopColor="#251a12" />
                  </linearGradient>
                  <linearGradient
                    id="bentoRightFace"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#1e150f" />
                    <stop offset="100%" stopColor="#271c13" />
                  </linearGradient>
                </defs>
                <g transform="translate(410 0)">
                  <path
                    d="M 0 80 L 110 20 L 220 80 L 110 140 Z"
                    fill="url(#bentoTopFace)"
                    stroke="currentColor"
                    strokeOpacity="0.95"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 0 80 L 0 220 L 110 280 L 110 140 Z"
                    fill="url(#bentoLeftFace)"
                    stroke="currentColor"
                    strokeOpacity="0.7"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 110 140 L 110 280 L 220 220 L 220 80 Z"
                    fill="url(#bentoRightFace)"
                    stroke="currentColor"
                    strokeOpacity="0.5"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                </g>
                <g
                  transform="translate(300 60)"
                  className="opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                  style={{ transitionDelay: "50ms" }}
                >
                  <path
                    d="M 0 80 L 110 20 L 220 80 L 110 140 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.75"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 0 80 L 0 220 L 110 280 L 110 140 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.75"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 110 140 L 110 280 L 220 220 L 220 80 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.75"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 0 220 L 110 160 L 220 220 M 110 160 L 110 20"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.45"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <g
                  transform="translate(190 120)"
                  className="opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                  style={{ transitionDelay: "180ms" }}
                >
                  <path
                    d="M 0 80 L 110 20 L 220 80 L 110 140 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.55"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 0 80 L 0 220 L 110 280 L 110 140 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.55"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 110 140 L 110 280 L 220 220 L 220 80 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.55"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 0 220 L 110 160 L 220 220 M 110 160 L 110 20"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.35"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #171210 30%, rgba(23,18,16,0.55) 55%, transparent)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="text-xl font-medium leading-snug tracking-[-0.01em] text-white lg:text-2xl">
                Set it once. Sell all day.
              </h2>
              <ul className="mt-5 grid w-fit grid-cols-2 gap-x-8 gap-y-2">
                {ledgerSteps.map((step, i) => (
                  <li
                    key={step}
                    className="font-mono text-[12px] text-subtle transition-colors duration-300 group-hover:text-zinc-300"
                    style={{ transitionDelay: `${i * 45}ms` }}
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative flex min-h-[200px] flex-col items-center overflow-hidden rounded-[16px] bg-block p-7 text-center transition-colors duration-300 hover:bg-block-hover md:min-h-[300px] md:p-8 lg:p-12">
            <div>
              <h2 className="text-xl font-medium leading-snug tracking-[-0.01em] text-white lg:text-2xl">
                A ledger that remembers
              </h2>
              <p className="mx-auto mt-3 max-w-[30ch] text-sm leading-relaxed text-muted">
                Every balance, open debt and cash position stays exactly where
                you left it.
              </p>
            </div>
            <div
              className="mt-auto flex w-full max-w-[16.5rem] items-end justify-between"
              aria-hidden="true"
            >
              {bars.map((bar, i) => (
                <span
                  key={i}
                  className={`h-[18px] w-[3px] rounded-full ${
                    bar.active ? "animate-pulse bg-success" : "bg-line-strong"
                  }`}
                  style={bar.active ? undefined : { opacity: bar.opacity }}
                />
              ))}
            </div>
          </div>

          <a
            href="#how-it-works"
            className="group relative block min-h-[200px] overflow-hidden rounded-[16px] bg-block transition-colors duration-300 hover:bg-block-hover focus-visible:outline-offset-[-3px] md:min-h-[300px]"
          >
            <div
              className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full blur-2xl transition-transform duration-500 ease-out group-hover:scale-110"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,115,17,0.55), rgba(212,115,17,0.14) 45%, transparent 72%)",
              }}
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col justify-between gap-3 p-7 md:p-8 lg:p-12">
              <div
                className="flex w-fit max-w-full items-center gap-5 text-muted transition-colors duration-300 group-hover:text-zinc-200"
                aria-hidden="true"
              >
                <TelegramIcon className="h-6 w-6 shrink-0" />
                <WhatsAppIcon className="h-6 w-6 shrink-0" />
                <UsersIcon className="h-6 w-6 shrink-0" />
              </div>
              <div>
                <p className="text-xl font-medium leading-snug tracking-[-0.01em] text-white lg:text-2xl">
                  One tap to sign in
                </p>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors duration-300 group-hover:text-zinc-200">
                  Telegram &amp; WhatsApp · no passwords
                  <ArrowUpRightIcon className="ml-2 inline-block h-3 w-3 -translate-x-1 align-[-1px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
