import './Skills.css'

const categories = [
  {
    name: 'Languages',
    items: ['JavaScript', 'Python', 'Java', 'TypeScript', 'HTML/CSS', 'SQL'],
  },
  {
    name: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express', 'Spring Boot', 'Tailwind CSS'],
  },
  {
    name: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Linux', 'Netlify'],
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-label">02 — Skills</p>
      <h2 className="section-title">What I <span>Work With</span></h2>
      <div className="skills__grid">
        {categories.map(cat => (
          <div key={cat.name} className="skills__category">
            <h3 className="skills__cat-name">{cat.name}</h3>
            <div className="skills__tags">
              {cat.items.map(item => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
