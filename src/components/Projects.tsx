"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";

const Projects = () => {
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
        <SectionHeading title="Our Projects" className="justify-center">
          <h2 className="text-4xl font-medium leading-10 mt-3 text-center max-w-[1000px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <span className="text-primary">Eiusmod</span>.
          </h2>
        </SectionHeading>
        <Slider {...settings} className="mt-10 -mx-3">
          {projects.map((item, i) => (
            <div key={i} className="px-3">
              <ProjectCard data={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
