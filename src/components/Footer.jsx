import React from "react";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="flex items-center px-8 md:px-18 lg:px-24 py-3">
        <h2 className="text-[16px]">Javaid@2023</h2>
        <div className="flex gap-2 ml-auto ">
          <a
            className="text-blue-500 hover:text-green-500 text-[28px]"
            href="https://www.instagram.com/clever_coder01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>

          <a
            className="text-blue-500 hover:text-green-500 text-[28px]"
            href="https://github.com/JavaidAhmadKhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            className="text-blue-500 hover:text-green-500 text-[28px]"
            href="https://www.linkedin.com/in/javaid-khan-183a41136/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="text-blue-500 hover:text-green-500 text-[28px]"
            href="https://twitter.com/Javaid_Khan19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterCircle />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
