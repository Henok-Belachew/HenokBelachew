import { IoBookOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import educationData from "../Data/EducationData";
import experienceData from "../Data/ExperienceData";
import EducationTimeline from "./EducationTimeline";
import ExperienceTimeline from "./ExperienceTimeline";

function Resume({activeTab}: {activeTab: string}) {
  return (
    <div className={`article about ${activeTab === 'Resume' ? 'active' : ''}`}>
        <header>
          <h2 className="h2 article-title">Resume</h2>
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
      
    </div>
  )
}

export default Resume
