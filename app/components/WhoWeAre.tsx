import Image from "next/image";
import Link from "next/link";
import React from "react";

function WhoWeAre() {
  return (
    <section id="who-we-are">
      <div className="bg-[url('/images/bg/bg.jpg')] bg-[50%] bg-no-repeat bg-cover px-8 pb-16 space-y-8">
        <div className="grid grid-cols-1 gap-8 -translate-y-16">
          <div className="bg-white hover:bg-[url('/images/whoweare/first-grid/hover.jpg')] hover:text-white cursor-pointer p-8 flex flex-col items-center text-center gap-4 rounded-tl-[35px] rounded-br-[35px] shadow-2xl">
            <Image
              src="/images/whoweare/first-grid/img-1.png"
              alt="progression"
              width={60}
              height={60}
            />
            <h1 className="font-bold text-2xl">PROGRESSION</h1>
            <p className="text-[0.95rem]">
              Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time.
            </p>
          </div>
          <div className="bg-white hover:bg-[url('/images/whoweare/first-grid/hover.jpg')] hover:text-white cursor-pointer p-8 flex flex-col items-center text-center gap-4 rounded-tl-[35px] rounded-br-[35px] shadow-2xl">
            <Image
              src="/images/whoweare/first-grid/img-2.png"
              alt="workout"
              width={60}
              height={60}
            />
            <h1 className="font-bold text-2xl">WORKOUT</h1>
            <p className="text-[0.95rem]">
              With a variety of workouts to choose from, you'll have everything
              you need to get into the best shape of your life.
            </p>
          </div>
          <div className="bg-white hover:bg-[url('/images/whoweare/first-grid/hover.jpg')] hover:text-white cursor-pointer p-8 flex flex-col items-center text-center gap-4 rounded-tl-[35px] rounded-br-[35px] shadow-2xl">
            <Image
              src="/images/whoweare/first-grid/img-3.png"
              alt="nutritions"
              width={60}
              height={60}
            />
            <h1 className="font-bold text-2xl">NUTRITIONS</h1>
            <p className="text-[0.95rem]">
              Our team will work with you to create a personalized meal plan
              that helps you reach your specific health goals.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col gap-6 items-center text-center">
          <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={200}
            height={200}
            className="absolute left-[3.75rem] -top-1.5"
          />
          <p className="text-white relative z-10 font-bold text-center">
            WHO WE ARE
          </p>
          <h1 className="font-bold text-4xl">
            Take Your Health And Body To Next Level
          </h1>
          <p>
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="grid grid-cols-1 gap-8 my-8">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/whoweare/second-grid/img-1.png"
                alt="PROFESSIONAL TRAINERS"
                width={60}
                height={60}
              />
              <h1 className="font-bold text-xl">
                PROFESSIONAL
                <br />
                TRAINERS
              </h1>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/whoweare/second-grid/img-2.png"
                alt="MODERN EQUIPMENTS"
                width={60}
                height={60}
              />
              <h1 className="font-bold text-xl">
                MODERN
                <br />
                EQUIPMENTS
              </h1>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/whoweare/second-grid/img-3.png"
                alt="FANCY GYM MACHINES"
                width={60}
                height={60}
              />
              <h1 className="font-bold text-xl">
                FANCY GYM
                <br />
                MACHINES
              </h1>
            </div>
          </div>
          <div>
            <Link
              href="/"
              className="relative text-white flex items-center gap-2 bg-[#3f3f3f] hover:bg-[#ff0336] font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[12.5rem] after:duration-300 after:ease-linear after:border after:border-[rgba(63,63,63,.362)] hover:after:border-[#ff0336] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0"
            >
              <span>TAKE A TOUR</span>
              <span>
                <i className="fa-solid fa-arrow-right undefined"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
