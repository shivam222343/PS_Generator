import React from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { BrowserRouter, Link, NavLink } from 'react-router-dom'
import './Header.css'

function header() {
  return (
    // defining nav bar here
    <div className='Header top-0 py-5 px-[3vw] h-28 flex justify-center   w-[100vw]'>
      <div className="navbar rounded-lg border-b-[1px] border-yellow-300 bg-gray-900 flex items-center justify-evenly h-16 w-[100vw]">
        <div className="logo lg:w-[300px] h-14 w-[200px] flex items-center pl-2">
          <h1 className='LogoText text-xl font-bold text-white'>Team Logo</h1>
        </div>
        <div className="Short-list lg:w-[300px] flex items-center  justify-center lg:h-14 ">
        <NavLink to={"/Short-List"} className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} AI text-xl font-bold text-yellow-300 lg:hidden ml-2 border-[2px] rounded-xl p-2 px-3 border-yellow-300 cursor-pointer text-center  `}>SL</NavLink>
        <NavLink to={"/Short-List"} className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} PromptText text-xl font-bold text-white hidden lg:block cursor-pointer text-center hover:text-red-500 duration-500`}>Short List</NavLink>
        <NavLink to={"/Short-List"} className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} AI-sm text-xl font-bold text-yellow-300 hidden lg:block ml-2 border-[2px] rounded-xl p-2 px-3 border-yellow-300 cursor-pointer text-center duration-500 hover:text-gray-900 hover:bg-yellow-200`}>SL</NavLink>
        </div>
        <div className="Prompt lg:w-[300px] flex items-center justify-center lg:h-14">
        <h1 className=''></h1>
        <NavLink to={"/Ai-Prompt"} className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} AI text-xl font-bold text-yellow-300 lg:hidden ml-2 border-[2px] rounded-xl p-2 px-3 border-yellow-300 cursor-pointer text-center `}>AI</NavLink>
        <NavLink to={"/Ai-Prompt"} className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} PromptText text-xl font-bold text-white hidden lg:block cursor-pointer text-center hover:text-red-500 duration-500`}>Prompt Generator</NavLink>
        <NavLink to={"/Ai-Prompt"} className={({ isActive }) => `${isActive ? "text-red-600" : "text-white"} AI-sm text-xl font-bold text-yellow-300 hidden lg:block ml-2 border-[2px] rounded-xl p-2 px-3 border-yellow-300 cursor-pointer text-center duration-500 hover:text-gray-900 hover:bg-yellow-200`}>AI</NavLink>
        </div>
        <div className="ContactUS lg:w-[300px] flex items-center justify-end lg:h-14 pr-2 ">
        <h1 className='Menu text-5xl font-bold text-white lg:hidden cursor-pointer text-center '><CgMenuGridO /></h1>
        <h1 className='ContactText text-xl font-bold mr-6 text-white hidden lg:block cursor-pointer text-center hover:text-red-500 duration-500'>Contact Us</h1>
       
        </div>
      </div>
    </div>
  )
}

export default header