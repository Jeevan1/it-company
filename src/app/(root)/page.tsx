import About from "@/components/About";
import MainBanner from "@/components/MainBanner";
import News from "@/components/News";
import ServiceField from "@/components/ServiceField";
import Services from "@/components/Services";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <Services />
      <About />
      <ServiceField />
      <News />
    </div>
  );
};

export default HomePage;
