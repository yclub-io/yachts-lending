import Head from "next/head";
import Script from "next/script";
import BackgroundVideo from "../components/BackgroundVideo";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MailchimpFormContainer from "../components/MailchimpFormContainer";
import Roadmap from "../components/Roadmap";
import RunnigLineAdvanced from "../components/RunningLineAdvanced";
import Team from "../components/Team";
import Vision from "../components/Vision";
import WhatYouNeedToKnow from "../components/WhatYouNeedToKnow";
import YclubCommunity from "../components/YclubCommunity";

const Index = () => {
  return (
    <div className="m-auto max-w-[1440px]">
      <Head>
        <title>YCLUB - Chartering The Metaverse On A Super Yachts</title>
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
      <BackgroundVideo />
      <Header />
      <div className="relative"> 
      <div className="xl:flex hidden absolute h-[1px]  left-[-800px]   w-[3000px] bg-white-1 inset-0 opacity-50"></div>
      </div>
      <Hero />
      <div className="relative"> 
      <div className="xl:flex top-[180px] hidden absolute h-[1px]  left-[-800px]   w-[3000px] bg-white-1 inset-0 "></div>
      </div>
      <RunnigLineAdvanced />
      <div className="relative"> 
      <div className="xl:flex hidden absolute h-[1px]  left-[-800px]   w-[3000px] bg-white-1 inset-0 "></div>
      </div>
      <WhatYouNeedToKnow />
      <Roadmap />
      <Team />
      <Vision />
      <MailchimpFormContainer />
      <YclubCommunity />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
