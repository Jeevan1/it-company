import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const SectionHeading = ({
  title,
  position = "center",
  className,
  children,
}: {
  title?: string;
  className?: string;
  position?: "left" | "center" | "right";
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`pb-0 sm:pb-5 md:pb-10 m-auto flex flex-col items-${position} ${className} `}
    >
      <h1
        className={`text-lg md:text-xl font-bold text-primary flex gap-2 items-center`}
      >
        {title}
        <FaLongArrowAltRight />
      </h1>
      {children}
    </div>
  );
};

export default SectionHeading;
