import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <>
      <section className="p-3 flex justify-center items-center md:flex flex-col md:w-full md:h-[90vh] md:justify-center md:items-center md:p-7">
        {/* heading */}
        <div className="mt-10">
          <h2 className="text-2xl md:text-4xl font-bold">
            Designed for the future
          </h2>
        </div>
        {/* left & right */}
        <div className="flex p-10 flex-col-reverse md:flex md:flex-row md:justify-between md:items-center md:w-full md:p-10">
          {/* left section */}
          <div className="flex flex-col justify-center items-center">
            {/* top div */}
            <div className="mb-5 md:flex md:flex-col md:p-5 md:justify-center md:items-center md:w-100 md:h-50">
              <div>
                <h2 className="text-2xl font-medium">
                  Introducing an extensible editor
                </h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Temporibus, excepturi fugit quae laudantium recusandae libero,
                  deleniti, deserunt veniam maiores tenetur dicta corporis
                  laborum quia consequatur. Culpa quis aliquid libero autem.
                </p>
              </div>
            </div>
            {/* bottom */}
            <div className="md:flex md:flex-col md:p-5 md:justify-center md:items-center md:w-100 md:h-50">
              <div>
                <h2 className="text-2xl font-medium">
                  Robust content management
                </h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Temporibus, excepturi fugit quae laudantium recusandae libero,
                  deleniti, deserunt veniam maiores tenetur dicta corporis
                  laborum quia consequatur. Culpa quis aliquid libero autem.
                </p>
              </div>
            </div>
          </div>

          {/* right div */}

          <div className="">
            <Image
              src="illustration-editor-desktop.svg"
              width={500}
              height={500}
              alt="desktop illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
