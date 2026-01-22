import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gray-950 md:rounded-tr-[100px] py-8 md:py-18">
        <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:items-start md:justify-between">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex justify-center w-full md:w-auto mb-8 md:mb-0">
            <Image
              src="/logo.svg"
              width={100}
              height={100}
              alt="logo"
              className="md:ml-4"
            />
          </div>

          {/* Links Grid */}
          <div className="w-full md:w-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Product Column */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-white text-xl font-semibold mb-4">
                <h6>Product</h6>
              </div>
              <div className="flex flex-col items-center md:items-start space-y-2">
                <Link
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Overview
                </Link>
                <Link
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Pricing
                </Link>
                <Link
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Marketplace
                </Link>
                <Link
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Features
                </Link>
                <Link
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Integrations
                </Link>
              </div>
            </div>

            {/* Company Column */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-white text-xl font-semibold mb-4">
                <h6>Company</h6>
              </div>
              <div className="flex flex-col items-center md:items-start space-y-2">
                <Link
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                  href="#"
                >
                  About
                </Link>
                <Link
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Team
                </Link>
                <Link
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Blog
                </Link>
                <Link
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Careers
                </Link>
              </div>
            </div>

            {/* Connect Column */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-white text-xl font-semibold mb-4">
                <h6>Connect</h6>
              </div>
              <div className="flex flex-col items-center md:items-start space-y-2 pb-4 md:pb-0">
                <Link
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Contact
                </Link>
                <Link
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                  href="#"
                >
                  Newsletter
                </Link>
                <Link
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                  href="#"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
