import Link from 'next/link';

export default function XratchFooter() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-logo">
            Xr<span style={{ color: 'var(--gold)' }}>a</span>tch
          </div>
          <p>Building beautiful digital products for brands that mean business.</p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <Link href="#services">Websites</Link>
          <Link href="#services">Mobile Apps</Link>
          <Link href="#services">Chatbots</Link>
          <Link href="#services">Automations</Link>
        </div>
        <div className="footer-col">
          <h5>Studio</h5>
          <Link href="#about">About</Link>
          <Link href="#process">Process</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h5>Connect</h5>
          <a href="https://www.linkedin.com/company/xratch/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Xratch Studio. All rights reserved.</p>
        <p>Crafted with intention.</p>
      </div>
    </footer>
  );
}
