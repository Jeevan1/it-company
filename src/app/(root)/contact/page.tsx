import ContactForm from "@/components/form/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo } from "@/data";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { ImLocation } from "react-icons/im";

type Props = {};

export const metadata = {
  title: "Contact",
};

const ContactPage = (props: Props) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div>
      <div className="pt-16">
        <div className="container">
          <SectionHeading title="GET IN TOUCH" className="justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 leading-[60px] text-center max-w-[1000px] mx-auto">
              Lorem ipsum dolor sit amet elit, sed{" "}
              <span className="text-primary">To Eiusmod</span>.
            </h2>
          </SectionHeading>
        </div>
        <div className="bg-gray-100 py-16 ">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-7">
              <div className="md:col-span-3 shadow-lg">
                <ContactForm />
              </div>
              <div className="md:col-span-2 shadow-lg bg-white p-10">
                <h1 className="text-primary font-bold text-3xl">
                  Our Contact Info
                </h1>
                <p className="mt-4 text-dark font-semibold text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  perspiciatis ea itaque, dolore asperiores earum.
                </p>
                <div>
                  {contactInfo.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-5 mt-2 border-b py-5"
                    >
                      {item.title.toLocaleLowerCase().includes("phone") && (
                        <FaPhone className="text-primary" size={40} />
                      )}
                      {item.title.toLocaleLowerCase().includes("email") && (
                        <HiOutlineMailOpen className="text-primary" size={40} />
                      )}
                      {item.title.toLocaleLowerCase().includes("location") && (
                        <ImLocation className="text-primary" size={40} />
                      )}
                      <div>
                        <p className="font-bold text-xl">{item.title}</p>
                        {item.desc.map((item, i) => (
                          <p
                            key={i}
                            className="font-semibold text-lg text-dark pt-2"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 pt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            // width="600"
            height="450"
            style={{ width: "100%", height: "450px" }}
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
