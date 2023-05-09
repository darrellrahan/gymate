"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useTogglerContext } from "../context/toggler";
import { usePathname } from "next/navigation";

function Header() {
  const { setMobileNavbar, setAboutSidebar } = useTogglerContext();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onPageScroll = () => {
      headerRef.current!.style.backgroundColor =
        window.pageYOffset > 20 ? "black" : "transparent";
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section id="header">
      <header
        className="fixed inset-x-0 top-0 duration-300 ease-linear text-white flex justify-between items-center py-6 px-8 z-50"
        ref={headerRef}
      >
        <div>
          <Link href="/">
            <Image
              src="/images/logo/logo-white.svg"
              alt="logo"
              width={160}
              height={160}
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/about" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            About
          </Link>
          <Link
            href="/schedule"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/schedule" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            Schedule
          </Link>
          <Link
            href="/gallery"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/gallery" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            Gallery
          </Link>
          <Link
            href="/blog"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/blog" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/contact" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            Contact
          </Link>
          <Link
            href="/pricing"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/pricing" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            Pricing
          </Link>
          <Link
            href="/classes"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/classes" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            Classes
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMobileNavbar(true)}
            className="text-2xl hover:text-[#FF0336] ease-in duration-200 lg:hidden"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <Link
            href="/register"
            className="text-2xl hover:text-[#FF0336] ease-in duration-200"
          >
            <i className="fa-regular fa-user"></i>
          </Link>
          <button
            onClick={() => setAboutSidebar(true)}
            className="text-2xl hover:text-[#FF0336] ease-in duration-200"
          >
            <i className="fa-regular fa-chart-bar"></i>
          </button>
          <Link
            className="border-[rgb(255,255,255,0.3)] border-2 py-2 px-2 rounded-md group hidden lg:flex items-center gap-4"
            href="/contact"
          >
            <i className="fa-solid fa-plus bg-[#FF0336] text-white p-2.5 rounded-md group-hover:rotate-[180deg] duration-300 ease-linear"></i>
            <h3 className="text-white text-[0.875rem] mr-4 font-bold uppercase tracking-wider">
              join class now
            </h3>
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Header;
