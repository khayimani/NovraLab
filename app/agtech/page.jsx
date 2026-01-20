"use client"
import Link from "next/link"

export default function AgtechLanding() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">Agtech Solutions</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Revolutionizing agriculture with smart data and IoT. Monitor crops, optimize yields, and manage resources efficiently.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="https://agtech.novralab.com" className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
            Launch Platform
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 text-gray-700">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">Smart Monitoring</h3>
          <p>Real-time sensors for soil moisture, temperature, and crop health.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">Yield Optimization</h3>
          <p>Data-driven insights to maximize harvest quality and quantity.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">Resource Management</h3>
          <p>Efficient water and fertilizer usage tracking to reduce waste.</p>
        </div>
      </section>
    </main>
  )
}
