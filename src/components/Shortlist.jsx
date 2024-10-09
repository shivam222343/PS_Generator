import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoPlayBackCircle } from "react-icons/io5";




function Shortlist() {
  console.log(id);

  return (
    <div>
    <div className="Home bg-gradient-to-tr to-black from-slate-900 min-h-[80vh] w-[100vw] flex flex-col items-center">
      <div className="part1 h-28 w-[94vw] flex justify-center items-center ">
        <div className="back h-28 w-[12vw] flex justify-center items-center ">
          <NavLink to={"/"} className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} duration-500 text-4xl text-white hover:text-yellow-400`} > <IoPlayBackCircle /></NavLink>
         <button className=' border-2 border-l-0 border-yellow-400 text-white rounded-r-lg bg-red-500 font-bold text-2xl' onClick={get}>Submit</button>
        </div>
    </div>
  </div>
  </div>

  )
}

export default Shortlist