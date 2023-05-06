import Image from "next/image";
import Link from "next/link";
import React from "react";

function WhoWeAreAbout() {
  return (
    <section id="who-we-are-about">
      <div className="px-8 py-16 space-y-16">
        <div className="relative flex flex-col gap-6 items-center text-center">
          <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={220}
            height={220}
            className="absolute -top-1.5"
          />
          <p className="text-white relative z-10 font-bold text-center">
            WHO WE ARE
          </p>
          <h1 className="font-bold text-4xl">
            We Will Give You Strength and Health
          </h1>
          <p>
            At Gymate, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <Link
            href="/"
            className="relative text-white flex items-center gap-2 bg-[#FF0336] font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[12rem] after:duration-300 after:ease-linear after:border after:border-[#ff0336] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0 mt-4"
          >
            <span>CONTACT US</span>
            <span>
              <i className="fa-solid fa-arrow-right undefined"></i>
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-white px-8 py-12 flex flex-col items-center text-center gap-4">
            <Image
              src="/images/whoweare-about/grid-1.png"
              alt="history"
              width={100}
              height={100}
            />
            <h1 className="text-4xl font-bold">Our History</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
              Exercitation veniam consequat.
            </p>
          </div>
          <Image
            src="/images/whoweare-about/grid-2.jpg"
            alt="who we are"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
          <Image
            src="/images/whoweare-about/grid-3.jpg"
            alt="who we are"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
          <div className="bg-white px-8 py-12 flex flex-col items-center text-center gap-4">
            <Image
              src="/images/whoweare-about/grid-4.png"
              alt="history"
              width={100}
              height={100}
            />
            <h1 className="text-4xl font-bold">Our History</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
              Exercitation veniam consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreAbout;
