import React from "react";
import SectionHeading from "../SectionHeading";
import { blogPosts } from "@/data";
import Image from "next/image";
import { PrimaryButton } from "../Button";

const Blogs = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeading title="Our Blogs" className="justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 leading-[60px] text-center max-w-[1000px] mx-auto">
            Lorem ipsum dolor sit amet elit, sed{" "}
            <span className="text-primary">To Eiusmod</span>.
          </h2>
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          {blogPosts.map((item, i) => (
            <div className="bg-white relative">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={400}
                className="h-[300px] w-full object-cover object-top "
              />
              <span className="text-sm font-bold bg-primary text-white px-3 py-2 absolute top-4 right-4">
                {item.time}
              </span>
              <div className="bg-white shadow-md pb-5 me-7 border-t-4 border-orange-600 relative -top-7 ">
                <h3 className="text-sm font-bold bg-primary text-white p-2 px-4 inline-block absolute -top-4">
                  {item.service}
                </h3>
                <div className="px-5 py-2 pt-10 flex gap-3 items-center">
                  <Image
                    src={item.user.image}
                    alt={item.user.name}
                    width={50}
                    height={50}
                    className="h-[50px] w-[50px] object-cover object-top rounded-full"
                  />
                  <span className="text-lg font-semibold text-primary">
                    By: {item.user.name}
                  </span>
                </div>
                <h3 className="text-2xl px-5 my-2 font-bold line-clamp-3">
                  {item.title}
                </h3>
                <p className="text-lg px-5 my-2 font-semibold text-dark line-clamp-4">
                  {item.desc}
                </p>
                <div className="px-5 py-2">
                  <PrimaryButton>Read More</PrimaryButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
