import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex w-full justify-center p-5 flex-col bg-gray-950 md:rounded-tr-[100px] md:flex md:flex-row md:items-center md:justify-between md:p-18">
        <div className="flex justify-center mb-7">
          <Image src="/logo.svg" width={100} height={100} alt="logo" />
        </div>
        <div className="flex flex-col items-center mr-10 mb-5">
          <div className="text-white text-xl">
            <h6>Product</h6>
          </div>
          <div>
            <Link className="text-white text-xl" href="#">
              Overview
            </Link>
          </div>
          <div>
            <Link className="text-white text-xl" href="#">
              Pricing
            </Link>
          </div>
          <div>
            <Link className="text-white text-xl" href="#">
              Marketplace
            </Link>
          </div>
          <div>
            <Link className="text-white text-xl" href="#">
              Features
            </Link>
          </div>
          <div>
            <Link className="text-white text-xl" href="#">
              Integration
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mr-10 mt-7">
          <div>
            <h6 className="text-white text-xl">Company</h6>
          </div>
          <div>
            <Link className="text-white text-xl" href="#">
              About
            </Link>
          </div>
          <div>
            <Link className="text-white text-xl" href="#">
              Team
            </Link>
          </div>
          <div>
            <Link className="text-white text-xl" href="#">
              Blog
            </Link>
          </div>
          <div>
            <Link className="text-white text-xl" href="#">
              Careers
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mr-10 mt-7">
          <div>
            <h6 className="text-white text-xl">Connect</h6>
          </div>
          <div>
            <Link className="text-white text-xl" href="#">
              Contact
            </Link>
          </div>
          <div>
            <Link className="text-white text-xl" href="#">
              Newsletter
            </Link>
          </div>
          <div>
            <Link className="text-white text-xl" href="#">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
