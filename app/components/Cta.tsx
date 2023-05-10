import Link from "next/link";
import React from "react";

function Cta() {
  return (
    <section id="cta">
      <div className="bg-[url('/images/cta/bg.jpg')] px-8 py-16 bg-[50%] bg-no-repeat bg-cover mt-8">
        <div className="text-white flex flex-col gap-4 font-bold max-w-screen-xl m-auto">
          <h1 className="text-4xl">Need a Fitness Trainer?</h1>
          <h3 className="text-2xl flex items-center gap-2">
            <span className="text-[#ff0336]">Call:</span>
            <span>+123-456789</span>
          </h3>
          <div>
            <Link
              href="/"
              className="relative text-white flex items-center gap-2 bg-[#FF0336] font-bold px-6 py-4 after:h-[3.5rem] after:absolute after:w-[13.25rem] after:duration-300 after:ease-linear after:border after:border-[#ff0336] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0 mt-6 w-fit"
            >
              <span>PURCHASE NOW</span>
              <span>
                <i className="fa-solid fa-arrow-right undefined"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
