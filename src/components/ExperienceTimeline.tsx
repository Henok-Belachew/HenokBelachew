
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

function ExperienceTimeline({title, company, employementType, location, locationType, duration}: {title: string, company: string, employementType: string, location: string, locationType: string, duration: string}) {
  return (
    <div className="timeline-item">

              <div className="flex flex-col gap-1">

              
              <h4 className="h5 subtext -mt-1">{title}</h4>
              <p className="h2 timeline-item-title flex items-center gap-2">
              <HiOutlineBuildingOffice2 /> {company} · {employementType}
              </p>

              </div>


              <span >
                {`${location} · ${locationType}`}
              </span>
              <p className="timeline-text">
                {duration}
              </p>
              

              

    </div>
  )
}

export default ExperienceTimeline
