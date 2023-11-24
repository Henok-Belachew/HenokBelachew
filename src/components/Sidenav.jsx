import React from 'react'

import { AiOutlineHome } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import SideMenu from './SideMenu';
import logo from '../assets/logo.svg'

function SideNav() {
  return (
    <nav className='w-[25%] h-[100vh] bg-bodyblack text-white flex justify-center items-center px-8'>
        <img src={logo} className='absolute top-10 w-[15%]' alt="" />
          <ul className='flex flex-col gap-2 w-full'>
          
            <SideMenu status={true} to={"/"} label="Home" icon={<AiOutlineHome/>} />
            <SideMenu status={false} to={"/About-Me"} label="About Me" icon={<GrUserManager />} />
            <SideMenu status={false} to={"/Projects"} label="Projects" icon={<MdOutlineWorkOutline /> } />
            <SideMenu status={false} to={"/Services"} label="Services" icon={<MdDesignServices />} />
            <SideMenu status={false} to={"/Contact"} label="Contact" icon={<LuContact /> } />
            
          
          </ul>
      </nav> 
  )
}

export default SideNav
