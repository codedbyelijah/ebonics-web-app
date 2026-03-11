"use client";
import Script from "next/script";

export default function StructuredData() {
  return (
    <Script id="homecare-schema" type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Ebonics Homecare Services",
        "image": "https://www.ebonicshomecare.com/logo.png",
        "@id": "https://www.ebonicshomecare.com",
        "url": "https://www.ebonicshomecare.com",
        "telephone": "+1234567890",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "M5 HADEJA STREET/IBRAHIM TAIWO RD KADUNA, KADUNA STATE",
          "addressLocality": "Kaduna",
          "addressRegion": "Kaduna",
          "postalCode": "12345",
          "addressCountry": "NG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 9.05785,
          "longitude": 7.49508
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            "opens": "08:00",
            "closes": "19:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/ebonicshomecare",
          "https://www.twitter.com/ebonicshomecare"
        ]
      }
      `}
    </Script>
  );
}
