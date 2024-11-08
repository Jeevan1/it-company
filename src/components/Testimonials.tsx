"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import Slider from "react-slick";
import { testimonials } from "@/data";
import Image from "next/image";

const Testimonials = () => {
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
    <div className="py-16">
      <div className="container">
        <SectionHeading title="TESTIMONIALS" className="justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 md:leading-[60px] text-center max-w-[600px] mx-auto">
            What our clients say{" "}
            <span className="text-primary capitalize">About us</span>.
          </h2>
        </SectionHeading>
        <Slider {...settings} className="mt-10 -mx-3">
          {testimonials.map((item, i) => (
            <div key={i} className="px-3 max-h-[300px] py-3">
              <div className="bg-white border border-gray-200 p-5 cursor-pointer hover:shadow-sm hover:border-orange-100 hover:shadow-primary duration-200 ease-in-out">
                <div className="flex items-start gap-4">
                  <Image
                    src={"/assets/img/qtns.png"}
                    alt={item.name}
                    width={30}
                    height={30}
                    className="pt-1"
                  />
                  <p className=" text-dark font-semibold line-clamp-5">
                    {item.testimonial}
                  </p>
                </div>
                <div className="mt-5 flex gap-4 items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="h-20 w-20 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-primary font-semibold">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
