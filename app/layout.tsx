import type { Metadata } from "next";
import "./globals.css";
import { Geist, Source_Serif_4 } from "next/font/google";
import { StructuredData } from "@/components/structured-data";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { AnnouncementBanner } from "@/components/sections/announcement-banner";


const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600"],
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
      <GoogleAnalytics gaId="G-01VKSZJ23K" />
  
      <body
        suppressHydrationWarning
        className={`${geist.variable} ${sourceSerif.variable}`}
      >
        <Script id="google-consent" strategy="beforeInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  `}
</Script>

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-01VKSZJ23K"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    gtag('js', new Date());

    gtag('config', 'G-01VKSZJ23K');
  `}
</Script>
        <main className="bg-background text-foreground">
          <StructuredData />
          {children}
        
        </main>
      </body>
    </html>
  );
}
