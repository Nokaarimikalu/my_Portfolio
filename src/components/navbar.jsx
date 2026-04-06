import './navbar.scss'

function Navbar() {
  return <section id="navbar">
    <div className='left-side'><span className='name'>Pascal-Fliedner.dev</span></div>
    <div className='right-side'>
        <a className='about'>About</a>
        <a className='projects'>Projekte</a>
        <a className='contact'>Contact</a>
    </div>
  </section>
}

export default Navbar