import React from "react";
import Image from "next/image";

const Infrastructure = () => {
  return (
    <>
      <section className="w-full bg-gray900 md:flex-row md:h-75 rounded-bl-[100px] rounded-tr-[100px] md:flex md:justify-between md:items-center illustration-bg md:pr-11 md:pl-11">
        {/* left */}
        <div>
          <Image
            src="/illustration-phones.svg"
            width={500}
            height={500}
            alt="mobile illustration"
          />
        </div>

        {/* right */}
        <div className="p-15 md:w-100 md:p-9 ">
          <div>
            <h1 className="text-xl text-white font-boldmd:text-2xl md:font-bold">
              State of The Art Infrastructure
            </h1>
          </div>
          <div className="mt-1">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              atque sed doloribus ipsa maiores natus eaque delectus magnam
              mollitia. Consequuntur laudantium sed rem velit cupiditate, beatae
              aliquid alias ducimus iure?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infrastructure;
