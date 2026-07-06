"use client";
import { useState } from "react";
import { about, experience, projects, stack } from "@/lib/data";
import { Reveal } from "./reveal";
import { TechTag } from "./tech";

function SectionHead({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm font-bold text-periwinkle">
        {index}
      </span>
      <h2 className="font-mono text-sm font-bold uppercase tracking-[0.14em]">
        {label}
      </h2>
      <span className="h-px min-w-8 flex-1 bg-line" aria-hidden="true" />
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-[clamp(4.5rem,10vw,8rem)] sm:px-8"
    >
      <Reveal>
        <SectionHead index="01" label="Experience" />
      </Reveal>
      {experience.map((job) => (
        <Reveal key={job.company} delay={0.1}>
          <div className="mt-12 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
            <div>
              <h3 className="font-mono text-[1.35rem] font-bold leading-snug tracking-tight">
                {job.role}
              </h3>
              <p className="mt-2 text-muted">{job.company}</p>
              <p className="mt-1 font-mono text-xs tracking-[0.04em] text-faint">
                {job.period}
              </p>
            </div>
            <ul className="space-y-5">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="grid grid-cols-[auto_1fr] gap-4 text-[15px] leading-[1.7] text-muted sm:text-base"
                >
                  <span
                    className="mt-[0.7em] h-1.5 w-1.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

const PROJECTS_INITIAL_COUNT = 4;
export function Projects() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_INITIAL_COUNT);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + PROJECTS_INITIAL_COUNT, projects.length)
    );
  };

  return (
    <section id="projects" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-[clamp(4.5rem,10vw,8rem)] sm:px-8">
        <Reveal>
          <SectionHead index="02" label="Selected projects" />
        </Reveal>
        <div className="mt-12">
          {visibleProjects.map((project, i) => (
            <Reveal key={project.name} delay={0.05 * i}>
              <a
                href={project.href}
                className="group -mx-3 grid gap-x-8 gap-y-3 rounded-md border-t border-line/70 px-3 py-10 transition-colors last:border-b hover:bg-blush/70 md:grid-cols-[4.5rem_minmax(0,1.1fr)_minmax(0,1.6fr)_2rem] md:items-baseline"
              >
                <span className="font-mono text-xs font-medium text-periwinkle/70 transition-colors group-hover:text-periwinkle">
                  {project.index}
                </span>
                <span className="block">
                  <h3 className="font-mono text-[1.35rem] font-bold leading-snug tracking-tight sm:text-[1.6rem]">
                    {project.name}
                  </h3>
                  <span className="mt-2 block font-mono text-xs uppercase tracking-[0.1em] text-peach">
                    {project.kind}
                  </span>
                </span>
                <span className="block">
                  <span className="block text-[15px] leading-[1.7] text-muted">
                    {project.description}
                  </span>
                  <span className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <TechTag key={tech} name={tech} />
                    ))}
                  </span>
                </span>
                <span
                  className="hidden text-xl text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent md:block"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        {hasMore && (
          <Reveal delay={0.05}>
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="group flex items-center gap-2 rounded-full border border-line/70 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-muted transition-colors hover:border-periwinkle hover:text-periwinkle"
              >
                Load more
                <span
                  className="text-base transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                >
                  ↓
                </span>
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-[clamp(4.5rem,10vw,8rem)] sm:px-8">
        <Reveal>
          <SectionHead index="03" label="Stack" />
        </Reveal>
        <div className="mt-12">
          {stack.map((group) => (
            <Reveal key={group.label}>
              <div className="grid gap-3 border-t border-line/50 py-6 md:grid-cols-[12rem_1fr] md:gap-8">
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-periwinkle md:pt-1.5">
                  <span className="text-faint">#</span> {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.split(" · ").map((item) => (
                    <TechTag key={item} name={item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-[clamp(4.5rem,10vw,8rem)] sm:px-8">
        <Reveal>
          <SectionHead index="04" label="Beyond the code" />
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.05}>
            <div className="space-y-10">
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-periwinkle">
                  Education
                </h3>
                <p className="mt-3 font-medium">{about.education.degree}</p>
                <p className="mt-1 text-muted">{about.education.school}</p>
                <p className="mt-1 font-mono text-xs tracking-[0.08em] text-muted">
                  {about.education.period}
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-periwinkle">
                  Languages
                </h3>
                <p className="mt-3 text-muted">{about.languages}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-[58ch] space-y-5 text-[15px] leading-[1.75] text-muted sm:text-base">
              {about.prose.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
