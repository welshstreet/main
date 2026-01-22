import "../main.css";
import type { Metadata } from "next";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import StructuredData from "@/components/structured-data";

export const metadata: Metadata = {
  title: {
    default: "Welsh Street - Meme Rewards Built on Bitcoin",
    template: "%s | Welsh Street"
  },
  description: "World's first meme rewards token built to boost the first dog on Bitcoin, $WELSH. Swap $STREET tokens to earn $CREDIT rewards in the Welsh ecosystem.",
  keywords: [
    "Welsh Street",
    "WELSH token",
    "STREET token",
    "CREDIT token",
    "Bitcoin",
    "Stacks",
    "meme token",
    "DeFi",
    "cryptocurrency",
    "liquidity mining",
    "Welsh Corgi",
    "blockchain",
    "decentralized exchange",
    "rewards token"
  ],
  authors: [{ name: "@enjoywithouthey" }],
  creator: "@enjoywithouthey",
  publisher: "Welsh Street",
  metadataBase: new URL('https://welshstreet.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://welshstreet.com',
    siteName: 'Welsh Street',
    title: 'Welsh Street - Meme Rewards Built on Bitcoin',
    description: 'World\'s first meme rewards token built to boost the first dog on Bitcoin, $WELSH. Join the Welsh ecosystem and earn rewards.',
    images: [
      {
        url: '/images/welsh-street-suit.png',
        width: 1200,
        height: 630,
        alt: 'Welsh Street - Meme Rewards Built on Bitcoin',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welsh Street - Meme Rewards Built on Bitcoin',
    description: 'World\'s first meme rewards token built to boost the first dog on Bitcoin, $WELSH.',
    site: '@welshstreet',
    creator: '@enjoywithouthey',
    images: ['/images/welsh-street-suit.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: "/icon-64x64.png", type: "image/png", sizes: "64x64" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png", type: "image/png", sizes: "512x512" }
    ],
    apple: "/icon-192x192.png"
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <Banner show={false}>
          Liquidity Generation Event is live!
        </Banner>
        <Header />
        <main className="app-main">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}