import Image from "next/image";
import React from "react";
import SectionHeading from "./SectionHeading";
import { PrimaryButton } from "./Button";

const About = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="relative">
            <div className="h-[500px] w-[500px] rounded-md before:border-[15px] before:absolute before:content-[''] before:w-[500px] before:h-full before:top-[-50px] before:left-[50px] before:border-grey before:z-[-1]">
              <Image
                src={"/assets/img/about/about1.jpg"}
                alt="about"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="h-[300px] w-[300px] absolute right-[0px] bottom-[50%] translate-y-[50%] shadow-lg">
              <Image
                src={"/assets/img/about/about2.png"}
                alt="about"
                width={500}
                height={500}
                className="rounded-md h-full w-full object-cover "
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="border-b pb-10">
              <SectionHeading title="About Us">
                <h2 className="text-5xl font-medium leading-10 mt-3">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                  <span className="text-primary ">Adipiscing elit</span>.
                </h2>
              </SectionHeading>
              <p className="mt-7 text-lg font-medium text-accent mr-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis mollitia assumenda unde dolor! Ratione eos similique
                assumenda? Voluptatibus ad, quam saepe voluptatum distinctio nam
                doloribus qui culpa, aliquid quaerat sit.
              </p>
            </div>
            <div className="flex justify-between items-center mt-10 ">
              <div className="flex gap-3 items-center">
                <Image
                  src={"/assets/img/about/about1.jpg"}
                  alt="about"
                  width={500}
                  height={500}
                  className="h-[100px] w-[100px] object-cover rounded-full bg-grey"
                />
                <div>
                  <h3 className="text-2xl font-medium text-secondary">
                    Jeevan Shrestha
                  </h3>
                  <p className="text-accent font-medium">CEO & Founder</p>
                </div>
              </div>
              <PrimaryButton className="m-auto">Learn More</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
