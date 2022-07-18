import Head from "next/head";
import Script from "next/script";
import BackgroundVideo from "../components/BackgroundVideo";
import CrowdfundMint from "../components/CrowdfundMint";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Tokonomics from "../components/Tokonomics";
import Vision from "../components/Vision";
import WhatYouNeedToKnow from "../components/WhatYouNeedToKnow";
import YclubCommunity from "../components/YclubCommunity";

const Index = () => {
  return (
    <div className="m-auto max-w-[1440px]">
      <Head>
        <title>YCLUB - Cruising The Metaverse on a Superyacht</title>
        <meta
          name="description"
          content="YCLUB is a project that builds Super Yachts in the Metaverse to be chartered and experienced by different brands with revenue share going directly to YCLUB NFT holders."
        />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-9NXP8WEGK8" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9NXP8WEGK8');
        `}
      </Script>
      <Header />
      <BackgroundVideo />
      <Hero />
      <WhatYouNeedToKnow />
      <Roadmap />
      <Tokonomics />
      <CrowdfundMint />
      <Team />
      <Vision />
      <YclubCommunity />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
