interface ServiceItemProps {
    title: string;
    icon: string;
    description: string;
  }

const ServiceItem = ({ title, icon, description }: ServiceItemProps) => {
    return (
      <li className="service-item">
        <div className="service-icon-box">
          <img src={icon} alt={title} width="80" />
          {/* <div className="w-[80px]">
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