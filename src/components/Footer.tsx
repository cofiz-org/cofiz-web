import Image from "next/image";

const APK_URL = "https://github.com/cofiz-org/cofiz-dist/releases/latest";

const product = [
  { label: "Features", href: "#features" },
  { label: "Download APK", href: APK_URL },
  { label: "Changelog", href: "#changelog" },
  { label: "Pricing", href: "#pricing" },
];

const connect = [
  { label: "Telegram", href: "https://t.me/cofiz" },
  { label: "Book a demo", href: "#demo" },
  { label: "Sign in", href: "#signin" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-10 max-md:grid-cols-1">
          <div>
            <a href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Cofiz logo"
                width={25}
                height={32}
                className="h-8 w-auto"
                unoptimized
              />
              <span className="text-[17px] font-bold tracking-tight text-primary">
                Cofiz
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[13px] leading-6 text-muted">
              One shared ledger for Ethiopian coffee businesses. Daily
              prices, sales, debts and reports — even offline.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="h-2 w-2 rounded-full bg-green-500" />
              </span>
              <p className="text-xs font-medium text-muted">
                v1.0.4 · Latest APK available now
              </p>
            </div>
          </div>
          <nav aria-label="Product">
            <p className="text-xs font-bold tracking-[0.15em] text-ink/50 uppercase">
              Product
            </p>
            <ul className="mt-4 space-y-2.5">
              {product.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-ink/75 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Connect">
            <p className="text-xs font-bold tracking-[0.15em] text-ink/50 uppercase">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              {connect.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-ink/75 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-line pt-6 max-md:flex-col max-md:gap-3">
          <p className="text-xs text-muted">© 2026 Cofiz. All rights reserved.</p>
          <p className="text-xs text-muted">
            Made for Ethiopian coffee businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
