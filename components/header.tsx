import { site } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="group inline-flex items-center font-mono text-[0.95rem] font-bold tracking-tight"
        >
          <span className="text-accent">~/</span>
          <span className="lowercase">helee</span>
          <span
            aria-hidden="true"
            className="caret-blink ml-0.5 inline-block h-4 w-[0.5ch] translate-y-[1px] bg-accent"
          />
        </a>
        <nav aria-label="Sections" className="flex items-center gap-5 sm:gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden font-mono text-xs tracking-[0.06em] text-muted transition-colors hover:text-accent md:inline"
            >
              <span className="text-faint">/</span>
              {item.label.toLowerCase()}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={site.resumeHref}
            download
            className="rounded-md bg-accent px-4 py-2 font-mono text-xs font-bold tracking-[0.08em] text-cream transition-colors hover:bg-accent-deep"
          >
            resume
          </a>
        </nav>
      </div>
    </header>
  );
}
