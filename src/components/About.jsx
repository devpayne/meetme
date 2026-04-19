import './About.css'

export default function About() {
  return (
    <section id="about">
      <p className="section-label">01 — About</p>
      <h2 className="section-title">Who I <span>Am</span></h2>
      <div className="about__grid">
        <div className="about__text">
          <p>
            Hi! I'm Devin, a software developer with a passion for building
            applications that make a difference. I enjoy working across the
            full stack — from designing intuitive user interfaces to architecting
            robust back-end systems.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open source projects, or sharpening my problem-solving
            skills through personal projects.
          </p>
          <p>
            I believe great software is the result of clear thinking, good
            communication, and attention to detail. I'm always looking for
            opportunities to learn and grow.
          </p>
        </div>
        <div className="about__card">
          <div className="about__avatar">
            <span>DLP</span>
          </div>
          <div className="about__quick">
            <div className="about__quick-item">
              <span className="about__quick-label">Location</span>
              <span>United States</span>
            </div>
            <div className="about__quick-item">
              <span className="about__quick-label">Focus</span>
              <span>Full-Stack Development</span>
            </div>
            <div className="about__quick-item">
              <span className="about__quick-label">Status</span>
              <span className="about__status"><span className="dot" />Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
