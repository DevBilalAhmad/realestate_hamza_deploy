
import React from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import Link from "next/link";

const Header = () => {
      return (
        <div className="bg-white">
          {" "}
          <div className="flex  justify-between  lg:px-4 items-center max-w-[98vw] sm:max-w-[90vw]  lg:max-w-[85vw]  mx-auto whitespace-nowrap">
            {/* Left Menu */}
            <div className=" lg:hidden flex items-center ">
              <FiMenu className="w-7 h-7" />
            </div>
            {/* Mid Logo */}
            <div className="shrink-0 pr-2">
              {/* Logo */}
              <div className=" -my-[0.7rem] ">
                <img src='/logo.png' className="w-32  shrink-0" />
              </div>
            </div>
            {/* Links */}
            <div className="hidden lg:flex text-[#30341c] font-bold ">
            <ul className="flex space-x-1 items-center gap-5  py-4 ">
            <il><Link href="/">Home</Link></il>
            <il><Link href="/Properties">Our Room</Link></il>
            <il><Link href="/howsitswork">How it Work</Link></il>
            <il><Link href='/About'>About Us</Link></il>
            <il><Link href="/Guest_experience"> Guest Experience</Link></il>
            <il><Link href="/Room_types"> Room Categories</Link></il>
            <il><Link href="/Contact"> Conatct</Link></il>
            <il><Link href="/Create_ad">Advertise</Link></il>
            <il><Link href="/Listing_view">Ad</Link></il>
              </ul>
            </div>
            {/* Right Authentification */}
            <div className="flex h-full items-center  lg:hidden">
              <div className="w-10 h-10 bg-[#e20112] rounded-full text-white flex items-center justify-center ">
                <HiOutlineUser className="text-[28px] " />
              </div>
            </div>
    
            <div className="hidden lg:flex   items-center pl-6 text-[15px]">
             <Link href='/Login'> <button>Log in</button></Link>
              <div className="   bg-[#e20112] py-[6px] text-white rounded-full px-4 ml-6 flex items-center ">
               <Link href='/Signup'><button>Sign up</button></Link>
              </div>
            </div>
          </div>
        </div>
    


    
  );
}

export default Header