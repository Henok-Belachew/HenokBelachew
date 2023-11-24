import React from 'react'
import { AiOutlineHome } from "react-icons/ai";

function SideMenu({status, icon, label}) {
    if (!status) {
        return (
            <li className='relative text-inactive hover:text-primary hover:bg-primaryContainer cursor-pointer font-semibold w-full rounded-md overflow-hidden px-4 py-3 flex gap-2 items-center'>{icon} {label}
            
        
    </li>
        )
    }

    else {
  return (
    
    <li className='relative bg-primaryContainer text-primary font-semibold w-full rounded-md overflow-hidden px-4 py-3 flex gap-2 items-center'>{icon} {label}
            
        <span className='w-[10px] right-0  absolute h-[100%] bg-primary'></span>
    </li>
  )}
}

export default SideMenu
