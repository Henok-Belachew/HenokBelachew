import { FaInstagram, FaGithub , FaYoutube, FaSquareBehance} from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

 

function SocialMedia() {

    const socialMedia = [
        { icon: <FaInstagram />, 
        link: "https://www.instagram.com/henok12belachew/" },
        { icon: <FaYoutube />, 
        link: "https://www.youtube.com/@HenokTutorials" },
        { icon: <FaGithub />, 
        link: "https://github.com/Henok-Belachew" },
        { icon: <FaSquareBehance />, 
        link: "https://www.behance.net/henokbelachew" },
        { icon: <IoLogoLinkedin />, 
        link: "https://www.linkedin.com/in/henok-belachew/" }
      ];

  return (
    <div className="social-list">
    {socialMedia.map((item) => (
        <li className="social-item">
            <a href={item.link} className="social-link">
            {item.icon}
            </a>
        </li>
    ))}
    
      
    </div>
  )
}

export default SocialMedia
