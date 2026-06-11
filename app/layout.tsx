import type { Metadata } from "next";
import { Poppins, Source_Serif_4 } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WeForge - Faster Patient Recruitment. Less Friction.",
  description:
    "WeForge helps clinical research sites streamline recruitment, pre-screening, and operational workflows through intelligent infrastructure built for scalability, speed, and compliance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceSerif4.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
<Navbar />

<main className="bg-background text-foreground">
  {children}
</main>

<Footer />
      </body>
    </html>
  );
}
