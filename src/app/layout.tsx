import type { Metadata } from "next";
import { Inter, Outfit, Great_Vibes } from "next/font/google";
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
  title: "Dr. Rajkumar Sangiri | Consultant Physician | Bankura",
  description: "Consult Dr. Rajkumar Sangiri, a leading Consultant Physician with 19+ years of experience in General Medicine. Expert in diabetes (blood sugar), blood pressure, thyroid, arthritis, and respiratory problems in Bankura.",
  keywords: "Dr. Rajkumar Sangiri, Consultant Physician, MD General Medicine, Bankura Doctor, Meditrust Medicare Bankura, Sristi Diagnostic centre, Bankura Nursing home, Keerthi Medipoint, Blood Sugar, Blood Pressure, Thyroid, Gastro problem, Respiratory Problem",
  openGraph: {
    title: "Dr. Rajkumar Sangiri | Consultant Physician | Bankura",
    description: "Consult Dr. Rajkumar Sangiri, a leading Consultant Physician with 19+ years of experience in General Medicine. Expert care in Bankura.",
    type: "website",
    locale: "en_IN",
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
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dr. Rajkumar Sangiri",
              "medicalSpecialty": "GeneralMedicine",
              "knowsAbout": [
                "Diabetes",
                "Hypertension",
                "Thyroid Disorders",
                "Gastrointestinal Problems",
                "Arthritis",
                "Respiratory Problems"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bankura",
                "addressRegion": "West Bengal",
                "addressCountry": "IN"
              },
              "telephone": "+918001224488",
              "description": "Dr. Rajkumar Sangiri is a senior Consultant Physician with over 19 years of experience in General Medicine in Bankura, West Bengal."
            })
          }}
        />
      </body>
    </html>
  );

}

