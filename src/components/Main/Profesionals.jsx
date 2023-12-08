"use client"
import React from "react";
import CountUp from "./CountUp";

const Profesionals = () => {
  return (
    <>
      <section className={`z-10 hidden lg:block absolute bg-black bottom-0 text-white py-12 px-32`}>
        <div className="container m-auto ">
          <div className="flex flex-row justify-center">
            <div className="lg:pl-11 w-[50%]">
              <h1 className="lg:text-4xl font-bold">
                JADIKAN IKLAN ANDA MENJADI PUSAT PERHATIAN
              </h1>
            </div>
            <div className="flex flex-col w-[50%] text-center">
              <p>Pemasangan yang sudah kami selesaikan</p>
              <div className="flex flex-row items-center justify-between p-4">
                <div>
                  <h1 className="text-3xl font-bold text-red-600">
                    <CountUp endValue={300} />+
                  </h1>
                  <p>Lokasi Pemasangan</p>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-red-600">
                    <CountUp endValue={50} />+
                  </h1>
                  <p>Clients</p>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-red-600">
                    <CountUp endValue={100} />+
                  </h1>
                  <p>Kota yang di jangkau </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profesionals;
