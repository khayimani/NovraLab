export default function Hero() {
  return (
    <div className="text-center py-16">
      <div className="hero-badge">Compliance Automation for Regulated Firms</div>

      <h1 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
        CySEC and MiFID II Compliance,<br />Automated from Call to Report.
      </h1>

      <p className="text-muted max-w-2xl mx-auto mb-8 text-base md:text-lg">
        NovraLab builds NovraComp — a compliance automation platform that ingests recorded client calls,
        detects MiFID II violations, and produces CySEC-ready audit reports. Built for outsourced compliance
        consultants and in-house CCOs at regulated investment firms.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a href="/novracomp" className="button-primary">Explore NovraComp →</a>
        <a href="/contact" className="button-secondary">Request a Pilot</a>
      </div>

      <div className="mt-14 grid grid-cols-3 gap-6 max-w-md mx-auto text-sm text-muted">
        <div className="text-center">
          <div className="hero-stat-value">80-90%</div>
          <div className="hero-stat-label">Less Manual Review</div>
        </div>
        <div className="text-center">
          <div className="hero-stat-value">MiFID II</div>
          <div className="hero-stat-label">Article 16(7) Compliant</div>
        </div>
        <div className="text-center">
          <div className="hero-stat-value">CySEC</div>
          <div className="hero-stat-label">Audit-Ready Reports</div>
        </div>
      </div>
    </div>
  )
}
