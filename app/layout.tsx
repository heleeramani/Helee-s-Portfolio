import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Karla } from "next/font/google";
import "./globals.css";

// Mono coding font drives all headings, labels, and UI chrome.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

// Soft humanist sans, reserved for long-form body copy.
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helee Ramani · Backend Developer",
  description:
    "Backend developer building production casino and betting platforms. Node.js, Express, MongoDB, PostgreSQL. JWT and 2FA auth, payment gateways, multi-role systems, REST APIs.",
  openGraph: {
    title: "Helee Ramani · Backend Developer",
    description:
      "I build the quiet stuff nobody sees but everyone needs. Production casino platforms: auth, payments, multi-role access, REST APIs.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

// Runs synchronously during HTML parsing, before first paint, so the correct
// theme is applied with no flash. Prefers a saved localStorage choice, then
// falls back to the OS `prefers-color-scheme` setting.
const themeInitScript = `(function(){try{var s=localStorage.getItem("theme");var t=(s==="light"||s==="dark")?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} ${karla.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
