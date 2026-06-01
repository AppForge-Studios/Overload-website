import { HexBarbell } from "./HexBarbell";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 md:px-6 py-12 md:py-16 grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5">
            <HexBarbell size={28} />
            <span className="font-display font-bold tracking-[0.22em] text-sm">
              OVERLOAD
            </span>
          </div>
          <p className="mt-4 text-sm text-fg-muted max-w-xs leading-relaxed">
            A strength training app that compiles itself to you. Train heavy,
            progress daily.
          </p>
          <div className="mt-5 md:mt-6 text-[10px] tracking-[0.2em] uppercase text-fg-dim">
            V 2.4.0 · iOS · iPadOS
          </div>
        </div>

        <FooterCol
          title="Product"
          links={[
            ["Features", "/#features"],
            ["Protocol", "/#protocol"],
            ["Insights", "/#insights"],
            ["Download", "/#download"],
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            ["About", "#"],
            ["Careers", "#"],
            ["Press", "#"],
            ["Support", "/support"],
          ]}
        />
        <FooterCol
          title="Legal"
          links={[
            ["Privacy", "/privacy"],
            ["Terms", "/terms"],
            ["Security", "/security"],
            ["Delete Account", "/delete"],
          ]}
        />
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 md:px-6 py-5 md:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] tracking-[0.2em] uppercase text-fg-dim">
          <span>© {new Date().getFullYear()} Overload Labs</span>
          <span>Train Heavy · Progress Daily</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange-400 mb-5">
        {title}
      </div>
      <ul className="space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm text-fg-muted hover:text-fg transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
