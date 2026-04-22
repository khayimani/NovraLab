import Link from "next/link"

export const metadata = {
  title: "NovraComp — CySEC / MiFID II Compliance Automation",
  description: "Compliance automation platform for CySEC-regulated investment firms. AI-powered call analysis mapped to MiFID II obligations. CySEC-ready audit reports.",
}

export default function NovraCompPage() {
  return (
    <div className="product-page">

      {/* Credibility Line */}
      <div className="novracomp-credibility">
        <p>
          NovraComp is a compliance automation platform built exclusively for CySEC
          and MiFID II regulated investment firms.
        </p>
      </div>

      {/* Hero */}
      <section className="product-hero">
        <div className="product-hero-inner">
          <span className="product-hero-badge">MiFID II Article 16(7) · CySEC Circular C087</span>
          <h1 className="product-hero-title">
            You Record Client Calls.<br />
            You Are Not Monitoring Them.<br />
            That Is a Regulatory Breach.
          </h1>
          <p className="product-hero-sub">
            MiFID II Article 16(7) requires investment firms to record and actively monitor
            client communications. CySEC Circular C087 makes clear that storage alone does
            not satisfy this obligation. If your firm records calls but does not review them
            for compliance violations, you are exposed. NovraComp automates the monitoring
            obligation — from recorded call to CySEC-ready audit report.
          </p>
          <div className="product-cta-group">
            <Link href="/contact" className="product-cta-primary">
              Request a Pilot →
            </Link>
            <a href="#how-it-works" className="product-cta-secondary">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-strip">
        <div className="stat-item">
          <div className="stat-number">80-90%</div>
          <div className="stat-label">Reduction in manual compliance review</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">Art. 16(7)</div>
          <div className="stat-label">MiFID II monitoring obligation addressed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">C168</div>
          <div className="stat-label">CySEC retention requirements met</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">On-Premise</div>
          <div className="stat-label">Docker deployment, your infrastructure</div>
        </div>
      </div>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="how-it-works-inner">
          <div className="text-center mb-12">
            <p className="product-features-label">Process</p>
            <h2 className="product-features-title">How It Works</h2>
            <p className="text-muted max-w-2xl mx-auto mt-4">
              Four steps from recorded call to compliance report — delivered under your firm name.
            </p>
          </div>
          <div className="how-it-works-grid">
            <div className="how-it-works-step">
              <div className="how-it-works-number">1</div>
              <h3 className="how-it-works-step-title">Send Us Recorded Calls</h3>
              <p className="how-it-works-step-desc">
                Upload audio files from your client communications. Batch upload or transfer via
                secure channel. We accept standard audio formats from any telephony or VoIP system.
              </p>
            </div>
            <div className="how-it-works-step">
              <div className="how-it-works-number">2</div>
              <h3 className="how-it-works-step-title">NovraComp Runs Analysis</h3>
              <p className="how-it-works-step-desc">
                Calls are transcribed using Whisper STT and analyzed by Mistral-7B against MiFID II
                obligations. The system detects prohibited conduct — guaranteed returns, pressure
                selling, misleading comparisons — and maps each violation to specific regulatory articles.
              </p>
            </div>
            <div className="how-it-works-step">
              <div className="how-it-works-number">3</div>
              <h3 className="how-it-works-step-title">Receive Violation Report</h3>
              <p className="how-it-works-step-desc">
                Within 5 business days, you receive a structured PDF report documenting every
                flagged violation, the relevant MiFID II article or CySEC circular, the exact
                transcript excerpt, and a confidence score.
              </p>
            </div>
            <div className="how-it-works-step">
              <div className="how-it-works-number">4</div>
              <h3 className="how-it-works-step-title">Present Under Your Firm Name</h3>
              <p className="how-it-works-step-desc">
                Reports are white-label ready. Present them to your clients under your firm's
                branding. Submit directly to CySEC as part of your ongoing supervisory obligations
                under Circular C168.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="product-features">
        <div className="product-features-header">
          <p className="product-features-label">Capabilities</p>
          <h2 className="product-features-title">What NovraComp Does</h2>
        </div>
        <div className="product-features-grid">

          <div className="product-feature-card">
            <div className="product-feature-icon text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
            </div>
            <div className="product-feature-name">Call Ingestion</div>
            <p className="product-feature-desc">
              Accepts recorded client communications as required under MiFID II Article 16(7).
              Audio files, transcripts, and chat logs are ingested into a secure processing pipeline.
              Supports batch uploads and integrates with standard telephony export formats.
            </p>
            <div className="product-feature-cite">Art. 16(7) — Recording obligation</div>
          </div>

          <div className="product-feature-card">
            <div className="product-feature-icon text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
            </div>
            <div className="product-feature-name">Speech-to-Text Transcription</div>
            <p className="product-feature-desc">
              Converts audio recordings to searchable text using Whisper STT. Speaker roles
              (agent vs. client) are identified and utterances timestamped — creating the
              auditable transcript trail required under CySEC Circular C168 for recording
              retention and supervisory submission.
            </p>
            <div className="product-feature-cite">C168 — Retention and submission</div>
          </div>

          <div className="product-feature-card">
            <div className="product-feature-icon text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div className="product-feature-name">Deterministic Rules Engine</div>
            <p className="product-feature-desc">
              Detects explicit prohibited conduct — guaranteed returns, capital safety assurances,
              misleading performance claims — using predefined regulatory keyword patterns. Each
              match is flagged with 100% confidence and mapped to the specific MiFID II article
              prohibiting the conduct.
            </p>
            <div className="product-feature-cite">MiFID II — Prohibited inducements and conduct</div>
          </div>

          <div className="product-feature-card">
            <div className="product-feature-icon text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div className="product-feature-name">Contextual AI Analysis</div>
            <p className="product-feature-desc">
              Mistral-7B analyzes conversational context to detect violations that keyword
              matching cannot catch — implied guarantees, emotional pressure, urgency tactics,
              and suitability failures. This fulfills the active monitoring distinction
              established in CySEC Circular C087, which explicitly separates storage from
              substantive review.
            </p>
            <div className="product-feature-cite">C087 — Active monitoring vs. storage</div>
          </div>

          <div className="product-feature-card">
            <div className="product-feature-icon text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div className="product-feature-name">CySEC-Ready Reporting</div>
            <p className="product-feature-desc">
              Generates structured PDF audit reports formatted for CySEC submission. Each report
              includes violation details, regulatory article references, transcript excerpts with
              timestamps, confidence scores, and case status. Reports meet the documentation
              standard required under Circular C168 for supervisory review.
            </p>
            <div className="product-feature-cite">C168 — Submission requirements</div>
          </div>

        </div>
      </section>

      {/* Who It's For */}
      <section className="who-its-for" id="who-its-for">
        <div className="who-its-for-inner">
          <div className="text-center mb-12">
            <p className="product-features-label">Audience</p>
            <h2 className="product-features-title">Who It's For</h2>
          </div>
          <div className="who-its-for-grid">
            <div className="who-its-for-card">
              <h3 className="who-its-for-title">Outsourced Compliance Consultants</h3>
              <p className="who-its-for-desc">
                You service multiple CySEC-regulated brokers and carry the compliance obligation
                across all of them. NovraComp processes calls from each client firm independently,
                generates white-label reports under your firm's name, and gives you a scalable
                way to fulfill Article 16(7) monitoring obligations across your entire portfolio —
                without hiring additional reviewers.
              </p>
            </div>
            <div className="who-its-for-card">
              <h3 className="who-its-for-title">In-House Chief Compliance Officers</h3>
              <p className="who-its-for-desc">
                You are directly responsible for your firm's compliance posture under CySEC
                supervision. NovraComp gives you continuous visibility into client communication
                risks, documented evidence of active monitoring under Circular C087, and
                audit-ready reports you can present to the regulator without additional formatting
                or manual intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Audit Report */}
      <section className="sample-report-section">
        <div className="sample-report-inner">
          <div className="text-center">
            <p className="product-features-label">Evidence</p>
            <h2 className="product-features-title">Sample Audit Report</h2>
            <p className="text-muted max-w-2xl mx-auto mt-4 mb-8">
              Download a sample NovraComp audit report to see the output format. The report
              includes flagged violations mapped to specific MiFID II articles, timestamped
              transcript excerpts, confidence scores, and case metadata. It is formatted for
              direct submission to CySEC under Circular C168 requirements.
            </p>
            <a
              href="/novracomp-sample-report.pdf"
              download
              className="product-cta-primary"
            >
              Download Sample Report (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Close the Monitoring Gap
        </h2>
        <p className="text-muted max-w-2xl mx-auto mb-8">
          Request a pilot deployment. We will process a batch of your recorded calls and
          deliver a full audit report — so you can evaluate NovraComp against your actual
          compliance workload.
        </p>
        <div className="product-cta-group justify-center">
          <Link href="/contact" className="product-cta-primary">
            Request a Pilot →
          </Link>
        </div>
      </section>

    </div>
  )
}
