import Link from "next/link"

export const metadata = {
    title: "Leads Engine — NovraLab",
    description: "Automated lead generation and qualification to supercharge your sales pipeline.",
}

const features = [
    {
        icon: "🎯",
        name: "Targeted Prospecting",
        desc: "Define your ideal customer profile and Leads Engine scours the web to surface matching contacts with verified data.",
    },
    {
        icon: "✉️",
        name: "Automated Outreach",
        desc: "Personalised email sequences and intelligent follow-up cadences run on autopilot — so your team focuses on closing.",
    },
    {
        icon: "🔍",
        name: "Intent Signals",
        desc: "Detect buying intent from company activity, job postings, and funding news so you reach out at exactly the right moment.",
    },
    {
        icon: "🗂️",
        name: "CRM Enrichment",
        desc: "Auto-populate your CRM with verified emails, LinkedIn profiles, company size, and tech stack data in real time.",
    },
    {
        icon: "📈",
        name: "Pipeline Analytics",
        desc: "Full-funnel dashboards tracking open rates, reply rates, meetings booked, and revenue attribution.",
    },
    {
        icon: "🤝",
        name: "Team Collaboration",
        desc: "Assign leads, leave notes, and share sequences across your sales team with role-based access control.",
    },
]

export default function LeadsGenPage() {
    return (
        <div className="product-page">
            {/* Hero */}
            <section className="product-hero">
                <div className="product-hero-inner">
                    <span className="product-hero-badge">Leads Engine — NovraLab</span>
                    <h1 className="product-hero-title">
                        Fill your pipeline.<br />Automatically.
                    </h1>
                    <p className="product-hero-sub">
                        Leads Engine finds, qualifies, and engages your ideal customers — so your
                        sales team spends every minute on conversations that matter, not prospecting.
                    </p>
                    <div className="product-cta-group">
                        <a href="https://leads-gen.novralab.com" className="product-cta-primary">
                            Start Generating →
                        </a>
                        <Link href="/contact" className="product-cta-secondary">
                            Book a demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <div className="stats-strip">
                <div className="stat-item">
                    <div className="stat-number">5×</div>
                    <div className="stat-label">More meetings booked</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">Verified</div>
                    <div className="stat-label">Contact data</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">Auto</div>
                    <div className="stat-label">Follow-up sequences</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">Real-time</div>
                    <div className="stat-label">Intent signals</div>
                </div>
            </div>

            {/* Features */}
            <section className="product-features">
                <div className="product-features-header">
                    <p className="product-features-label">Platform capabilities</p>
                    <h2 className="product-features-title">Every tool your pipeline needs</h2>
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
