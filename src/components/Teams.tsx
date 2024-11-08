"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import Slider from "react-slick";
import { team } from "@/data";
import TeamCard from "./TeamCard";

const Teams = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    gap: 20,
    dots: true,
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
    <div className="py-10">
      <div className="container">
        <SectionHeading title="OUR TEAM" className="justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 md:leading-[60px]  text-center max-w-[600px] mx-auto">
            Meet Our{" "}
            <span className="text-primary capitalize">Professional Team</span>.
          </h2>
        </SectionHeading>
        <Slider {...settings} className="mt-10 -mx-3">
          {team.map((item, i) => (
            <div key={i} className="px-3">
              <TeamCard data={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Teams;
