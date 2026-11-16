import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";

const cases = [
  {
    title: "Daily prices",
    desc: "Set Jenfel, Wet and Special once. Every phone follows.",
    href: "#prices",
    label: "Price book",
  },
  {
    title: "Collectors",
    desc: "Cash advances, purchases and shortfalls in one place.",
    href: "#collectors",
    label: "Field cash",
  },
  {
    title: "Debts",
    desc: "Shortfalls open on their own. Repayments close them.",
    href: "#debts",
    label: "Balances",
  },
  {
    title: "Reports",
    desc: "Day, week or month — export a clean PDF for the books.",
    href: "#reports",
    label: "Month end",
  },
];

const today = [
  { name: "Jenfel", price: "45.00" },
  { name: "Wet", price: "50.00", active: true },
  { name: "Special", price: "60.00" },
];

export default function UseCases() {
  return (
    <section
      id="features"
      className="scroll-mt-20 px-6 pb-28 pt-16 lg:px-12 lg:pb-40 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="frame reveal">
          <div className="relative overflow-hidden rounded-[16px] bg-block p-8 lg:p-14">
            <div
              className="pointer-events-none absolute -right-24 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, var(--glow-warm-soft), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
                  The ledger
                </p>
                <h2 className="mt-5 max-w-xl text-3xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
                  One ledger, always current.
                </h2>
                <p className="mt-6 max-w-lg text-[15px] leading-[1.65] text-muted">
                  Prices, cash, purchases and debts live in the same place.
                  Change one entry and the numbers downstream move with it — no
                  second book, no evening reconciliation.
                </p>
                <ul className="mt-8 space-y-2.5">
                  {[
                    "Same numbers on the admin's phone and in the field",
                    "Every purchase traceable to a collector and a receipt",
                    "Reports built from the entries, not retyped",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] text-muted"
                    >
                      <CheckIcon className="mt-[3px] h-3.5 w-3.5 shrink-0 text-accent-light" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-line bg-chrome p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
                    Today · prices
                  </p>
                  <span className="flex items-center gap-1.5 text-[11px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    Live
                  </span>
                </div>
                <div className="divide-y divide-line">
                  {today.map(({ name, price, active }) => (
                    <div
                      key={name}
                      className="flex items-center justify-between py-3.5"
                    >
                      <span className="text-sm text-muted">{name}</span>
                      <span className="flex items-center gap-3">
                        {active && (
                          <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-accent-light">
                            Default
                          </span>
                        )}
                        <span className="font-mono text-[13px] text-foreground">
                          {price}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between rounded-lg bg-block px-4 py-3">
                  <span className="text-[12px] text-muted">
                    Shared with the team
                  </span>
                  <span className="flex -space-x-1.5">
                    {["A", "T", "D", "S"].map((initial) => (
                      <span
                        key={initial}
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-line-strong bg-block-hover font-mono text-[9px] text-muted"
                      >
                        {initial}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-5 lg:mt-24">
          <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
            Used for
          </p>
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="frame reveal mt-6 grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex flex-col justify-between gap-10 rounded-[16px] bg-block p-8 transition-all duration-300 hover:-translate-y-0.5 hover:bg-block-hover hover:shadow-[var(--shadow-hover)]"
            >
              <div>
                <h3 className="text-xl font-medium tracking-[-0.01em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-muted">
                  {item.desc}
                </p>
              </div>
              <p className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-subtle transition-colors group-hover:text-foreground">
                {item.label}
                <ArrowUpRightIcon className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
