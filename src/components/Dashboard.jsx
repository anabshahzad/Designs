import React from 'react';
import { IoPeople } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { GiBodySwapping } from "react-icons/gi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { AiOutlineStop } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { BsPersonCheck } from "react-icons/bs";


function Dashboard() {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center bg-emerald-400 p-6 text-white rounded-lg w-46 h-32">
        <IoPeople size={40} className='mr-4' />
        <div>
        <p className="text-3xl font-bold pl-14">22</p>  
        <h2 className='pl-8'>Total Employees</h2> 
        </div>
        </div>

        <div className="flex items-center  bg-blue-400 p-6 text-white rounded-lg gap-8 w-42 h-32">
        <FaBuilding size={40} className='mr-4'/>
        <div>
        <p className="text-3xl font-bold pl-14">40</p>  {/* Number first */}
        <h2 className='pl-6' >Total Departments & Sub Departments</h2>  {/* Description below */}
        </div>
        </div>

        <div className="flex items-center bg-rose-400 p-6 text-white rounded-lg gap-8 w-46 h-32">
        <GiBodySwapping size={40} className='mr-4'/>
        <div>
        <p className="text-3xl font-bold pl-14">59</p>  {/* Number first */}
        <h2 className='pl-6' >Total Designations</h2>  {/* Description below */}
        </div>
        </div>

        <div className="flex items-center bg-amber-500 p-6 text-white rounded-lg gap-8 w-46 h-32">
        <BsFillBuildingsFill size={40} className='mr-4' />
        <div>
        <p className="text-3xl font-bold pl-14">2</p>  {/* Number first */}
          <h2 className='pl-6' >Total Branches</h2>  {/* Description below */}

        </div>
        </div>
      </div>

      {/* Bottom Progress Bars */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          
        <div className="p-4 shadow-lg flex justify-between items-center bg-white rounded-lg w-42 h-24">
<div>
    <p className="text-3xl font-bold text-gray-700">14</p>  
    <p className="text-sm text-gray-700">Late Comers for Last 7 Days</p>
    <div className="w-full h-2 bg-green-200 rounded-full">
    <div className="h-2 bg-green-400 rounded-full w-1/4"></div>
    </div>
            </div>
            <div className='ml-2'>
    <BsPersonCheck size={30} className='text-green-400 ' />
    </div>
          </div>


<div className="p-4 shadow-lg flex justify-between items-center bg-white rounded-lg w-42 h-24">
<div>
    <p className="text-3xl font-bold text-gray-800">4</p>  
    <p className="text-sm text-gray-700">Today's Late Comers</p>
    <div className="w-full h-2 bg-blue-200 rounded-full">
    <div className="h-2 bg-blue-400 rounded-full w-1/4"></div>
    </div>
            </div>
            <div className='ml-2'>
    <LuClock4 size={30} className='text-blue-400 ' />
    </div>
          </div>



          <div className="p-4 shadow-lg flex justify-between items-center bg-white rounded-lg w-42 h-24">
<div>
    <p className="text-3xl font-bold text-gray-700">8</p>  
    <p className="text-sm text-gray-700">Late Comers for Last 7 Days</p>
    <div className="w-full h-2 bg-rose-200 rounded-full">
    <div className="h-2 bg-rose-400 rounded-full w-1/4"></div>
    </div>
            </div>
            <div className='ml-2'>
    <IoCalendarOutline size={30} className='text-rose-400 ' />
    </div>
          </div>

          <div className="p-4 shadow-lg flex justify-between items-center bg-white rounded-lg w-42 h-24">
          <div>
    <p className="text-3xl font-bold text-gray-700">18</p>  
    <p className="text-sm text-gray-900">Employees Unit</p>
    <div className="w-full h-2 bg-amber-200 rounded-full">
    <div className="h-2 bg-amber-500 rounded-full w-1/4"></div>
    </div>
            </div>
            <div>
            <AiOutlineStop  watch size={30} className='text-amber-500'/>
            </div>
          </div>


          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
