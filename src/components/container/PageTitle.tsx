import React from "react";
import SectionHeading from "../SectionHeading";
import Link from "next/link";

const PageTitle = ({ title, page }: { title: string; page?: string }) => {
  return (
    <div
      className="page-title h-[350px] sm:h-[400px] md:h-[450px] bg-cover bg-right bg-no-repeat relative after:contents[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondary after:opacity-[0.3] after:z-[1]"
      style={{ backgroundImage: "url(/assets/img/page-title.jpg)" }}
    >
      <div className="container flex flex-col justify-center items-center h-full ">
        <h1 className="text-3xl md:text-6xl font-bold text-white z-10">
          {title}
        </h1>
        <div className="z-10 leading-10">
          <Link
            href="/"
            className="text-white font-bold text-lg sm:text-xl z-10"
          >
            Home
          </Link>{" "}
          <span className="text-white font-bold text-lg sm:text-xl z-10">
            {" "}
            -{" "}
          </span>{" "}
          <span className="text-primary font-bold text-lg sm:text-xl z-10">
            {page}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
