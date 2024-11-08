"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "./Button";
import { nav } from "@/data";
import Link from "next/link";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";

const Header = ({ isHomePage }: { isHomePage?: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const setActiveLink = () => {
    const sections = document.querySelectorAll<HTMLElement>(".section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollY = window.scrollY;

      if (
        scrollY >= sectionTop - sectionHeight / 3 &&
        scrollY < sectionTop + sectionHeight / 2
      ) {
        const sectionId = section.getAttribute("id");
        const correspondingNavLink = document.querySelector<HTMLAnchorElement>(
          `.nav__links a[href="#${sectionId}"]`
        );

        document
          .querySelectorAll(".nav__links a")
          .forEach((link) => link.classList.remove("active"));
        if (correspondingNavLink) {
          correspondingNavLink.classList.add("active");
        }
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
      setActiveLink();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-5 bg-transparent transition-all duration-300 ${
        isHomePage ? "shadow-none" : "shadow-md"
      } ${headerFixed ? "fixed top-0 z-[100] w-full bg-white shadow-md" : ""}`}
    >
      <div className="container">
        <div className="flex items-center gap-5">
          <div className=" z-50">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={100}
              className="min-w-[130px]"
            />
          </div>
          <div className="hidden md:flex flex-1 justify-between items-center ps-7 md:ps-[5%]">
            <ul className="flex gap-5">
              {nav.map((item, i) => (
                <li
                  key={i}
                  className={`text-sm md:text-md  ${
                    isHomePage ? "text-white" : "text-primary font-semibold"
                  } z-[100] ${headerFixed ? " text-black font-bold" : " "}`}
                >
                  <Link
                    href={item.href}
                    className={`uppercase ${
                      headerFixed ? "text-secondary" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
          <div className="md:hidden z-50 flex-1 flex justify-end">
            <div className="">
              <RiMenuFoldFill
                size={25}
                onClick={handleMenuClick}
                color={"black"}
              />
            </div>
            {menuOpen && (
              <div
                className="fixed top-0 left-0 bottom-0 w-full  px-10 bg-white bg-opacity-100 z-40"
                onClick={handleMenuClick}
              >
                <RiMenuUnfoldFill
                  size={25}
                  onClick={handleMenuClick}
                  className="absolute top-9 right-3"
                />
                <div className="flex flex-col items-start justify-center h-full">
                  <div className=" z-50 mb-10">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={250}
                      height={100}
                      className="min-w-[130px]"
                    />
                  </div>
                  <ul className="flex flex-col gap-5 z-50">
                    {nav.map((item, i) => (
                      <li
                        key={i}
                        className={`text-md md:text-lg text-primary font-bold z-[100] ${
                          headerFixed ? " text-black font-bold" : " "
                        }`}
                      >
                        <Link
                          href={item.href}
                          className={`uppercase ${
                            headerFixed ? "text-secondary" : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
