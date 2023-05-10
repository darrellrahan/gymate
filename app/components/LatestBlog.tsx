import Image from "next/image";
import Link from "next/link";
import React from "react";

function LatestBlog() {
  return (
    <section id="latest-blog">
      <div className="px-8 py-16 space-y-12">
        <div className="relative flex flex-col gap-4 items-center text-center">
          <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={200}
            height={200}
            className="absolute left-[3.75rem] lg:left-[39.25rem] -top-1.5"
          />
          <p className="text-white relative z-10 font-bold text-center mb-4">
            LATEST BLOG
          </p>
          <h1 className="font-bold text-4xl">Our Recent News</h1>
          <p>
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl m-auto lg:px-16 gap-8 lg:gap-4">
          <div className="bg-white shadow-xl p-8 flex flex-col gap-6 lg:justify-between">
            <div className="flex flex-col gap-6">
              <h3 className="font-bold py-1 px-3 rounded-full border border-[#323232] w-fit">
                05.05.2023
              </h3>
              <h1 className="text-xl font-bold">Yoga For Everyone in 2023</h1>
              <p className="-mt-2">
                This is program designed to make the practice of yoga beneficial
                for people of all ages, abilities, and backgrounds.
              </p>
            </div>
            <div>
              <Link
                href="/"
                className="text-white flex items-center gap-4 bg-[#FF0336] font-bold px-5 py-3 w-fit"
              >
                <span>READ MORE</span>
                <span>
                  <i className="fa-solid fa-arrow-right undefined"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-xl p-8 flex flex-col gap-6 lg:justify-between">
            <div className="flex flex-col gap-6">
              <h3 className="font-bold py-1 px-3 rounded-full border border-[#323232] w-fit">
                04.05.2023
              </h3>
              <h1 className="text-xl font-bold">
                Getting Back Into CrossFit After Vacation
              </h1>
              <p className="-mt-2">
                Learn how to ease back into your CrossFit routine after a
                vacation with tips and strategies for success.
              </p>
            </div>
            <div>
              <Link
                href="/"
                className="text-white flex items-center gap-4 bg-[#FF0336] font-bold px-5 py-3 w-fit"
              >
                <span>READ MORE</span>
                <span>
                  <i className="fa-solid fa-arrow-right undefined"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-xl p-8 flex flex-col gap-6 lg:justify-between">
            <div className="flex flex-col gap-6">
              <h3 className="font-bold py-1 px-3 rounded-full border border-[#323232] w-fit">
                03.05.2023
              </h3>
              <h1 className="text-xl font-bold">
                Meet Fitness Ambassador Grace
              </h1>
              <p className="-mt-2">
                Get to know Grace, a fitness enthusiast and dedicated ambassador
                who is passionate about helping others reach their fitness
                goals.
              </p>
            </div>
            <div>
              <Link
                href="/"
                className="text-white flex items-center gap-4 bg-[#FF0336] font-bold px-5 py-3 w-fit"
              >
                <span>READ MORE</span>
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

export default LatestBlog;
