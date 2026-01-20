import React from "react";
import Link from "next/link";

const Button = ({ text, variant = "primary" }) => {
  const variantStyles = {
    secondary: "text-white hover:bg-red500 rounded-full cursor-pointer p-2 border border-white",
    primary:
      "bg-white rounded-full hover:bg-red500 hover:text-white p-2 cursor-pointer",
  };
  return (
    <>
      <Link href="/signup">
        <button className={`${variantStyles[variant]}`}> {text}</button>
      </Link>
    </>
  );
};

export default Button;
