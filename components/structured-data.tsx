export function StructuredData() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Weforge",
      legalName: "Noetik Sp. z o.o.",
      url: "https://weforgeclinical.com",
      logo: "https://weforgeclinical.com/og-image.png",
      email: "contact@weforgeclinical.pl",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PL",
      },
      description:
        "We help research teams recruit faster, meet enrollment targets, and strengthen sponsor relationships through connected recruitment systems.",
      sameAs: [
        "https://www.linkedin.com/company/weforgeclinical"
      ],
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    );
  }