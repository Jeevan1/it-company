import React from "react";
import SectionHeading from "./SectionHeading";
import { serviceField } from "@/data";
import { SecondaryButton } from "./Button";

const News = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeading title="LATEST NEWS" className="justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 leading-[60px] text-center max-w-[1000px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <span className="text-primary">Eiusmod</span>.
          </h2>
        </SectionHeading>
        <div className="block grid-rows-4 grid-flow-col gap-5 mt-10 md:grid">
          {/* <div className=" row-span-4 bg-red-400 rounded-md">
            <div className="h-[250px]"></div>
          </div>
          <div className=" row-span-2 bg-red-400 rounded-md">
            <div className="h-[250px]"></div>
          </div>
          <div className=" row-span-2 bg-red-400 rounded-md">
            <div className="h-[250px]"></div>
          </div>
          <div className=" row-span-4 bg-red-400 rounded-md">
            <div className="h-[250px]"></div>
          </div> */}
          {serviceField.map((item, i) => (
            <div
              key={i}
              className="w-full h-[500px] mb-7 md:mb-0 md:h-auto  row-span-2 bg-red-400 rounded-md first:row-span-4 first:h-[550px] last:row-span-4 last:h-[550px]"
            >
              <div
                className="h-full w-full object-cover relative before:contents[''] before:absolute before:w-full before:h-full before:bg-secondary before:opacity-50 before:z-[1]"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="w-full h-full flex flex-col justify-end items-start p-7 gap-5">
                  <h1 className="text-xl sm:text-2xl font-semibold text-white z-10">
                    {item.title}
                  </h1>
                  <p className="text-md ms:text-lg font-medium text-white z-10 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
