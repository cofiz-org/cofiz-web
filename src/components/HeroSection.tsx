import DotGrid from "@/components/DotGrid";

const APK_URL = "https://github.com/cofiz-org/cofiz-dist/releases/latest";

const copy = {
  line1: "Cofiz is one shared ledger",
  line2: "for your whole coffee business.",
  sub1: "What one person records, the whole business sees.",
  sub2: "Set daily prices in the app or track sales from Telegram.",
  primaryCta: { label: "Get started for free", href: APK_URL },
  secondaryCta: { label: "Book a demo", href: "#demo" },
};

export default function HeroSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_28%,black_72%,black_calc(100%_-_8px),transparent_100%)] max-md:[mask-image:linear-gradient(to_bottom,transparent_5%,black_60%,black_88%,transparent_100%)]">
        <DotGrid className="block h-full w-full" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-10 text-center md:pt-28">
        <h1 className="mx-auto max-w-[578px] text-[42px] leading-[50.4px] font-medium tracking-[-1.26px] text-ink max-md:text-[32px] max-md:leading-[38px] max-md:tracking-[-0.5px]">
          {copy.line1} <span className="text-primary">{copy.line2}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-6 font-medium text-muted">
          {copy.sub1}
          <br />
          {copy.sub2}
        </p>
        <div className="mt-7 flex items-center justify-center gap-2 max-md:flex-col max-md:items-stretch max-md:px-4">
          <a
            href={copy.primaryCta.href}
            className="flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            {copy.primaryCta.label}
          </a>
          <a
            href={copy.secondaryCta.href}
            className="flex h-10 items-center justify-center rounded-lg bg-neutral-100 px-4 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
          >
            {copy.secondaryCta.label}
          </a>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-20">
        <figure className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_80px_-30px_rgba(212,115,17,0.45)]">
          <video
            className="aspect-square w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/cofiz-demo-poster.webp"
          >
            <source src="/videos/cofiz-demo.webm" type="video/webm" />
            <source src="/videos/cofiz-demo.mp4" type="video/mp4" />
          </video>
        </figure>
      </div>
    </section>
  );
}
