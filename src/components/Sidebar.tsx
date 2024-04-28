// Sidebar.tsx
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosPhonePortrait } from "react-icons/io";

import { IoMailOpenOutline, IoLocationOutline } from "react-icons/io5";

import { MdVerified } from "react-icons/md";

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

const Sidebar: React.FC= () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`sidebar  ${isExpanded ? 'active' : ''}`} >
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myavator} alt="Richard Hanrick" width="80" />
        </figure>
        <div className="info-content">
          <div className='flex gap-2 mb-2 text-[20px]  xl:justify-center items-center'>
          <h1 className="name" title="Henok Belachew">Henok Belachew</h1>
          <MdVerified className='text-[20px] text-orange-yellow-crayola' />

          </div>
          
          <p className="title">Software Engineer & UI/UX Designer</p>
        </div>
        <button className="info_more-btn" onClick={toggleExpanded}>
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

          

          <div className='flex xl:flex-col gap-2 items-center justify-between'>
              <SocialMedia />

              <p className='contact-title text-white-2'>
              Page Visits <strong>234</strong>
              </p>
          </div>

            
            
            
            
          
        </div>
      
    </aside>
  );
};

export default Sidebar;
