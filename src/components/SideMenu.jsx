import React, { useState, useEffect } from 'react'
import { NavLink, useLocation, useMatch   } from 'react-router-dom'


function SideMenu({icon, label, to}) {



    // Getting the current route as boollean
    const isActive = useMatch(to)

    return(
        <NavLink
      to={to}
      className={`relative font-semibold w-full rounded-md overflow-hidden px-4 py-3 flex gap-2 items-center ${
        isActive ? 'bg-primaryContainer text-primary' : 'text-inactive hover:text-primary hover:bg-primaryContainer cursor-pointer'
      }`}
      activeClassName="activeMenu"
      exact
    >
      {icon} {label}

      {isActive && <span className='block absolute w-[10px] h-full bg-primary right-0'></span>}
    </NavLink>
    )

   
}

export default SideMenu
