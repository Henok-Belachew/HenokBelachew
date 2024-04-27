// Sidebar.tsx
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosPhonePortrait } from "react-icons/io";

import { IoMailOpenOutline, IoLocationOutline } from "react-icons/io5";

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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`sidebar ${isExpanded ? 'active' : ''}`} >
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myavator} alt="Richard Hanrick" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Henok Belachew">Henok Belachew</h1>
          <p className="title">Software Engineer & UI/UX Designer</p>
        </div>
        <button className="info_more-btn" onClick={toggleExpanded}>
          <span>Show Contacts</span>
          <IoIosArrowDown className='4-md:hidden' />
        </button>
      </div>

      {true && (
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

          

            <SocialMedia />
            
          
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
