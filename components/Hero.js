export default function Hero() {
  return (
    <div className="text-center py-16">
      <div className="hero-badge">Digital Innovation Lab</div>

      <h1 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
        Engineering the Future,<br /> One Project at a Time.
      </h1>

      <p className="text-muted max-w-2xl mx-auto mb-8 text-base md:text-lg">
        NovraLab is a technology lab dedicated to turning research into high-impact digital products —
        from AI tools to AgTech platforms.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a href="/projects" className="button-primary">Explore Our Projects →</a>
        <a href="/auth" className="button-secondary">Get Early Access</a>
      </div>

      <div className="mt-14 grid grid-cols-3 gap-6 max-w-sm mx-auto text-sm text-muted">
        <div className="text-center">
          <div className="hero-stat-icon">🔬</div>
          <div className="hero-stat-label">Research</div>
        </div>
        <div className="text-center">
          <div className="hero-stat-icon">⚡</div>
          <div className="hero-stat-label">Innovation</div>
        </div>
        <div className="text-center">
          <div className="hero-stat-icon">🚀</div>
          <div className="hero-stat-label">Product</div>
        </div>
      </div>

      <div className="mt-6 text-xs text-muted opacity-60">5+ active projects in the lab</div>
    </div>
  )
}
