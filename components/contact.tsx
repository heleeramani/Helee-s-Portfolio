import { site } from "@/lib/data";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-accent/30 bg-blush"
    >
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-[clamp(4.5rem,10vw,8rem)] sm:px-8">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
            <span className="text-accent">05 ·</span> Contact
          </p>
          <h2 className="mt-6 max-w-[20ch] font-mono text-[clamp(1.9rem,5vw,3.75rem)] font-bold leading-[1.12] tracking-tight">
            Need someone for the{" "}
            <em className="rounded-md bg-accent/20 px-1.5 not-italic text-ink">
              quiet stuff
            </em>
            ?
          </h2>
          <p className="mt-6 max-w-[52ch] text-base leading-[1.7] text-muted sm:text-lg">
            Open to backend roles and freelance work. The fastest way to reach
            me:
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-block break-all font-mono text-[clamp(1.15rem,3.4vw,2rem)] font-bold text-accent underline decoration-2 underline-offset-8 transition-[text-decoration-thickness] hover:decoration-4"
          >
            {site.email}
          </a>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={site.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-mono text-sm font-bold text-cream transition-colors hover:bg-accent-deep"
            >
              Download resume
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href={site.links.github}
              className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-accent hover:bg-blush hover:text-accent"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={site.links.linkedin}
              className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-accent hover:bg-blush hover:text-accent"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line/70 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
          <p>© 2026 Helee Ramani · Surat, India</p>
          <p className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            All systems operational
          </p>
          <p>Next.js · Tailwind</p>
        </footer>
      </div>
    </section>
  );
}
