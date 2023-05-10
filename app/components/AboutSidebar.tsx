"use client";

import React from "react";
import { useTogglerContext } from "../context/toggler";
import Image from "next/image";
import Link from "next/link";

function AboutSidebar() {
  const { aboutSidebar, setAboutSidebar } = useTogglerContext();

  return (
    <section id="about-sidebar">
      <div
        className={`fixed inset-y-0 right-0 bg-black/80 ${
          aboutSidebar ? "left-0" : "left-[150%]"
        } z-[1000] duration-300 ease-linear`}
      >
        <div
          className="hidden lg:block absolute inset-y-0 left-0 right-[30%]"
          onClick={() => setAboutSidebar(false)}
        ></div>
        <div className="absolute inset-0 lg:left-[70%] bg-white z-[1001] p-8 overflow-y-auto space-y-12">
          <div className="flex items-center justify-between">
            <Image
              src="/images/logo/logo-black.svg"
              alt="logo"
              width={160}
              height={160}
            />
            <button onClick={() => setAboutSidebar(false)}>
              <i className="fa-solid fa-xmark hover:text-[#ff0336] duration-300 ease-linear text-3xl"></i>
            </button>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-xl">About Us</h1>
            <p>
              Find out who we are and what makes us unique. We are a
              community-driven gym committed to providing personalized fitness
              experiences for all levels of fitness enthusiasts in a welcoming
              and supportive environment.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-xl">Gallery</h1>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/images/about-sidebar/gallery/img-1.jpg"
                alt="gallery"
                width={100}
                height={100}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/images/about-sidebar/gallery/img-2.jpg"
                alt="gallery"
                width={100}
                height={100}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/images/about-sidebar/gallery/img-3.jpg"
                alt="gallery"
                width={100}
                height={100}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/images/about-sidebar/gallery/img-4.jpg"
                alt="gallery"
                width={100}
                height={100}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/images/about-sidebar/gallery/img-5.jpg"
                alt="gallery"
                width={100}
                height={100}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/images/about-sidebar/gallery/img-6.jpg"
                alt="gallery"
                width={100}
                height={100}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-xl">Contact Info</h1>
            <div className="flex items-center gap-2">
              <span>
                <i className="fa-solid fa-location-dot text-[#ff0336]"></i>
              </span>
              <span>
                <p>59 Street, House Newyork City</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <i className="fa-solid fa-phone text-[#ff0336]"></i>
              </span>
              <span>
                <p>+123-678800090</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <i className="fa-solid fa-envelope text-[#ff0336]"></i>
              </span>
              <span>
                <p>gymate@gymail.com</p>
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-xl">Follow Us</h1>
            <div className="flex items-center gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSidebar;
