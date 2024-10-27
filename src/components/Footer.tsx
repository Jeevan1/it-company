import React from "react";
// import "./Footer.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineShareLocation } from "react-icons/md";

const FooterLink = ({
  value,
  link,
}: {
  value: React.ReactNode;
  link?: string;
}) => {
  return (
    <li className="text-white pb-1">
      <Link href={link || ""} className=" text-md">
        {value}
      </Link>
    </li>
  );
};

function Footer() {
  return (
    <footer className="py-10 mt-5 bg-accent">
      <div className="container">
        <div className="flex justify-between items-center pb-10 mb-10 border-b border-white">
          <div className="flex flex-1 flex-col gap-2 justify-center items-center border-r ">
            <FiPhoneCall size={40} color="#fff" />
            <p className="text-white font-semibold text-lg">Phone Number</p>
            <p className="text-white font-semibold text-lg">+977-98267-2727</p>
          </div>
          <div className="flex flex-1 flex-col gap-2 justify-center items-center border-r">
            <IoMailUnreadOutline size={40} color="#fff" />
            <p className="text-white font-semibold text-lg">Email Address</p>
            <p className="text-white font-semibold text-lg">geoshop@gmail</p>
          </div>
          <div className="flex flex-1 flex-col gap-2 justify-center items-center">
            <MdOutlineShareLocation size={40} color="#fff" />
            <p className="text-white font-semibold text-lg">Location</p>
            <p className="text-white font-semibold text-lg">
              Kathmandu, Budhanilkantha-13, Nepal
            </p>
          </div>
        </div>
        <div className="Footer__top ">
          <div className="flex flex-wrap justify-between  border-bottom pb-4">
            <div className="lg:w-1/4 md:w-1/2 w-100 mt-5 sm:mt-0">
              <div className="logo">
                <Image
                  src={"/logo.png"}
                  width={200}
                  height={150}
                  alt="logo"
                  className="w-48"
                />
              </div>
              <ul>
                <FooterLink
                  value={"Kathmandu, Budhanilbjhghjkantha-13, Nepal"}
                />
                <FooterLink value={"geoshop@gmail.com"} />
                <FooterLink value={"+977-98267-2727"} />
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-100 mt-5 sm:mt-0">
              <h6 className=" text-white text-xl mb-2">
                Shopping &amp; Categories
              </h6>
              <ul>
                <FooterLink
                  link={"./products/category/men"}
                  value={"Men’s Shopping"}
                />
                <FooterLink
                  link={"./products/category/women"}
                  value={"Women’s Shopping"}
                />
                <FooterLink value={"Kid’s Shopping"} />
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-100 mt-5 sm:mt-0">
              <h6 className=" text-white text-lg mb-2">Useful Links</h6>
              <ul>
                <FooterLink link={"./"} value={"Home"} />
                <FooterLink link={"./about"} value={"About Us"} />
                <FooterLink link={"./contact-us"} value={"Contact"} />
                <FooterLink value={"Help"} />
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-100 mt-5 sm:mt-0">
              <h6 className=" text-white text-lg mb-2">
                Help &amp; Information
              </h6>
              <ul>
                <FooterLink value={"Help"} />
                <FooterLink value={"FAQ's"} />
                <FooterLink value={"Shipping"} />
                <FooterLink value={"Tracking ID"} />
              </ul>
            </div>
          </div>
        </div>
        <div className=" pt-4 text-center ">
          <p className="text-white">
            Copyright © 2023 GeoShop Co., Ltd. All Rights Reserved.
          </p>
          <p className="text-white">
            Design:{" "}
            <Link href="/about" className=" text-accent">
              Jdev
            </Link>
          </p>
          <ul className=" flex justify-center gap-3 pt-2">
            <FooterLink value={<FaFacebookF className="icon" />} />
            <FooterLink value={<FaTwitter className="icon" />} />
            <FooterLink value={<FaLinkedinIn className="icon" />} />
            <FooterLink value={<FaInstagram className="icon" />} />
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
