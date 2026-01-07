export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Welsh Street",
    "description": "World's first meme rewards token built to boost the first dog on Bitcoin, $WELSH",
    "url": "https://welshstreet.com", // Update with your actual domain
    "logo": "https://welshstreet.com/favicon.ico", // Update with your actual logo
    "sameAs": [
      "https://x.com/welshstreet", // Update with your actual social links
      "https://discord.gg/zWzvtVrPeJ" // Update with your actual social links
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://docs.welshstreet.com/docs/terms"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Welsh Street",
    "description": "World's first meme rewards token built to boost the first dog on Bitcoin, $WELSH",
    "url": "https://welshstreet.com", // Update with your actual domain
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://welshstreet.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Welsh Street DeFi Platform",
    "description": "Decentralized exchange and rewards platform for WELSH, STREET, and CREDIT tokens",
    "url": "https://welshstreet.com", // Update with your actual domain
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Welsh Street"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
    </>
  );
}
