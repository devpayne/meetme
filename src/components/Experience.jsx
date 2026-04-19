import './Experience.css'

const experiences = [
  {
    role: 'Software Developer',
    company: 'Company Name',
    period: '2023 — Present',
    description:
      'Developed and maintained features for a high-traffic web application. Collaborated with cross-functional teams to deliver projects on schedule.',
    highlights: ['Built RESTful APIs', 'Improved performance by X%', 'Mentored junior developers'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Another Company',
    period: 'Summer 2022',
    description:
      'Contributed to the development of internal tools that streamlined workflows across the engineering org.',
    highlights: ['Implemented new UI features', 'Wrote unit and integration tests', 'Participated in code reviews'],
  },
]

const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'University Name',
    period: '2019 — 2023',
    detail: 'Relevant coursework: Data Structures, Algorithms, Software Engineering, Databases',
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <p className="section-label">04 — Experience</p>
      <h2 className="section-title">Where I've <span>Worked</span></h2>

      <div className="exp__timeline">
        {experiences.map(e => (
          <div key={e.role + e.company} className="exp__item">
            <div className="exp__marker" />
            <div className="exp__content">
              <div className="exp__header">
                <div>
                  <h3 className="exp__role">{e.role}</h3>
                  <p className="exp__company">{e.company}</p>
                </div>
                <span className="exp__period">{e.period}</span>
              </div>
              <p className="exp__desc">{e.description}</p>
              <ul className="exp__highlights">
                {e.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="exp__edu-title">
        <h3>Education</h3>
      </div>
      <div className="exp__timeline">
        {education.map(ed => (
          <div key={ed.degree} className="exp__item">
            <div className="exp__marker exp__marker--edu" />
            <div className="exp__content">
              <div className="exp__header">
                <div>
                  <h3 className="exp__role">{ed.degree}</h3>
                  <p className="exp__company">{ed.school}</p>
                </div>
                <span className="exp__period">{ed.period}</span>
              </div>
              <p className="exp__desc">{ed.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
