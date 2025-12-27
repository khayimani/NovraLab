import Hero from '../components/Hero'
import Mission from '../components/Mission'
import ResearchCard from '../components/ResearchCard'

const articles = [
  {
    date: 'Oct 15, 2025',
    category: 'UX Research',
    title: 'The Future of Micro-Interactions in Web Design',
    excerpt: 'Exploring how subtle animations and feedback mechanisms can dramatically improve user experience and engagement in modern web applications.'
  },
  {
    date: 'Oct 8, 2025',
    category: 'Engineering',
    title: 'Optimizing React Performance at Scale',
    excerpt: 'Deep dive into advanced techniques for building high-performance React applications.'
  },
  {
    date: 'Sep 30, 2025',
    category: 'Accessibility',
    title: 'Building Accessible Digital Products',
    excerpt: 'A comprehensive guide to implementing WCAG standards and creating inclusive digital experiences.'
  }
]

export function Home() {
  return (
    <div>
      <section className="bg-grid py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <Hero />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <Mission />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-2xl font-semibold text-center mb-4">Research & Insights</h2>
          <p className="text-center text-muted mb-8">Experiments, learnings, and technical explorations from our lab. Sharing knowledge to advance the field.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <ResearchCard key={i} article={a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}