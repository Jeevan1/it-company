"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "./Button";
import { nav } from "@/data";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
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
        headerFixed ? "fixed top-0 z-[100] w-full bg-white shadow-md" : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="w-[400px] z-50">
            <Image src="/logo.png" alt="Logo" width={200} height={150} />
          </div>
          <div className="flex-1 flex justify-between items-center">
            <ul className="flex gap-5">
              {nav.map((item, i) => (
                <li
                  key={i}
                  className={`text-md text-white z-[100] ${
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
            <div className="hidden md:block">
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
