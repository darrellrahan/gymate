"use client";

import React from "react";
import { useTogglerContext } from "../context/toggler";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileNavbar() {
  const { mobileNavbar, setMobileNavbar } = useTogglerContext();

  return (
    <section id="mobile-navbar">
      <nav
        className={`fixed inset-y-0 right-0 bg-white ${
          mobileNavbar ? "left-0" : "left-[150%]"
        } z-50 duration-300 ease-linear p-8 flex items-center justify-center flex-col`}
      >
        <button
          className="text-3xl absolute top-10 right-10 hover:text-[#ff0336] duration-300 ease-linear"
          onClick={() => setMobileNavbar(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <ul className="flex flex-col items-center gap-8 font-semibold text-xl">
          <li>
            <Link
              href="/"
              onClick={() => {
                setMobileNavbar(false);
              }}
              className={`hover:text-[#ff0336] ${
                usePathname() === "/" ? "text-[#ff0336]" : ""
              } duration-300 ease-linear`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => {
                setMobileNavbar(false);
              }}
              className={`hover:text-[#ff0336] ${
                usePathname() === "/about" ? "text-[#ff0336]" : ""
              } duration-300 ease-linear`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/schedule"
              onClick={() => {
                setMobileNavbar(false);
              }}
              className={`hover:text-[#ff0336] ${
                usePathname() === "/schedule" ? "text-[#ff0336]" : ""
              } duration-300 ease-linear`}
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              onClick={() => {
                setMobileNavbar(false);
              }}
              className={`hover:text-[#ff0336] ${
                usePathname() === "/gallery" ? "text-[#ff0336]" : ""
              } duration-300 ease-linear`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              onClick={() => {
                setMobileNavbar(false);
              }}
              className={`hover:text-[#ff0336] ${
                usePathname() === "/blog" ? "text-[#ff0336]" : ""
              } duration-300 ease-linear`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => {
                setMobileNavbar(false);
              }}
              className={`hover:text-[#ff0336] ${
                usePathname() === "/contact" ? "text-[#ff0336]" : ""
              } duration-300 ease-linear`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              onClick={() => {
                setMobileNavbar(false);
              }}
              className={`hover:text-[#ff0336] ${
                usePathname() === "/pricing" ? "text-[#ff0336]" : ""
              } duration-300 ease-linear`}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/classes"
              onClick={() => {
                setMobileNavbar(false);
              }}
              className={`hover:text-[#ff0336] ${
                usePathname() === "/classes" ? "text-[#ff0336]" : ""
              } duration-300 ease-linear`}
            >
              Classes
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MobileNavbar;
