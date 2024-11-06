import About from "@/components/About";
import Header from "@/components/Header";
import Subscription from "@/components/Subscription";
import Teams from "@/components/Teams";
import Testimonials from "@/components/Testimonials";
import WorkingProcess from "@/components/WorkingProcess";
import React from "react";

const CompanyPage = () => {
  return (
    <div className="company-page mt-12">
      <About />
      <WorkingProcess />
      <Teams />
      <Subscription />
      <Testimonials />
    </div>
  );
};

export default CompanyPage;
