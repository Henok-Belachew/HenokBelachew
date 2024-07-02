// Sidebar.tsx
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosPhonePortrait } from "react-icons/io";

import { IoMailOpenOutline, IoLocationOutline } from "react-icons/io5";

import { MdVerified } from "react-icons/md";
// import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa";
import SocialMedia from './SocialMedia';



import { MdOutlineDateRange } from "react-icons/md";
import myavator from "../assets/images/my-avatar.png";
import ContactItem from './ContactItem';
import Separator from './Separator';

interface ContactItem {
  icon: JSX.Element;
  title: string;
  content: string;
  link?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: <IoMailOpenOutline />,
    title: 'Email',
    content: 'henok12belachew@gmail.com',
    link: 'mailto:henok12belachew@gmail.com'
  },
  {
    icon: <IoIosPhonePortrait />,
    title: 'Phone',
    content: '(+251) 968786690',
    link: 'tel:+12133522795'
  },
  {
    icon: <MdOutlineDateRange />,
    title: 'Birthday',
    content: 'May 20, 2001'
  },
  {
    icon: <IoLocationOutline />,
    title: 'Location',
    content: 'Addis Ababa, Ethiopia'
  }
];


function Sidebar({darkmode, setDarkmode}: {darkmode: boolean, setDarkmode: React.Dispatch<React.SetStateAction<boolean>>} ) {

  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`sidebar border-[1px] border-primary-light-5 dark:border-primary-dark-5 dark:bg-primary-dark-2 bg-primary-light-2 ${isExpanded ? 'active' : ''} `} >
      <div className="sidebar-info">

        {/* Upper Dark/Light Button */}
        {/* onClick={()=>{setDarkmode((prev)=>!prev)}} */}
      <span  className='cursor-pointer hidden  justify-between items-center gap-2'>
              <p className={`text-[14px]    ${darkmode ? 'opacity-50  dark:text-on-dark-surface-11' : 'opacity-100 text-on-light-surface-11'}`}>
              Light 
              </p>

              {darkmode == false  && <FaToggleOn   className='text-on-light-surface-11 opacity-100 rotate-180 text-[18px]' />}
              
              {darkmode == true && <FaToggleOn   className='text-on-dark-surface-11 opacity-100 text-[18px]' />}



              <p className={`text-[14px] ${darkmode ? 'opacity-100 text-on-dark-surface-11' : 'opacity-50 text-on-light-surface-11'}`}>
              Dark
              </p>
              {/* <FaToggleOn  className='text-l-on-s dark:text-d-on-surface-high opacity-50' /> */}
      </span>

      <figure className="avatar-box">
        <img src={myavator} alt="Henok Belachew" width="80" />
      </figure>
        <div className="info-content flex flex-col gap-1 3-md:gap-2">
          <div className='flex gap-2 text-[20px]  xl:justify-center items-center'>
          <h1 className="name text-on-light-surface-11 dark:text-on-dark-surface-11" title="Henok Belachew">Henok Belachew</h1>
          <MdVerified className='text-[20px] text-primary' />

          </div>
          
          <p className="title dark:text-on-dark-surface-12 text-on-light-surface-12  bg-gradient-to-br to-100% from-0% dark:from-[#002744] to-transparent from-[#0087e831]   ">Software Engineer & UI/UX Designer</p>
          {/* <p className="title text-[#141d2b] " >Welcome to my page!</p> */}
          {/* <p className='text-white-2 text-8 font-[200] xl:text-center' style={{"background": "none"}}>Welcome to my page!</p> */}
        </div>
        <button className="info_more-btn bg-gradient-to-br to-100% from-0% dark:from-[#002744]   from-[#0087e870]  to-transparent dark:text-on-dark-surface-12 text-on-light-surface-12" onClick={toggleExpanded}>
          <span>{isExpanded ? 'Hide Contacts': 'Show Contacts'} </span>
          <IoIosArrowDown className={`4-md:hidden ${isExpanded ? 'rotate-180' : ''}` } />
        </button>
      </div>

      
        <div className="sidebar-info_more">
          

<Separator />

          
          <ul className="contacts-list">
          {contactItems.map((item, index) => (
          <ContactItem
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.content}
            link={item.link}
          />
        ))}
          </ul>

          
          <Separator />

          

          <div className='flex xl:flex-col gap-4 items-center justify-between'>
              <SocialMedia />



              {/* Dark/Light Toggle Button */}
              <span onClick={()=>{setDarkmode((prev)=>!prev)}} className='cursor-pointer hidden justify-between items-center gap-2'>
              <p className={`text-[14px]    ${darkmode ? 'opacity-50  dark:text-on-dark-surface-11' : 'opacity-100 text-on-light-surface-11'}`}>
              Light 
              </p>

              {darkmode == false  && <FaToggleOn   className='text-on-light-surface-11 opacity-100 rotate-180 text-[18px]' />}
              
              {darkmode == true && <FaToggleOn   className='text-on-dark-surface-11 opacity-100 text-[18px]' />}



              <p className={`text-[14px] ${darkmode ? 'opacity-100 text-on-dark-surface-11' : 'opacity-50 text-on-light-surface-11'}`}>
              Dark
              </p>
              {/* <FaToggleOn  className='text-l-on-s dark:text-d-on-surface-high opacity-50' /> */}
      </span>
              
          </div>

            
            
            
            
          
        </div>
      
    </aside>
  );
};

export default Sidebar;
