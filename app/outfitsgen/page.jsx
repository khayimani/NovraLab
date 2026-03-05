import Link from "next/link"

export const metadata = {
    title: "OutfitsGen — NovraLab",
    description: "AI-powered personal styling. Generate perfect outfits from your digital wardrobe for any occasion.",
}

const features = [
    {
        icon: "👗",
        name: "Digital Wardrobe",
        desc: "Upload and tag your clothes once. OutfitsGen keeps your entire closet organised and searchable in one place.",
    },
    {
        icon: "🤖",
        name: "AI Outfit Generation",
        desc: "Our model learns your style, the weather, and your calendar — then suggests complete looks ready to wear.",
    },
    {
        icon: "🌤️",
        name: "Weather-Aware Styling",
        desc: "Outfits adjust automatically to the day's forecast so you're never underdressed or sweltering.",
    },
    {
        icon: "🛍️",
        name: "Smart Shopping",
        desc: "Spot gaps in your wardrobe and discover curated recommendations for pieces that complement what you own.",
    },
    {
        icon: "📅",
        name: "Occasion Planner",
        desc: "Planning a trip or event? Build a packing list and week-view outfit calendar in seconds.",
    },
    {
        icon: "🔗",
        name: "Share Looks",
        desc: "Export outfit cards to share with friends or post directly to your social channels with one tap.",
    },
]

export default function OutfitsGenPage() {
    return (
        <div className="product-page">
            {/* Hero */}
            <section className="product-hero">
                <div className="product-hero-inner">
                    <span className="product-hero-badge">OutfitsGen — NovraLab</span>
                    <h1 className="product-hero-title">
                        Your wardrobe,<br />intelligently styled.
                    </h1>
                    <p className="product-hero-sub">
                        OutfitsGen digitises your closet and uses AI to build perfect outfits for
                        every occasion — so you never stare at &ldquo;nothing to wear&rdquo; again.
                    </p>
                    <div className="product-cta-group">
                        <a href="https://outfitsgen.novralab.com" className="product-cta-primary">
                            Generate Outfits →
                        </a>
                        <Link href="/contact" className="product-cta-secondary">
                            Learn more
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <div className="stats-strip">
                <div className="stat-item">
                    <div className="stat-number">AI</div>
                    <div className="stat-label">Powered recommendations</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Outfit combinations</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">All seasons</div>
                    <div className="stat-label">Weather-aware styling</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">1-tap</div>
                    <div className="stat-label">Social sharing</div>
                </div>
            </div>

            {/* Features */}
            <section className="product-features">
                <div className="product-features-header">
                    <p className="product-features-label">Features</p>
                    <h2 className="product-features-title">Everything in your wardrobe, amplified</h2>
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
