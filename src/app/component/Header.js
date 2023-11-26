"use client"
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import Link from "next/link";
import Loginb from "./Loginb";
import { onAuthStateChanged } from "../../../firebase";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "./Menu";
import LoginMenu from "./LoginMenu";
import MobileNav from "./MobileNav";
const Header = () => {

  const [showAccountMenu, setShowAccountMenu] = useState(false);
  
  const toggleAccountMenu = () =>{
setShowAccountMenu((prevShowAccountMenu) => !prevShowAccountMenu);
  }
  

  
const [user, setUser] = useState(null);
const [showLoginPrompt, setShowLoginPrompt] = useState(false);

useEffect(() => {
  const unsubscribe = onAuthStateChanged((authUser) => {
    setUser(authUser);

    // If the user is not authenticated and the login prompt is not shown,
    // set a timeout to show the login prompt after 3 to 5 seconds.
    if (!authUser && !showLoginPrompt) {
      const timeoutId = setTimeout(() => {
        setShowLoginPrompt(true);
        console.log("jjhkhkhjk")
      }, 1000);
      

      // Cleanup the timeout on component unmount
      return () => clearTimeout(timeoutId);
    }
  });

  // Cleanup the observer on unmount
  return () => unsubscribe();
}, [showLoginPrompt]);

      return (
        <>
        <div className="bg-white">
          {" "}
          
         
          <div className="flex  justify-between  lg:px-4 items-center max-w-[98vw] sm:max-w-[90vw]  lg:max-w-[85vw]  mx-auto whitespace-nowrap">
            {/* Left Menu */}
            <div className="flex items-center lg:hidden">
              <FiMenu className="w-7 h-7" />
            </div>
            {/* Mid Logo */}
            <div className="pr-2 shrink-0">
              {/* Logo */}
              <div className=" -my-[0.7rem] ">
                <img src='/logo.png' className="w-32 shrink-0" />
              </div>
            </div>
            {/* Links */}
            <div className="hidden lg:flex text-[#30341c] font-bold ">
            <ul className="flex items-center gap-5 py-4 space-x-1 ">
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
            <div className="flex items-center h-full lg:hidden">
              <div className="w-10 h-10 bg-[#e20112] rounded-full text-white flex items-center justify-center ">
                <HiOutlineUser className="text-[28px] " />
              </div>
            </div>



            
            {user ? (
              // If user is logged in, display user info
              <div>
              <p className='items-center mb-4 text-2xl font-bold text-center'></p>
              <div onClick={toggleAccountMenu} className="relative flex flex-row items-center gap-2 cursor-pointer">
              
              <img src={user.photoURL} alt="" className="w-10 h-10"/>
              <FaAngleDown className={`w-4  transition ${showAccountMenu ? 'rotate-0' : 'rotate-180'}`} />
            {showAccountMenu === false ?(
             
<div></div>
            ):(

              <div>
              <Menu /> 
              </div>
            )
              }
              </div>
              </div>
              ) : (
            <div className="hidden lg:flex   items-center pl-6 text-[15px]">
            <Loginb/>
            {showLoginPrompt && !user && (
              <div>
               <LoginMenu/>
                {/* You can customize the login prompt message and appearance here */}
              </div>
            )}
            </div>)}
   <div></div>
   

          </div>
        </div>
    
<MobileNav/>
        </>
    
  );
}

export default Header