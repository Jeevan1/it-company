import React from "react";
import SectionHeading from "./SectionHeading";
import { workingProcess } from "@/data";
import Image from "next/image";

type ProcessProps = {
  step: number;
  title: string;
  description: string;
  icon: string;
};

const ProcessCard = ({ data }: { data: ProcessProps }) => {
  return (
    <div className="w-full min-h-[300px]  max-w-[300px] mb-7 md:mb-0">
      <div className="flex flex-col items-center h-full">
        <div className="w-16 h-16 sm:w-28 md:h-28 p-3 sm:p-5 bg-red-50 flex justify-center items-center relative mb-10">
          <Image
            src={data.icon}
            alt="icon"
            width={200}
            height={200}
            className="w-full h-full object-contain"
          />
          <p className="text-md text-white font-bold absolute bg-primary bottom-[-15px] h-8 w-8 flex justify-center items-center rounded-full">
            0{data.step}
          </p>
        </div>
        <p className="text-md leading-6 pb-3 font-bold text-center sm:text-lg md:text-xl md:leading-8">
          {data.title}
        </p>
        <p className="text-center font-semibold text-dark text-sm md:text-lg leading-5 md:leading-7 ">
          {data.description}
        </p>
      </div>
    </div>
  );
};

const WorkingProcess = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeading title="OUR PROCESS" className="justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 leading-[60px] text-center max-w-[600px] mx-auto">
            Our <span className="text-primary capitalize">Working Process</span>
            .
          </h2>
        </SectionHeading>
        <div className="flex justify-center items-center flex-wrak overflow-hidden mt-12 ">
          <ProcessCard data={workingProcess[0]} />
          <div className=" w-4 relative self-start mt-4">
            <div className="rotate-45 absolute right-[-30px] left-[-30px] ">
              <Image
                src="/assets/img/arrow.png"
                alt="working-process"
                width={100}
                height={100}
              />
            </div>
          </div>
          <ProcessCard data={workingProcess[1]} />
          <div className=" w-4 relative self-start mt-4">
            <div className="rotate-45 absolute right-[-30px] left-[-30px] ">
              <Image
                src="/assets/img/arrow.png"
                alt="working-process"
                width={100}
                height={100}
                className="z-10"
              />
            </div>
          </div>
          <ProcessCard data={workingProcess[2]} />
          <div className=" w-4 relative self-start mt-4">
            <div className="rotate-45 absolute right-[-30px] left-[-30px] ">
              <Image
                src="/assets/img/arrow.png"
                alt="working-process"
                width={100}
                height={100}
              />
            </div>
          </div>
          <ProcessCard data={workingProcess[3]} />
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
