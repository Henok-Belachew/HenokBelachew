import React, { useState } from 'react';
import Separator from './Separator';
import { IoIosArrowDown, IoIosPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import myavator from '../assets/images/my-avatar.png';	

const Sidebar: React.FC = () => {
  const [showContacts, setShowContacts] = useState(true);

  

  return (
    // Sidebar
    <aside className="bg-eerie-black-2 shadow-shadow-1 p-[15px] rounded-[20px] border-solid border-[1px] border-jet z-[1]

    4-md:mb-[30px]

    3-md:w-[700px]

    lg:w-[950px] lg:shadow-shadow-5

    xl:w-auto
    
    " >

      {/* Sidebar Info */}
      <div className="relative flex justify-start items-center gap-[15px]
      
      4-md:gap-[25px]

      xl:flex-col xl:text-center
      ">

        <figure className="bg-gradient-onyx rounded-[20px]
        4-md:rounded-[30px]  
        ">
          <img src={myavator} alt="Henok Belachew"  className='w-[80px] 4-md:w-[120px] xl:w-[150px]' />
        </figure>

        {/* Info Content */}
        <div className=" mb-[10px]">
          <h1 className=" text-white-2 font-500 3-md:text-3 " title="Henok Belachew">
          Richard hanrick
          </h1>
          <p className="title text-white-1 text-center text-8 font-300 rounded-[8px] bg-onyx mb-[10px] md1:py-[5px] py-[3px] px-[12px] md1:px-[18px]">Software Engineer &amp; UI/UX Designer</p>
        </div>


        <button className="absolute hidden top-0 right-0 -mt-[15px] -mr-[15px] rounded-br-[15px] text-xs text-orange-yellow-crayola bg-border-gradient-onyx p-[10px] shadow-2 transition-all z-10" onClick={() => setShowContacts(!showContacts) }>
          <span>Show Contacts</span>
          <IoIosArrowDown />
        </button>
      </div>




      {true && (
        <div className="sidebar-info_more">
          <Separator/>
          <ul className="grid gap-[16px] grid-cols-1 ">

            <li className="min-w-[100%] flex item-center gap-[16px]">
              
              <div className="icon-box">
              <AiOutlineMail className='' />
              </div>
              <div className="max-w-calc(100% - 46px) w-calc(100% - 46px)">
                <p className="text-8 uppercase mb-[2px] text-light-gray-70">Email</p>
                <a href="mailto:richard@example.com" className="contact-link">
                  henok12belachew@gmail.com
                </a>
              </div>
            </li>
            
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                00
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                00
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                00
              </a>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
