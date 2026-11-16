import { AndroidIcon, DownloadIcon } from "@/components/icons";
import { APK_URL, APK_VERSION } from "@/site";

export default function DownloadButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <a
      href={APK_URL}
      aria-label="Download the Cofiz APK for Android"
      className={`group inline-flex max-w-full text-left ${className}`}
    >
      <span className="relative flex max-w-full flex-col items-stretch overflow-hidden rounded-[6px] bg-btn text-btn-fg transition-colors duration-300 hover:bg-btn-hover sm:flex-row">
        <span className="flex shrink-0 items-center gap-2.5 border-b border-btn-line bg-btn-soft px-4 py-2.5 text-sm font-medium tracking-[-0.01em] transition-colors duration-300 sm:border-b-0 sm:border-r sm:py-3.5">
          <AndroidIcon className="h-3.5 w-3.5 shrink-0" />
          Download APK
        </span>
        <span className="flex min-w-0 items-stretch font-mono text-[13px] leading-normal">
          <span className="flex min-w-0 items-center gap-3 px-4 py-3.5">
            <span className="select-none text-btn-muted">{APK_VERSION}</span>
            <code className="flex min-w-0 whitespace-pre">
              <span className="min-w-0 overflow-hidden text-ellipsis">
                Android · free
              </span>
            </code>
          </span>
          <span
            className="flex shrink-0 items-center border-l border-btn-line px-3.5 text-btn-muted transition-colors duration-300 group-hover:text-btn-fg"
            aria-hidden="true"
          >
            <DownloadIcon className="h-[13px] w-[13px]" />
          </span>
        </span>
      </span>
    </a>
  );
}
