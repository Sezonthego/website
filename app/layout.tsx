import type { Metadata } from "next";
import { Poppins, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="bg-background text-foreground">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
