import Link from "next/link"

export const metadata = {
    title: "UX / UI Design — NovraLab",
    description: "Human-centred design that turns complex ideas into elegant interfaces. Research, prototyping, and production-ready UI.",
}

const features = [
    {
        icon: "🔍",
        name: "User Research",
        desc: "In-depth interviews, usability tests, and behavioural analysis to uncover what your users actually need.",
    },
    {
        icon: "🗺️",
        name: "Information Architecture",
        desc: "Structured sitemaps and user flows that ensure every journey feels intuitive and frictionless.",
    },
    {
        icon: "🎨",
        name: "Visual Design",
        desc: "Pixel-perfect hi-fi mockups aligned to your brand — typography, colour, spacing, and every micro-detail.",
    },
    {
        icon: "⚡",
        name: "Interactive Prototypes",
        desc: "Click-through Figma prototypes and coded proofs-of-concept to validate concepts before full development.",
    },
    {
        icon: "♿",
        name: "Accessibility Auditing",
        desc: "WCAG 2.1 AA compliance reviews ensuring your product is usable by everyone, regardless of ability.",
    },
    {
        icon: "🔄",
        name: "Design Systems",
        desc: "Scalable component libraries and token-based systems that keep your product consistent at any size.",
    },
]

export default function UXUIPage() {
    return (
        <div className="product-page">
            {/* Hero */}
            <section className="product-hero">
                <div className="product-hero-inner">
                    <span className="product-hero-badge">UX / UI — NovraLab</span>
                    <h1 className="product-hero-title">
                        Design that makes<br />people stay.
                    </h1>
                    <p className="product-hero-sub">
                        We research, prototype, and craft interfaces that feel obvious to use —
                        because great design is invisible.
                    </p>
                    <div className="product-cta-group">
                        <a href="https://uxui.novralab.com" className="product-cta-primary">
                            View Portfolio →
                        </a>
                        <Link href="/contact" className="product-cta-secondary">
                            Start a project
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <div className="stats-strip">
                <div className="stat-item">
                    <div className="stat-number">3×</div>
                    <div className="stat-label">Avg. conversion uplift</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">WCAG</div>
                    <div className="stat-label">AA accessible by default</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">Figma</div>
                    <div className="stat-label">To code handoff</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">Full</div>
                    <div className="stat-label">End-to-end process</div>
                </div>
            </div>

            {/* Features */}
            <section className="product-features">
                <div className="product-features-header">
                    <p className="product-features-label">Our process</p>
                    <h2 className="product-features-title">From research to production</h2>
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
