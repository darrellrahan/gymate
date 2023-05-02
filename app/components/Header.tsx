"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useTogglerContext } from "../context/toggler";

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
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMobileNavbar(true)}
            className="text-2xl hover:text-[#FF0336] ease-in duration-200"
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
        </div>
      </header>
    </section>
  );
}

export default Header;
