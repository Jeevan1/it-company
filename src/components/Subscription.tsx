import { subscription } from "@/data";
import React from "react";
import {
  TiAnchorOutline,
  TiArrowRepeatOutline,
  TiWeatherWindyCloudy,
} from "react-icons/ti";
import SectionHeading from "./SectionHeading";
import { SecondaryButton } from "./Button";

const Subscription = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeading title="BEST PLAN" className="justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 leading-[50px] text-center max-w-[600px] mx-auto">
            No hidden charge{" "}
            <span className="text-primary capitalize">
              Choose your pricing plan
            </span>
            .
          </h2>
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 items-center">
          {subscription.map((item, idx) => (
            <div className="shadow-black border py-7 hover:shadow-lg duration-200">
              <div className="flex gap-3 justify-center items-center border-b pb-7">
                <span className="text-5xl text-accent">
                  {idx == 0 && <TiWeatherWindyCloudy />}
                  {idx == 1 && <TiAnchorOutline />}
                  {idx == 2 && <TiArrowRepeatOutline />}
                </span>
                <div className="">
                  <h1 className="text-xl font-semibold">{item.name}</h1>
                  <p className="font-bold text-3xl text-primary">
                    {item.price}
                    <span className="text-md"> /Per Month</span>
                  </p>
                </div>
              </div>
              <div className="py-7 px-10">
                {item.features.map((feature, i) => (
                  <p className="text-center font-medium border-b last:border-0 py-4">
                    {feature}
                  </p>
                ))}
              </div>
              <div className="text-center">
                <SecondaryButton>CHOOSE PLAN</SecondaryButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
