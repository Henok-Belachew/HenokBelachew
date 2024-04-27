

import serviceData from "../Data/ServiceData"
import ServiceItem from "./ServiceItem"

import skillsetImages from "../Data/ProfessionalSkillsData"
import { useState } from "react"




function About({activeTab}: {activeTab: string}) {

  const [filter, setFilter] = useState('All')
  return (
    <div className={`article about ${activeTab === 'About' ? 'active' : ''}`}>
         <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        {/* About Me Text */}

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


        
        {/* Profesional Skillsets */}
        

        <section className="professional-skills">

          <h3 className="h3 professional-skills-title">Professional Skillsets</h3>

          {/* Filter */}
          <ul className="filter-list">

            <li className="filter-item">
              <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')} >All</button>
            </li>

            <li className="filter-item">
              <button className={filter === 'UI/UX' ? 'active' : ''} onClick={() => setFilter('UI/UX')}>UI/UX design</button>
            </li>

            

            <li className="filter-item">
              <button className={filter === 'Web' ? 'active' : ''} onClick={() => setFilter('Web')}>Web development</button>
            </li>

          </ul>

          {/* Skills List  */}
          <ul className="skills-list has-scrollbar">  

           { filter === 'All' && skillsetImages.all.map((img) => (

                <img className="skillbox h-[80px]"  src={img}></img>
                ))
           }  

           { filter === 'UI/UX' && skillsetImages.ui_ux_design.map((img) => (

                <img className="skillbox h-[80px]"  src={img}></img>
                ))
           }  

           { filter === 'Web' && skillsetImages.web_development.map((img) => (

                <img className="skillbox h-[80px]"  src={img}></img>
                ))
           }      

            
            
          


          </ul>

        </section>

        


    </div>
  )
}

export default About
