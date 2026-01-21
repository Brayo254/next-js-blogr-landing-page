import React from "react";
import Image from "next/image";

const SecondContent = () => {
  return (
    <>
      <section className="p-3 flex justify-center items-center md:flex flex-col-reverse md:w-full md:h-[90vh] md:justify-center md:items-center md:p-10 md:mb-10">
        {/* left & right */}
        <div className="flex p-10 flex-col-reverse md:flex md:flex-row md:justify-between md:items-center md:w-full md:p-10">
          {/* left section */}
          <div className="flex flex-col justify-center items-center md:order-2">
            {/* top div */}
            <div className="mb-5 md:flex md:flex-col md:p-5 md:justify-center md:items-center md:w-100 md:h-50">
              <div>
                <h2 className="text-2xl font-medium">Free, open, simple</h2>
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
                <h2 className="text-2xl font-medium">Powerful Tooling</h2>
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

          {/* right section */}

          <div className="md:flex md:order-1">
            <Image
              src="/illustration-laptop-desktop.svg"
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

export default SecondContent;
