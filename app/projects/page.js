export default function ProjectsPage() {
  const projects = [
    { title: 'Pinto', desc: 'Smart NFC & link platform', link: '/Pinto' },
    
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-3xl font-semibold mb-6">Our Projects</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="card">
              <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
              <p className="text-muted mb-4">{p.desc}</p>
              <a href={p.link} className="text-foreground underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}