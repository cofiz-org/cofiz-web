import { CheckIcon } from "@/components/icons";

const branches = [
  {
    title: "Price book",
    note: "One source of truth",
    leaves: ["Jenfel · 45", "Wet · 50", "Special · 60"],
  },
  {
    title: "Cash & debts",
    note: "Updated by every entry",
    leaves: ["Advances", "Purchases", "Debts"],
  },
];

export default function LedgerTree() {
  return (
    <section className="px-6 pb-28 lg:px-12 lg:pb-40">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
        <div className="reveal">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
            Permissions
          </p>
          <h2 className="mt-5 text-3xl font-normal leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
            Set the price once. Every phone knows.
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-[1.65] text-muted">
            Admins own the price book and the cash. Collectors get their
            balance, their purchases and nothing else. Investors see the
            running totals without touching an entry.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Admin: prices, cash, team, reports and the audit log",
              "Collector: own cash balance, own purchases, own debts",
              "Investor: read-only view of the money and the totals",
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

        <div className="frame reveal">
          <div className="rounded-[16px] bg-block px-6 py-10 sm:px-10 lg:py-14">
            <div className="mx-auto w-fit rounded-lg border border-line-strong bg-chrome px-5 py-2.5">
              <p className="flex items-center gap-2.5 text-[13px] font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Admin
              </p>
            </div>

            <div className="mx-auto h-8 w-px bg-line" />

            <div className="relative">
              <div
                className="absolute left-1/4 right-1/4 top-0 h-px bg-line"
                aria-hidden="true"
              />
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                {branches.map((branch) => (
                  <div key={branch.title} className="flex flex-col items-center">
                    <div className="h-6 w-px bg-line" />
                    <div className="w-full rounded-lg border border-line-strong bg-chrome px-3 py-3 text-center">
                      <p className="text-[13px] font-medium text-white">
                        {branch.title}
                      </p>
                      <p className="mt-0.5 text-[10px] text-subtle">
                        {branch.note}
                      </p>
                    </div>
                    <div className="h-6 w-px bg-line" />
                    <div className="flex w-full flex-col gap-2">
                      {branch.leaves.map((leaf) => (
                        <div
                          key={leaf}
                          className="rounded-md border border-line bg-block-hover px-3 py-2 text-center font-mono text-[10px] text-muted"
                        >
                          {leaf}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
              One update · every device
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
