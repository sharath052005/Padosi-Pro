import logo from '../assets/logo.png'

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="Padosi Pro" className="navbar__logo-img" />
            <span className="logo-text">Padosi<strong>Pro</strong></span>
          </div>
          <p className="footer__tagline">Making everyday life easier<br />for busy households.</p>
          <a href="mailto:contact@padosipro.com" className="footer__email">contact@padosipro.com</a>
        </div>

        <div className="footer__nav-group">
          <div className="footer__nav-col">
            <h4 className="footer__nav-heading">Services</h4>
            <ul className="footer__nav-list">
              <li><button onClick={() => scrollTo('services')} className="footer-link">Errands & Daily Tasks</button></li>
              <li><button onClick={() => scrollTo('services')} className="footer-link">Home Services</button></li>
              <li><button onClick={() => scrollTo('services')} className="footer-link">Travel Support</button></li>
              <li><button onClick={() => scrollTo('services')} className="footer-link">Senior Care</button></li>
            </ul>
          </div>
          <div className="footer__nav-col">
            <h4 className="footer__nav-heading">Company</h4>
            <ul className="footer__nav-list">
              <li><button onClick={() => scrollTo('about')} className="footer-link">About Us</button></li>
              <li><button onClick={() => scrollTo('process')} className="footer-link">Our Process</button></li>
              <li><button onClick={() => scrollTo('contact')} className="footer-link">Contact</button></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">© {new Date().getFullYear()} Padosi Pro. All rights reserved.</p>
        <div className="footer__legal">
          <button className="footer-link-sm">Privacy Policy</button>
          <button className="footer-link-sm">Terms of Service</button>
        </div>
      </div>
    </footer>
  )
}

