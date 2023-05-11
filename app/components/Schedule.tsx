"use client";

import React, { useState } from "react";
import { schedule } from "../data/data";

function Schedule() {
  const [currentSchedule, setCurrentSchedule] = useState(schedule.monday);

  return (
    <section id="schedule">
      <div className="px-8 py-16 space-y-12">
        <div className="flex items-center justify-center flex-wrap gap-2 font-bold">
          <button
            onClick={() => setCurrentSchedule(schedule.monday)}
            className={`border border-[#d7d7d7] py-2 px-8 rounded-3xl ease-in duration-200 hover:bg-[#ff0336] hover:shadow-2xl hover:text-white ${
              currentSchedule === schedule.monday
                ? "bg-[#ff0336] shadow-2xl text-white"
                : ""
            }`}
          >
            Monday
          </button>
          <button
            onClick={() => setCurrentSchedule(schedule.tuesday)}
            className={`border border-[#d7d7d7] py-2 px-8 rounded-3xl ease-in duration-200 hover:bg-[#ff0336] hover:shadow-2xl hover:text-white ${
              currentSchedule === schedule.tuesday
                ? "bg-[#ff0336] shadow-2xl text-white"
                : ""
            }`}
          >
            Tuesday
          </button>
          <button
            onClick={() => setCurrentSchedule(schedule.wednesday)}
            className={`border border-[#d7d7d7] py-2 px-8 rounded-3xl ease-in duration-200 hover:bg-[#ff0336] hover:shadow-2xl hover:text-white ${
              currentSchedule === schedule.wednesday
                ? "bg-[#ff0336] shadow-2xl text-white"
                : ""
            }`}
          >
            Wednesday
          </button>
          <button
            onClick={() => setCurrentSchedule(schedule.thursday)}
            className={`border border-[#d7d7d7] py-2 px-8 rounded-3xl ease-in duration-200 hover:bg-[#ff0336] hover:shadow-2xl hover:text-white ${
              currentSchedule === schedule.thursday
                ? "bg-[#ff0336] shadow-2xl text-white"
                : ""
            }`}
          >
            Thursday
          </button>
          <button
            onClick={() => setCurrentSchedule(schedule.friday)}
            className={`border border-[#d7d7d7] py-2 px-8 rounded-3xl ease-in duration-200 hover:bg-[#ff0336] hover:shadow-2xl hover:text-white ${
              currentSchedule === schedule.friday
                ? "bg-[#ff0336] shadow-2xl text-white"
                : ""
            }`}
          >
            Friday
          </button>
          <button
            onClick={() => setCurrentSchedule(schedule.saturday)}
            className={`border border-[#d7d7d7] py-2 px-8 rounded-3xl ease-in duration-200 hover:bg-[#ff0336] hover:shadow-2xl hover:text-white ${
              currentSchedule === schedule.saturday
                ? "bg-[#ff0336] shadow-2xl text-white"
                : ""
            }`}
          >
            Saturday
          </button>
          <button
            onClick={() => setCurrentSchedule(schedule.sunday)}
            className={`border border-[#d7d7d7] py-2 px-8 rounded-3xl ease-in duration-200 hover:bg-[#ff0336] hover:shadow-2xl hover:text-white ${
              currentSchedule === schedule.sunday
                ? "bg-[#ff0336] shadow-2xl text-white"
                : ""
            }`}
          >
            Sunday
          </button>
        </div>
        <div className="space-y-4 lg:space-y-2 max-w-screen-xl m-auto lg:px-16">
          {currentSchedule.map((data) => (
            <div
              key={data.class}
              className="bg-[#f2f2f2] p-6 lg:px-12 grid grid-cols-1 lg:grid-cols-4 gap-10 items-center text-center"
            >
              <div className="flex flex-col gap-2 lg:text-left">
                <p>Class</p>
                <h3 className="font-bold text-lg">{data.class}</h3>
              </div>
              <div className="flex flex-col gap-2">
                <p>Time</p>
                <h3 className="font-bold text-lg">{data.time}</h3>
              </div>
              <div className="flex flex-col gap-2">
                <p>Trainer</p>
                <h3 className="font-bold text-lg">{data.trainer}</h3>
              </div>
              <button className="text-white font-medium bg-[#555] py-2.5 px-5 rounded-[1.875rem] hover:bg-[#ff0336] ease-in duration-200 w-fit justify-self-center lg:justify-self-end">
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
