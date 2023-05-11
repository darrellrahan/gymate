"use client";

import React, { useState } from "react";
import { gallery } from "../data/data";
import Image from "next/image";

function Gallery() {
  const [page, setPage] = useState(gallery.page1);

  return (
    <section id="gallery">
      <div className="px-8 py-16 lg:py-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl m-auto lg:px-16 gap-4">
          {page.map((data) => (
            <Image
              key={data}
              src={data}
              alt="gallery"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setPage(gallery.page1)}
            className={`${
              page === gallery.page1 ? "text-white bg-[#ff0336]" : ""
            } flex items-center justify-center text-center text-lg border border-[#dee2e6] w-12 h-12 font-bold rounded-md`}
          >
            {page === gallery.page1 ? (
              "1"
            ) : (
              <i className="fa-solid fa-angles-left"></i>
            )}
          </button>
          <button
            onClick={() =>
              setPage(page === gallery.page1 ? gallery.page2 : gallery.page1)
            }
            className="flex items-center justify-center text-center text-lg border border-[#dee2e6] w-12 h-12 font-bold rounded-md"
          >
            {page === gallery.page1 ? "2" : "1"}
          </button>
          <button
            onClick={() => setPage(gallery.page2)}
            className={`${
              page === gallery.page2 ? "text-white bg-[#ff0336]" : ""
            } flex items-center justify-center text-center text-lg border border-[#dee2e6] w-12 h-12 font-bold rounded-md`}
          >
            {page === gallery.page1 ? (
              <i className="fa-solid fa-angles-right"></i>
            ) : (
              "2"
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
