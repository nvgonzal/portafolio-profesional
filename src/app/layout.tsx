import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { profile } from "@/content/portfolio";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const body = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s · ${profile.displayName}`,
  },
  description: siteDescription,
  authors: [{ name: profile.fullName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: profile.displayName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
