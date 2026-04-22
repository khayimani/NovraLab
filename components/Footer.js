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
              Building compliance automation for CySEC and MiFID II regulated financial firms.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/novracomp">NovraComp</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li><Link href="/novracomp">NovraComp Platform</Link></li>
              <li><Link href="/novracomp#how-it-works">How It Works</Link></li>
              <li><Link href="/novracomp#who-its-for">Who It's For</Link></li>
              <li><Link href="/contact">Request a Pilot</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
              <li>
                <a href="mailto:legal@novralab.com">legal@novralab.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {year} NovraLab. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
