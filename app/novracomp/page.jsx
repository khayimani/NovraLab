import Link from "next/link"

export const metadata = {
  title: "NovraComp — CySEC / MiFID II Compliance Automation",
  description: "Enterprise-grade B2B compliance automation system designed specifically for CySEC-regulated brokers and financial institutions.",
}

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
    ),
    name: "Communication Ingestion",
    desc: "Accepts audio recordings, text transcripts, and chat logs. Supports batch uploads and real-time streaming to a secure data lake.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
    ),
    name: "Speech-to-Text Transcription",
    desc: "Converts audio to text using OpenAI Whisper. Identifies agent vs. client roles and timestamps utterances for precise tracking.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    ),
    name: "Deterministic Rules Engine",
    desc: "Detects explicit violations like 'guaranteed returns' with 100% confidence using predefined regulatory keywords.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    name: "Probabilistic LLM Engine",
    desc: "Analyzes conversational context to detect subtle violations like implied guarantees or emotional manipulation.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
    name: "Case Management & Reporting",
    desc: "Stores findings securely, provides a web dashboard for compliance officers, and exports detailed PDF reports for CySEC audits.",
  },
]

export default function NovraCompPage() {
  return (
    <div className="product-page">
      {/* Hero */}
      <section className="product-hero">
        <div className="product-hero-inner">
          <span className="product-hero-badge">NovraComp — Compliance Automation</span>
          <h1 className="product-hero-title">
            Automate CySEC & MiFID II Compliance.
          </h1>
          <p className="product-hero-sub">
            Protect your firm with AI-powered detection of regulatory violations across all client communications. Reduce manual review by 80-90%.
          </p>
          <div className="product-cta-group">
            <a href="#" className="product-cta-primary">
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
          <div className="stat-number">90%</div>
          <div className="stat-label">Reduction in manual reviews</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Confidence on direct matches</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">Real-time</div>
          <div className="stat-label">Risk detection</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">Audit-Ready</div>
          <div className="stat-label">Immutable compliance records</div>
        </div>
      </div>

      {/* Features */}
      <section className="product-features">
        <div className="product-features-header">
          <p className="product-features-label">Core Capabilities</p>
          <h2 className="product-features-title">End-to-End Compliance Pipeline</h2>
        </div>
        <div className="product-features-grid">
          {features.map((f) => (
            <div key={f.name} className="product-feature-card">
              <div className="product-feature-icon text-gray-800">{f.icon}</div>
              <div className="product-feature-name">{f.name}</div>
              <p className="product-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section - Custom for Novracom to reuse generic classes */}
      <section className="mx-auto max-w-5xl px-6 py-20 border-t border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Brokerages</h2>
          <p className="text-muted max-w-2xl mx-auto">
            NovraComp is trusted by compliance officers to manage risk across various critical touchpoints.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Post-Call Quality Assurance</h3>
            <p className="text-muted text-sm leading-relaxed">
              Automatically review recorded sales calls for compliance violations. Pinpoint problematic statements with precision without manually listening to hours of audio.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Regulatory Audits</h3>
            <p className="text-muted text-sm leading-relaxed">
              Generate comprehensive, CySEC-compliant PDF reports on demand. Maintain an immutable, searchable database of all analyzed communication flags.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Training & Education</h3>
            <p className="text-muted text-sm leading-relaxed">
              Identify common agent mistakes regarding guaranteed returns, pressure selling, or misleading comparisons, and refine training programs continuously.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Risk Scoring</h3>
            <p className="text-muted text-sm leading-relaxed">
              Evaluate overall agent performance and securely identify high-risk individuals requiring urgent intervention before fines are incurred.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
