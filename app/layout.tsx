import type { Metadata } from "next";
import "./globals.css";
import { Geist, Source_Serif_4 } from "next/font/google";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";


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
  title: "Weforge - Recruit Patients Faster. Retain Them Longer.",
  description:
    "WWe help research teams recruit faster, meet enrollment targets, and strengthen sponsor relationships through connected recruitment systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
<body suppressHydrationWarning className={`${geist.variable} ${sourceSerif.variable}`}>
<Navbar />

<main className="bg-background text-foreground">
  {children}
</main>

<Footer />
      </body>
    </html>
  );
}
