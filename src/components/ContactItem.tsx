// ContactItem.tsx
import { FaRegCopy } from "react-icons/fa6";
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
      <div className="icon-box">
        {icon}
      </div>
      <div className="contact-info">
        <div className="flex justify-between">
            <p className="contact-title">{title}</p>

            {link && <IoCopyOutline className="text-white-1 opacity-50" />}
            
        </div>
        
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
