

import serviceData from "../Data/ServiceData"
import ServiceItem from "./ServiceItem"

import skillsetImages from "../Data/ProfessionalSkillsData"
import { useState } from "react"

import { IoIosArrowDown } from "react-icons/io";




function About({activeTab}: {activeTab: string}) {

  const [filter, setFilter] = useState('')
  const [selectbox, setSelectbox] = useState(false)

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
              <button className={filter === 'All' || filter === '' ? 'active' : ''} onClick={() => setFilter('All')} >All</button>
            </li>

            <li className="filter-item">
              <button className={filter === 'UI/UX' ? 'active' : ''} onClick={() => setFilter('UI/UX')}>UI/UX design</button>
            </li>

            

            <li className="filter-item">
              <button className={filter === 'Web' ? 'active' : ''} onClick={() => setFilter('Web')}>Web development</button>
            </li>

          </ul>

          {/* Filter Select Box */}

          <div className="filter-select-box">
            
            <div className="flex flex-col gap-2">

              

                {/* <p className="select-value text-white-1 font-[300]">Select category</p> */}

                <button onClick={() => setSelectbox(!selectbox)} className="filter-select">

                  
                  <div className="select-value" >
                    
                    { filter === "" ? "Select Category" : 
                    filter === "All" ? "All" :
                    filter === "UI/UX" ? "UI/UX Design" :
                    filter === "Web" ? "Web development" : ""}
                    
                    
                    
                    </div>

                  <div className="select-icon">
                    <IoIosArrowDown />
                  </div>

                </button>

            </div>

            

            <ul className={`select-list  ${selectbox ? 'active' : ''}`}>

              

              <li className="select-item">
                <button onClick={() =>{ setFilter('All'); setSelectbox(!selectbox)}} >All</button>
              </li>

              <li className="select-item">
                <button onClick={() => {setFilter('UI/UX'); setSelectbox(!selectbox)}} >UI/UX Design</button>
              </li>

              <li className="select-item">
                <button onClick={() => {setFilter('Web'); setSelectbox(!selectbox)}} >Web development</button>
              </li>

            </ul>

          </div>

          {/* Skills List  */}
          <ul className="skills-list has-scrollbar">  

           { filter === 'All' || filter === '' ? skillsetImages.all.map((img) => (

                <img className="skillbox h-[80px]"  src={img}></img>
                )) : ""
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
