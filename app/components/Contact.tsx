import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="py-16 lg:py-24 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-16 lg:gap-0 max-w-screen-xl m-auto">
          <div className="space-y-8 mx-8">
            <h2 className="text-black text-[2rem] font-bold leading-[1.2]">
              We are here for help you! To Shape Your Body.
            </h2>
            <p>
              At Gymate, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col relative space-y-6">
                <h3 className="text-xl font-bold">New York City, USA</h3>
                <span className="bg-[#ff0336] w-[3.25rem] h-1 absolute top-2"></span>
                <p>
                  85 Briston Mint Street,
                  <br /> London, E1 8LG, USA
                </p>
              </div>
              <div className="flex flex-col relative space-y-6">
                <h3 className="text-xl font-bold">Opening Hours</h3>
                <span className="bg-[#ff0336] w-[3.25rem] h-1 absolute top-2"></span>
                <p>
                  Mon to Fri: 7:30 am — 1:00 am
                  <br /> Sat to Sun: 8:30 am — 11:00 pm
                </p>
              </div>
              <div className="flex flex-col relative space-y-6">
                <h3 className="text-xl font-bold">Information</h3>
                <span className="bg-[#ff0336] w-[3.25rem] h-1 absolute top-2"></span>
                <p>
                  +800-123-4567
                  <br /> gymat@gymail.com
                </p>
              </div>
              <div className="flex flex-col relative space-y-8">
                <h3 className="text-xl font-bold">Follow Us On</h3>
                <span className="bg-[#ff0336] w-[3.25rem] h-1 absolute"></span>
                <div className="flex items-center gap-4 lg:gap-3">
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
          <div className="flex flex-col gap-12 mx-8 p-8 bg-[#f8f8f8] relative">
            <h3 className="text-2xl font-bold">Leave Us Your Info</h3>
            <span className="bg-[#ff0336] w-16 h-1 absolute top-[4.5rem]"></span>
            <div className="flex flex-col gap-6">
              <input
                className="w-full py-3 px-5 h-[3.125rem] text-[0.875rem] border border-[#e4e4e4]"
                placeholder="Full Name *"
                type="text"
              />
              <input
                className="w-full py-3 px-5 h-[3.125rem] text-[0.875rem] border border-[#e4e4e4]"
                placeholder="Email Address *"
                type="email"
              />
              <select className="w-full py-3 px-5 h-[3.125rem] text-[#a1a1a1] text-[0.875rem] border border-[#e4e4e4]">
                <option>Select Class</option>
                <option>Body Building</option>
                <option>Boxing</option>
                <option>Running</option>
                <option>Fitness</option>
                <option>Yoga</option>
                <option>Workout</option>
                <option>Katate</option>
                <option>Meditation</option>
                <option>Cycling</option>
              </select>
              <textarea
                placeholder="Comment"
                className="w-full py-3 px-5 h-[8rem] text-[0.875rem] border border-[#e4e4e4]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-[#ff0336] w-fit py-4 px-8 font-bold text-[0.875rem] uppercase self-center"
            >
              submit now
            </button>
          </div>
        </div>
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
            allowFullScreen={false}
            loading="lazy"
            title="map"
            className="w-full h-[30rem] border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
