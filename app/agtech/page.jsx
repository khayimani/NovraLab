import Link from "next/link"

export const metadata = {
  title: "AgTech — NovraLab",
  description: "Smart agriculture solutions powered by IoT and data analytics. Monitor crops, optimize yields and reduce waste.",
}

const features = [
  {
    icon: "🌱",
    name: "Soil & Crop Monitoring",
    desc: "Real-time sensors measure soil moisture, temperature, pH, and crop health so you always know what's happening below the surface.",
  },
  {
    icon: "📊",
    name: "Yield Analytics",
    desc: "Data-driven recommendations to maximize harvest quality and quantity, informed by historical patterns and live conditions.",
  },
  {
    icon: "💧",
    name: "Irrigation Management",
    desc: "Automated water scheduling that adapts to weather forecasts and soil readings — reducing consumption by up to 40%.",
  },
  {
    icon: "🤖",
    name: "AI Pest Detection",
    desc: "Computer vision models identify early signs of disease or pest infestation from drone imagery before they spread.",
  },
  {
    icon: "☁️",
    name: "Cloud Dashboard",
    desc: "A unified view of your entire operation. Monitor multiple plots, generate reports, and share data with your agronomist.",
  },
  {
    icon: "🔔",
    name: "Smart Alerts",
    desc: "Receive SMS or email alerts the moment sensors detect anomalies — freeze warnings, flood risk, or equipment failure.",
  },
]

export default function AgtechPage() {
  return (
    <div className="product-page">
      {/* Hero */}
      <section className="product-hero">
        <div className="product-hero-inner">
          <span className="product-hero-badge">AgTech — NovraLab</span>
          <h1 className="product-hero-title">
            Smarter farms.<br />Better harvests.
          </h1>
          <p className="product-hero-sub">
            We combine IoT sensors, satellite data, and machine learning to give modern
            farmers the insight they need to grow more with less.
          </p>
          <div className="product-cta-group">
            <a href="https://agtech.novralab.com" className="product-cta-primary">
              Launch Platform →
            </a>
            <Link href="/contact" className="product-cta-secondary">
              Request a demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-strip">
        <div className="stat-item">
          <div className="stat-number">40%</div>
          <div className="stat-label">Water saved on average</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">2×</div>
          <div className="stat-label">Yield improvement potential</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">Real-time</div>
          <div className="stat-label">Sensor updates</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24 / 7</div>
          <div className="stat-label">Automated monitoring</div>
        </div>
      </div>

      {/* Features */}
      <section className="product-features">
        <div className="product-features-header">
          <p className="product-features-label">What we offer</p>
          <h2 className="product-features-title">Everything your farm needs</h2>
        </div>
        <div className="product-features-grid">
          {features.map((f) => (
            <div key={f.name} className="product-feature-card">
              <div className="product-feature-icon">{f.icon}</div>
              <div className="product-feature-name">{f.name}</div>
              <p className="product-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
