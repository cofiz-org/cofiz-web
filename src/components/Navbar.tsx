import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Features", href: "#features" },
  { label: "Changelog", href: "#changelog" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Cofiz logo"
            width={25}
            height={32}
            className="h-8 w-auto"
            quality={100}
            unoptimized
            priority
          />
          <span className="text-[17px] font-bold tracking-tight text-primary">
            Cofiz
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#signin"
            className="hidden text-sm font-medium text-ink/80 transition-colors hover:text-ink sm:block"
          >
            Sign in
          </a>
          <a
            href="https://github.com/cofiz-org/cofiz-dist/releases/latest"
            className="flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
