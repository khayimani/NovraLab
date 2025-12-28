"use client"
import Link from "next/link"

export default function PintoLanding() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">Pinto API</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Connect your app to the world’s data seamlessly. Pinto unifies integrations across Notion, Google, Slack, and more into a single programmable API.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          {/* FIXED: Capitalized 'Pinto' to match folder name */}
          <Link href="/Pinto/dashboard" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-500 hover:text-white transition">
            Get API Key
          </Link>
          {/* FIXED: Capitalized 'Pinto' to match folder name */}
          <Link href="/Pinto/docs" className=" px-6 py-3 rounded-xl font-semibold hover:bg-gray-500 hover:text-white transition">
            View Docs
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 text-gray-700">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">Universal Connectors</h3>
          <p>Use unified endpoints to access multiple services without separate OAuth setups.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">Data Transformation</h3>
          <p>Map, transform, and merge data across APIs with built-in templates.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">Sandbox & Workflows</h3>
          <p>Run test calls, simulate workflows, and debug before going live.</p>
        </div>
      </section>

      <section className="bg-white text-black py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start building?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Instant setup. No manual OAuth configs. Just your API key.
          </p>
          {/* FIXED: Capitalized 'Pinto' to match folder name */}
          <Link href="/Pinto/dashboard" className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-500 hover:text-black transition">
            Launch Dashboard
          </Link>
        </div>
      </section>
    </main>
  )
}