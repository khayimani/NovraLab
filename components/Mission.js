export default function Mission() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Why NovraComp Exists</h2>
      <p className="text-muted max-w-2xl mx-auto mb-8">
        MiFID II Article 16(7) requires firms to record and actively monitor client communications.
        CySEC Circular C087 makes clear that storage alone does not constitute compliance.
        Most firms record calls but never review them — creating regulatory exposure they cannot see.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card text-left">
          <h3 className="font-semibold mb-2">The Recording Gap</h3>
          <p className="text-muted">
            Firms store thousands of hours of client calls per quarter. Under CySEC Circular C168,
            these recordings must be retained and made available for supervisory review. But retention
            without analysis is a known compliance gap.
          </p>
        </div>

        <div className="card text-left">
          <h3 className="font-semibold mb-2">Active Monitoring Obligation</h3>
          <p className="text-muted">
            CySEC Circular C087 distinguishes between passive storage and active monitoring.
            Regulators expect firms to identify violations in real time — not discover them
            during an audit.
          </p>
        </div>

        <div className="card text-left">
          <h3 className="font-semibold mb-2">Automated Compliance Review</h3>
          <p className="text-muted">
            NovraComp closes this gap. It transcribes calls, runs AI analysis against MiFID II
            obligations, flags violations mapped to specific regulatory articles, and produces
            reports structured for CySEC submission.
          </p>
        </div>
      </div>
    </div>
  );
}
