import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <div className="footer-grid">

          {/* Brand column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="footer-logo-mark">NL</span>
              <span className="footer-logo-name">NovraLab</span>
            </div>
            <p className="footer-tagline">
              A digital innovation lab turning research into real-world products.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/mission">Mission</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/research">Research</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link href="/uxui">UX / UI</Link></li>
              <li><Link href="/agtech">AgTech</Link></li>
              <li><Link href="/outfitsgen">OutfitsGen</Link></li>
              <li><Link href="/leads-gen">LeadGen</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li>
                <a href="mailto:legal@novralab.com">legal@novralab.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {year} NovraLab. All rights reserved.</span>
          <span className="footer-paddle-note">
            Payments handled by{' '}
            <a href="https://www.paddle.com" target="_blank" rel="noopener noreferrer">Paddle</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
