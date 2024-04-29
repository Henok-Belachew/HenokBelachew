

function EducationTimeline({institution, description, date}: {institution: string, description: string, date: string}) {
  return (
    <div className="timeline-item">

              <h4 className="h5 subtext text-primary-dark-8 dark:text-primary-dark-8  -mt-1">{institution}</h4>
              <p className="timeline-text text-on-light-surface-11  dark:text-on-dark-surface-11">
                {description}
              </p>
              <span className="text-on-light-surface-8 dark:text-on-dark-surface-8">{date}</span>

              

    </div>
  )
}

export default EducationTimeline
