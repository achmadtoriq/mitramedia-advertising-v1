import React from "react";
import data from "../../../public/assets/data/apa.json";
import Image from 'next/image'

const Apa = () => {
  return (
    <>
      <section className="container m-auto py-7 px--14 lg:px-28 lg:py-14">
        <h1 className="text-center text-2xl lg:text-4xl uppercase font-semibold lg:py-6">
          <span className="font-extrabold text-red-600">Apa</span> yang Kami
          Kerjakan ?
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 py-6">
          {data.map((val, idx) => (
            <div key={ idx } className="relative overflow-hidden h-80">
              <div className={`absolute w-full`}>
                <Image
                src={`/assets/images/services/${val.path}`}
                width={500}
                height={500}
                alt={val.altName}
                className="w-full"
                 />
              </div>
              <div className="absolute bottom-0 bg-black/70 w-full p-5">
                <h1 className="text-2xl font-bold text-white capitalize">
                  { val.title }
                </h1>
                <p className="text-white">
                  { val.desc }
                </p>
              </div>
            </div>
          ))}
{/* 
          <div className="relative overflow-hidden h-80">
            <div className="h-full bg-cover bg-[url('/assets/images/services/servis-brosur.webp')] bg-center bg-no-repeat"></div>
            <div className="absolute bottom-0 bg-black/70 w-full p-5">
              <h1 className="text-2xl font-bold text-white capitalize">
                leter/huruf timbul
              </h1>
              <p className="text-white">
                Jasa Pembuatan Brosur cetak sebagai media promosi usaha anda
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden h-80">
            <div className="h-full bg-cover bg-[url('/assets/images/services/servis-brosur.webp')] bg-center bg-no-repeat"></div>
            <div className="absolute bottom-0 bg-black/70 w-full p-5">
              <h1 className="text-2xl font-bold text-white capitalize">
                neon box & led box
              </h1>
              <p className="text-white">
                Jasa Pembuatan Brosur cetak sebagai media promosi usaha anda
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden h-80">
            <div className="h-full bg-cover bg-[url('/assets/images/services/servis-brosur.webp')] bg-center bg-no-repeat"></div>
            <div className="absolute bottom-0 bg-black/70 w-full p-5">
              <h1 className="text-2xl font-bold text-white capitalize">
                Billboard & Reklame
              </h1>
              <p className="text-white">
                Jasa Pembuatan Brosur cetak sebagai media promosi usaha anda
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden h-80">
            <div className="h-full bg-cover bg-[url('/assets/images/services/servis-brosur.webp')] bg-center bg-no-repeat"></div>
            <div className="absolute bottom-0 bg-black/70 w-full p-5">
              <h1 className="text-2xl font-bold text-white capitalize">
                Mobil Branding
              </h1>
              <p className="text-white">
                Jasa Pembuatan Brosur cetak sebagai media promosi usaha anda
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden h-80">
            <div className="h-full bg-cover bg-[url('/assets/images/services/servis-brosur.webp')] bg-center bg-no-repeat"></div>
            <div className="absolute bottom-0 bg-black/70 w-full p-5">
              <h1 className="text-2xl font-bold text-white capitalize">
                Banner
              </h1>
              <p className="text-white">
                Jasa Pembuatan Brosur cetak sebagai media promosi usaha anda
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Apa;
