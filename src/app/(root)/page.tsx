import About from "@/components/About";
import MainBanner from "@/components/MainBanner";
import News from "@/components/News";
import ServiceField from "@/components/ServiceField";
import Services from "@/components/Services";
import Subscription from "@/components/Subscription";
import React from "react";

const HomePage = () => {
  return (
    <div className="homepage">
      <MainBanner />
      <Services />
      <About />
      <ServiceField />
      <Subscription />
      <News />
    </div>
  );
};

export default HomePage;
