import type { Metadata } from "next";
import "./globals.css";
import { Geist, Source_Serif_4 } from "next/font/google";
import { StructuredData } from "@/components/structured-data";

import { AnnouncementBanner } from "@/components/sections/announcement-banner";


const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://weforgeclinical.com"),

  title: {
    default: "Weforge - Recruit Patients Faster. Retain Them Longer.",
    template: "%s | Weforge",
  },

  description:
    "We help research teams recruit faster, meet enrollment targets, and strengthen sponsor relationships through connected recruitment systems.",

  openGraph: {
    title: "Weforge - Recruit Patients Faster. Retain Them Longer.",
    description:
      "We help research teams recruit faster, meet enrollment targets, and strengthen sponsor relationships through connected recruitment systems.",
    url: "https://weforgeclinical.com",
    siteName: "Weforge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Weforge - Recruit Patients Faster. Retain Them Longer.",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Weforge - Recruit Patients Faster. Retain Them Longer.",
    description:
      "We help research teams recruit faster, meet enrollment targets, and strengthen sponsor relationships through connected recruitment systems.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
<body suppressHydrationWarning className={`${geist.variable} ${sourceSerif.variable}`}>


<main className="bg-background text-foreground">
<StructuredData />
  {children}
</main>

      </body>
    </html>
  );
}
