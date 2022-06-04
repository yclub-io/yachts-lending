import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import RunnigLine from "../components/RunnigLine";
import Team from "../components/Team";
import Vision from "../components/Vision";
import WhatYouNeedToKnow from "../components/WhatYouNeedToKnow";
import WhitelistRequestForm from "../components/WhitelistRequestForm";
import YclubCommunity from "../components/YclubCommunity";


const Index = () => {
  return (
    <div className="max-w-[1440px]">
      <Header />
      <Hero />
      <RunnigLine />
      <WhatYouNeedToKnow />
      <Roadmap />
      <Team />
      <Vision />
      <WhitelistRequestForm />
      <YclubCommunity />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
