import React from 'react'
import { auth } from '../../../firebase';

const Menu = () => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
    <div className="absolute right-0 flex flex-col w-56 py-5 bg-black border-2 border-gray-800 top-14">
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center w-full gap-3 px-3 group/item">
        <img className="w-8 rounded-md" src="/images/default-blue.png" alt="" />
        <p className="text-sm text-white group-hover/item:underline">account</p>
      </div>
    </div>
    <hr className="h-px my-4 bg-gray-600 border-0" />
    <div onClick={handleSignOut} className="px-3 text-sm text-center text-white hover:underline">
      Sign out of Ai DUBGENIUS
    </div>
  </div>      
    </div>
  )
}

export default Menu
