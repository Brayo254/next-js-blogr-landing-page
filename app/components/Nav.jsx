"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <nav className="hidden md:bg-amber-500 md:flex md:flex-row md:justify-between md:items-center md:px-10 md:py-8">
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
          <div className="md:mr-4">
            <Link href="#">Connect</Link>
          </div>
        </div>
        <div>
          <div>
            <Link className="mr-4" href="signup">
              Login
            </Link>
            <Button />
          </div>
          <div onClick={handleToggle} className="flex md:hidden">
            {toggle ? (
              <FaTimes className="text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>
      </nav>
      <nav className="md:hidden md:bg-amber-500 flex flex-col md:justify-between items-center px-10 py-8">
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
          <div className="md:mr-4">
            <Link href="#">Connect</Link>
          </div>
        </div>
        <div>
          <div>
            <Link className="mr-4" href="signup">
              Login
            </Link>
            <Button />
          </div>
          <div onClick={handleToggle} className="flex md:hidden">
            {toggle ? (
              <FaTimes className="text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
