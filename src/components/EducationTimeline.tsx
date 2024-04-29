

function EducationTimeline({institution, description, date}: {institution: string, description: string, date: string}) {
  return (
    <div className="timeline-item">

              <h4 className="h5 subtext -mt-1">{institution}</h4>
              <p className="timeline-text text-l-on-surface-11  dark:text-d-on-surface-11">
                {description}
              </p>
              <span>{date}</span>

              

    </div>
  )
}

export default EducationTimeline
