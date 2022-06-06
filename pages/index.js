import Script from "next/script";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MailchimpFormContainer from "../components/MailchimpFormContainer";
import Roadmap from "../components/Roadmap";
import RunnigLine from "../components/RunnigLine";
import Team from "../components/Team";
import Vision from "../components/Vision";
import WhatYouNeedToKnow from "../components/WhatYouNeedToKnow";
import YclubCommunity from "../components/YclubCommunity";

const Index = () => {
  return (
    <div className="m-auto max-w-[1440px]">
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
      <Hero />
      <RunnigLine />
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
