import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section id="footer">
      <div className="bg-white px-8 lg:px-28 py-16 text-center grid grid-cols-1 lg:grid-cols-3 lg:text-left gap-16">
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <Image
                src="/images/logo/logo-black.svg"
                alt="logo"
                width={160}
                height={160}
                className="m-auto"
              />
            </div>
            <p className="text-[0.9rem]">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <Link
              href="https://www.facebook.com"
              className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0366] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://www.twitter.com"
              className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0366] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0366] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-pinterest-p"></i>
            </Link>
            <Link
              href="https://www.youtube.com"
              className="bg-[#efefef] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0366] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </div>
          <div>
            <p>Privacy Policy | © {new Date().getFullYear()} Gymate</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative">
            <h1 className="font-bold text-2xl">Our Classes</h1>
            <span className="top-8 left-[5.3rem] absolute w-16 h-[4px] bg-[#ff0366]"></span>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/" className="hover:text-[#ff0336] hover:font-bold">
              Fitness Classes
            </Link>
            <Link href="/" className="hover:text-[#ff0336] hover:font-bold">
              Aerobics Classes
            </Link>
            <Link href="/" className="hover:text-[#ff0336] hover:font-bold">
              Power Yoga
            </Link>
            <Link href="/" className="hover:text-[#ff0336] hover:font-bold">
              Learn Machines
            </Link>
            <Link
              href="/"
              className="hover:text-[#ff0336] hover:font-bold duration-300 ease-linear"
            >
              Full-body Strength
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative">
            <h1 className="font-bold text-2xl">Working Hours</h1>
            <span className="top-8 left-16 absolute w-16 h-[4px] bg-[#ff0366]"></span>
          </div>
          <div className="space-y-2">
            <p>
              <span className="font-bold">Mon - Fri:</span> 7:00AM - 9:00PM
            </p>
            <p>
              <span className="font-bold">Sat:</span> 7:00AM - 7:00PM
            </p>
            <p>
              <span className="font-bold">Sun:</span> Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
