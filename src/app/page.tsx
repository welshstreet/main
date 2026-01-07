import { Metadata } from 'next';

import HeroSection from '@/content/hero-section';
import AboutSection from '@/content/about-section';
import PitchSection from '@/content/pitch-section';
import TokenomicsSection from '@/content/tokenomics-section';
import DyorSection from '@/content/dyor-section';
import LfgSection from '@/content/lfg-section';
import ExchangeSection from '@/content/exchange-section';
import { Buttons } from '@/components/buttons';

export const metadata: Metadata = {
  title: 'Welsh Street',
  description: '$STREET is the world\'s first meme rewards token built to boost the first dog on Bitcoin, $WELSH. Join the Welsh ecosystem and start earning rewards.',
  openGraph: {
    title: 'Welsh Street - Meme Rewards Built on Bitcoin',
    description: '$STREET is the world\'s first meme rewards token to boost the first dog coin built on Bitcoin, $WELSH.',
    type: 'website',
    images: [
      {
        url: '/images/welsh-street-og.png',
        width: 1200,
        height: 630,
        alt: 'Welsh Street - Meme Rewards Built on Bitcoin',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welsh Street - Meme Rewards Built on Bitcoin',
    description: '$STREET is the world\'s first meme rewards token built to boost the first dog on Bitcoin, $WELSH.',
  },
};

export default function Home() {

  return (
    <>
      {/* Background image - fixed position */}
      <div className="image-bg image-bg-home"></div>
      {/* Hero Section with overlaid content */}
      <div id="home-container" className="relative z-10 flex flex-col items-center justify-center px-4 py-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <HeroSection />
        <AboutSection />
        <PitchSection />
        <ExchangeSection />
        <TokenomicsSection />
        <DyorSection />
        <LfgSection />
        <br />
        <Buttons />
        <br />
      </div>
    </>
  );
}