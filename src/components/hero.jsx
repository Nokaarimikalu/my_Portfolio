import './Hero.scss'

function Hero() {
  return (
    <section id="hero">
      <div className="hero__content">

        <span className="section-label">Frontend Developer</span>

        <h1>Hi, ich bin</h1>
        <h1><span className="accent">Pascal Fliedner.</span></h1>

        <h2 className="hero__tagline">I build things for the web.</h2>
        <p className="hero__desc">Deine kurze Beschreibung hier...</p>

        <div className="hero__buttons">
          <button className="btn btn-primary">Projekte ansehen</button>
          <button className="btn btn-secondary">GitHub</button>
        </div>

      </div>

      <div className="hero__avatar">
        <span>MM</span>
      </div>

    </section>
  )
}

export default Hero