

import ServiceData from "../Data/ServiceData"
import ServiceItem from "./ServiceItem"

import skillsetImages from "../Data/ProfessionalSkillsData"
import { useState } from "react"

import { IoIosArrowDown } from "react-icons/io";
import { useEffect } from "react";



function About({activeTab}: {activeTab: string}) {

  useEffect(() => {
    
      window.scrollTo(0, 0); // Scroll to the top of the page
    
  }, []);


  const [filter, setFilter] = useState('')
  const [selectbox, setSelectbox] = useState(false)

  return (
    <div className={`article dark:bg-primary-dark-2 bg-primary-light-2 border-[1px] border-primary-light-5 dark:border-primary-dark-5 about ${activeTab === 'About' ? 'active' : ''} `}>
         <header>
          <h2 className="h2 text-on-light-surface-11 dark:text-on-dark-surface-11 article-title after:bg-primary after:opacity-35">About me</h2>
        </header>

        {/* About Me Text */}

        <section className="about-text text-on-light-surface-11  dark:text-on-dark-surface-11">
          <p>
          Hi there, I'm Henok Belachew, currently in my final year pursuing Computer Engineering at Addis Ababa Science and Technology University (AASTU). However, my passion for creating intuitive user experiences and proficiency in UI design and full-stack development stems from self-directed learning and practical experience.
          </p>

          <p>
          My primary programming language is JavaScript, allowing me to seamlessly merge design finesse with technical expertise. I specialize in frontend technologies such as React, Tailwind CSS, and various frontend libraries for crafting engaging user interfaces. In backend development, I leverage Node.js to ensure secure and efficient functionality. Proficient in database management, I work with tools like MongoDB or SQL for streamlined data handling.
          </p>

          <p>
          My journey revolves around self-driven learning and hands-on experience, focusing on integrating captivating design principles with robust technical solutions to deliver digital products that are both engaging and pragmatic.
          </p>
        </section>


        {/* Services */}

        <section className="service">

          <h3 className="h3 service-title font-[400] text-on-light-surface-11 dark:text-on-dark-surface-11">My services</h3>

          <ul className="service-list">

            {
              ServiceData.map((item: any, index: number) => (
                <ServiceItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))
            }

            

          </ul>

        </section>


        
        {/* Profesional Skillsets */}
        
        <section className="professional-skills">

          <h3 className="h3 professional-skills-title font-[400] text-on-light-surface-11 dark:text-on-dark-surface-11">Professional Skillsets</h3>

          {/* Filter */}
          <ul className="filter-list ">

            <li className="filter-item text-on-light-surface-10 hover:text-on-light-surface-11 dark:text-on-dark-surface-10 dark:hover:text-on-dark-surface-11">
              <button className={filter === 'All' || filter === '' ? 'active' : ''} onClick={() => setFilter('All')} >All</button>
            </li>

            <li className="filter-item text-on-light-surface-10 hover:text-on-light-surface-11 dark:text-on-dark-surface-10 dark:hover:text-on-dark-surface-11">
              <button className={filter === 'UI/UX' ? 'active' : ''} onClick={() => setFilter('UI/UX')}>UI/UX design</button>
            </li>

            

            <li className="filter-item text-on-light-surface-10 hover:text-on-light-surface-11 dark:text-on-dark-surface-10 dark:hover:text-on-dark-surface-11">
              <button className={filter === 'Web' ? 'active' : ''} onClick={() => setFilter('Web')}>Web development</button>
            </li>

          </ul>

          {/* Filter Select Box */}

          <div className="filter-select-box rounded-[14px] border-[1px] border-primary-light-5 dark:border-primary-dark-5">
            
            <div className="flex flex-col gap-2">

              

                {/* <p className="select-value text-white-1 font-[300]">Select category</p> */}

                <button  onClick={() => setSelectbox(!selectbox)} className="filter-select text-on-light-surface-11 dark:text-on-dark-surface-11">

                  
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

            

            <ul className={`select-list border-[1px] border-primary-light-5 dark:border-primary-dark-5 bg-primary-light-4 dark:bg-primary-dark-4 text-on-light-surface-10 ${selectbox ? 'active' : ''}`}>

              

              <li className="select-item ">
                <button className="rounded-[8px] hover:bg-primary-light-6 dark:hover:bg-primary-dark-6 dark:hover:text-primary-dark-1 hover:text-primary-light-1 " onClick={() =>{ setFilter('All'); setSelectbox(!selectbox)}} >All</button>
              </li>

              <li className="select-item">
                <button className="rounded-[8px] hover:bg-primary-light-6 dark:hover:bg-primary-dark-6 dark:hover:text-primary-dark-1 hover:text-primary-light-1 " onClick={() => {setFilter('UI/UX'); setSelectbox(!selectbox)}} >UI/UX Design</button>
              </li>

              <li className="select-item">
                <button className="rounded-[8px] hover:bg-primary-light-6 dark:hover:bg-primary-dark-6 dark:hover:text-primary-dark-1 hover:text-primary-light-1 " onClick={() => {setFilter('Web'); setSelectbox(!selectbox)}} >Web development</button>
              </li>

            </ul>

          </div>

          {/* Skills List  */}
          <ul className="skills-list has-scrollbar">  

           { filter === 'All' || filter === '' ? skillsetImages.all.map((img) => (

                <img className="skillbox border-[1px] border-primary-light-5 dark:border-primary-dark-5 h-[65px] 4-md:h-[80px]"  src={img}></img>
                )) : ""
           }  

           { filter === 'UI/UX' && skillsetImages.ui_ux_design.map((img) => (

                <img className="skillbox border-[1px] border-primary-light-5 dark:border-primary-dark-5 h-[65px] 4-md:h-[80px]"  src={img}></img>
                ))
           }  

           { filter === 'Web' && skillsetImages.web_development.map((img) => (

                <img className="skillbox border-[1px] border-primary-light-5 dark:border-primary-dark-5 h-[60px] 4-md:h-[80px]"  src={img}></img>
                ))
           }      

            
            
          


          </ul>

        </section>



        {/* Tools I Use */}
        
        <section className="professional-skills">

          <h3 className="h3 professional-skills-title font-[400] text-on-light-surface-11 dark:text-on-dark-surface-11">Tools I Use</h3>

         

          {/* Tools List  */}
          <ul className="skills-list has-scrollbar"> 

           {
            skillsetImages.tools.map((img) => (

                <img className="skillbox border-[1px] border-primary-light-5 dark:border-primary-dark-5 h-[65px] 4-md:h-[80px]"  src={img}></img>
            ))
           }

                

            
            
          


          </ul>

        </section>

        


    </div>
  )
}

export default About
