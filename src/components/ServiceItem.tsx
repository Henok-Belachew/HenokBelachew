interface ServiceItemProps {
    title: string;
    icon: string;
    description: string;
  }

const ServiceItem = ({ title, icon, description }: ServiceItemProps) => {
    return (
      <li className="service-item">
        <div className="service-icon-box">
          <img src={icon} alt={title} className="4-md:w-[80px]"  />
          {/* <div >
            {icon}
          </div> */}
          
          
        </div>
        <div className="service-content-box">
          <h4 className="h4 service-item-title">{title}</h4>
          <p className="service-item-text">{description}</p>
        </div>
      </li>
    );
  };
  
  export default ServiceItem;