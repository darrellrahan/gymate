"use client";

import React from "react";
import { useTogglerContext } from "../context/toggler";
import Link from "next/link";
import { navLink } from "../data/data";

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
          {navLink.map((data) => (
            <li key={data.link}>
              <Link
                href={data.url}
                onClick={() => {
                  setMobileNavbar(false);
                }}
                className="hover:text-[#ff0336] duration-300 ease-linear"
              >
                {data.link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default MobileNavbar;
