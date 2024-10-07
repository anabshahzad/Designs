import React from 'react';
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineMail, AiOutlineBell } from 'react-icons/ai'; 

function Header() {
  return (
    <header className="w-full bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="text-2xl text-blue-600 font-semibold">E<span className="text-black font-semibold">mpleado </span></div>
        <HiBars3 size={24} className="text-gray-600 cursor-pointer" />
      </div>

      <div className="hidden lg:flex items-center space-x-6 text-gray-700">
        <span>All Biometric Machines <span className="font-bold pl-4">6</span></span>
        <span>Live Machines <span className="font-bold pl-4">0</span></span>
        <span>Need help? Call us <span className="font-bold pl-4">+92 - 304 - 111 8333</span></span>
      </div>

      <div className="flex items-center space-x-4 text-gray-600">
        <AiOutlineMail size={24} className="cursor-pointer" />
        <AiOutlineBell size={24} className="cursor-pointer" />
        <span>Admin</span>
      </div>
    </header>
  );
}

export default Header;
