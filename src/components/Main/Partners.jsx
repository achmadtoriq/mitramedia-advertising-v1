"use client";
import React from "react";
import Image from "next/image";
import data from "../../../public/assets/data/clients.json";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import "./styles.css";

const Partners = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 4, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 5, spacing: 10 },
        },
      },
      slides: { perView: 3 },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <section className="bg-[#d1d1d1] text-[#3d3d3d]">
        <div className="container m-auto px-5 py-5 lg:px-28 lg:py-14">
          <h1 className="text-center lg:text-4xl uppercase font-bold">
            our <span className="text-red-600">partners</span>
          </h1>

          <div className="">
            <div ref={sliderRef} className="keen-slider items-center">
              {data.map((val, idx) => (
                <div
                  key={val.id_tipe}
                  className="keen-slider__slide number-slide1"
                >
                  <Image
                    src={`/assets/images/clients/${val.path}`}
                    width={100}
                    height={100}
                    alt={val.altName}
                    className="m-auto aspect-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
