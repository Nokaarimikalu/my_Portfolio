import './about.scss'

function About() {
  return <section id="about">
    <div className="content">
      <div className='left-side'>
        <p className='about-me'><span className='dot-animation'>•</span> ÜBER MICH</p>
        <h2 className='text-one'>
          Ich baue <br />
          Interfaces, <br />
          die <span className='human'>Menschen</span> <br />
          wirklich nutzen.
        </h2>

        <br />
        <br />

        <p className='text-two'>
          Leidenschaftlicher Entwickler mit einem Fokus auf performante Frontends
          und effiziente Datenstrukturen. Ob ich komplexe Logik in Python schreibe,
          saubere SQLite-Datenbanken architektoniere oder pixelperfekte Interfaces in React umsetze
          - ich sorge dafür, dass das gesamte System eine nahtlose Einheit bildet.
        </p>


        <div className='status-badges'>
          <span className='badge'>📍 Schwabhausen (TH)</span>
          <span className='badge'>🌍 Offen für Remote</span>
          <span className='badge'>🚀 Verfügbar ab sofor</span>
          <span className='badge'>🎓 Selbst beigebracht</span>
        </div>


        <div className='mini-cv'>
          <div className='mini-cv-container'>
            <div className="left-side-cv">
              <span className='dot'>•</span>
              <span className='year'>2025</span>
            </div>
            <div className="right-side-cv">
              <span className='right-side-text-one'>Self-Learning - Python, SQLite3, React</span>
              <span className='right-side-text-two'>Erste Projekte & Deployments</span>
            </div>
          </div>

          <div className='line'></div>

          <div className='mini-cv-container'>
            <div className="left-side-cv">
              <span className='dot'>•</span>
              <span className='year'>2025</span>
            </div>
            <div className="right-side-cv">
              <span className='right-side-text-one'>Developer Akademie - Frontend Web-Dev</span>
              <span className='right-side-text-two'>Angular, APIs, HTML, CSS, JavaScript</span>
            </div>
          </div>

          <div className='line'></div>

          <div className='mini-cv-container'>
            <div className="left-side-cv">
              <span className='dot'>•</span>
              <span className='year'>2021-2025</span>
            </div>
            <div className="right-side-cv">
              <span className='right-side-text-one'>Ausbildung als Kfz-Mechatroniker</span>
              <span className='right-side-text-two'>Analytische Fehlersuche & logische Prozessoptimierung</span>
            </div>
          </div>
        </div>


        <div className='buttons-container'>
          <button className='btn btn-primary'>CV <br /> herunterladen</button>
          <button className='btn btn-secondary'>Projekte <br /> ansehen</button>
        </div>

      </div>
      <div className='right-side'></div>
    </div>
  </section>
}

export default About