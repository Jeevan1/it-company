import Image from "next/image";
import React from "react";
import { PrimaryButton } from "./Button";
import { nav } from "@/data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5 bg-transparent">
      <div className="container ">
        <div className="flex items-center gap-5">
          <div className="w-[400px] z-50">
            <Image src="/logo.png" alt="Logo" width={200} height={150} />
          </div>
          <div className="flex-1 flex justify-between items-center">
            <ul className="flex gap-5">
              {nav.map((item, i) => (
                <li key={i} className="text-md text-white font-medium z-50">
                  <Link href={item.href} className="uppercase">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
