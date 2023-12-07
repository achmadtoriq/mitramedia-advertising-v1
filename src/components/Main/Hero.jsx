import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <>
      <div className="absolute top-[20%] inset-x-[5%] lg:inset-x-[10%] z-[3] text-left text-white font-bold text-md lg:text-5xl">
        <h1 className="uppercase my-0 lg:my-3">Advertising</h1>
        <h1 className="uppercase my-0 lg:my-3">outdoor & indoor</h1>
        <h1 className="uppercase my-0 lg:my-3">solution</h1>

        <p className="text-sm lg:text-2xl capitalize font-semibold my-1 lg:my-6">
          Menyediakan jasa pembuatan & pemasangan seperti{" "}
          <Typed
            className="bg-white text-black uppercase p-1 lg:p-2 font-bold lg:font-extrabold"
            strings={[
              "Pembuatan Brosur",
              "Letter Timbul",
              "Mobil Branding",
              "Billboard",
              "Reklame",
              "Neon Box",
              "LED Box",
              "Banner",
            ]}
            typeSpeed={140}
            backSpeed={140}
            loop
          />
        </p>
        <button className="text-sm mt-3 font-medium rounded-full capitalize lg:text-xl bg-red-600 py-2 px-4">
          hubungi kami
        </button>
      </div>
    </>
  );
};

export default Hero;
