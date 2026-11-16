import Logo from "@/components/Logo";
import { APK_URL, APK_VERSION, GITHUB_URL } from "@/site";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Download APK", href: APK_URL },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "GitHub", href: GITHUB_URL },
      {
        label: "Releases",
        href: "https://github.com/cofiz-org/cofiz-dist/releases",
      },
    ],
  },
  {
    title: "Coverage",
    links: [
      { label: "Daily prices", href: "#prices" },
      { label: "Collector cash", href: "#collectors" },
      { label: "Debts", href: "#debts" },
      { label: "Reports", href: "#reports" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-page px-6 pt-16 lg:px-12 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-[14px] leading-[1.7] text-muted">
              One shared ledger for Ethiopian coffee businesses. Prices, cash,
              purchases, debts and reports — even offline.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-block px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              {APK_VERSION} · Available now
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-3 lg:grid-cols-3 lg:gap-12">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
                  {column.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] text-muted transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-subtle">
            © 2026 Cofiz. All rights reserved.
          </p>
          <p className="text-[12px] text-subtle">
            Made for Ethiopian coffee businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
