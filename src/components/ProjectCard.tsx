import React from "react";
import { PrimaryButton, SecondaryButton } from "./Button";
import { CgArrowLongRightR } from "react-icons/cg";

const ProjectCard = ({ data }: any) => {
  return (
    <div className="h-[400px] overflow-hidden relative cursor-pointer  group">
      <div
        className="h-full relative before:contents[''] before:absolute before:w-full before:h-full before:bg-accent before:opacity-70 before:z-[1] group-hover:scale-110 duration-200 ease "
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />
      <div className=" w-full absolute top-0 left-0 flex flex-col justify-end items-start h-full z-10 p-10 gap-5 translate-y-[15%] group-hover:-translate-y-0  duration-200 ease-linear">
        <h1 className="text-2xl font-semibold text-white z-10">{data.title}</h1>
        <ul className="flex gap-3 flex-wrap">
          {data.techStack.map((tech: string) => (
            <li
              key={tech}
              className="text-md font-medium text-white z-10 line-clamp-1"
            >
              <span>
                <CgArrowLongRightR className="inline pe-1" size={20} />
                {tech}
              </span>
            </li>
          ))}
        </ul>
        <p className="line-clamp-2 text-lg font-medium text-white z-10">
          {data.description}
        </p>
        <div className="translate-y-[200%] group-hover:-translate-y-0  duration-100 ease-in-out delay-100 w-full flex gap-5 justify-center items-center">
          <SecondaryButton>Read More</SecondaryButton>
          <PrimaryButton>Live Demo</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
