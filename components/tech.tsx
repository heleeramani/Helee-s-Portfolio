"use client";

import { Icon } from "@iconify/react";

// Keyword -> colorful Iconify "logos" id. Ordered most-specific first so, e.g.,
// "GitHub" matches before "Git". Matching is case-insensitive substring, which
// handles verbose stack phrases like "JWT authentication" or "Linux (Ubuntu)".
const TECH_ICONS: ReadonlyArray<readonly [string, string]> = [
  ["node", "logos:nodejs-icon"],
  ["express", "logos:express"],
  ["mongo", "logos:mongodb-icon"],
  ["postgres", "logos:postgresql"],
  ["redis", "logos:redis"],
  ["docker", "logos:docker-icon"],
  ["fastapi", "logos:fastapi-icon"],
  ["flask", "logos:flask"],
  ["strapi", "logos:strapi-icon"],
  ["payload", "logos:payload"],
  ["supabase", "logos:supabase-icon"],
  ["socket", "logos:socket-io"],
  ["jwt", "logos:jwt-icon"],
  ["javascript", "logos:javascript"],
  ["react", "logos:react"],
  ["next", "logos:nextjs-icon"],
  ["github", "logos:github-icon"],
  ["git", "logos:git-icon"],
  ["postman", "logos:postman-icon"],
  ["vs code", "logos:visual-studio-code"],
  ["visual studio", "logos:visual-studio-code"],
  ["npm", "logos:npm-icon"],
  ["yarn", "logos:yarn"],
  ["vercel", "logos:vercel-icon"],
  ["netlify", "logos:netlify"],
  ["expo", "logos:expo-icon"],
  ["notion", "logos:notion-icon"],
  ["ubuntu", "logos:ubuntu"],
  ["python", "logos:python"],
];

// Keywords whose "logos" icon is solid black/dark. These vanish on the dark
// slate theme, so `.logo-adapt` recolors them to white in dark mode only.
const DARK_LOGOS = new Set([
  "express",
  "flask",
  "vercel",
  "next",
  "github",
  "notion",
  "socket",
  "payload",
  "expo",
]);

function matchTech(
  name: string,
): { icon: string; adapt: boolean } | undefined {
  const key = name.toLowerCase();
  const found = TECH_ICONS.find(([keyword]) => key.includes(keyword));
  if (!found) return undefined;
  return { icon: found[1], adapt: DARK_LOGOS.has(found[0]) };
}

export function TechTag({ name }: { name: string }) {
  const match = matchTech(name);

  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-line bg-blush/50 px-2.5 py-1 font-mono text-[0.72rem] leading-none text-ink">
      <Icon
        icon={match?.icon ?? "ph:code-bold"}
        className={[
          match ? "h-4 w-4" : "h-3.5 w-3.5 text-accent",
          match?.adapt ? "logo-adapt" : "",
        ].join(" ")}
        aria-hidden="true"
      />
      {name}
    </span>
  );
}
