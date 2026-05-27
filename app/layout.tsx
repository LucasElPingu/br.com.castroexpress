import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Castro Air Cargo | Transporte Aéreo e Logística Corporativa",
  description:
    "Castro Air Cargo - Soluções em transporte aéreo de cargas e logística corporativa. Entregas expressas, segurança e cobertura nacional para sua empresa.",
  keywords: [
    "transporte aéreo",
    "cargo aéreo",
    "logística corporativa",
    "entregas expressas",
    "frete aéreo",
    "logística Brasil",
  ],
  authors: [{ name: "Castro Air Cargo" }],
  creator: "Castro Air Cargo",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://castroaircargo.com.br",
    siteName: "Castro Air Cargo",
    title: "Castro Air Cargo | Transporte Aéreo e Logística Corporativa",
    description:
      "Soluções em transporte aéreo de cargas e logística corporativa. Entregas expressas, segurança e cobertura nacional.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Castro Air Cargo - Transporte Aéreo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Castro Air Cargo | Transporte Aéreo e Logística Corporativa",
    description:
      "Soluções em transporte aéreo de cargas e logística corporativa.",
    images: ["/og-image.jpg"],
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
}

export const viewport: Viewport = {
  themeColor: "#1a365d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
