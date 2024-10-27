"use client";
import React from "react";
import { PrimaryButton } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { slider } from "@/data";
import Slider from "react-slick";

const MainBanner = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    arrows: true,
    infinity: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    nextArrow: (
      <div>
        <div className="absolute right-[50px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
            fill="white"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180 absolute left-[50px] opacity-50">
          ghcgf
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
            fill="white"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="containerj -mt-[110px] ">
        <div className="slider-container">
          <Slider {...settings}>
            {slider.map((item, i) => (
              <div key={i} className="h-[100vh] relative ">
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 z-0"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    objectFit: "cover",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 p-10 flex items-center justify-center bg-slate-600 bg-opacity-80 ">
                  <div className="container text-center flex flex-col gap-10 max-w-[778px] ">
                    <Heading>// {item.heading}</Heading>
                    <h1 className="text-white text-[60px] font-semibold font-mono">
                      {item.title}
                    </h1>
                    <p className="text-white text-lg font-semibold">
                      {item.description}
                    </p>
                    <PrimaryButton className="mx-auto">
                      Learn More
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
