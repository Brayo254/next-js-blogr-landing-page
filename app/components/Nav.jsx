"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setIsOpen] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const toggleDropDown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      {/* desktop nav */}
      <nav className="hidden md:flex md:flex-row md:justify-between md:items-center md:px-10 md:py-8 md: bg-red500">
        <div>
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </div>
        <div className="md:flex md:flex-row md:justify-center">
          <div className="md:mr-4">
            <Link href="#">Product</Link>
          </div>
          <div className="md:mr-4">
            <Link href="#">Company</Link>
          </div>
          <div className="md:mr-4" onClick={toggleDropDown}>
            <div className="md:flex md:flex-row">
              <Link className="md:mr-3" href="#">
                Connect
              </Link>
              <div className="cursor-pointer">
                {open ? <FaChevronDown /> : <FaChevronUp />}
              </div>
            </div>
            {open && (
              <div>
                <div className="absolute bg-white w-30 pt-2 h-40 flex flex-col justify-center items-center">
                  <Link className="mt-4" href="#">
                    Contact
                  </Link>
                  <Link className="mt-4" href="#">
                    NewsLetter
                  </Link>
                  <Link className="mt-4" href="#">
                    LinkedIn
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div>
            <Link className="mr-4" href="signup">
              Login
            </Link>
            <Button text="Signup" />
          </div>
        </div>
      </nav>
      <div
        onClick={handleToggle}
        className="flex items-center bg-red500 md:hidden p-2"
      >
        {toggle ? (
          <FaTimes className="text-4xl text-white cursor-pointer" />
        ) : (
          <FaBars className="text-4xl text-white cursor-pointer" />
        )}
      </div>

      {/* mobile nav */}
      {toggle && (
        <nav className="md:hidden flex relative w-full flex-col bg-red500 items-start px-10 py-8">
          <div className="flex flex-col justify-center">
            <div className="mr-4">
              <Link href="#">Product</Link>
            </div>
            <div className="mr-4">
              <Link href="#">Company</Link>
            </div>
            <div className="mr-4">
              <div
                className="flex flex-row justify-center items-center"
                onClick={toggleDropDown}
              >
                <Link href="#">Connect</Link>
                <div className="ml-4 cursor-pointer">
                  {open ? <FaChevronDown /> : <FaChevronUp />}
                </div>
              </div>
              {open && (
                <div className=" absolute top-full left-0 bg-gray600 w-full pt-2 h-70 flex flex-col items-center">
                  <Link className="mt-4" href="#">
                    Contact
                  </Link>
                  <Link className="mt-4" href="#">
                    NewsLetter
                  </Link>
                  <Link className="mt-4" href="#">
                    LinkedIn
                  </Link>

                  <hr className="bg-gray600 border-1.5 w-full mt-10" />
                  <div className="flex flex-col justify-center items-center">
                    <Link className="mb-6" href="#">
                      Login
                    </Link>
                    <Button text="signup" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
