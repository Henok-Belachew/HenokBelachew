// ContactItem.tsx

import { IoCopyOutline } from "react-icons/io5";
interface ContactItemProps {
  icon: JSX.Element;
  title: string;
  content: string;
  link?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content, link }) => {
  return (
    <li className="contact-item">
      <div className="icon-box bg-gradient-to-br to-100% from-0% dark:from-[#002744]   from-[#0087e870]  to-transparent
">
        {icon}
      </div>
      <div className="contact-info">
        <div className="flex justify-between">
            <p className="contact-title text-on-light-surface-9 dark:text-on-dark-surface-9">{title}</p>

            {link && <IoCopyOutline className="text-on-light-surface-9 dark:text-on-dark-surface-9 " />}
            
        </div>
        
        {link ? (
          <a href={link} className="contact-link text-on-light-surface-11 dark:text-on-dark-surface-11">{content}</a>
        ) : (
          <div className="contact-link text-on-light-surface-11 dark:text-on-dark-surface-11">{content}</div>
        )}
      </div>
    </li>
  );
};

export default ContactItem;
