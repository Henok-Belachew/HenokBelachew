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
      <div className="flex justify-between gap-3 ">
        <h5 className="h5 text-on-light-surface-12 dark:text-on-dark-surface-12">{skillName}</h5>
        <data className="font-[200]  text-on-light-surface-12  dark:text-on-dark-surface-12" value={proficiency}>{proficiency}%</data>
      </div>
      <div className="skill-progress-bg bg-primary-light-3 dark:bg-primary-dark-3 
">
        <div className="skill-progress-fill bg-primary-light-7 dark:bg-primary-dark-7" style={{ width: `${proficiency}%` }}></div>
      </div>
    </li>
  );
};

function Resume({activeTab}: {activeTab: string}) {
  useEffect(() => {
    
    window.scrollTo(0, 0); // Scroll to the top of the page
  
}, []);

const resume:string = "https://raw.githubusercontent.com/Henok-Belachew/Henok-Belachew/master/MY%20CV.pdf"
  return (
    <div className={`article dark:bg-primary-dark-2 bg-primary-light-2 border-[1px] border-primary-light-5 dark:border-primary-dark-5 about after:bg-primary after:opacity-35 ${activeTab === 'Resume' ? 'active' : ''}`}>
        <header>
          <h2 className="h2 text-on-light-surface-11 dark:text-on-dark-surface-11  after:bg-primary after:opacity-35 article-title justify-between lg:justify-start flex items-center gap-4 ">
            <span>Resume</span> 
          
          <div onClick={() => window.open(resume, '_blank')} className="flex  border-[1px] border-primary-light-6 dark:border-primary-dark-6 download-btn gap-3 px-[14px] py-[5px] xl:p-0 xl:w-[50px] xl:h-[50px]  items-center">
            
            <span className="lg:hidden text-md1-4 font-300">Download</span>

          <MdOutlineFileDownload style={{ fontWeight: 'thin' }} className="text-[25px] block mx-auto" />
            
          </div>
           </h2>
          
        </header>

        {/* Education */}
        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box bg-gradient-to-br to-100% from-0% dark:from-[#002744]   from-[#0087e870]  to-transparent">
              <IoBookOutline />
            </div>

            <h3 className="h3 text-on-light-surface-11 dark:text-on-dark-surface-11">Education</h3>
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
            <div className="icon-box bg-gradient-to-br to-100% from-0% dark:from-[#002744]   from-[#0087e870]  to-transparent">
              <MdOutlineWorkOutline />
            </div>

            <h3 className="h3 text-on-light-surface-11 dark:text-on-dark-surface-11">Experience</h3>
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

        <h3 className="h3 skills-title text-on-light-surface-11 dark:text-on-dark-surface-11">My Skills</h3>
        <ul className="content-card bg-gradient-to-br to-100% from-0% dark:from-[#002744] to-transparent from-[#0087e831] ">
          <SkillItem skillName="Web design" proficiency={80}  />
          <SkillItem skillName="Mobile App Design" proficiency={95} />
          <SkillItem skillName="Backend Development" proficiency={70} />
          <SkillItem skillName="Frontend Development" proficiency={90} />
        </ul>
      
    </div>
  )
}

export default Resume
