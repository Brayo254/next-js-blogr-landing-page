import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <>
      <section className="heroBg w-full min-h-150 bg-red-400 h-[70vh] overflow-hidden rounded-bl-[150px] flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-3.5">
            <h1 className="text-3xl text-white md:text-8xl font-bold">
              A modern publishing platform
            </h1>
          </div>
          <div className="mt-3.5 mb-4">
            <p className="text-xl">
              Grow your audience and build your online brand.
            </p>
          </div>

          <div className="flex flex-row">
            <div className="mr-10">
              <Button text="Start for free" />
            </div>
            <div>
              <Button variant="secondary" text="Learn More" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
