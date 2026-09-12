import DotGrid from "@/components/DotGrid";

const APK_URL = "https://github.com/cofiz-org/cofiz-dist/releases/latest";

export default function CtaSection() {
  return (
    <section id="demo" className="relative isolate w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_30%,black_75%,black_calc(100%_-_8px),transparent_100%)]">
        <DotGrid className="block h-full w-full" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
        <p className="font-mono text-xs font-bold tracking-[0.2em] text-primary uppercase">
          Free to start
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-[32px] leading-[1.2] font-medium tracking-[-0.5px] text-ink md:text-[42px]">
          Start collecting <span className="text-primary">today.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-6 font-medium text-muted">
          Install the APK. From the first sale, you&apos;re building the
          ledger your business will run on.
        </p>
        <div className="mt-8 flex items-center justify-center gap-2 max-md:flex-col max-md:items-stretch max-md:px-4">
          <a
            href={APK_URL}
            className="flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Get started for free
          </a>
          <a
            href="#features"
            className="flex h-11 items-center justify-center rounded-lg bg-neutral-100 px-6 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
          >
            See how it works
          </a>
        </div>
        <p className="mt-6 text-xs text-muted">
          Android · Works offline · Amharic & English
        </p>
      </div>
    </section>
  );
}
