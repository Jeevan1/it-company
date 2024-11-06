import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const iconComponents = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaInstagram: FaInstagram,
};
type IconComponent = React.FC<{ className?: string }>;
type SocialLink = {
  type: string;
  url: string;
};
type Props = {
  name: string;
  title: string;
  bio: string;
  image: string;
  socialLinks: SocialLink[];
};

const TeamCard = ({ data }: { data: Props }) => {
  return (
    <div className="w-full pb-8 shadow-md my-8 px-6 bg-white hover:bg-secondary duration-200 relative group">
      <div className="h-[270px] w-full relative mt-10">
        <div className="w-full absolute -top-10 bottom-0">
          <Image
            src={data.image}
            alt="team"
            width={300}
            height={200}
            className="w-full h-full object-contain object-top"
          />
        </div>
      </div>
      <div className="">
        <p className="text-center font-semibold text-secondary text-2xl leading-10 group-hover:text-white">
          {data.name}
        </p>
        <p className="text-center font-medium text-dark text-lg leading-7 group-hover:text-white">
          {data.title}
        </p>
        <div className="absolute -top-[50px] left-10 opacity-0 group-hover:opacity-100 group-hover:top-0 duration-200 ease-in">
          {data.socialLinks.map((link: SocialLink, index: number) => (
            <Link
              href={link.url}
              key={index}
              className="text-center font-medium bg-primary w-10 h-10 flex justify-center items-center mb-3 p-3 rounded-full text-lg leading-7 hover:bg-secondary duration-100 ease-in"
            >
              {iconComponents[link.type as keyof typeof iconComponents]({
                className: " text-3xl text-white",
              })}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
