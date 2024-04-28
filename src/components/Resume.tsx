import { IoBookOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import educationData from "../Data/EducationData";
import experienceData from "../Data/ExperienceData";
import EducationTimeline from "./EducationTimeline";
import ExperienceTimeline from "./ExperienceTimeline";
import { useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";


interface SkillProps {
  skillName: string;
  proficiency: number;
  
}

const SkillItem: React.FC<SkillProps> = ({ skillName, proficiency }) => {
  return (
    <li className="skills-item flex flex-col gap-1">
      <div className="flex gap-3 text-white">
        <h5 className="h5">{skillName}</h5>
        <data className="font-[200]" value={proficiency}>{proficiency}%</data>
      </div>
      <div className="skill-progress-bg">
        <div className="skill-progress-fill" style={{ width: `${proficiency}%` }}></div>
      </div>
    </li>
  );
};

function Resume({activeTab}: {activeTab: string}) {
  useEffect(() => {
    
    window.scrollTo(0, 0); // Scroll to the top of the page
  
}, []);
  return (
    <div className={`article about ${activeTab === 'Resume' ? 'active' : ''}`}>
        <header>
          <h2 className="h2 article-title justify-between lg:justify-start flex items-center gap-4 ">
            <span>Resume</span> 
          
          <div className="flex download-btn gap-3  items-center">
            
            <span className="lg:hidden text-md1-4 font-300">Download</span>

          <MdOutlineFileDownload style={{ fontWeight: 'thin' }} className="" />
            
          </div>
           </h2>
          
        </header>

        {/* Education */}
        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <IoBookOutline />
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">

            {educationData.map((item, index) => (
              <EducationTimeline
                key={index}
                institution={item.institution}
                description={item.description}
                date={item.date}
              />
            ))}

          </ol>

        </section>

        {/* Experience */}
        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <MdOutlineWorkOutline />
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">

            {experienceData.map((item, index) => (
              <ExperienceTimeline
                key={index}
                title={item.title}
                company={item.company}
                employementType={item.employementType}
                location={item.location}
                locationType={item.locationType}
                duration={item.duration}
              />
            ))}

          </ol>

        </section>

        {/* Language */}

        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list2 content-card">
          <SkillItem skillName="Web design" proficiency={80}  />
          <SkillItem skillName="Mobile App Design" proficiency={95} />
          <SkillItem skillName="Backend Development" proficiency={70} />
          <SkillItem skillName="Frontend Development" proficiency={90} />
        </ul>
      
    </div>
  )
}

export default Resume
