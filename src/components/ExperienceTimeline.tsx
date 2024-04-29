
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

function ExperienceTimeline({title, company, employementType, location, locationType, duration}: {title: string, company: string, employementType: string, location: string, locationType: string, duration: string}) {
  return (
    <div className="timeline-item">

              <div className="flex flex-col gap-1">

              
              <h4 className="h5 text-primary-dark-8 dark:text-primary-dark-8 subtext -mt-1">{title}</h4>
              <p className="timeline-text text-on-light-surface-11  dark:text-on-dark-surface-11 flex items-center gap-2">
              <HiOutlineBuildingOffice2 /> {company} · {employementType}
              </p>

              </div>


              <span className="text-primary-light-6  dark:text-primary-dark-6" >
                {`${location} · ${locationType}`}
              </span>
              <p className="timeline-text text-on-light-surface-8 dark:text-on-dark-surface-8">
                {duration}
              </p>
              

              

    </div>
  )
}

export default ExperienceTimeline
