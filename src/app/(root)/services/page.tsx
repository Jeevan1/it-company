import PageTitle from "@/components/container/PageTitle";
import ServiceField from "@/components/ServiceField";
import React from "react";

const ServicePage = () => {
  return (
    <div className="service-page">
      <PageTitle title="Our Services" page="Services" />
      <ServiceField />
    </div>
  );
};

export default ServicePage;
