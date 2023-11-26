"use client";
import { navItems } from "@/app/constants/constants";
import Link from "next/link";
import React, { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Header from "./Header";

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="md:hidden bg-gray-300 p-5 flex items-center justify-between">
      
      <FaGripLines onClick={() => setNavOpen(true)} />
      <>
        <div
          className={`${
            !navOpen && "hidden"
          } bg-black/70 absolute w-screen h-screen left-0 top-0`}
        ></div>
        <div
          className={` bg-white w-[75%] h-full absolute top-0  ${
            navOpen
              ? "left-0 duration-500   ease-in"
              : "left-[-100%] duration-500   ease-in"
          }  flex flex-col`}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-400">
            <h3>Logo</h3>
            <RxCross2 onClick={() => setNavOpen(false)} />
          </div>
          <div className="flex flex-col items-center justify-center flex-1 bg-red-500 gap-10">
            {navItems.map((item, index) => (
              <Link href={item.url} key={index}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default MobileNav;
