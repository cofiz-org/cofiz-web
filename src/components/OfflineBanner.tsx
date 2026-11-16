import { CheckIcon, OfflineIcon } from "@/components/icons";

const queued = [
  "Purchase · Wet 20 kg · 1,000 ETB",
  "Purchase · Jenfel 15 kg · 675 ETB",
  "Cash advance · Abebe · 2,000 ETB",
];

export default function OfflineBanner() {
  return (
    <section id="offline" className="scroll-mt-20 px-6 pb-28 lg:px-12 lg:pb-40">
      <div className="frame reveal mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[16px] bg-block px-8 py-12 lg:px-14 lg:py-16">
          <div
            className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--glow-green), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-chrome px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                <OfflineIcon className="h-3.5 w-3.5 text-success" />
                Offline-first
              </span>
              <h2 className="mt-6 text-3xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl">
                No signal? Keep selling.
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.65] text-muted">
                Cofiz keeps working in the field with no connection. Entries
                wait on the phone and sync in order the moment the network comes
                back.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-chrome p-5">
              <div className="flex items-center justify-between border-b border-line pb-3.5">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
                  Queued · 3 entries
                </p>
                <span className="flex items-center gap-1.5 text-[11px] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Saved locally
                </span>
              </div>
              <ul className="divide-y divide-line">
                {queued.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 py-3 text-[12px] text-muted"
                  >
                    <CheckIcon className="h-3 w-3 shrink-0 text-success" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3.5 font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
                Syncs on reconnect
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
