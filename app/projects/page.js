const projects = [
  {
    icon: "📇",
    title: "Pinto",
    desc: "A smart NFC and link platform that connects physical objects to digital experiences. Tap, scan, and instantly share profiles, portfolios, or landing pages.",
    link: "/Pinto",
  },
  {
    icon: "🌾",
    title: "AgTech",
    desc: "IoT and data analytics for modern agriculture. Real-time crop monitoring, yield optimisation, and intelligent irrigation management.",
    link: "/agtech",
  },
  {
    icon: "🎨",
    title: "UX / UI Design",
    desc: "Human-centred design from research to production. Prototypes, accessibility audits, and scalable design systems.",
    link: "/uxui",
  },
  {
    icon: "👗",
    title: "OutfitsGen",
    desc: "AI personal styling that learns your wardrobe and generates perfect outfit combinations for any occasion or weather.",
    link: "/outfitsgen",
  },
  {
    icon: "📈",
    title: "Leads Engine",
    desc: "Automated lead prospecting, qualification, and outreach — so your sales team focuses on conversations that close.",
    link: "/leads-gen",
  },
]

export const metadata = {
  title: "Projects — NovraLab",
  description: "Browse the portfolio of products and experiments developed at NovraLab.",
}

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="projects-title">Our Projects</h1>
        <p className="projects-sub">
          Experiments that became products. Each one built with the same obsession:
          turning research into real-world impact.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <a key={p.title} href={p.link} className="project-card">
            <div className="project-card-icon">{p.icon}</div>
            <div className="project-card-title">{p.title}</div>
            <p className="project-card-desc">{p.desc}</p>
            <span className="project-card-link">
              Explore {p.title} →
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}