"use client";
import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import imageData from "../../../public/assets/data/imageSlider.json";
import Hero from "./Hero";

const ImageBanner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
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
      <div ref={sliderRef} className="keen-slider lg:h-[50%]">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
        {imageData.map((value, idx) => (
          <div key={idx} className="keen-slider__slide number-slide1 lg:h-[50%]">
            <Image
              key={idx}
              src={"/assets/images/hero/" + value.path}
              width={400}
              height={24}
              priority={true}
              alt="Logo Mitramedia Advertising"
              className="aspect-auto w-full lg:h-[50%]"
              quality={100}
            />
          </div>
        ))}
        <Hero />
      </div>
    </>
  );
};

export default ImageBanner;
