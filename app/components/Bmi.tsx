"use client";

import React, { useState } from "react";

function Bmi() {
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [result, setResult] = useState<{
    bmi: number | null;
    status: string;
  }>({
    bmi: null,
    status: "",
  });

  function getResult() {
    const result = weight! / ((height! / 100) * (height! / 100));

    let status;

    switch (true) {
      case result <= 18.4:
        status = "Underweight";
        break;
      case result >= 18.5 && result <= 24.9:
        status = "Normal";
        break;
      case result >= 25 && result <= 39.9:
        status = "Overweight";
        break;
      case result >= 40:
        status = "Obese";
        break;
      default:
        status = "Invalid Input!";
        break;
    }

    return { bmi: result, status: status };
  }

  return (
    <section id="bmi">
      <div className="bg-[url('/images/bmi/bg.jpg')] bg-no-repeat bg-cover bg-[100%] px-8 py-12 lg:py-20 relative lg:grid grid-cols-2">
        <div className="absolute inset-0 bg-black/70 lg:bg-transparent"></div>
        <div className="space-y-6 text-white z-20 relative max-w-screen-xl m-auto">
          <h1 className="font-bold text-4xl">
            Let's Calculate Your <span className="text-[#ff0336]">BMI</span>
          </h1>
          <p>
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Weight / kg"
              className="px-4 py-3 text-black text-sm"
              onChange={(e) => setWeight(parseInt(e.target.value))}
            />
            <input
              type="text"
              placeholder="Height / cm"
              className="px-4 py-3 text-black text-sm"
              onChange={(e) => setHeight(parseInt(e.target.value))}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h1>Your BMI is:</h1>
              <p className="text-[#ff0336]">{result.bmi?.toFixed(1)}</p>
            </div>
            <div>
              <h1>Your weight is:</h1>
              <p className="text-[#ff0336]">{result.status}</p>
            </div>
          </div>
          <div>
            <button
              onClick={() => setResult(getResult())}
              className="bg-[#323232] px-6 py-3 font-bold hover:bg-[#ff0336] duration-300 ease-linear"
            >
              CALCULATE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bmi;
