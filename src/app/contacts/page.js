import React from "react";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const OpenStreetMap = dynamic(
  () => import("@/components/Main/OpenStreetMap"),
  {
    ssr: false,
  }
);

const page = () => {
  const params = { lat:-7.3000424, lng:112.765686 } 
  return (
    <>
      <section id="contacts" className="lg:container min-h-screen m-auto">
        <div className="lg:p-24 flex flex-col p-5">
          <div className="flex flex-col-reverse lg:flex-row ">
            <div className="lg:mt-0 lg:p-4 lg:w-[50%]">
              <p className="lg:text-justify">
                Untuk pertanyaan atau permintaan dapat dilakukan dengan
                menghubungi kami melalui telepon, email, atau kunjungi office
                dan workshop kami dibawah ini.
              </p>
              <div className="flex flex-col justify-between my-2 lg:my-2">
                <div className="flex flex-row item-center">
                  <FaMapMarkerAlt className="mx-3 lg:mx-4 my-2 text-5xl lg:text-4xl" />
                  <p className="my-2 ml-2 lg:ml-0">
                    Nginden Semolo 38-40, The Mezzanine A15 Kel. Nginden
                    Jangkungan, Kec. Sukolilo, Kota Surabaya - Jawa Timur 60118
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <FaWhatsapp className="mx-3 my-2 text-2xl lg:text-2xl" />
                  <p className="my-2">0822-1328-0698 (telp/WA)</p>
                </div>
                <div className="flex flex-row items-center">
                  <MdEmail className="mx-3 my-2 text-2xl lg:text-2xl" />
                  <p className="my-2">adm.mitramedia@gmail.com</p>
                </div>
                <div className="flex flex-row items-center">
                  <MdEmail className="mx-3 my-2 text-2xl lg:text-2xl" />
                  <p className="my-2">adm3.mitramedia@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="p-5 mt-16 lg:mt-0 lg:p-4 lg:w-[50%] text-center">
              <p className="text-center">
                Dapatkan Penawaran Terbaik Melalui Nomor dibawah Ini
              </p>
              <h1 className="text-red-600 text-3xl font-extrabold lg:text-5xl py-4 lg:py-8">
                0822-1328-0698
              </h1>
              <button className="font-medium bg-red-600 rounded-lg capitalize px-4 py-2 text-sm lg:text-1xl text-white">
                hubungi kami
              </button>
            </div>
          </div>

          <div className="">
            <OpenStreetMap {...params} />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
