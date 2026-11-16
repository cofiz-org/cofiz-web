import { ArrowUpRightIcon, ChartIcon, CoinsIcon, ReceiptIcon } from "@/components/icons";

const prices = [
  { name: "Jenfel", value: "45.00" },
  { name: "Wet", value: "50.00" },
  { name: "Special", value: "60.00" },
];

const debts = [
  { name: "Abebe", detail: "2 open · oldest 3 days", value: "840" },
  { name: "Tigist", detail: "1 open", value: "400" },
  { name: "Dawit", detail: "settled", value: "0" },
];

const week = [
  { day: "Mon", value: 42 },
  { day: "Tue", value: 58 },
  { day: "Wed", value: 36 },
  { day: "Thu", value: 74 },
  { day: "Fri", value: 64 },
  { day: "Sat", value: 92 },
  { day: "Sun", value: 48 },
];

export default function ControlSection() {
  return (
    <section className="px-6 pb-28 lg:px-12 lg:pb-40">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
            Built for the work
          </p>
          <h2 className="mt-5 text-3xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            The three numbers you check every day.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-muted">
            Today&apos;s price, the cash in the field, and what the month is
            doing. Cofiz keeps all three one tap apart.
          </p>
        </div>

        <div className="frame reveal mt-14 grid grid-cols-1 gap-[2px] lg:mt-20 lg:grid-cols-3">
          <div
            id="prices"
            className="scroll-mt-24 rounded-[16px] bg-block p-8 transition-colors duration-300 hover:bg-block-hover"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-chrome text-accent-light">
                <CoinsIcon className="h-4 w-4" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
                Price book
              </span>
            </div>
            <h3 className="mt-6 text-xl font-medium tracking-[-0.01em] text-foreground">
              Today&apos;s prices
            </h3>
            <p className="mt-2 text-[15px] leading-[1.65] text-muted">
              One rate per grade. Change it once and the whole team is selling
              from the same number.
            </p>
            <div className="mt-6 rounded-lg border border-line bg-chrome p-4">
              <div className="divide-y divide-line">
                {prices.map(({ name, value }) => (
                  <div
                    key={name}
                    className="flex items-center justify-between py-2.5 text-[13px] first:pt-0 last:pb-0"
                  >
                    <span className="text-muted">{name}</span>
                    <span className="font-mono text-foreground">{value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                ETB per kg · updated 07:12
              </p>
            </div>
          </div>

          <div
            id="debts"
            className="scroll-mt-24 rounded-[16px] bg-block p-8 transition-colors duration-300 hover:bg-block-hover"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-chrome text-accent-light">
                <ReceiptIcon className="h-4 w-4" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
                Balances
              </span>
            </div>
            <h3 className="mt-6 text-xl font-medium tracking-[-0.01em] text-foreground">
              Who owes what
            </h3>
            <p className="mt-2 text-[15px] leading-[1.65] text-muted">
              A shortfall opens a debt on its own. Repayments close it out, one
              entry at a time.
            </p>
            <div className="mt-6 rounded-lg border border-line bg-chrome p-4">
              <ul className="divide-y divide-line">
                {debts.map(({ name, detail, value }) => (
                  <li
                    key={name}
                    className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0"
                  >
                    <span>
                      <span className="block text-[13px] text-muted">{name}</span>
                      <span className="block text-[10px] text-subtle">
                        {detail}
                      </span>
                    </span>
                    <span
                      className={`font-mono text-[13px] ${
                        value === "0" ? "text-success" : "text-foreground"
                      }`}
                    >
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 flex items-center justify-between border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                Open
                <span className="text-foreground">1,240 ETB</span>
              </p>
            </div>
          </div>

          <div
            id="reports"
            className="scroll-mt-24 rounded-[16px] bg-block p-8 transition-colors duration-300 hover:bg-block-hover"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-chrome text-accent-light">
                <ChartIcon className="h-4 w-4" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
                Month end
              </span>
            </div>
            <h3 className="mt-6 text-xl font-medium tracking-[-0.01em] text-foreground">
              The month at a glance
            </h3>
            <p className="mt-2 text-[15px] leading-[1.65] text-muted">
              Filter a day, a week or a month and hand the accountant a clean
              PDF.
            </p>
            <div className="mt-6 rounded-lg border border-line bg-chrome p-4">
              <div className="flex h-20 items-end justify-between gap-1.5">
                {week.map(({ day, value }) => (
                  <div
                    key={day}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                  >
                    <span
                      className="w-full rounded-sm bg-accent/70"
                      style={{ height: `${value}%` }}
                    />
                    <span className="font-mono text-[8px] text-subtle">{day}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                  Net this week
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[13px] text-foreground">
                  +5,500
                  <ArrowUpRightIcon className="h-3 w-3 text-success" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
