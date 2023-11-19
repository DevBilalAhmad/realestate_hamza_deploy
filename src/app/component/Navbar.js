"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
// import { SignIn, UserButton } from "@clerk/nextjs";
// import {AiFillAlipayCircle,AiFillAlipaySquare} from "react-icons/ai"

const Navbar = () => {
    const [login,setLoin] = useState(false);

 function log(){
    return    <div>
    <div className="bg-[#30341c] py-[6px] text-white rounded-full px-4 ml-6 flex items-center">
      <button> <Link href="/sign-in">Log in</Link></button>
      </div>
    <div className="bg-[#30341c] py-[6px] text-white rounded-full px-4 ml-6 flex items-center">
      <button>Sign up</button>
     
    </div></div>
 }

 function user(){
    return  <div className="ml-6"> 
    {/* <UserButton afterSignOutUrl="/"/> */}
    
    </div> 
 }

  return (
    <div className="bg-white ">
      <div className="flex my justify-between px-4 items-center max-w-[98vw] sm:max-w-[90vw] lg:max-w-[85vw] mx-auto whitespace-nowrap">
        {/* Left Menu */}
        <div className="lg:hidden flex items-center">
          <FiMenu className="w-7 h-7" />
        </div>
        {/* Mid Logo */}
        <div className="shrink-0 pr-2">
          {/* Logo */}
          <div className="-my-[0.7rem]">
            <img src=".\logo.png" className="w-32 shrink-0" alt="Logo" />
          </div>
        </div>
        {/* Links */}
        <div className="hidden lg:flex text-[#30341c] font-bold">
          <ul className="flex space-x-16  items-center py-4">
            <il><Link href="/">Home</Link></il>
            <il><Link href="/howsitswork">How it Work</Link></il>
            <il><Link href='/About'>About Us</Link></il>
            <il><Link href="/Partners">Partners</Link></il>
            <il><Link href="/Team">Team</Link></il>
            <il><Link href="/Company">Detail</Link></il>
            <il><Link href="/Guest_experience"> Guest Experience</Link></il>
            <il><Link href="/Contact"> Conatct</Link></il>
            <il><Link href="/Room_types"> Room_types</Link></il>
            
            <li className=''>
          <Link href="/Signup">Sign up</Link>
        </li>
        <span>|</span>
        <li className=''>
          <Link href="/Login">Login</Link>
        </li>
      
          </ul>
        </div>
        {/* Right Authentication */}
        <div className="flex h-full items-center lg:hidden">
          <div className="w-10 h-10 bg-[#30341c] rounded-full text-white flex items-center justify-center">
            <HiOutlineUser className="text-[28px]" />
          </div>
        </div>

        
        <div className="hidden  text-white lg:flex items-center  pr-36 text-[15px]">

        {login === false ? <user/>: <log/>}
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
