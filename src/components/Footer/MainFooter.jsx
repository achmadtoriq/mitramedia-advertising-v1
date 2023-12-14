"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

import { MdEmail } from "react-icons/md";
import {
  FaTwitterSquare,
  FaFacebookMessenger,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaPhoneSquare,
} from "react-icons/fa";
import TypeWriter from "../Main/TypeWriter";

const MainFooter = () => {
  const controls = useAnimation();
  const controls_one = useAnimation();
  const elemenRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            rotate: [0, 10, -10, 0], // Rotate by 360 degrees when in view
            transition: { duration: 0.75, ease: "easeInOut" },
          });
          controls_one.start({
            x: [-200, 10, 0], // Rotate by 360 degrees when in view
            transition: { duration: 2, ease: "easeInOut" },
          });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (elemenRef.current) {
      observer.observe(elemenRef.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  return (
    <>
      <main
        ref={elemenRef}
        className="bg-black py-10 px-4 md:px-6 lg:px-28 lg:py-12 text-white"
      >
        <div className="container m-auto">
          <div className="fixed bottom-0 lg:hidden left-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none z-10">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
              href={`/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/assets/images/mitramedia.webp`}
                alt="Vercel Logo"
                className="dark:invert"
                width={200}
                height={24}
                priority
              />
            </a>
          </div>
          <div className="flex mb-32 flex-nowrap lg:flex-row lg:mb-6 items-start justify-between flex-col-reverse">
            <div className="flex-auto flex-col lg:w-[25%] hidden lg:block">
              <div className="m-4 text-center">
                <motion.div animate={controls}>
                  <Image
                    src={`/assets/images/mitramedia2.png`}
                    width={400}
                    height={24}
                    priority={true}
                    alt="Logo Mitramedia Advertising"
                    className="w-full aspect-auto"
                    quality={100}
                  />
                </motion.div>
                <h1 className="italic font-semibold text-md my-8">
                  <blockquote>
                    <TypeWriter text={['" Your Trust Ads Partner "']} delay={200} infinite speedBreak={500} />
                  </blockquote>
                </h1>
              </div>
            </div>
            <div className="flex-auto overflow-hidden lg:w-[25%] hidden lg:block">
              <div className="m-5">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Product & Services
                </h3>
                <motion.div animate={controls_one}>
                  <div className="flex flex-col my-3">
                    <p className="text-xs font-medium">
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Letter Timbul{" "}
                      </span>
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Neon Box{" "}
                      </span>
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Vinyl{" "}
                      </span>
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Baliho{" "}
                      </span>
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Event Booth{" "}
                      </span>
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Led Box{" "}
                      </span>
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Wall Branding{" "}
                      </span>
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Stiker{" "}
                      </span>
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Billboard{" "}
                      </span>
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Sign Board / PNT{" "}
                      </span>
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Branding Mobil{" "}
                      </span>
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Pajak & Perijinan{" "}
                      </span>
                      <span className="py-1 px-2 mr-1 rounded-full bg-red-600 tracking-wide leading-8">
                        Escalator Branding{" "}
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex-auto lg:w-[25%]">
              <div className="m-5">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Find us on
                </h3>
                <div className="flex flex-row text-5xl">
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Link href={"#"}>
                      <FaFacebookMessenger className="m-3" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Link href={"#"}>
                      <FaTwitterSquare className="m-3" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Link href={"#"}>
                      <FaInstagramSquare className="m-3" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex-auto lg:w-[25%]">
              <div className="m-5">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Head Office
                </h3>
                <p className="text-base my-3">
                  Nginden Semolo 38-40, The Mezzanine A15 Kel. Nginden
                  Jangkungan, Kec. Sukolilo, Kota Surabaya Jawa Timur 60118
                </p>
                <div className="flex flex-col">
                  <div className="flex flex-row items-center mb-3">
                    <FaWhatsappSquare className="mr-4 text-3xl" />
                    <p className="">0822-1328-0698 (telp/WA)</p>
                  </div>
                  <div className="flex flex-row items-center mb-3">
                    <FaPhoneSquare className="mr-4 text-3xl" />
                    <p className="">(031) 58253549 (Telp)</p>
                  </div>
                  <div className="flex flex-row items-center mb-3">
                    <div className="mr-4">
                      <MdEmail className="text-3xl" />
                    </div>
                    <div className="flex flex-col">
                      <p className="">adm.mitramedia@gmail.com</p>
                      <p className="">adm.mitramedia@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainFooter;
