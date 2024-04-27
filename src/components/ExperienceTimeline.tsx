


function ExperienceTimeline({title, company, employementType, location, locationType, duration}: {title: string, company: string, employementType: string, location: string, locationType: string, duration: string}) {
  return (
    <div className="timeline-item">

              <h4 className="h4 timeline-item-title">{title}</h4>
              <p className="subtext">
                {company} ● {employementType}
              </p>
              <p className="timeline-text">
                {`${location} ● ${locationType}`}
              </p>
              <span>
                {duration}
              </span>
              

              

    </div>
  )
}

export default ExperienceTimeline
