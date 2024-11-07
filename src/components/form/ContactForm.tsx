import React from "react";
import InputField from "./InputField";
import { PrimaryButton } from "../Button";

const ContactForm = () => {
  return (
    <div className="h-full  bg-white p-10">
      <h1 className="text-primary font-bold text-3xl">Contact With Us</h1>
      <form
        action=""
        className=" h-full py-5 grid grid-cols-1 md:grid-cols-2 gap-5 "
      >
        <InputField
          type="text"
          name="name"
          label="Name"
          placeholder="Your Name"
        />
        <InputField
          type="email"
          name="email"
          label="Email"
          placeholder="Your Email"
        />
        <InputField
          type="text"
          name="subject"
          label="Subject"
          placeholder="Subject"
        />
        <InputField
          type="text"
          name="phone"
          label="Phone"
          placeholder="Phone"
        />
        <InputField
          type="text"
          name="message"
          label="Message"
          placeholder="Message"
          isTextArea={true}
          className="col-span-2"
        />
        <div className="col-span-2">
          <PrimaryButton className="">Send Message</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
