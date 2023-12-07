"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import data from "../../../../public/assets/data/menu.json";

const Menu = ({ scroll, path, isMobile }) => {
  return (
    <>
      <ul
        className={`text-base ${
          isMobile
            ? ""
            : "flex flex-row justify-between items-end cursor-pointer"
        }`}
      >
        {data.map((menu, idx) => (
          <li
            key={idx}
            className={`px-4 py-3 lg:p-2 lg:px-5 text-sm capitalize lg:hover:bg-gray-600 lg:hover:rounded-full lg:hover:text-white ${
              path.replace("/[id]", "") === menu.href
                ? `text-white font-semibold px-4 py-3 lg:p-2 lg:px-5 bg-black lg:rounded-full`
                : `text-white font-semibold ${scroll > 100 || path !== '/' ? 'lg:text-black':'lg:text-white'}`
            }`}
          >
            <Link href={menu.href}>{menu.text}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
