import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const SectionHeading = ({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div>
      <h1
        className={`text-xl md:text-2xl font-bold text-primary flex gap-2 items-center ${className}`}
      >
        {title}
        <FaLongArrowAltRight />
      </h1>
      {children}
    </div>
  );
};

export default SectionHeading;
