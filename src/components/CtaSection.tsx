import DownloadButton from "@/components/DownloadButton";

export default function CtaSection() {
  return (
    <section className="px-6 pb-24 lg:px-12 lg:pb-32">
      <div className="frame reveal mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[16px] bg-block px-6 py-20 text-center lg:py-28">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--glow-warm), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
              Free to start
            </p>
            <h2 className="mt-5 text-balance text-3xl font-normal leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
              Every kilo. Every birr. On the books.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.65] text-muted">
              Install the APK, set today&apos;s price and give every collector
              the same ledger. The first sale is the first entry.
            </p>
            <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
              <DownloadButton className="w-full sm:w-auto" />
              <a
                href="#how-it-works"
                className="inline-flex w-full items-center justify-center rounded-md border border-line-strong bg-chrome px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-block-hover sm:w-auto sm:py-3.5"
              >
                See how it works
              </a>
            </div>
            <p className="mt-6 text-[12px] text-subtle">
              Android · Works offline · Amharic & English
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
