

function EducationTimeline({institution, description, date}: {institution: string, description: string, date: string}) {
  return (
    <div className="timeline-item">

              <h4 className="h5 subtext -mt-1">{institution}</h4>
              <p className="timeline-text">
                {description}
              </p>
              <span>{date}</span>

              

    </div>
  )
}

export default EducationTimeline
