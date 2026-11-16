import {
  BellIcon,
  ClockIcon,
  CoinsIcon,
  GlobeIcon,
  OfflineIcon,
  ReceiptIcon,
  UsersIcon,
} from "@/components/icons";

const features = [
  {
    id: "collectors",
    title: "Collector cash",
    desc: "Fund a collector in the morning and watch every birr go out and come back. Balances follow the entries, not a separate notebook.",
    chip: "Cash advances",
    span: "lg:col-span-4",
    Icon: CoinsIcon,
  },
  {
    title: "Receipt photos",
    desc: "Every purchase can carry a photo of the receipt. The proof stays attached to the entry it belongs to.",
    chip: "Purchases",
    span: "lg:col-span-4",
    Icon: ReceiptIcon,
  },
  {
    title: "Roles & access",
    desc: "Admins run the book, collectors see their own, investors watch the totals. Nobody edits what they shouldn't.",
    chip: "Admin · Collector · Investor",
    span: "lg:col-span-4",
    Icon: UsersIcon,
  },
  {
    title: "Notifications",
    desc: "A push when prices change, when cash arrives, and when a debt is opened or cleared — on the phone that needs to know.",
    chip: "Prices · payments · debts",
    span: "lg:col-span-6",
    Icon: BellIcon,
  },
  {
    title: "Audit log & backup",
    desc: "Admins can see who changed what and when, and keep a backup of the books. Nothing moves without a record.",
    chip: "History",
    span: "lg:col-span-6",
    Icon: ClockIcon,
  },
  {
    title: "Offline-first",
    desc: "Keep logging in the field with no connection. Entries sync in order when the network returns.",
    chip: "Field-ready",
    span: "lg:col-span-3",
    Icon: OfflineIcon,
  },
  {
    title: "Amharic & English",
    desc: "The whole interface in Amharic or English, switched per user.",
    chip: "አማርኛ",
    span: "lg:col-span-3",
    Icon: GlobeIcon,
  },
  {
    title: "ETB & Ethiopian dates",
    desc: "Birr amounts and the Ethiopian calendar, out of the box.",
    chip: "Local by default",
    span: "lg:col-span-3",
    Icon: CoinsIcon,
  },
  {
    title: "Every phone in sync",
    desc: "The admin's change reaches the field in seconds — no message chain.",
    chip: "One ledger",
    span: "lg:col-span-3",
    Icon: UsersIcon,
  },
];

export default function FeatureGrid() {
  return (
    <section id="tools" className="scroll-mt-20 px-6 pb-28 lg:px-12 lg:pb-40">
      <div className="mx-auto max-w-7xl">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
              Everything included
            </p>
            <h2 className="mt-5 text-3xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl">
              One app. The whole book.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.65] text-muted">
            No add-ons, no per-seat modules. Install it and the day-to-day is
            covered.
          </p>
        </div>

        <div className="frame reveal mt-12 grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          {features.map(({ id, title, desc, chip, span, Icon }) => (
            <div
              key={title}
              id={id}
              className={`group relative flex min-h-[232px] scroll-mt-24 flex-col rounded-[16px] bg-block p-8 transition-colors duration-300 hover:bg-block-hover ${span}`}
            >
              <Icon className="h-5 w-5 text-subtle transition-colors duration-300 group-hover:text-accent-light" />
              <h3 className="mt-6 text-xl font-medium tracking-[-0.01em] text-foreground">
                {title}
              </h3>
              <p className="mt-2 max-w-[42ch] text-[15px] leading-[1.65] text-muted">
                {desc}
              </p>
              <p className="mt-auto pt-8 font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
                {chip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
