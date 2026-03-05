export const metadata = {
  title: "Mission — NovraLab",
  description: "Why we exist and what drives us: turning research into real-world digital products.",
}

const values = [
  {
    icon: "💡",
    title: "Innovation First",
    desc: "We push boundaries before we build products. The experiments that don't ship teach us as much as the ones that do.",
  },
  {
    icon: "🔬",
    title: "Research-Driven",
    desc: "Every product starts with a question. We dig into the data, run the tests, and only then write the code.",
  },
  {
    icon: "🌍",
    title: "Real-World Impact",
    desc: "We measure success not by lines of code but by the lives and businesses that our products make noticeably better.",
  },
  {
    icon: "🤝",
    title: "Transparent by Default",
    desc: "Open roadmaps, honest pricing, and clear terms. We build trust the old-fashioned way: by earning it.",
  },
  {
    icon: "⚡",
    title: "Relentless Iteration",
    desc: "Shipping is day one. We listen, learn, and improve relentlessly — guided by users, not assumptions.",
  },
  {
    icon: "🌱",
    title: "Long-term Thinking",
    desc: "We optimise for decades, not quarters. Sustainable products and sustainable practices are non-negotiable.",
  },
]

export default function MissionPage() {
  return (
    <div className="mission-page">
      {/* Header */}
      <div className="mission-header">
        <p className="mission-label">Our Mission</p>
        <h1 className="mission-title">
          A lab where ideas become<br />products people love.
        </h1>
        <p className="mission-sub">
          NovraLab is a digital innovation laboratory that takes research seriously,
          experiments relentlessly, and ships software that makes a measurable
          difference — from smart farms to AI wardrobes.
        </p>
      </div>

      {/* Values grid */}
      <div className="mission-values">
        {values.map((v) => (
          <div key={v.title} className="mission-value-card">
            <div className="mission-value-icon">{v.icon}</div>
            <div className="mission-value-title">{v.title}</div>
            <p className="mission-value-desc">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Manifesto */}
      <div className="mission-manifesto">
        <div className="mission-manifesto-title">The NovraLab Commitment</div>
        <p className="mission-manifesto-body">
          We believe software should be worthy of the problem it solves.
          We will not ship what we would not use ourselves. We will not
          charge for what we have not earned. And we will keep building —
          because the best version of every product is always the next one.
        </p>
      </div>
    </div>
  )
}
