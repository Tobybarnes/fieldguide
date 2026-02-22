import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Field Guide — Build what you need. Nothing more.",
  description: "A field guide to making your own tools with Claude. For tinkerers, makers, and people who'd rather build the thing than buy the subscription.",
  openGraph: {
    title: "Field Guide — Build what you need. Nothing more.",
    description: "A field guide to making your own tools with Claude.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mono.variable} font-mono antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
