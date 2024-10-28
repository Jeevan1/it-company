"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { serviceField } from "@/data";
import ServiceFieldCard from "./ServiceFieldCard";
import Slider from "react-slick";

const ServiceField = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    gap: 20,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16">
      <div className="container">
        <SectionHeading title="Service Field" className="justify-center">
          <h2 className="text-4xl font-semibold leading-10 mt-3 text-center max-w-[1000px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <span className="text-primary">Eiusmod</span>.
          </h2>
        </SectionHeading>
        <Slider {...settings} className="mt-10 -mx-3">
          {serviceField.map((item, i) => (
            <div key={i} className="px-3">
              <ServiceFieldCard data={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceField;
