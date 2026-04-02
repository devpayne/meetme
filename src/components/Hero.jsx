import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__tag">Hello, world.</div>
      <h1 className="hero__name">Devin L. Payne</h1>
      <p className="hero__role">Software Developer &amp; Problem Solver</p>
      <p className="hero__bio">
        I build clean, thoughtful software. Passionate about turning complex
        problems into elegant solutions.
      </p>
      <div className="hero__actions">
        <a href="#projects" className="btn btn--primary">View My Work</a>
        <a href="#contact" className="btn btn--ghost">Get In Touch</a>
      </div>
      <div className="hero__scroll-hint">
        <span />
      </div>
    </section>
  )
}
