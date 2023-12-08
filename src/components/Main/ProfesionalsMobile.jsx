"use client"
import React from "react";
import CountUp from "./CountUp";

const ProfesionalsMobile = () => {
  return (
    <>
      <section className={`z-10 block lg:hidden bg-black bottom-0 text-white p-5`}>
        <div className="container m-auto">
          <div className="flex flex-col justify-center">
            <div className="lg:pl-11 px-10 py-5">
              <h1 className="lg:text-4xl font-bold text-center">
                JADIKAN IKLAN ANDA MENJADI PUSAT PERHATIAN
              </h1>
            </div>
            <div className="flex flex-col text-center px-10 ">
              <p>Pemasangan yang sudah kami selesaikan</p>
              <div className="flex flex-col items-center justify-between p-5">
                <div className="p-5">
                  <h1 className="text-3xl font-bold text-red-600">
                    <CountUp endValue={300} />+
                  </h1>
                  <p>Lokasi Pemasangan</p>
                </div>
                <div className="p-5">
                  <h1 className="text-3xl font-bold text-red-600">
                    <CountUp endValue={50} />+
                  </h1>
                  <p>Clients</p>
                </div>
                <div className="p-5">
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

export default ProfesionalsMobile;
