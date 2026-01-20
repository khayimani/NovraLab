"use client"
import Link from "next/link"

export default function LeadsGenLanding() {
    return (
        <main className="min-h-screen bg-white text-black">
            <section className="max-w-6xl mx-auto px-6 py-24 text-center">
                <h1 className="text-5xl font-bold mb-6">Leads Engine</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Supercharge your sales pipeline. Automated lead generation and qualification to help you grow faster.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <Link href="https://leads-gen.novralab.com" className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                        Start Generating
                    </Link>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 text-gray-700">
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Targeted Search</h3>
                    <p>Find high-quality leads that match your ideal customer profile.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Automated Outreach</h3>
                    <p>Engage prospects with personalized email sequences and follow-ups.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Analytics</h3>
                    <p>Track performance and optimize your campaigns for better conversion.</p>
                </div>
            </section>
        </main>
    )
}
