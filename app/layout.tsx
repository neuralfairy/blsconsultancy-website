import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Blsconsultancy Solutions | CRM Implementation Experts in Orlando",
    template: "%s | Blsconsultancy Solutions",
  },
  description:
    "Expert CRM implementation and sales process optimization services in Orlando. Transform your B2B sales with professional CRM setup, system integration, and ongoing support. Free consultation available.",
  keywords:
    "CRM implementation Orlando, sales process optimization, CRM setup, B2B sales tools, system integration, CRM consultant Orlando, sales automation",
  authors: [{ name: "Blsconsultancy Solutions" }],
  creator: "Blsconsultancy Solutions",
  publisher: "Blsconsultancy Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://blsconsultancy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blsconsultancy.com",
    siteName: "Blsconsultancy Solutions",
    title: "CRM Implementation Experts | Blsconsultancy Solutions",
    description:
      "Transform your sales process with expert CRM implementation services. 40% revenue increase guaranteed. Orlando-based, serving nationwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blsconsultancy Solutions - CRM Implementation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Implementation Experts | Blsconsultancy Solutions",
    description:
      "Transform your sales process with expert CRM implementation services. 40% revenue increase guaranteed.",
    images: ["/og-image.jpg"],
    creator: "@blsconsultancy",
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Blsconsultancy Solutions",
              url: "https://blsconsultancy.com",
              logo: "https://blsconsultancy.com/logo.png",
              description: "Expert CRM implementation and sales process optimization services",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Business Center Drive, Suite 450",
                addressLocality: "Orlando",
                addressRegion: "FL",
                postalCode: "32801",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-407-555-0123",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: ["https://www.linkedin.com/company/blsconsultancy", "https://twitter.com/blsconsultancy"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Live Chat Widget Placeholder */}
        <div id="live-chat-widget" className="fixed bottom-4 right-4 z-50">
          {/* Live chat integration would go here */}
        </div>
      </body>
    </html>
  )
}
