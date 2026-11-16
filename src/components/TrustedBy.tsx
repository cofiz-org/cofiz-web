import {
  AndroidIcon,
  GlobeIcon,
  OfflineIcon,
  PdfIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/icons";

const integrations = [
  { name: "Telegram", note: "Sign-in provider", Icon: TelegramIcon },
  { name: "WhatsApp", note: "Sign-in provider", Icon: WhatsAppIcon },
  { name: "Android", note: "Install the APK", Icon: AndroidIcon },
  { name: "PDF", note: "Export the books", Icon: PdfIcon },
  { name: "Offline", note: "No signal needed", Icon: OfflineIcon },
  { name: "Amharic", note: "አማርኛ · English", Icon: GlobeIcon },
];

export default function TrustedBy() {
  return (
    <section className="px-6 pb-4 pt-4 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
          Works with what you already use
        </p>
        <div className="frame reveal mt-5 grid grid-cols-2 gap-[2px] sm:grid-cols-3 lg:grid-cols-6">
          {integrations.map(({ name, note, Icon }) => (
            <div
              key={name}
              className="flex flex-col gap-7 rounded-[16px] bg-block p-6 transition-colors duration-300 hover:bg-block-hover"
            >
              <Icon className="h-5 w-5 text-muted" />
              <div>
                <p className="text-sm font-medium text-foreground">{name}</p>
                <p className="mt-1 text-[12px] text-subtle">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
