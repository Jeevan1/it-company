import React from "react";

export const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`text-primary font-bold text-2xl ${className}`}>
      {children}
    </h1>
  );
};
