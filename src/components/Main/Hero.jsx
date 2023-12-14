import React from "react";
import data from "../../../public/assets/data/hero.json";
import TypeWriter from "./TypeWriter";

const Hero = () => {
  return (
    <>
      <div className="absolute top-[20%] inset-x-[5%] lg:inset-x-[10%] z-[3] text-left text-white font-bold text-md lg:text-5xl">
        <h1 className="uppercase my-0 lg:my-3">Advertising</h1>
        <h1 className="uppercase my-0 lg:my-3">outdoor & indoor</h1>
        <h1 className="uppercase my-0 lg:my-3">solution</h1>

        <p className="text-sm lg:text-2xl capitalize font-semibold my-1 lg:my-6">
          Menyediakan jasa pembuatan & pemasangan seperti {" "}
          <span className="bg-white text-black uppercase">
            <TypeWriter text={data} delay={200} infinite speedBreak={500} />
          </span>
        </p>
        <button className="text-sm mt-3 font-medium rounded-full capitalize lg:text-xl bg-red-600 py-2 px-4">
          hubungi kami
        </button>
      </div>
    </>
  );
};

export default Hero;
