import React from "react";
import home from "../assets/home.png";
import Wrapper from "../utils/Wrapper";
const StaticBG = () => {
  return (
    <div className="dark:bg-slate-900">
      <Wrapper>
        <div
          className="h-[400px] md:h-[500px]  relative my-15 rounded-2xl flex items-center justify-center bg-fixed"
          style={{ backgroundImage: `url(${home})` }}
        >
          <div className="w-full h-full absolute bg-black/35 flex flex-col items-center justify-center gap-4 rounded-2xl">
            <h1 className="text-3xl text-center md:text-left md:text-6xl text-white font-bold">Fashion That Speaks for You</h1>
            <p className="text-white text-center md:text-left">
              Explore timeless styles, premium fabrics, and the perfect outfit
              for every moment.
            </p>
            <button className="mt-8 bg-linear-to-r from-blue-600 to-blue-800 text-white text-[15px] px-4 py-3 rounded-lg hover:bg-linear-to-l transition-all cursor-pointer">Shop Now</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default StaticBG;
