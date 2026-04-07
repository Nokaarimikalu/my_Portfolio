import './hero.scss'
import ichBild from '../assets/ich.jpg'
function Hero() {
  return (
    <section id="hero">
      <div className="content">
        <div className="hero-content">

          <span className="section-label">Software Developer</span>

          <h1>Hi, ich bin</h1>
          <h1><span className="accent">Pascal Fliedner.</span></h1>

          <h2 className="hero-tagline">Ich baue Lösungen - <br/>   vom User Interface bis zur Datenbank..</h2>
          <p className="hero-desc">Leidenschaftlicher Entwickler, <br/> der sich im Frontend genauso zu Hause fühlt wie in der Logik von Python. <br/> Ich liebe es, komplexe Systeme zu verstehen und sie in sauberen Code zu übersetzen.</p>

          <div className="hero-buttons prevent-select">
            <button className="btn btn-primary">Projekte ansehen</button>
            <button className="btn btn-secondary">GitHub</button>
          </div>

        </div>

        <div className="hero-avatar prevent-select">
          <div className='image-container'>
            <img src={ichBild} alt="Pascal Fliedner" />
          </div>
        </div>
      <span className='scroll-down'>SCROLL DOWN</span>
    </div>
    </section>
  )
}

export default Hero