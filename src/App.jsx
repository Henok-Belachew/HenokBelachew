import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import SideMenu from './components/SideMenu';
import logo from './assets/logo.svg'

 
function App() {
  return (
    <div className='flex'>
      <nav className='w-[25%] h-[100vh] bg-[#222222] text-white flex justify-center items-center px-8'>
        <img src={logo} className='absolute top-10 w-[15%]' alt="" />
          <ul className='flex flex-col gap-2 w-full'>
          
            <SideMenu status={true} label="Home" icon={<AiOutlineHome/>} />
            <SideMenu status={false} label="About Me" icon={<GrUserManager />} />
            <SideMenu status={false} label="Services" icon={<MdDesignServices />} />
            <SideMenu status={false} label="Contact" icon={<LuContact /> } />
          
          </ul>
      </nav> 
      <div className='w-[75%] h-[100vh] bg-[#151515]'>a</div>
    </div>
  )
}

export default App
