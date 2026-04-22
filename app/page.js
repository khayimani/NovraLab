import Hero from '../components/Hero'
import Mission from '../components/Mission'

export default function Home() {
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
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to close the compliance gap?</h2>
          <p className="text-muted max-w-2xl mx-auto mb-8">
            NovraComp is available for on-premise deployment. Request a pilot to see a full
            audit report generated from your own recorded calls.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/novracomp" className="button-primary">Learn More →</a>
            <a href="/contact" className="button-secondary">Request a Pilot</a>
          </div>
        </div>
      </section>
    </div>
  )
}