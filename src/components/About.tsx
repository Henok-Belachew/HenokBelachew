import service1 from "../assets/images/icon-app.svg"
import service2 from "../assets/images/icon-design.svg"
import service3 from "../assets/images/icon-dev.svg"
import service4 from "../assets/images/icon-dev.svg"

import serviceData from "../Data/ServiceData"
import ServiceItem from "./ServiceItem"

function About({activeTab}: {activeTab: string}) {
  return (
    <div className={`article about ${activeTab === 'About' ? 'active' : ''}`}>
         <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
            I enjoy
            turning complex problems into simple, beautiful and intuitive designs.
          </p>

          <p>
            My job is to build your website so that it is functional and user-friendly but at the same time attractive.
            Moreover, I
            add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
            across your
            message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </section>


        {/* Services */}

        <section className="service">

          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">

            {serviceData.map((item, index) => (
              <ServiceItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}

            

          </ul>

        </section>

        


    </div>
  )
}

export default About
