import { logLines, site } from "@/lib/data";
import { Reveal } from "./reveal";
import { TechTag } from "./tech";

const coreStack = site.stackLine.split(" · ");

const tickerText = [...logLines, ...logLines, ...logLines, ...logLines].join(
  "\n",
);

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line/70"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-6 hidden select-none overflow-hidden md:block lg:right-16"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      >
        <div className="log-ticker whitespace-pre font-mono text-[11px] leading-7 text-periwinkle opacity-20">
          {tickerText}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <p className="font-mono text-xs tracking-[0.12em] text-muted">
              <span className="text-faint">{"// "}</span>
              {site.name} · {site.role} · {site.location}
            </p>
            <p className="flex items-center gap-2 rounded-md border border-line px-3 py-1 font-mono text-[11px] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              {site.status}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-8 max-w-[22ch] font-mono text-[clamp(2rem,5.5vw,4.25rem)] font-bold leading-[1.12] tracking-tight">
            {site.tagline.before}
            <em className="rounded-md bg-accent/20 px-1.5 not-italic text-ink">
              {site.tagline.highlight}
            </em>
            {site.tagline.after}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-[62ch] text-base leading-[1.75] text-muted sm:text-lg">
            {site.summary}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 font-mono text-xs text-faint">
            <span className="text-periwinkle">const</span>{" "}
            <span className="text-ink">stack</span> = [
            <div className="my-2.5 flex flex-wrap gap-2">
              {coreStack.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>
            ]
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={site.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-mono text-sm font-bold text-cream transition-colors hover:bg-accent-deep"
            >
              Download resume
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center rounded-md border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-accent hover:bg-blush hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
