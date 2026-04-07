import './about.scss'

function About() {
  return <section id="about">
    <div className="content">
      <div className='left-side'>
        <p className='about-me prevent-select'><span className='dot-animation'>•</span> ÜBER MICH</p>
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


        <div className='status-badges prevent-select'>
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
          <button className='btn-d btn btn-primary'>CV  herunterladen</button>
          <button className='btn btn-secondary'>Projekte  ansehen</button>
        </div>

      </div>
      <div className='right-side'>

        <div className='taken-or-not prevent-select'>
          <div className='dot-animation'>•</div>
          <p>Aktuell verfügbar für neue Projekte & Stellen</p>
        </div>


        <div className='right-side-kacheln prevent-select'>
          <div className='container-kacheln'>
            <h2>1+</h2>
            <p>Jahre Erfahrung</p>
          </div>
          <div className='container-kacheln'>
            <h2>10+</h2>
            <p>Abgeschlossene Projekte</p>
          </div>
          <div className='container-kacheln'>
            <h2>8</h2>
            <p>Tech im Stack</p>
          </div>
          <div className='container-kacheln'>
            <h2>∞</h2>
            <p>Self-Learning</p>
          </div>
          <div className='container-long-kachel'>
            <div className='left-side-long-kachel'>
              <h3>100%</h3>
              <p>Projekte termingerecht</p>
            </div>
            <div className='right-side-long-kachel'>
              {/* <img src="" alt="" /> */}
            </div>
          </div>
        </div>


        <div className='tech-stack prevent-select'>
          <h4>Tech-Stack</h4>
          <div className='status-badges'>
            <div className='badge'>HTML</div>
            <div className='badge'>CSS</div>
            <div className='badge'>JavaScript</div>
            <div className='badge'>TypeScript</div>
            <div className='badge'>Angular</div>
            <div className='badge'>React</div>
            <div className='badge'>Git</div>
            <div className='badge'>Python</div>
            <div className='badge'>SQLite3</div>
          </div>
        </div>


        {/* <div className='if-im-not-coding prevent-select'>
          <p>WENN ICH NICHT CODE...</p> 
          <p>🎮 Gaming</p>
          <p>🎵 Musik</p>
          <p>📚 Weiterlernen</p>
        </div> */}


      </div>
    </div>
  </section>
}

export default About