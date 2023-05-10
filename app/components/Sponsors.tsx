import Image from "next/image";
import React from "react";

function Sponsors() {
  return (
    <section id="sponsors">
      <div className="p-16 flex flex-col lg:flex-row lg:py-32 justify-center items-center gap-8">
        <Image
          src="/images/sponsors/img-1.png"
          alt="sponsor 1"
          width={150}
          height={150}
          className="hover:invert duration-300 ease-linear"
        />
        <Image
          src="/images/sponsors/img-2.png"
          alt="sponsor 2"
          width={150}
          height={150}
          className="hover:invert duration-300 ease-linear"
        />
        <Image
          src="/images/sponsors/img-3.png"
          alt="sponsor 3"
          width={150}
          height={150}
          className="hover:invert duration-300 ease-linear"
        />
        <Image
          src="/images/sponsors/img-4.png"
          alt="sponsor 4"
          width={150}
          height={150}
          className="hover:invert duration-300 ease-linear"
        />
        <Image
          src="/images/sponsors/img-5.png"
          alt="sponsor 5"
          width={150}
          height={150}
          className="hover:invert duration-300 ease-linear"
        />
      </div>
    </section>
  );
}

export default Sponsors;
