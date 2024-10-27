import { services } from "@/data";
import React from "react";
import { SecondaryButton } from "./Button";

const Services = () => {
  return (
    <div className="-mt-20 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
          {services.map((item, i) => (
            <div key={i} className=" z-50  group">
              <div className="h-56 overflow-hidden duration-300 bg-white rounded-md shadow-lg">
                <div className="h-full flex flex-col gap-4 items-center justify-center cursor-pointer p-4 opacity-100 translate-y-0    group-hover:opacity-0 group-hover:translate-y-[100%] group-hover:hidden duration-500">
                  <div>
                    <img
                      src={item.image}
                      alt="services"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-primary">
                      {item.name}
                    </h2>
                    {/* <p>{item.description}</p> */}
                  </div>
                </div>
                <div className="h-full translate-y-[-100%] flex-col rounded-md gap-4 items-center justify-center cursor-pointer p-4 opacity-0 group-hover:opacity-100  group-hover:flex group-hover:bg-primary group-hover:translate-y-0 duration-500">
                  <h2 className="text-2xl font-semibold text-white">
                    {item.name}
                  </h2>
                  <p className="text-white text-center">{item.description}</p>
                  <SecondaryButton>Read More</SecondaryButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
