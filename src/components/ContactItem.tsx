// ContactItem.tsx
import React from 'react';

interface ContactItemProps {
  icon: JSX.Element;
  title: string;
  content: string;
  link?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content, link }) => {
  return (
    <li className="contact-item">
      <div className="icon-box">
        {icon}
      </div>
      <div className="contact-info">
        <p className="contact-title">{title}</p>
        {link ? (
          <a href={link} className="contact-link">{content}</a>
        ) : (
          <div className="contact-link">{content}</div>
        )}
      </div>
    </li>
  );
};

export default ContactItem;
