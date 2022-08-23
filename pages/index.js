import Head from "next/head";
import Script from "next/script";
import BackgroundVideo from "../components/BackgroundVideo";
import CrowdfundMint from "../components/CrowdfundMint";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Tokonomics from "../components/Tokonomics";
import Vision from "../components/Vision";
import WhatYouNeedToKnow from "../components/WhatYouNeedToKnow";
import YclubCommunity from "../components/YclubCommunity";

const Index = () => {
  return (
    <Layout>
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
      <Script> 
        {`
          (function(d,u,ac)
          {var s=d.createElement('script');
          s.type='text/javascript';s.src='https://a.omappapi.com/app/js/api.min.js';
          s.async=true;s.dataset.user=u;s.dataset.account=ac;d.getElementsByTagName('head')[0].appendChild(s);})(document,197891,213314);
        `}
      </Script>
      <BackgroundVideo />
      <Hero />
      {/* <WhatYouNeedToKnow /> */}
      <FAQ />
      <Roadmap />
      <Tokonomics />
      <CrowdfundMint />
      {/* <Team /> */}
      <Vision />
      <YclubCommunity />

    </Layout>
  );
};

export default Index;
