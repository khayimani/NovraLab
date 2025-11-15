export default function ResearchCard({ article }){
  return (
    <article className="card">
      <div className="text-sm text-muted mb-2">{article.date} • {article.category}</div>
      <h3 className="font-semibold mb-2">{article.title}</h3>
      <p className="text-muted mb-4">{article.excerpt}</p>
      <a href="#" className="text-sm underline">Read Article</a>
    </article>
  )
}
