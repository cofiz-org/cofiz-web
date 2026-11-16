import Image from "next/image";
import Link from "next/link";

export default function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/icon-bgless.png"
        alt=""
        width={484}
        height={515}
        className="h-10 w-auto object-contain"
        unoptimized
        priority={priority}
      />
      <span className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
        Cofiz
      </span>
    </Link>
  );
}
