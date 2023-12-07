"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import Menu from "./Menus/Menu";
import useScroll from "@/hooks/useScroll";
import { usePathname } from "next/navigation";

const MainBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const scrollY = useScroll();

  const imgLogo =
    scrollY > 100 || pathname !== "/" ? "mitramedia.webp" : "mitramedia2.png";

  return (
    <>
      <header
        className={`fixed left-0 top-0 w-full z-10 py-2 ${
          scrollY > 100 ? "lg:bg-white" : "bg-opacity-75"
        }`}
      >
        <div className="flex flex-auto justify-between items-center m-auto w-full lg:px-36">
          <div className="lg:w-[50%]">
            <Image
              src={`/assets/images/${imgLogo}`}
              width={200}
              height={24}
              priority={true}
              alt="Logo Mitramedia Advertising"
              className="p-2 aspect-auto hidden lg:block"
              quality={100}
            />

            {/* <Image
              src={`/assets/images/mitramedia-icon.png`}
              width={50}
              height={24}
              priority={true}
              alt="Logo Mitramedia Advertising"
              className="p-2 aspect-auto lg:hidden "
              quality={100}
            /> */}
          </div>
          <div className="lg:flex items-center space-x-3 lg:w-full hidden">
            <div className="w-[100%]">
              <Menu scroll={scrollY} path={pathname} isMobile={false} />
            </div>
          </div>
          <button
            className="p-2 mr-5 mt-3 bg-white rounded-full cursor-pointer text-2xl lg:hidden z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? <IoMenu /> : <IoClose />}
          </button>
        </div>
        <div
          className={
            isOpen
              ? "pt-16 top-0 bg-opacity-75 bg-black py-1 min-h-screen left-0 absolute ease-in duration-300 w-screen lg:hidden"
              : "pt-16 top-0 bg-opacity-75 bg-black py-1 min-h-screen left-[-100%] absolute ease-in duration-300 w-screen lg:hidden"
          }
        >
          <nav className="text-xl text-gray-200 z-50">
            <ul>
              <Menu scroll={scrollY} path={pathname} isMobile={true} />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MainBar;
