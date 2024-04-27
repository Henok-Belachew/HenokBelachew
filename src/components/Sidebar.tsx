// Sidebar.tsx
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosPhonePortrait } from "react-icons/io";
import { IoMailOpenOutline, IoLocationOutline } from "react-icons/io5";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import myavator from "../assets/images/my-avatar.png";
import ContactItem from './ContactItem';

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
    content: 'richard@example.com',
    link: 'mailto:richard@example.com'
  },
  {
    icon: <IoIosPhonePortrait />,
    title: 'Phone',
    content: '+1 (213) 352-2795',
    link: 'tel:+12133522795'
  },
  {
    icon: <MdOutlineDateRange />,
    title: 'Birthday',
    content: 'June 23, 1982'
  },
  {
    icon: <IoLocationOutline />,
    title: 'Location',
    content: 'Sacramento, California, USA'
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
          <h1 className="name" title="Richard Hanrick">Richard Hanrick</h1>
          <p className="title">Web developer</p>
        </div>
        <button className="info_more-btn" onClick={toggleExpanded}>
          <span>Show Contacts</span>
          <IoIosArrowDown />
        </button>
      </div>
      {true && (
        <div className="sidebar-info_more">
          <div className="separator"></div>
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
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
              <FaInstagram />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
              <FaYoutube />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <FaGithub/>
              </a>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
