import Link from "next/link";
import React from "react";

function Form({ register }: { register?: boolean }) {
  return (
    <section id="form">
      <div className="max-w-xl my-16 mx-8 lg:mx-auto p-8 lg:px-12 lg:py-16 bg-black text-white space-y-10">
        <div className="space-y-6">
          {register && (
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="font-semibold text-xl">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="your name"
                className="py-2 px-4 text-black"
              />
            </div>
          )}
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="font-semibold text-xl">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="gymate@gmail.com"
              className="py-2 px-4 text-black"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password" className="font-semibold text-xl">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="py-2 px-4 text-black"
            />
          </div>
        </div>
        <div>
          <button className="bg-[#ff0336] p-2 text-center text-xl w-full">
            {register ? "Register" : "Login"}
          </button>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <p>{register ? "Already have an account?" : "New to Gymate?"}</p>
          <Link
            href={register ? "/login" : "/register"}
            className="text-[#ff0336] font-bold"
          >
            {register ? "Login" : "Register"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Form;
