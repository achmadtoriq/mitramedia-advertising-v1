"use client"
import React from "react";
import dynamic from "next/dynamic";

const OpenStreetMapAll = dynamic(
  () => import("@/components/Main/OpenStreetMapAll"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <>
      <section
        id="billboard-location"
        className="lg:py-2 container m-auto"
      >
        <div className="flex flex-col h-screen items-center justify-center my-14 lg:p-2 z-0 text-black">
          <div className="py-6 text-2xl font-bold uppercase">
            <h1>Our BillBoard Locations</h1>
          </div>
          <div>
            <OpenStreetMapAll />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
