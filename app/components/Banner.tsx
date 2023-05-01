import React from "react";

function Banner({ page }: { page: string }) {
  return (
    <section id="banner">
      <div className="h-[45vh] bg-[url('/images/banner/banner.jpg')] bg-[50%] bg-no-repeat bg-cover flex items-end justify-center p-8">
        <h1 className="text-3xl font-bold text-white">{page}</h1>
      </div>
    </section>
  );
}

export default Banner;
