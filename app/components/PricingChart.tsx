import Image from "next/image";
import Link from "next/link";
import React from "react";

function PricingChart() {
  return (
    <section id="pricing-chart">
      <div className="bg-[url('/images/bg/bg.jpg')] px-8 py-16 bg-[50%] bg-no-repeat bg-cover relative space-y-16">
        <Image
          src="/images/pricing-chart/nodaysoff.png"
          alt="no days off"
          width={270}
          height={270}
          className="absolute left-0"
        />
        <Image
          src="/images/pricing-chart/twobarbels.png"
          alt="dunno"
          width={300}
          height={300}
          className="absolute bottom-0 right-0"
        />
        <div className="relative flex flex-col gap-4 items-center text-center">
          <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={220}
            height={220}
            className="absolute left-[2.95rem] lg:left-[38.75rem] -top-1.5"
          />
          <p className="text-white relative z-10 font-bold text-center mb-4">
            PRICING CHART
          </p>
          <h1 className="font-bold text-4xl">Exclusive Pricing Plan</h1>
          <p>
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl m-auto lg:px-16 gap-6 z-10 relative">
          <div className="flex flex-col group">
            <div className="relative">
              <Image
                src="/images/pricing-chart/beginners.jpg"
                alt="beginners"
                width={500}
                height={500}
                className="grayscale group-hover:grayscale-0 duration-300 ease-linear w-full"
              />
              <div className="bg-white font-bold text-xl py-4 text-center absolute -bottom-5 left-12 right-12 group-hover:text-[#ff0336] duration-300 ease-linear">
                Beginners
              </div>
            </div>
            <div className="bg-white pb-12 pt-8 shadow-xl flex flex-col items-center justify-center gap-6 lg:gap-4">
              <div className="flex gap-2 items-center lg:mb-2">
                <span className="text-xl">$</span>
                <span className="font-bold text-[3.5rem]">39</span>
                <span className="text-xl">p/m</span>
              </div>
              <p className="-mt-4">Free Hand</p>
              <p>Gym Fitness</p>
              <p>Weight Loss</p>
              <p>Personal Trainer</p>
              <p>Cycling</p>
              <Link
                href="/"
                className="relative text-white flex items-center gap-2 bg-[#FF0336] font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[14rem] after:duration-300 after:ease-linear after:border after:border-[#ff0336] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0 mt-4 lg:mt-6"
              >
                <span>PURCHASE NOW</span>
                <span>
                  <i className="fa-solid fa-arrow-right undefined"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col group">
            <div className="relative">
              <Image
                src="/images/pricing-chart/basic.jpg"
                alt="basic"
                width={500}
                height={500}
                className="grayscale group-hover:grayscale-0 duration-300 ease-linear w-full"
              />
              <div className="bg-white font-bold text-xl py-4 text-center absolute -bottom-5 left-12 right-12 group-hover:text-[#ff0336] duration-300 ease-linear">
                Basic
              </div>
            </div>
            <div className="bg-white pb-12 pt-8 shadow-xl flex flex-col items-center justify-center gap-6 lg:gap-4">
              <div className="flex gap-2 items-center lg:mb-2">
                <span className="text-xl">$</span>
                <span className="font-bold text-[3.5rem]">59</span>
                <span className="text-xl">p/m</span>
              </div>
              <p className="-mt-4">Free Hand</p>
              <p>Gym Fitness</p>
              <p>Weight Loss</p>
              <p>Personal Trainer</p>
              <p>Cycling</p>
              <Link
                href="/"
                className="relative text-white flex items-center gap-2 bg-[#FF0336] font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[14rem] after:duration-300 after:ease-linear after:border after:border-[#ff0336] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0 mt-4 lg:mt-6"
              >
                <span>PURCHASE NOW</span>
                <span>
                  <i className="fa-solid fa-arrow-right undefined"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col group">
            <div className="relative">
              <Image
                src="/images/pricing-chart/advance.jpg"
                alt="advance"
                width={500}
                height={500}
                className="grayscale group-hover:grayscale-0 duration-300 ease-linear w-full"
              />
              <div className="bg-white font-bold text-xl py-4 text-center absolute -bottom-5 left-12 right-12 group-hover:text-[#ff0336] duration-300 ease-linear">
                Advance
              </div>
            </div>
            <div className="bg-white pb-12 pt-8 shadow-xl flex flex-col items-center justify-center gap-6 lg:gap-4">
              <div className="flex gap-2 items-center lg:mb-2">
                <span className="text-xl">$</span>
                <span className="font-bold text-[3.5rem]">69</span>
                <span className="text-xl">p/m</span>
              </div>
              <p className="-mt-4">Free Hand</p>
              <p>Gym Fitness</p>
              <p>Weight Loss</p>
              <p>Personal Trainer</p>
              <p>Cycling</p>
              <Link
                href="/"
                className="relative text-white flex items-center gap-2 bg-[#FF0336] font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[14rem] after:duration-300 after:ease-linear after:border after:border-[#ff0336] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0 mt-4 lg:mt-6"
              >
                <span>PURCHASE NOW</span>
                <span>
                  <i className="fa-solid fa-arrow-right undefined"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingChart;
