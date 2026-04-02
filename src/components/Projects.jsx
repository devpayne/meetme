import './Projects.css'

const projects = [
  {
    title: 'Project One',
    description:
      'A full-stack web application built to solve [problem]. Features include user authentication, real-time updates, and a responsive design.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Project Two',
    description:
      'A command-line tool that automates [task], reducing manual effort by a significant margin. Built with a clean, extensible architecture.',
    tags: ['Python', 'CLI', 'Automation'],
    github: '#',
    demo: null,
  },
  {
    title: 'Project Three',
    description:
      'A mobile-responsive dashboard for visualizing [data]. Integrates with external APIs and presents complex data in an intuitive way.',
    tags: ['TypeScript', 'React', 'REST API'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Project Four',
    description:
      'An open-source library for [functionality]. Widely used and well-documented, with contributions from the community.',
    tags: ['JavaScript', 'Open Source', 'npm'],
    github: '#',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-label">03 — Projects</p>
      <h2 className="section-title">Things I've <span>Built</span></h2>
      <div className="projects__grid">
        {projects.map(p => (
          <div key={p.title} className="project-card">
            <div className="project-card__top">
              <div className="project-card__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <div className="project-card__links">
                {p.github && (
                  <a href={p.github} aria-label="GitHub" className="icon-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} aria-label="Live demo" className="icon-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-card__title">{p.title}</h3>
            <p className="project-card__desc">{p.description}</p>
            <div className="project-card__tags">
              {p.tags.map(t => (
                <span key={t} className="project-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
