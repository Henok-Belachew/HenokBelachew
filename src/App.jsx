import React from 'react'
import SideNav from './components/Sidenav.jsx'                                                  
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='flex'>
      
      <SideNav/>

        <div className='bg-sideblack w-[75%]'>
            <Outlet/>
        </div>
      
      
    </div>
  )
}

export default App
