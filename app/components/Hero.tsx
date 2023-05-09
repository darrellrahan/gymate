import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section id="hero">
      <div className="h-[110vh] bg-[url('/images/hero/bg.jpg')] bg-[50%] bg-cover flex justify-center items-center text-white p-8">
        <div className="hidden lg:flex gap-4 flex-row-reverse -rotate-90 text-white absolute top-2/4 -right-8 items-center">
          <p className="uppercase text-xl font-bold tracking-widest">share</p>
          <span className="w-10 bg-[#FF0336] h-[0.1563rem]"></span>
          <div className="text-white gap-4 flex">
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-facebook text-xl cursor-pointer ease-in duration-200 "></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-twitter text-xl cursor-pointer ease-in duration-200"></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-linkedin-in text-xl cursor-pointer ease-in duration-200 "></i>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center lg:items-start relative lg:ml-[36rem]">
          <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={270}
            height={270}
            className="absolute left-5.5 lg:left-0 -top-2.5"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="text-black z-10 font-semibold text-lg lg:ml-11">
            FIND YOUR ENERGY
          </p>
          <h1 className="font-bold text-[2.5rem] lg:text-5xl flex flex-col gap-2 text-center lg:text-left leading-snug lg:space-y-2">
            <span>MAKE YOUR BODY</span>{" "}
            <span className="font-normal">FIT & PERFECT</span>
          </h1>
          <Link
            href="/"
            className="relative flex items-center gap-2 bg-white text-black font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[13rem] after:duration-300 after:ease-linear after:border after:border-[hsla(0,0%,100%,.362)] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0"
          >
            <span>OUR CLASSSES</span>
            <span className="text-[#FF0336]">
              <i className="fa-solid fa-arrow-right undefined"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
