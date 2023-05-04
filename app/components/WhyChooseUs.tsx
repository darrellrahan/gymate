import Image from "next/image";
import Link from "next/link";
import React from "react";

function WhyChooseUs() {
  return (
    <section id="why-choose-us">
      <div className="bg-[#ff0336] py-8 px-12 flex flex-col items-center gap-8 text-center">
        <h1 className="text-white font-bold text-2xl">
          We Are Always Providing Best Fitness Service For You
        </h1>
        <Link
          href="/"
          className="relative flex items-center gap-2 bg-white text-black font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[13rem] after:duration-300 after:ease-linear after:border after:border-[hsla(0,0%,100%,.362)] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0"
        >
          <span>JOIN WITH US</span>
          <span className="text-[#FF0336]">
            <i className="fa-solid fa-arrow-right undefined"></i>
          </span>
        </Link>
      </div>
      <div className="bg-black text-white px-8 pt-32">
        <div className="relative">
          <div className="absolute bottom-0 h-[42%] w-2.5 bg-[#ff0336]"></div>
          <div className="absolute -top-16 right-[2.125rem] h-[28.8125rem] w-2.5 bg-[#ff0336] rotate-[174deg]"></div>
          <Image
            src="/images/whychooseus/main.png"
            alt="why choose us"
            width={260}
            height={260}
            className="m-auto"
          />
        </div>
        <div className="flex flex-col items-center text-center gap-8 py-16">
          <h3 className="font-bold">WHY CHOOSE US</h3>
          <h1 className="font-bold text-4xl">
            We Can Give A Shape Of Your Body Here!
          </h1>
          <p className="text-[#b4b4b4]">
            At <strong>Gymate</strong>, we are dedicated to helping you achieve
            the body of your dreams. Our expert trainers and nutritionists will
            work with you to create a personalized fitness and nutrition plan
            that helps you reach your specific goals.
          </p>
          <div className="grid grid-cols-1 gap-4 px-12">
            <div className="flex items-center gap-4">
              <Image
                src="/images/whychooseus/grid-1.png"
                alt="Free Fitness Training"
                width={70}
                height={70}
                className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-linear duration-300 rounded-full p-4"
              />
              <h1 className="font-bold text-lg">Free Fitness Training</h1>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/whychooseus/grid-2.png"
                alt="Modern Gym Equipments"
                width={70}
                height={70}
                className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-linear duration-300 rounded-full p-4"
              />
              <h1 className="font-bold text-lg">Modern Gym Equipments</h1>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/whychooseus/grid-3.png"
                alt="Gym Bag Equipments"
                width={70}
                height={70}
                className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-linear duration-300 rounded-full p-4"
              />
              <h1 className="font-bold text-lg">Gym Bag Equipments</h1>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/whychooseus/grid-4.png"
                alt="Fresh Bottle Watter"
                width={70}
                height={70}
                className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-linear duration-300 rounded-full p-4"
              />
              <h1 className="font-bold text-lg">Fresh Bottle Watter</h1>
            </div>
          </div>
          <div>
            <Link
              href="/"
              className="relative text-white flex items-center gap-2 bg-[#595959] hover:bg-[#ff0336] font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[12.5rem] after:duration-300 after:ease-linear after:border after:border-[rgb(89,89,89)] hover:after:border-[#ff0336] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0 my-8"
            >
              <span>OUR CLASSES</span>
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

export default WhyChooseUs;
