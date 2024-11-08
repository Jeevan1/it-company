import About from "@/components/About";
import PageTitle from "@/components/container/PageTitle";
import Header from "@/components/Header";
import Subscription from "@/components/Subscription";
import Teams from "@/components/Teams";
import Testimonials from "@/components/Testimonials";
import WorkingProcess from "@/components/WorkingProcess";
import React from "react";

const CompanyPage = () => {
  return (
    <div className="company-page ">
      <PageTitle title="About Us" page="About Us" />
      <div className="mt-10">
        <About />
        <WorkingProcess />
        <Teams />
        <Subscription />
        <Testimonials />
      </div>
    </div>
  );
};

export default CompanyPage;
