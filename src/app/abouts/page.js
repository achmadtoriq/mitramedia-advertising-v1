import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section className="lg:container m-auto text-base">
      <div className="flex flex-row p-5 lg:py-32 lg:px-16">
        <div className="mt-16 lg:mt-0 lg:w-[50%] lg:px-3">
          <p className="font-normal text-justify">
            Mitra Media Advertising adalah perusahaan yang bergerak pada bidang
            jasa periklanan baik indoor maupun outdoor. Mengerjakan Biro
            Reklame; pembuatan Neonbox, Billboard, papan nama, baliho, huruf
            timbul, akrilik, LED, pajak ijin reklame di seluruh kota besar
            Indonesia. Berdiri sejak tahun 2013 kami telah melayani banyak
            pelaku usaha dalam membangun brand bisnis mereka. Didukung dengan
            tenaga yang berpengalaman dan berdedikasi tinggi, kami siap
            memberikan layanan profesional kepada Anda untuk menjangkau pasar
            potensial secara efektif & efisien.
          </p>
          <div className="flex flex-col lg:flex-row text-center my-5">
            <div className="shadow-lg rounded-md bg-white p-2 m-5 lg:w-[50%]">
              <h1 className="text-lg font-bold uppercase mb-3">Core Values</h1>
              <p>
                Bekerja dengan kreativitas tanpa batas, inovasi tiada henti dan
                etos kerja yang tinggi dan menjunjung tinggi nilai-nilai
                profesionalisme bisnis.
              </p>
            </div>
            <div className="shadow-lg rounded-md bg-white p-2 m-5 lg:w-[50%]">
              <h1 className="text-lg font-bold uppercase mb-3">Mission</h1>
              <p>
                Memperkenalkan merk dan deskripsi produk kepada pelanggan dan
                menarik minat pembeli potensial pada produk.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-[50%] px-3">
          <Image
            src={"/assets/images/aboutus/about-us.jpg"}
            width={400}
            height={24}
            priority={true}
            alt="Logo Mitramedia Advertising"
            className="aspect-auto rounded-lg m-auto w-full"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
