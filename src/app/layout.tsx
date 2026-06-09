import type { Metadata } from "next";
import { Inter, Outfit, Great_Vibes } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-cursive",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drrajkumarsangiri.in"),
  title: "Dr. Rajkumar Sangiri | Consultant Physician | Bankura",
  description: "Consult Dr. Rajkumar Sangiri, a leading Consultant Physician with 19+ years of experience in General Medicine. Expert in diabetes (blood sugar), blood pressure, thyroid, arthritis, and respiratory problems in Bankura.",
  keywords: "Dr. Rajkumar Sangiri, Consultant Physician, MD General Medicine, Bankura Doctor, Meditrust Medicare Pvt Ltd, Shristi Diagnostic Centre, Bankura Nursing Home, Keerthi Medi Point Pvt Ltd, Blood Sugar, Blood Pressure, Thyroid, Gastro problem, Respiratory Problem",
  alternates: {
    canonical: "https://www.drrajkumarsangiri.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Dr. Rajkumar Sangiri | Consultant Physician | Bankura",
    description: "Consult Dr. Rajkumar Sangiri, a leading Consultant Physician with 19+ years of experience in General Medicine. Expert care in Bankura.",
    type: "website",
    locale: "en_IN",
    url: "https://www.drrajkumarsangiri.in/",
    images: [
      {
        url: "/profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Rajkumar Sangiri - Consultant Physician",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rajkumar Sangiri | Consultant Physician | Bankura",
    description: "Consult Dr. Rajkumar Sangiri, a leading Consultant Physician with 19+ years of experience in General Medicine. Expert care in Bankura.",
    images: ["/profile-pic.jpg"],
  },
  icons: {
    icon: "/doctor-logo.png",
    apple: "/doctor-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${greatVibes.variable}`}>
      <body>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QLMZTSNG1G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QLMZTSNG1G');
          `}
        </Script>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Physician",
                  "@id": "https://www.drrajkumarsangiri.in/#physician",
                  "name": "Dr. Rajkumar Sangiri",
                  "url": "https://www.drrajkumarsangiri.in",
                  "image": "https://www.drrajkumarsangiri.in/profile-pic.jpg",
                  "logo": "https://www.drrajkumarsangiri.in/doctor-logo.png",
                  "medicalSpecialty": "GeneralMedicine",
                  "telephone": "+918001224488",
                  "priceRange": "$$",
                  "description": "Dr. Rajkumar Sangiri is a senior Consultant Physician with over 19 years of experience in General Medicine in Bankura, West Bengal. Specialized in diabetes, blood pressure, thyroid, and gastro problems.",
                  "sameAs": [
                    "https://www.lybrate.com/bankura/doctor/dr-rajkumar-sangiri-internal-medicine-specialist",
                    "https://www.practo.com/bankura/doctor/sangiri-rajkumar-general-physician",
                    "https://mymedisage.com/profile/rajkumar-sangiri"
                  ],
                  "knowsAbout": [
                    "Diabetes",
                    "Hypertension",
                    "Thyroid Disorders",
                    "Gastrointestinal Problems",
                    "Arthritis",
                    "Respiratory Problems",
                    "Internal Medicine"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bankura",
                    "addressRegion": "West Bengal",
                    "postalCode": "722101",
                    "addressCountry": "IN"
                  }
                },
                {
                  "@type": "MedicalClinic",
                  "@id": "https://www.drrajkumarsangiri.in/#clinic-meditrust",
                  "name": "Meditrust Medicare Pvt Ltd",
                  "parentOrganization": { "@id": "https://www.drrajkumarsangiri.in/#physician" },
                  "telephone": "+918001224488",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Bankura Town",
                    "addressLocality": "Bankura",
                    "addressRegion": "West Bengal",
                    "addressCountry": "IN"
                  },
                  "url": "https://maps.app.goo.gl/HKoVhEkg8vuc2tLG9"
                },
                {
                  "@type": "MedicalClinic",
                  "@id": "https://www.drrajkumarsangiri.in/#clinic-shristi",
                  "name": "Shristi Diagnostic Centre",
                  "parentOrganization": { "@id": "https://www.drrajkumarsangiri.in/#physician" },
                  "telephone": "+918293837709",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Lalbazar",
                    "addressLocality": "Bankura",
                    "addressRegion": "West Bengal",
                    "addressCountry": "IN"
                  },
                  "url": "https://maps.app.goo.gl/XRS1ZDfceZEUM68u9"
                },
                {
                  "@type": "MedicalClinic",
                  "@id": "https://www.drrajkumarsangiri.in/#clinic-nursinghome",
                  "name": "Bankura Nursing Home",
                  "parentOrganization": { "@id": "https://www.drrajkumarsangiri.in/#physician" },
                  "telephone": "+919564280791",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Nutanchati",
                    "addressLocality": "Bankura",
                    "addressRegion": "West Bengal",
                    "addressCountry": "IN"
                  },
                  "url": "https://maps.app.goo.gl/GUFy5h2N5zfaGhYc7"
                },
                {
                  "@type": "MedicalClinic",
                  "@id": "https://www.drrajkumarsangiri.in/#clinic-keerthi",
                  "name": "Keerthi Medi Point Pvt Ltd",
                  "parentOrganization": { "@id": "https://www.drrajkumarsangiri.in/#physician" },
                  "telephone": "+916294575347",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Katjuridanga",
                    "addressLocality": "Bankura",
                    "addressRegion": "West Bengal",
                    "addressCountry": "IN"
                  },
                  "url": "https://maps.app.goo.gl/T5wnC9L1LbtjgLe26"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

