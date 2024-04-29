interface ServiceItemProps {
    title: string;
    icon: string;
    description: string;
  }

const ServiceItem = ({ title, icon, description }: ServiceItemProps) => {
    return (
      <li className="service-item  bg-gradient-to-br to-100% from-0% dark:from-[#002744] to-transparent from-[#0087e831]   ">
        <div className="service-icon-box">
          <img src={icon} alt={title} className="4-md:w-[80px]"  />
          {/* <div >
            {icon}
          </div> */}
          
          
        </div>
        <div className="service-content-box">
          <h4 className="h4 font-500 service-item-title text-primary ">{title}</h4>
          <p className="service-item-text text-on-light-surface-11  dark:text-on-dark-surface-11">{description}</p>
        </div>
      </li>
    );
  };
  
  export default ServiceItem;