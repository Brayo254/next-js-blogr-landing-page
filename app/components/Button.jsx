import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <>
      <Link href="/signup">
        <button className="cursor-pointer bg-white text-red500 px-8 py-3 rounded-full font-medium hover:bg-red500 hover:text-white">
          Signup
        </button>
      </Link>
    </>
  );
};

export default Button;
